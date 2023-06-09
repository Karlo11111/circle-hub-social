import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface MemberRequestProps {
  id: number;
  author_name: string;
  author_img: StaticImageData;
  number_friends: number;
  joined: number;
}

const MemberRequestCard = ({ data }: { data: MemberRequestProps }) => {
  const { author_img, author_name, id, joined, number_friends } = data;

  return (
    <>
      <div className="profile-item d-flex gap-3">
        <div className="avatar position-relative">
          <Image className="avatar-img max-un" src={author_img} alt="avatar" />
        </div>
        <div className="text-area text-start">
          <h6 className="m-0 mb-1">
            <Link href="/public-profile/post">{author_name}</Link>
          </h6>
          <p className="mdtxt">Member-Requested 8 min ago</p>
          <ul className="d-grid gap-2 mt-5">
            <li className="d-flex align-items-center gap-2">
              <i className="material-symbols-outlined mat-icon">group</i>
              <span className="mdtxt">{number_friends} Member Friend</span>
            </li>
            <li className="d-flex align-items-center gap-2">
              <i className="material-symbols-outlined mat-icon">schedule</i>
              <span className="mdtxt">Circlehub Joined {joined} years ago</span>
            </li>
            <li className="d-flex align-items-center gap-2">
              <i className="material-symbols-outlined mat-icon">language</i>
              <span className="mdtxt">{number_friends} Member Friend</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="btn-right d-flex gap-2">
        <button className="cmn-btn">Approve</button>
        <button className="cmn-btn alt second">Decline</button>
      </div>
    </>
  );
};

export default MemberRequestCard;
