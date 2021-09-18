import { useEffect, useState } from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { Props as FirebaseUIProps } from 'react-firebaseui';

import { initializeFirebase } from './firebase';

initializeFirebase();

const SUPPORTED_EMAILS = ['jozef.kavecansky@gmail.com', 'djondrash@gmail.com'];

const FirebaseAuthConfig: FirebaseUIProps['uiConfig'] = {
  signInFlow: 'google_popup',
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  callbacks: {
    signInSuccessWithAuthResult: () => false,
  },
};

const FirebaseAuth: React.FC = ({ children }) => {
  const [isSignIn, setIsSignedIn] = useState(false);
  const [isSupportedEmail, setIsSupportedEmail] = useState(false);

  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged((user) => {
      setIsSignedIn(!!user);
      setIsSupportedEmail(SUPPORTED_EMAILS.includes(user?.email || ''));
    });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  if (!isSignIn) {
    return (
      <div>
        <StyledFirebaseAuth uiConfig={FirebaseAuthConfig} firebaseAuth={firebase.auth()} />
      </div>
    );
  }

  return (
    <div>{!isSupportedEmail ? <h1 style={{ color: 'white' }}>No access to this service</h1> : <>{children}</>}</div>
  );
};

export default FirebaseAuth;
