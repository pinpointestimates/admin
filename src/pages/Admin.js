import React from 'react';
import Colors from '../stylings/Colors';
import styled from 'styled-components';

const AdminContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const H1 = styled.h1`
  font-size: 4rem;
  color: ${Colors.white};
`;

const Admin = () => {
  return (
    <AdminContainer>
      <H1>INLOGGAD</H1>
    </AdminContainer>
  );
};

export default Admin;
