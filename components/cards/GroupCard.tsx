import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import ContactAction from "../ui/ContactAction";
import avatar_2 from "/public/images/avatar-2.png";
import avatar_3 from "/public/images/avatar-3.png";
import avatar_4 from "/public/images/avatar-4.png";

interface GroupProps {
  id: number;
  name: string;
  banner_img: StaticImageData;
  avt: StaticImageData;
}

const GroupCard = ({ data }: { data: GroupProps }) => {
  const { avt, banner_img, name, id } = data;

  return (
    <div className="single-box p-5">
      <div className="avatar-box position-relative">
        <Image className="avatar-img w-100" src={banner_img} alt="avatar" />
        <div className="abs-area w-100 position-absolute top-0 p-3 d-center justify-content-end">
          {/* Contact Action */}
          <ContactAction
            actionList={[
              ["Unfollow", "person_remove"],
              ["Hide", "hide_source"],
            ]}
          />
        </div>
      </div>
      <div className="abs-avatar-item">
        <Image className="avatar-img max-un" src={avt} alt="avatar" />
      </div>
      <Link href={`/groups/${id}`}>
        <h6 className="m-0 mb-2 mt-3">{name}</h6>
      </Link>
      <p className="smtxt public-group">Public Group</p>
      <div className="friends-list d-center mt-3 gap-1 text-center">
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
        <span className="smtxt m-0">30k Member</span>
      </div>
      <div className="d-center btn-border pt-5 gap-2 mt-4">
        <button className="cmn-btn fourth">Joined</button>
        <button className="cmn-btn alt third">Invite</button>
      </div>
    </div>
  );
};

export default GroupCard;
