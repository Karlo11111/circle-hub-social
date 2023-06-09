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
import page_avatar_1 from "/public/images/page-avatar-1.png";
import page_cover_img from "/public/images/page-cover-img.png";

const PageProfile = () => {
  return (
    <>
      <div className="avatar-area">
        <Image className="avatar-img w-100" src={page_cover_img} alt="image" />
      </div>
      <div className="top-area py-4 d-center flex-wrap gap-3 justify-content-between">
        <div className="d-flex gap-3 align-items-center">
          <div className="avatar-item p">
            <Image
              className="avatar-img max-un"
              src={page_avatar_1}
              alt="avatar"
            />
          </div>
          <div className="text-area text-start">
            <h6 className="m-0 mb-1">Travel Moon</h6>
            <p className="mdtxt">Travel-30k Liked</p>
          </div>
        </div>
        <div className="btn-item d-center gap-3">
          <Link href="URL:void()" className="cmn-btn gap-1">
            Liked
          </Link>
          <Link href="URL:void()" className="cmn-btn third gap-1">
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
            avatar_3,
            avatar_2,
            avatar_4,
            avatar_5,
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

export default PageProfile;
