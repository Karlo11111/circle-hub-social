import Image from "next/image";
import avatar_2 from "/public/images/avatar-2.png";
import avatar_3 from "/public/images/avatar-3.png";
import avatar_4 from "/public/images/avatar-4.png";

const PostReaction = ({ reaction = "" }) => {
  return (
    <>
      <div
        className={`total-react-share ${reaction} pb-4 d-center gap-2 flex-wrap justify-content-between`}
      >
        <div className="friends-list d-flex gap-3 align-items-center text-center">
          <ul className="d-flex align-items-center justify-content-center">
            <li>
              <Image src={avatar_2} alt="image" />
            </li>
            <li>
              <Image src={avatar_3} alt="image" />
            </li>
            <li>
              <Image src={avatar_4} alt="image" />
            </li>
            <li>
              <span className="mdtxt d-center">8+</span>
            </li>
          </ul>
        </div>
        <div className="react-list d-flex flex-wrap gap-6 align-items-center text-center">
          <button className="mdtxt">4 Comments</button>
          <button className="mdtxt">1 Shares</button>
        </div>
      </div>
      <div className="like-comment-share py-5 d-center flex-wrap gap-3 gap-md-0 justify-content-between">
        <button className="d-center gap-1 gap-sm-2 mdtxt">
          <i className="material-symbols-outlined mat-icon"> favorite </i>
          Like
        </button>
        <button className="d-center gap-1 gap-sm-2 mdtxt">
          <i className="material-symbols-outlined mat-icon"> chat </i>
          Comment
        </button>
        <button className="d-center gap-1 gap-sm-2 mdtxt">
          <i className="material-symbols-outlined mat-icon"> share </i>
          Share
        </button>
      </div>
    </>
  );
};

export default PostReaction;
