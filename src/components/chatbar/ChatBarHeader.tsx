import { MdPhone } from "react-icons/md";
import { IoMdInformationCircle } from "react-icons/io";
import { IoMdVideocam } from "react-icons/io";

const ChatBarHeader = () => {
  return (
    <div className="flex items-center pt-5 pb-5 pl-10 pr-10 justify-between border-b">
      <div className="flex flex-col gap-1">
        <h2 className="text-md">Jhon Doe</h2>
        <span className="text-xs">Hello</span>
      </div>
      <div className="flex items-center gap-5">
        <MdPhone size={22} />
        <IoMdVideocam size={22} />
        <IoMdInformationCircle size={22} />
      </div>
    </div>
  );
};

export default ChatBarHeader
