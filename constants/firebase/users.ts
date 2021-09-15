import firebase from 'firebase/app';
import 'firebase/firestore';

export const getUsers = async () => {
  const docRef = await firebase.firestore().collection('users').get();
  const userList = docRef.docs.map((item) => ({ ...item.data(), id: item.id }));

  return userList;
};

export const postUser = async (email: string) => {
  const docRef = await firebase.firestore().collection('users').get();
  const userList = docRef.docs.map((item: any) => item.data());
  const userExists = userList.find((user: any) => user.email === email);

  if (userExists) return;

  try {
    firebase.firestore().collection('users').add({ email });
  } catch (error) {
    console.error(error);
  }
};

export const deleteUser = async (userId: string) => {
  try {
    firebase.firestore().collection('users').doc(userId).delete();
  } catch (error) {
    console.error(error);
  }
};
