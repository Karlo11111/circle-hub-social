import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import PostAction from "../ui/PostAction";

interface GroupPostProps {
  id: number;
  author_name: string;
  author_img: StaticImageData;
  post_text: string;
  post_img: StaticImageData | string;
}

const GroupPostCard = ({ post }: { post: GroupPostProps }) => {
  const { author_img, author_name, id, post_img, post_text } = post;

  return (
    <div className="post-single-box p-3 p-sm-5">
      <div className="top-area pb-5">
        <div className="profile-area d-center justify-content-between">
          <div className="avatar-item d-flex gap-3 align-items-center">
            <div className="avatar-area position-relative">
              <Image
                className="avatar-img max-un"
                src={author_img}
                alt="avatar"
              />
            </div>
            <div className="info-area">
              <h6 className="m-0">
                <Link href="/public-profile/post">{author_name}</Link>
              </h6>
              <span className="mdtxt status">Active</span>
            </div>
          </div>
          <div className="btn-group cus-dropdown">
            {/* Post Action */}
            <PostAction />
          </div>
        </div>
        <div className="py-4">
          <p className="description">{post_text}</p>
        </div>
        <div className="post-img">
          {post_img ? (
            <Image src={post_img} className="w-100" alt="image" />
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="btn-right d-flex gap-2">
        <button className="cmn-btn justify-content-center w-100">
          Approve
        </button>
        <button className="cmn-btn justify-content-center w-100 alt second">
          Decline
        </button>
      </div>
    </div>
  );
};

export default GroupPostCard;
