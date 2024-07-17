import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import PostAction from "./PostAction";
import avatar_1 from "/public/images/avatar-12.png";

interface PostProps {
  postText: string;
  hashTags?: string[];
  imgs: StaticImageData[];
  authorName: string;
  authorAvt: StaticImageData;
}

const Post = ({ post }: { post: PostProps }) => {
  const { postText, authorAvt, authorName, hashTags, imgs } = post;

  return (
    <div className="top-area pb-5">
      <div className="profile-area d-center justify-content-between">
        <div className="avatar-item d-flex gap-3 align-items-center">
          
          <div className="info-area">
            <h6 className="m-0">
              <Link href="/public-profile/post">{authorName}</Link>
            </h6>
            <span className="mdtxt status">Companies and people you pinged recently.</span>
          </div>
        </div>
        
      </div>
      <div className="py-4">
        <p className="description">{postText || ""}</p>
        <p className="hastag d-flex gap-2">
          {hashTags?.map((itm) => (
            <Link key={itm} href="#">
              #{itm}
            </Link>
          ))}
        </p>
      </div>
    </div>
  );
};

export default Post;
