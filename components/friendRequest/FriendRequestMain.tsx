import userData from "@/data/userData";
import VerticalRequestCard from "../cards/VerticalRequestCard";
import FriendLeftMenu from "../menu/FriendLeftMenu";

const FriendRequestMain = () => {
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
              {userData.map((itm) => (
                <div key={itm.id} className="col-xl-4 col-sm-6 col-8">
                  {/* Vertical Request Card   */}
                  <VerticalRequestCard data={itm} reqType="Confirm" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FriendRequestMain;
