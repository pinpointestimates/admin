import React, { useEffect, useContext } from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import Loading from '../Loading/Loading';
import { gql, useMutation } from '@apollo/client';
import { useQuery, useLazyQuery } from 'react-apollo';
import NavigationContext from '../../Contexts/Navigation';
import { parseAccessToken } from '../../Helpers/token';
import ModalContext from '../../Contexts/Modals';

const GET_USER_STATE = gql`
  {
    user @client {
      token
      userId
      nickName
      picture
      slug
      managesCorporations {
        slug
      }
      roles
    }
  }
`;

const GET_USER = gql`
  query getUser($slug: String!) {
    getUser(slug: $slug) {
      id
      nickName
      slug
      picture
      managesCorporations {
        slug
      }
    }
  }
`;

const ProtectedRoute = ({ component: Component, history, ...rest }) => {
  const navigationContext = useContext(NavigationContext);
  const modalContext = useContext(ModalContext);

  const { location } = rest;
  const { data, client } = useQuery(GET_USER_STATE);
  const { user } = data;
  const { slugId, token, roles, managesCorporations } = user;

  // Darktheme for managers
  // if (!!roles && roles.indexOf('Manager') > -1) {
  //   client.writeData({
  //     data: {
  //       theme: {
  //         __typename: 'Theme',
  //         light: false,
  //       },
  //     },
  //   });
  // }

  const [userQuery, { called, loading }] = useLazyQuery(GET_USER, {
    fetchPolicy: 'network-only',
    onCompleted: (data) => {
      // Get and set user
      if (!!data && !!data.getUser) {
        const {
          id,
          nickName,
          picture,
          slug,
          managesCorporations,
        } = data.getUser;

        client.writeData({
          data: {
            user: {
              __typename: 'User',
              ...user,
              userId: id,
              nickName,
              picture,
              slug,
              managesCorporations,
            },
          },
        });
      }
    },
    onError: (error) => {
      if (
        !(
          navigationContext.NoProtectedUrl.indexOf(window.location.pathname) >
          -1
        )
      ) {
        client.writeData({
          data: {
            user: {
              __typename: 'User',
              token: null,
              slugId: null,
              nickName: null,
              picture: null,
              slug: null,
              managesCorporations: null,
            },
          },
        });
        modalContext.updateShowLogin(true);
      }
    },
  });

  useEffect(() => {
    // if not signed in, fetch user and roles
    if (!slugId) {
      const { slug, roles } = parseAccessToken(token);
      client.writeData({
        data: {
          user: {
            __typename: 'User',
            roles,
          },
        },
      });

      userQuery({
        variables: {
          slug,
        },
      });
    }
  }, [called, client, slugId, token, userQuery]);

  if (!token || !roles || !managesCorporations || loading) return <Loading />;
  if (roles.indexOf('Manager') > -1 && managesCorporations.length === 0)
    return <Loading />;

  const basePath = location.pathname.split('/')[1];
  const id = location.pathname.split('/')[2];

  // If user is on dashboard and not a manager, route back to start
  if (basePath === 'dashboard' && roles.indexOf('Manager') === -1) {
    return (
      <Route
        {...rest}
        render={(props) =>
          !!user.token ? <Redirect to={'/home'} /> : <Redirect to={'/'} />
        }
      />
    );
  }

  // user is a manager
  if (roles.indexOf('Manager') > -1) {
    if (
      basePath !== 'dashboard' ||
      !!!managesCorporations.find(
        (m) => m.slug.toLowerCase() === id.toLowerCase()
      )
    ) {
      // Manager needs to be redirected back if not in dashboard and on protected route
      if (!!managesCorporations && managesCorporations.length > 0) {
        // TODO, do we need a picker for changing between multiple companies?
        const { slug } = managesCorporations[0];
        if (!!slug) {
          return (
            <Route
              {...rest}
              render={(props) => (
                <Redirect to={`/dashboard/${slug.toLowerCase()}`} />
              )}
            />
          );
        }
      }
    }
  } else {
    if (!navigationContext.getIsPhone()) {
      navigationContext.updateShowMenu(true);
    }
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        !!user.token ? <Component {...props} /> : <Redirect to={'/'} />
      }
    />
  );
};

export default withRouter(ProtectedRoute);
