import GroupDetailsMiddle from "../common/GroupDetailsMiddle";
import HomeLeft from "../menu/HomeLeft";
import GroupHead from "./GroupHead";

const GroupDetailsMain = () => {
  return (
    <main className="main-content">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-4">
            {/* Home Left  */}
            <HomeLeft clss="d-lg-none" />
          </div>
          <div className="col-xl-9 col-lg-8">
            {/* Group Details Middle */}
            <GroupDetailsMiddle>
              {/* Group Head */}
              <GroupHead />
            </GroupDetailsMiddle>
          </div>
        </div>
      </div>
    </main>
  );
};

export default GroupDetailsMain;
