import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Avatar, Form, Container, Google } from 'components/Auth';

const Auth = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const history = useHistory();

  useEffect(() => {
    userInfo && history.push('/contact');
  }, [userInfo, history]);

  return (
    <Container>
      <Avatar />
      <Form>
        <Google />
      </Form>
    </Container>
  );
};

export default Auth;
