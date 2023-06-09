import FriendLeftMenu from "../menu/FriendLeftMenu";
import Friends from "./Friends";

const AllFriendMain = () => {
  return (
    <main className="main-content">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-4">
            {/* Friend Left Menu */}
            <FriendLeftMenu />
          </div>
          <div className="col-xl-9 col-lg-8">
            {/* Frients */}
            <Friends />
          </div>
        </div>
      </div>
    </main>
  );
};

export default AllFriendMain;
