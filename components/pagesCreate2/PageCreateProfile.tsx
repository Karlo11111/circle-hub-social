import Image from "next/image";
import Link from "next/link";
import ContactAction from "../ui/ContactAction";
import avatar_3 from "/public/images/avatar-3.png";
import avatar_4 from "/public/images/avatar-4.png";
import avatar_5 from "/public/images/avatar-5.png";
import avatar_6 from "/public/images/avatar-6.png";
import create_group_cover_img from "/public/images/create-group-cover-img.png";
import group_avatar_10 from "/public/images/group-avatar-10.png";

const PageCreateProfile = () => {
  return (
    <>
      <div className="avatar-area">
        <Image
          className="avatar-img w-100"
          src={create_group_cover_img}
          alt="image"
        />
      </div>
      <div className="top-area py-4 d-center flex-wrap gap-3 justify-content-between">
        <div className="d-flex gap-3 align-items-center">
          <div className="abs-avatar-item m-0">
            <Image
              className="avatar-img max-un"
              src={group_avatar_10}
              alt="avatar"
            />
          </div>
          <div className="text-area text-start">
            <h6 className="m-0 mb-1">Java World</h6>
            <p className="mdtxt">Public Pages-30k Member</p>
          </div>
        </div>
        <div className="btn-item d-center gap-3">
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
          <li>
            <Image src={avatar_3} alt="image" />
          </li>
          <li>
            <Image src={avatar_4} alt="image" />
          </li>
          <li>
            <Image src={avatar_5} alt="image" />
          </li>
          <li>
            <Image src={avatar_6} alt="image" />
          </li>
        </ul>
        <span className="mdtxt d-center">
          Rezeka, Martiola, Larmjio, and 10+ more
        </span>
      </div>
    </>
  );
};

export default PageCreateProfile;
