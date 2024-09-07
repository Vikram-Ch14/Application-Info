import ChatBarConversation from "./ChatBarConversation";
import ChatBarFooter from "./ChatBarFooter";
import ChatBarHeader from "./ChatBarHeader";

const Chat = () => {
  return (
    <div className="flex-1 border-l border-r flex flex-col">
      <ChatBarHeader />
      <ChatBarConversation />
      <ChatBarFooter />
    </div>
  );
};

export default Chat;
