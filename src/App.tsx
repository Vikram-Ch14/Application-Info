import { useEffect, useState } from "react";
import Chat from "./components/chatbar/Chat";
import Login from "./components/login/Login";
import Sidebar from "./components/sidebar/Sidebar";
import SignUp from "./components/signup/SignUp";
import { onAuthStateChanged } from "firebase/auth";
import { authStore } from "./lib/firebaseConfig";
import { fetchUserInfo } from "./service/HttpService";
import { useAuthStore } from "./store/AuthStore";
import "./App.css";


function App() {
  const isUserLogin = false;
  const [showLoginPage, setShowLoginPage] = useState<boolean>(true);
  const setCurrentUser = useAuthStore((state) => state.setCurrentUser);
  const currentUser = useAuthStore((state) => state.currentUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(authStore, async (user) => {
      try {
        const userId = user?.uid;
        const userInfo = await fetchUserInfo(userId!);
        if (userInfo) {
          setCurrentUser(userInfo);
        }
      } catch (e) {
        console.error(e);
        setCurrentUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  console.log("currentUser", currentUser);

  return (
    <div className="w-full h-screen flex">
      {!isUserLogin ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : showLoginPage ? (
        <Login setShowLoginPage={setShowLoginPage} />
      ) : (
        <SignUp setShowLoginPage={setShowLoginPage} />
      )}
    </div>
  );
}

export default App;
