import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import CommentAction from "./CommentAction";
import ReplayReaction from "./ReplayReaction";

interface ReplayProps {
  id: number;
  replyText: string;
  authorName: string;
  authorAvt: StaticImageData;
}

const SiblingComment = ({
  reply,
  clss = "sibling-comment",
}: {
  reply: ReplayProps;
  clss: string;
}) => {
  const { authorAvt, authorName, replyText } = reply;

  return (
    <div
      className={`${clss} comment-item-nested single-comment-area mt-4 mt-sm-7 ms-13 ms-sm-15`}
    >
      <div className="d-flex gap-2 gap-sm-4 align-items-baseline">
        <div className="avatar-item">
          <Image className="avatar-img max-un" src={authorAvt} alt="avatar" />
        </div>
        <div className="info-item">
          <div className="top-area px-4 py-3 d-flex gap-3 align-items-start justify-content-between">
            <div className="title-area">
              <h6 className="m-0 mb-3">
                <Link href="/public-profile/post">{authorName}</Link>
              </h6>
              <p className="mdtxt">{replyText}</p>
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
    </div>
  );
};

export default SiblingComment;
