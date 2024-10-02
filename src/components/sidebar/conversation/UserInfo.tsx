import { useAuthStore } from "@/store/AuthStore";
import { GoKebabHorizontal } from "react-icons/go";
import { HiUserCircle } from "react-icons/hi2";
const UserInfo = () => {
  const currentUser = useAuthStore((state)=>state.currentUser)
  return (
    <div className="p-5 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <HiUserCircle size={35} />
        <h2 className="text-lg">{currentUser?.username}</h2>
      </div>
      <div>
        <GoKebabHorizontal size={25} />
      </div>
    </div>
  );
};

export default UserInfo;
