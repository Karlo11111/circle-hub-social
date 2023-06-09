import Image from "next/image";
import Link from "next/link";
import ContactAction from "../ui/ContactAction";
import avatar_10 from "/public/images/avatar-10.png";
import avatar_2 from "/public/images/avatar-2.png";
import avatar_3 from "/public/images/avatar-3.png";
import avatar_4 from "/public/images/avatar-4.png";
import avatar_5 from "/public/images/avatar-5.png";
import avatar_6 from "/public/images/avatar-6.png";
import avatar_7 from "/public/images/avatar-7.png";
import avatar_8 from "/public/images/avatar-8.png";
import avatar_9 from "/public/images/avatar-9.png";
import group_avatar_2 from "/public/images/group-avatar-2.png";
import group_cover_img from "/public/images/group-cover-img.png";

const GroupHead = () => {
  return (
    <>
      <div className="avatar-area">
        <Image className="avatar-img w-100" src={group_cover_img} alt="image" />
      </div>
      <div className="top-area py-4 d-center flex-wrap gap-3 justify-content-between">
        <div className="d-flex gap-3 align-items-center">
          <div className="abs-avatar-item m-0">
            <Image
              className="avatar-img max-un"
              src={group_avatar_2}
              alt="avatar"
            />
          </div>
          <div className="text-area text-start">
            <h5 className="m-0 mb-1">Car Legend Community</h5>
            <p className="mdtxt">Public Group-30k Member</p>
          </div>
        </div>
        <div className="btn-item d-center gap-3">
          <Link href="#" className="cmn-btn fourth gap-1">
            Joined
          </Link>
          <Link href="#" className="cmn-btn third gap-1">
            <i className="material-symbols-outlined mat-icon fs-xl">add_box</i>
            Invite
          </Link>
          {/* Contact Action */}
          <ContactAction
            actionList={[
              ["Unfollow", "person_remove"],
              ["Hide", "hide_source"],
            ]}
          />
        </div>
      </div>
      <div className="friends-list d-flex flex-wrap gap-2 align-items-center text-center">
        <ul className="d-flex align-items-center justify-content-center">
          {[
            avatar_2,
            avatar_3,
            avatar_5,
            avatar_4,
            avatar_6,
            avatar_7,
            avatar_8,
            avatar_9,
            avatar_10,
          ].map((itm, i) => (
            <li key={i}>
              <Image src={itm} alt="image" />
            </li>
          ))}
        </ul>
        <span className="mdtxt d-center">
          Rezeka, Martiola, Larmjio, and 10+ more
        </span>
      </div>
    </>
  );
};

export default GroupHead;
