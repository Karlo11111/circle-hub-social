import { adminTools } from "@/data/sidbarData";
import Settings from "../common/Settings";
import GroupLeftMenu from "../menu/GroupLeftMenu";
import avatar_4 from "/public/images/avatar-4.png";

const GroupSettingMain = () => {
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
          <div className="col-xl-9 col-lg-8 cus-mar setting-row">
            <div className="head-area mb-6 text-start">
              <h5>Settings</h5>
            </div>
            {/* Settings */}
            <Settings />
          </div>
        </div>
      </div>
    </main>
  );
};

export default GroupSettingMain;
