import { addDoc, collection, doc, getDocs, deleteDoc } from '@firebase/firestore';
import { db } from './firebase';

export const getUsers = async () => {
  const usersCol = collection(db, 'users');
  const usersSnapshot = await getDocs(usersCol);
  const userList = usersSnapshot.docs.map((doc) => doc.data());

  return userList;
};

export const postUser = async (email: string) => {
  const usersCol = collection(db, 'users');
  const usersSnapshot = await getDocs(usersCol);
  const userList = usersSnapshot.docs.map((doc) => doc.data());

  const userExists = userList.find((user) => user.email === email);

  if (userExists) {
    return userList;
  }

  await addDoc(usersCol, { email });

  return userList.push({ email });
};

export const deleteUser = async (userId: string) => {
  const usersCol = collection(db, 'users');

  await deleteDoc(doc(usersCol, userId));
};
