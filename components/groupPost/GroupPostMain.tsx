import { adminTools } from "@/data/sidbarData";
import GroupLeftMenu from "../menu/GroupLeftMenu";
import Select from "../select/Select";
import GroupPosts from "./GroupPosts";
import avatar_4 from "/public/images/avatar-4.png";

const selectData = [
  { id: 1, name: "Newest" },
  { id: 2, name: "Oldest" },
];

const GroupPostMain = () => {
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
            <div className="head-area d-center flex-wrap gap-3 justify-content-between">
              <h5>Pending approvals</h5>
              <div className="btn-right d-flex gap-2">
                <button className="cmn-btn">Approve all</button>
                <button className="cmn-btn alt second">Decline all</button>
              </div>
            </div>
            <form
              action="#"
              className="d-flex my-7 align-items-stretch justify-content-between gap-4"
            >
              <div className="input-area py-2 w-100 gap-2 d-flex align-items-center">
                <i className="material-symbols-outlined mat-icon">search</i>
                <input type="text" placeholder="Search" autoComplete="off" />
              </div>
              <div className="input-area py-2">
                {/* Select */}
                <Select data={selectData} />
              </div>
            </form>
            <div className="row ms-0 ms-lg-10">
              <div className="col-lg-8">
                <div className="post-item d-flex flex-column gap-5 gap-md-7">
                  {/* Group Posts */}
                  <GroupPosts />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default GroupPostMain;
