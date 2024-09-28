import { useState } from "react";
import "./App.css";
import Chat from "./components/chatbar/Chat";
import Login from "./components/login/Login";
import Sidebar from "./components/sidebar/Sidebar";
import SignUp from "./components/signup/SignUp";

function App() {
  const isUserLogin = false;
  const [isUserExist, setIsUserExist] = useState<boolean>(true);

  return (
    <div className="w-full h-screen flex">
      {!isUserLogin ? (
        <>
          <Sidebar />
          <Chat />
          {/* <Details /> */}
        </>
      ) : isUserExist ? (
        <Login setIsUserExist={setIsUserExist} />
      ) : (
        <SignUp setIsUserExist={setIsUserExist} />
      )}
    </div>
  );
}

export default App;
