import ConversationList from "./conversation/ConversationList";
import UserInfo from "./conversation/UserInfo";

const Sidebar = () => {
  return (
    <div className="w-72">
      <UserInfo />
      <ConversationList />
    </div>
  );
};

export default Sidebar;
