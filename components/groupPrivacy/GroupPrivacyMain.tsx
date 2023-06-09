import { adminTools } from "@/data/sidbarData";
import PrivacyTable from "../common/PrivacyTable";
import GroupLeftMenu from "../menu/GroupLeftMenu";
import avatar_4 from "/public/images/avatar-4.png";

const GroupPrivacyMain = () => {
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
          <div className="col-xl-9 col-lg-8 cus-mar">
            <div className="head-area mb-6 text-start">
              <h5>Group Privacy</h5>
            </div>
            <div className="single-box p-sm-5 p-3">
              {/* Privacy Table */}
              <PrivacyTable />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default GroupPrivacyMain;
