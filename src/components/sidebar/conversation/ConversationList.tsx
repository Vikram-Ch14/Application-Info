import { useState } from "react";

import { IoIosSearch } from "react-icons/io";
import { IoAddOutline } from "react-icons/io5";
import { FiMinus } from "react-icons/fi";
import { HiUserCircle } from "react-icons/hi2";

const ConversationList = () => {
  const [isAdd, setIsAdd] = useState<boolean>(false);
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
        <div className="flex items-center gap-2 pt-5 border-b pb-2">
          <HiUserCircle size={25} />
          <h2 className="text-md">Jhon Doe</h2>
        </div>
        <div className="flex items-center gap-2 pt-5 border-b pb-2">
          <HiUserCircle size={25} />
          <h2 className="text-md">Jhon Doe</h2>
        </div>
      </div>
    </>
  );
};

export default ConversationList;
