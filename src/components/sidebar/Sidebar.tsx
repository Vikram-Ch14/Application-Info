import ConversationList from "./conversation/ConversationList";
import UserInfo from "./conversation/UserInfo";

const Sidebar = () => {
  return (
    <div className="w-72 flex flex-col">
      <UserInfo />
      <ConversationList />
    </div>
  );
};

export default Sidebar;
