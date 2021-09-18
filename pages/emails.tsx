import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Head from 'next/head';

import background from '../assets/images/background3_phone.jpg';
import Navigation from '../components/Navigation';
import { getUsers } from '../constants/firebase/users';
import FirebaseAuth from '../constants/firebase/FirebaseAuth';
import MailSender from '../components/MailSender';

const Wrapper = styled.div`
  background: url(${background});
  background-repeat: repeat;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  flex: 1;
  height: 100vh;
  width: 100%;
  margin: auto;
  padding: 10px;

  @media only screen and (min-width: 1024px) and (orientation: landscape) {
    max-width: 70%;
  }
`;

export interface IUser {
  email: string;
  id: string;
}

const Emails = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    getUsers().then((data) => setUsers(data as IUser[]));
  }, []);

  return (
    <Wrapper>
      <Head>
        <title>Dj Ondrash - Email sender</title>
      </Head>
      <Navigation />
      <ContentWrapper>
        <FirebaseAuth>
          <h1>Email sender</h1>
          <MailSender users={users} />
        </FirebaseAuth>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Emails;
