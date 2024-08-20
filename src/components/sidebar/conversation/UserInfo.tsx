import { GoKebabHorizontal } from "react-icons/go";
import { HiUserCircle } from "react-icons/hi2";
const UserInfo = () => {
  return (
    <div className="p-5 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <HiUserCircle size={35} />
        <h2 className="text-lg">Jhon Doe</h2>
      </div>
      <div>
        <GoKebabHorizontal size={25} />
      </div>
    </div>
  );
};

export default UserInfo;
