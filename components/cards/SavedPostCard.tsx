import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import ContactAction from "../ui/ContactAction";

interface PostProps {
  id: number;
  post_text: string;
  img: StaticImageData;
  author: string;
  author_avt: StaticImageData;
  category: string;
}

const SavedPostCard = ({ post }: { post: PostProps }) => {
  const { author, author_avt, category, id, img, post_text } = post;

  return (
    <>
      <div className="avatar-area">
        <Link href={`/saved-post/${id}`}>
          <Image src={img} className="max-un" alt="icon" />
        </Link>
      </div>
      <div className="title-area">
        <h5>
          <Link href={`/saved-post/${id}`}>{post_text}</Link>
        </h5>
        <div className="inside-profile pt-3 pb-4">
          <div className="avatar-area d-flex align-items-center gap-3">
            <Link href={`/saved-post/${id}`}>
              <Image src={author_avt} className="max-un" alt="icon" />
            </Link>
            <p className="mdtxt">
              Saved from {author} post in {category} COMMUNITY
            </p>
          </div>
        </div>
        <div className="btn-item d-flex gap-3 post-action">
          <Link href="#" className="cmn-btn">
            Collection
          </Link>
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
    </>
  );
};

export default SavedPostCard;
