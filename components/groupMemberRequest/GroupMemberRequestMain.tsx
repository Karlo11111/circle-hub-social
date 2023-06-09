import { adminTools } from "@/data/sidbarData";
import MemberRequestCard from "../cards/MemberRequestCard";
import GroupLeftMenu from "../menu/GroupLeftMenu";
import avatar_1 from "/public/images/avatar-1.png";
import avatar_10 from "/public/images/avatar-10.png";
import avatar_12 from "/public/images/avatar-12.png";
import avatar_13 from "/public/images/avatar-13.png";
import avatar_3 from "/public/images/avatar-3.png";
import avatar_4 from "/public/images/avatar-4.png";
import avatar_5 from "/public/images/avatar-5.png";

const memberRequestData = [
  {
    id: 1,
    author_name: "Annette Black",
    author_img: avatar_3,
    number_friends: 10,
    joined: 2,
  },
  {
    id: 2,
    author_name: "Kathryn Murphy",
    author_img: avatar_5,
    number_friends: 10,
    joined: 2,
  },
  {
    id: 3,
    author_name: "Eleanor Pena",
    author_img: avatar_4,
    number_friends: 10,
    joined: 2,
  },
  {
    id: 4,
    author_name: "Ralph Edwards",
    author_img: avatar_1,
    number_friends: 10,
    joined: 2,
  },
  {
    id: 5,
    author_name: "Jacob Jones",
    author_img: avatar_10,
    number_friends: 10,
    joined: 2,
  },
  {
    id: 6,
    author_name: "Guy Hawkins",
    author_img: avatar_12,
    number_friends: 10,
    joined: 2,
  },
];

const GroupMemberRequestMain = () => {
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
            <div className="head-area d-center justify-content-between">
              <h5>Member Request</h5>
              <div className="btn-right d-flex gap-2">
                <button className="cmn-btn">Approve all</button>
                <button className="cmn-btn alt second">Decline all</button>
              </div>
            </div>
            <form className="d-flex my-7 align-items-stretch justify-content-between gap-4">
              <div className="input-area py-2 w-100 gap-2 d-flex align-items-center">
                <i className="material-symbols-outlined mat-icon">search</i>
                <input
                  type="text"
                  placeholder="Search"
                  autoComplete="off"
                  required
                />
              </div>
              <button type="submit" className="cmn-btn alt third">
                <i className="material-symbols-outlined mat-icon">filter_alt</i>
                Filter
              </button>
            </form>

            {memberRequestData.map((itm) => (
              <div
                key={itm.id}
                className="single-box member-single p-5 d-flex align-items-baseline justify-content-between"
              >
                {/* Member Request Card */}
                <MemberRequestCard data={itm} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default GroupMemberRequestMain;
