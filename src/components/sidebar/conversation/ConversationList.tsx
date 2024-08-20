import { useState } from "react";

import { IoIosSearch } from "react-icons/io";
import { IoAddOutline } from "react-icons/io5";
import { FiMinus } from "react-icons/fi";

const ConversationList = () => {
  const [isAdd, setIsAdd] = useState<boolean>(false);
  return (
    <div>
      <div className="p-5 flex items-center justify-between">
        <div className="flex items-center border p-1 rounded-md gap-2">
          <IoIosSearch size={18} className="pt-[2px]" />
          <input
            type="text"
            placeholder="Search..."
            className="border-none outline-none text-sm"
          />
        </div>
        <div>
          {!isAdd ? (
            <IoAddOutline size={25} onClick={() => setIsAdd(true)} />
          ) : (
            <FiMinus size={25} onClick={() => setIsAdd(false)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ConversationList;
