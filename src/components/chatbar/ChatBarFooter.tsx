import { RiSendPlane2Fill } from "react-icons/ri";

const ChatBarFooter = () => {
  return (
    <div className="p-5 border-t">
      <div className="w-full border  rounded-2xl flex items-center justify-between p-2 ">
        <input
          type="text"
          placeholder="Type a message"
          className="border-none outline-none w-full gap-2 flex items-center pl-1 "
        />
        <div className="pl-3">
          <RiSendPlane2Fill size={20} />
        </div>
      </div>
    </div>
  );
};

export default ChatBarFooter;
