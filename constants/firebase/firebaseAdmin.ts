import { auth, initializeApp, apps, credential } from 'firebase-admin';

export const verifyIdToken = (token: string) => {
  const firebasePrivateKey = process.env.FIREBASE_PRIVATE_KEY;

  if (!apps.length) {
    initializeApp({
      credential: credential.cert({
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        // https://stackoverflow.com/a/41044630/1332513
        privateKey: firebasePrivateKey?.replace(/\\n/g, '\n'),
      }),
      databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    });
  }

  return auth()
    .verifyIdToken(token)
    .catch((error) => {
      console.error('[firebaseAdmin] error', error);
      throw error;
    });
};
