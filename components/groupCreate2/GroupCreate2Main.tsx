import { adminTools } from "@/data/sidbarData";
import GroupDetailsMiddle from "../common/GroupDetailsMiddle";
import GroupLeftMenu from "../menu/GroupLeftMenu";
import GroupCreateHead from "./GroupCreateHead";
import avatar_4 from "/public/images/avatar-4.png";

const GroupCreate2Main = () => {
  return (
    <main className="main-content">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-4">
            {/* Group Left Menu */}
            <GroupLeftMenu
              adminTools={adminTools}
              img={avatar_4}
              name="Java World Group"
              type="Public group"
            />
          </div>
          <div className="col-xl-9 col-lg-8">
            {/* Group Details Middle */}
            <GroupDetailsMiddle>
              {/* Group Create Head */}
              <GroupCreateHead />
            </GroupDetailsMiddle>
          </div>
        </div>
      </div>
    </main>
  );
};

export default GroupCreate2Main;
