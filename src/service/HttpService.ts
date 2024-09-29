import { authStore } from "@/lib/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";
import { UserData } from "@/store/AuthStore";

export const createUser = async (email: string, password: string) => {
  const response = await createUserWithEmailAndPassword(
    authStore,
    email,
    password
  );
  return response;
};

export const userSignIn = async (email: string, password: string) => {
  const response = await signInWithEmailAndPassword(authStore, email, password);
  return response;
};

export const storeUserData = async (
  userId: string,
  username: string,
  email: string
) => {
  await setDoc(doc(db, "users", userId), {
    username,
    email,
    id: userId,
    blocked: [],
  });
};

export const createUserChats = async (userId: string) => {
  await setDoc(doc(db, "userchats", userId), {
    chats: [],
  });
};

export const fetchUserInfo = async (userId: string) => {
  const docRef = doc(db, "users", userId);
  const docSnap = await getDoc(docRef);
  if (docSnap?.exists()) {
    return docSnap?.data() as UserData;
  }
  return null;
};
