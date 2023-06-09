import FriendLeftMenu from "../menu/FriendLeftMenu";
import BlockedMembers from "./BlockedMembers";

const BlockListMain = () => {
  return (
    <main className="main-content">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-4">
            {/* Friend Left Menu */}
            <FriendLeftMenu />
          </div>
          <div className="col-xl-9 col-lg-8">
            <div className="row cus-mar friend-request">
              <div className="col-xl-12">
                <div className="single-box text-start p-5">
                  {/* Blocked Members */}
                  <BlockedMembers />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlockListMain;
