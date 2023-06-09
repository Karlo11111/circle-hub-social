import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import ContactAction from "../ui/ContactAction";
import avatar_2 from "/public/images/avatar-2.png";
import avatar_3 from "/public/images/avatar-3.png";
import avatar_4 from "/public/images/avatar-4.png";

interface PageProps {
  id: number;
  page_name: string;
  page_banner: StaticImageData;
  author: string;
  author_avt: StaticImageData;
  page_likes: number;
}

const PageCard = ({ page }: { page: PageProps }) => {
  const { author, author_avt, id, page_banner, page_likes, page_name } = page;

  return (
    <div className="single-box p-5">
      <div className="avatar-area">
        <Image className="avatar-img w-100" src={page_banner} alt="avatar" />
      </div>
      <div className="head-area my-5 d-flex justify-content-between">
        <div className="d-flex gap-3 align-items-center">
          <div className="avatar-item">
            <Image
              className="avatar-img max-un"
              src={author_avt}
              alt="avatar"
            />
          </div>
          <div className="text-area text-start">
            <h6 className="m-0 mb-1">
              <Link href={`/pages/${id}`}>{page_name}</Link>
            </h6>
            <p className="mdtxt">{author}</p>
          </div>
        </div>

        {/* Contact Action */}
        <ContactAction
          actionList={[
            ["Unfollow", "person_remove"],
            ["Hide", "hide_source"],
          ]}
        />
      </div>
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
        <span className="smtxt d-center">{page_likes}k Likes</span>
      </div>
      <div className="btn-area mt-4">
        <button className="cmn-btn justify-content-center gap-1 w-100">
          <i className="material-symbols-outlined mat-icon">thumb_up</i>
          Liked
        </button>
      </div>
    </div>
  );
};

export default PageCard;
