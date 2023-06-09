import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import avatar_2 from "/public/images/avatar-2.png";
import avatar_3 from "/public/images/avatar-3.png";
import avatar_4 from "/public/images/avatar-4.png";

interface RequestProps {
  id: number;
  name: string;
  avt: StaticImageData;
  mutual?: number;
}

const HorizontalRequestCard = ({ data }: { data: RequestProps }) => {
  const { avt, mutual = 10, name } = data;
  return (
    <div className="single-single">
      <div className="profile-pic d-flex gap-3 align-items-center">
        <div className="avatar">
          <Image className="avatar-img max-un" src={avt} alt="avatar" />
        </div>
        <div className="text-area">
          <Link href="/public-profile/post">
            <h6 className="m-0">{name}</h6>
          </Link>
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
            </ul>
            <span className="mdtxt d-center">{mutual} mutual friends</span>
          </div>
        </div>
      </div>
      <div className="d-flex gap-3 mt-4">
        <button className="cmn-btn">Confirm</button>
        <button className="cmn-btn alt">Delete</button>
      </div>
    </div>
  );
};

export default HorizontalRequestCard;
