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
  const [showLoginPage, setShowLoginPage] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const currentUser = useAuthStore((state) => state.currentUser);
  const setCurrentUser = useAuthStore((state) => state.setCurrentUser);

  useEffect(() => {
    setIsLoading(true);
    const unsubscribe = onAuthStateChanged(authStore, async (user) => {
      if (user) {
        const userInfo = await fetchUserInfo(user?.uid!);
        if (userInfo) {
          setCurrentUser(userInfo);
        }
      }
    });
    setIsLoading(false);
    return () => {
      unsubscribe();
    };
  }, [fetchUserInfo]);
  if (isLoading) return;

  return (
    <div className="w-full h-screen flex">
      {currentUser?.id ? (
        <>
          <Sidebar />
          <Chat />
          {/* <Details/> */}
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
