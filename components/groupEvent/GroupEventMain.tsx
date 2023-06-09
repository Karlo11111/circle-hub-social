import { adminTools } from "@/data/sidbarData";
import Link from "next/link";
import GroupEventCard from "../cards/GroupEventCard";
import GroupLeftMenu from "../menu/GroupLeftMenu";
import avatar_4 from "/public/images/avatar-4.png";

const GroupEventMain = () => {
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
            <div className="head-area mb-7 d-center justify-content-between">
              <h5>Event</h5>
              <div className="btn-right d-flex gap-2">
                <Link href="#" className="cmn-btn">
                  Create Event
                </Link>
              </div>
            </div>
            {/* Group Event Card */}
            <GroupEventCard />
          </div>
        </div>
      </div>
    </main>
  );
};

export default GroupEventMain;
