import { authStore } from "@/lib/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";

export const createUser = async (email: string, password: string) => {
  const response = await createUserWithEmailAndPassword(
    authStore,
    email,
    password
  );
  return response;
};

export const storeUserData = async (
  userId: string,
  username: string,
  email: string
) => {
  console.log("userId", userId, username, email);
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
