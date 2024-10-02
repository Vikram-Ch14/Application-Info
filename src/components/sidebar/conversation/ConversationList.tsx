import { useEffect, useState } from "react";

import { IoIosSearch } from "react-icons/io";
import { IoAddOutline } from "react-icons/io5";
import { FiMinus } from "react-icons/fi";
import { HiUserCircle } from "react-icons/hi2";
import { useAuthStore, UserChats } from "@/store/AuthStore";
import { fetchUserChats } from "@/service/HttpService";
import { Button } from "@/components/ui/button";
import { authStore } from "@/lib/firebaseConfig";

const ConversationList = () => {
  const [isAdd, setIsAdd] = useState<boolean>(false);
  const [userChats, setUserChats] = useState<UserChats>();
  const currentUser = useAuthStore((state) => state.currentUser);
  const setCurrentUser = useAuthStore((state) => state.setCurrentUser);

  const handleLogout = () => {
    authStore?.signOut();
    setCurrentUser(null);
  };

  useEffect(() => {
    if (!currentUser?.id) return;
    const getUserChats = async () => {
      try {
        const response = await fetchUserChats(currentUser?.id);
        setUserChats(response!);
      } catch (e) {
        console.error(e);
      }
    };

    getUserChats();
  }, [currentUser?.id]);

  return (
    <>
      <div className="p-5 flex flex-col">
        <div className="flex items-center justify-between">
          <div className="flex items-center border p-1 rounded-md gap-2">
            <IoIosSearch size={18} className="pt-[2px]" />
            <input
              type="text"
              placeholder="Search..."
              className="border-none outline-none text-sm"
            />
          </div>
          <div className="cursor-pointer">
            {!isAdd ? (
              <IoAddOutline size={25} onClick={() => setIsAdd(true)} />
            ) : (
              <FiMinus size={25} onClick={() => setIsAdd(false)} />
            )}
          </div>
        </div>
      </div>
      <div className="flex-1 pt-3 p-5 overflow-y-auto">
        {userChats?.chats?.map((chat: string, index: number) => {
          return (
            <div
              className="flex items-center gap-5 pt-5 border-b pb-2"
              key={`chat-${index}`}
            >
              <HiUserCircle size={30} />
              <div className="flex flex-col gap-1">
                <h2 className="text-md">{chat}</h2>
                <span className="text-xs">Hello</span>
              </div>
            </div>
          );
        })}
        <Button onClick={handleLogout}>Logout</Button>
      </div>
    </>
  );
};

export default ConversationList;
