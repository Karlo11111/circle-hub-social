import { adminTools } from "@/data/sidbarData";
import BarChart from "../charts/BarChart";
import GroupLeftMenu from "../menu/GroupLeftMenu";
import Select from "../select/Select";
import avatar_13 from "/public/images/avatar-13.png";

const filterDate = [
  { id: 1, name: "Last 7 days" },
  { id: 2, name: "Last 15 days" },
  { id: 3, name: "Last 30 days" },
];

const filterDate2 = [
  { id: 1, name: "Last 7 days" },
  { id: 2, name: "Last 15 days" },
  { id: 3, name: "Last 30 days" },
];

const GroupAdminAssistMain = () => {
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
          <div className="col-xl-9 col-lg-8">
            <div className="banner-area pages-create mb-5">
              <div className="single-box p-3 p-sm-5 pb-2">
                <div className="top-area d-center justify-content-between">
                  <h6>Post</h6>
                  <div className="input-area py-2">
                    {/* select */}
                    <Select data={filterDate} />
                  </div>
                </div>
                {/* BarChart */}
                <BarChart />
              </div>
            </div>
            <div className="banner-area pages-create mb-5">
              <div className="single-box p-3 p-sm-5 pb-2">
                <div className="top-area d-center justify-content-between">
                  <h6>Member Request</h6>
                  <div className="input-area py-2">
                    {/* select */}
                    <Select data={filterDate2} />
                  </div>
                </div>
                {/* <div id="memberRequest"></div> */}
                {/* BarChart */}
                <BarChart color="#00CF53" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default GroupAdminAssistMain;
