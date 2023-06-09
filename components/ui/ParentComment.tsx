import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import CommentAction from "./CommentAction";
import ReplayReaction from "./ReplayReaction";

interface CommentProps {
  id: number;
  commentText: string;
  authorName: string;
  authorAvt: StaticImageData;
  replies: {}[];
}

const ParentComment = ({ comment }: { comment: CommentProps }) => {
  const { authorAvt, authorName, commentText, replies } = comment;

  return (
    <div
      className={`${
        replies.length > 0 ? "parent-comment" : ""
      } d-flex gap-2 gap-sm-4`}
    >
      <div className="avatar-item d-center align-items-baseline">
        <Image className="avatar-img max-un" src={authorAvt} alt="avatar" />
      </div>
      <div className="info-item active">
        <div className="top-area px-4 py-3 d-flex gap-3 align-items-start justify-content-between">
          <div className="title-area">
            <h6 className="m-0 mb-3">
              <Link href="/public-profile/post">{authorName}</Link>
            </h6>
            <p className="mdtxt">{commentText}</p>
          </div>
          <div className="btn-group dropend cus-dropdown">
            {/* Comment Action */}
            <CommentAction />
          </div>
        </div>

        {/* Replay Reaction */}
        <ReplayReaction />
      </div>
    </div>
  );
};

export default ParentComment;
