import { gql, useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import LoadingDots from '../components/LoadingDots';
import { Button } from '../stylings/Buttons';
import Colors from '../stylings/Colors';
import { LightContainer } from '../stylings/Containers';
import { Input } from '../stylings/Inputs';
import { parseAccessToken } from '../utils/Token';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Home = () => {
  return (
    <MainContainer>
      <Login />
    </MainContainer>
  );
};

export default Home;

const LoginContainer = styled(LightContainer)`
  width: 300px;
  height: 200px;
  padding: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 100%;
  height: 100%;
`;

const Submit = styled(Button)`
  margin-top: 2em;
  align-self: flex-end;
`;

const Email = styled(Input)`
  font-size: 0.75rem;
`;

const Password = styled(Email)`
  margin-top: 0.8em;
`;

const Login = withRouter(({ history }) => {
  const SIGNIN = gql`
    mutation signIn($email: String!, $password: String!) {
      signIn(email: $email, password: $password) {
        accessToken
        expiresIn
        tokenType
      }
    }
  `;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [signIn, { client }] = useMutation(SIGNIN, {
    onError: (error) => {
      // setShowError(true);
      setLoading(false);
      history.push('');
    },
    onCompleted: (data) => {
      if (!!data && !!data.signIn && !!data.signIn.accessToken) {
        const { accessToken } = data.signIn;
        localStorage.setItem('token', accessToken);
        const { slug, roles } = parseAccessToken(accessToken);

        console.log(slug);
        console.log(roles);

        history.push('/admin');
      }
    },
  });

  const loginCallBack = (email, password) => {
    signIn({
      variables: {
        email: email,
        password: password,
      },
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
    setLoading(true);
    loginCallBack(email, password);
  };

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    if (name === 'email') {
      setEmail(value);
    }
    if (name === 'password') {
      setPassword(value);
    }
  };

  return (
    <LoginContainer>
      <Form onSubmit={handleSave} data-testid='form'>
        <Email
          autoFocus={true}
          name='email'
          type='email'
          value={email}
          placeholder='E-postadress'
          onChange={handleChange}
          required
        />
        <Password
          name='password'
          type='password'
          value={password}
          placeholder='Lösenord'
          onChange={handleChange}
          required
        />

        <Submit kind='teal' type='submit' disabled={loading}>
          {loading ? <LoadingDots color={Colors.white} /> : 'FORTSÄTT'}
        </Submit>
      </Form>
    </LoginContainer>
  );
});
