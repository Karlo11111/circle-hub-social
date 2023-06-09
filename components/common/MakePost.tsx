import Image from "next/image";
import Link from "next/link";
import add_post_avatar from "/public/images/add-post-avatar.png";
import emoji_laughing from "/public/images/icon/emoji-laughing.png";
import live_video from "/public/images/icon/live-video.png";
import vgallery from "/public/images/icon/vgallery.png";

const MakePost = () => {
  return (
    <div className="share-post d-flex gap-3 gap-sm-5 p-3 p-sm-5">
      <div className="profile-box">
        <Link href="#">
          <Image src={add_post_avatar} className="max-un" alt="icon" />
        </Link>
      </div>
      <form action="#" className="w-100 position-relative">
        <textarea
          cols={10}
          rows={2}
          placeholder="Write something to Lerio.."
        ></textarea>
        <div className="abs-area position-absolute d-none d-sm-block">
          <i className="material-symbols-outlined mat-icon xxltxt">
            sentiment_satisfied
          </i>
        </div>
        <ul className="d-flex justify-content-between flex-wrap mt-3 gap-3">
          <li
            className="d-flex align-items-center gap-2"
            data-bs-toggle="modal"
            data-bs-target="#goLiveMod"
          >
            <Image src={live_video} className="max-un" alt="icon" />
            <span>Live</span>
          </li>
          <li
            className="d-flex align-items-center gap-2"
            data-bs-toggle="modal"
            data-bs-target="#photoVideoMod"
          >
            <Image src={vgallery} className="max-un" alt="icon" />
            <span>Photo/Video</span>
          </li>
          <li
            className="d-flex align-items-center gap-2"
            data-bs-toggle="modal"
            data-bs-target="#activityMod"
          >
            <Image src={emoji_laughing} className="max-un" alt="icon" />
            <span>Fallings/Activity</span>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default MakePost;
