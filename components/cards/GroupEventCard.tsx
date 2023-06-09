import Image from "next/image";
import Link from "next/link";
import ContactAction from "../ui/ContactAction";
import avatar_6 from "/public/images/avatar-6.png";
import save_post_avatar_6 from "/public/images/save-post-avatar-6.png";

const GroupEventCard = () => {
  return (
    <div className="single-box filter-single-box text-start p-5 p-md-3 d-grid d-xl-flex align-items-center gap-4">
      <div className="avatar-area">
        <Link href="#">
          <Image src={save_post_avatar_6} className="max-un" alt="icon" />
        </Link>
      </div>
      <div className="title-area">
        <Link href="/event/1">
          <h5>
            Integer condimentum scelerisque rhoncus. Integer sit amet rutrum
            libero. Donec ultrices urna vitae diam gravida...
          </h5>
        </Link>
        <div className="inside-profile pt-3 pb-4">
          <div className="avatar-area d-flex align-items-center gap-3">
            <Link href="#">
              <Image src={avatar_6} className="max-un" alt="icon" />
            </Link>
            <p className="mdtxt">
              Saved from Atikur Rahman&#39;s post in UI/UX DESIGN COMMUNITY
            </p>
          </div>
        </div>
        <div className="btn-item d-flex gap-3 event">
          <Link href="#" className="cmn-btn third gap-1">
            <i className="material-symbols-outlined mat-icon fs-xl">
              google_plus_reshare
            </i>
            Share
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
    </div>
  );
};

export default GroupEventCard;
