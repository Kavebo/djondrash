import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Head from 'next/head';
import Image from 'next/image';

import backgroundImage from '../assets/images/background3_phone.jpg';
import Navigation from '../components/Navigation';
import { getUsers } from '../constants/firebase/users';
import FirebaseAuth from '../constants/firebase/FirebaseAuth';
import MailSender from '../components/MailSender';
import EmailMultiSelect from '../components/MultiSelect';

const Wrapper = styled.div`
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
  z-index: 10;

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
  const [filteredUsers, setFilteredUsers] = useState<IUser[]>([]);

  useEffect(() => {
    getUsers().then((data) => {
      setUsers(data as IUser[]);
      setFilteredUsers(data as IUser[]);
    });
  }, []);

  return (
    <Wrapper>
      <Head>
        <title>Dj Ondrash - Email sender</title>
      </Head>
      <Image src={backgroundImage} alt="background" layout="fill" objectFit="cover" />
      <Navigation />
      <ContentWrapper>
        <FirebaseAuth>
          <h1>Email sender</h1>
          {users.length > 0 && <EmailMultiSelect users={users} setUsers={setFilteredUsers} />}
          <MailSender users={filteredUsers} />
        </FirebaseAuth>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Emails;
