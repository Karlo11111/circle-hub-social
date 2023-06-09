import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import avatar_2 from "/public/images/avatar-2.png";
import avatar_3 from "/public/images/avatar-3.png";
import avatar_4 from "/public/images/avatar-4.png";

interface RequestProps {
  id: number;
  name: string;
  avt: StaticImageData;
  mutual: number;
}

const VerticalRequestCard = ({
  data,
  reqType,
}: {
  data: RequestProps;
  reqType: string;
}) => {
  const { avt, id, name, mutual } = data;
  return (
    <div className="single-box p-5">
      <div className="avatar">
        <Image className="avatar-img w-100" src={avt} alt="avatar" />
      </div>
      <Link href="/public-profile/post">
        <h6 className="m-0 mb-2 mt-3">{name}</h6>
      </Link>
      <div className="friends-list d-center gap-1 text-center">
        <ul className="d-center">
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
        <span className="smtxt m-0">{mutual} mutual friends</span>
      </div>
      <div className="d-center gap-2 mt-4">
        <button className="cmn-btn">{reqType}</button>
        <button className="cmn-btn alt">Delete</button>
      </div>
    </div>
  );
};

export default VerticalRequestCard;
