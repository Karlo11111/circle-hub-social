import { adminTools } from "@/data/sidbarData";
import GroupLeftMenu from "../menu/GroupLeftMenu";
import Summary from "./Summary";
import TopReview from "./TopReview";
import avatar_13 from "/public/images/avatar-13.png";

const GroupActivityMain = () => {
  return (
    <main className="main-content">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-4">
            {/* Group Left Menu */}
            <GroupLeftMenu
              adminTools={adminTools}
              img={avatar_13}
              name="Java World Group"
              type="Public group"
            />
          </div>
          <div className="col-xl-9 col-lg-8 cus-mar">
            <div className="row">
              <div className="col-xl-6">
                <div className="single-box p-5">
                  <div className="head-area mb-6 text-start">
                    <h5>Top review</h5>
                  </div>
                  {/* Top Review */}
                  <TopReview />
                </div>
              </div>
              <div className="col-xl-6">
                <div className="single-box d-grid gap-2 p-5">
                  <div className="head-area mb-4 d-center justify-content-between">
                    <h5>Summary</h5>
                    <span className="mdtxt">Last 7 days</span>
                  </div>
                  {/* Summary */}
                  <Summary />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default GroupActivityMain;
