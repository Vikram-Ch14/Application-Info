import "./App.css";
import Chat from "./components/chatbar/Chat";
import Details from "./components/details/Details";
import Login from "./components/login/Login";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  const isUserLogin = false;

  return (
    <div className="w-full h-screen flex">
      {isUserLogin ? (
        <>
          <Sidebar />
          <Chat />
          <Details />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
