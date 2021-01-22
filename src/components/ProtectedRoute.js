import { gql, useLazyQuery } from '@apollo/client';
import React, { useEffect } from 'react';
import { Redirect, Route, withRouter } from 'react-router-dom';
import { parseAccessToken } from '../utils/Token';
import Loading from '../components/Loading';

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
  const accessToken = localStorage.getItem('token');
  const { slug } = parseAccessToken(accessToken);
  const [userQuery, { called, loading, data }] = useLazyQuery(GET_USER, {
    fetchPolicy: 'network-only',
  });

  useEffect(() => {
    userQuery({
      variables: {
        slug,
      },
    });
  }, [slug, userQuery]);

  if (!called || !slug || loading) return <Loading />;

  return (
    <Route
      {...rest}
      render={(props) =>
        accessToken ? <Component {...props} /> : <Redirect to={'/'} />
      }
    />
  );
};

export default withRouter(ProtectedRoute);
