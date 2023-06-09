import postData from "@/data/postData";
import ParentComment from "../ui/ParentComment";
import Post from "../ui/Post";
import PostReaction from "../ui/PostReaction";
import SiblingComment from "../ui/SiblingComment";
import WriteComment from "../ui/WriteComment";

const NewsFeeds = ({ clss = "", reaction = "" }) => {
  return (
    <div className="post-item d-flex flex-column gap-5 gap-md-7" id="news-feed">
      {postData.map((post) => (
        <div key={post.id} className={`post-single-box ${clss}`}>
          {/* Post */}
          <Post post={post} />

          {/* Post Reaction */}
          <PostReaction reaction={reaction} />

          {/* Write Comment */}
          <WriteComment />

          {post.comments
            ? post?.comments.map((comment) => (
                <div key={comment.id} className="comments-area mt-5">
                  <div className="single-comment-area ms-1 ms-xxl-15">
                    {/* Parent Comment */}
                    <ParentComment comment={comment} />

                    {/* Sibling Comment */}
                    {comment?.replies.map((reply, i, arr) => (
                      <SiblingComment
                        key={reply.id}
                        clss={
                          arr.length - 1 === i
                            ? "single-comment-area"
                            : "sibling-comment"
                        }
                        reply={reply}
                      />
                    ))}
                  </div>
                </div>
              ))
            : ""}
        </div>
      ))}
    </div>
  );
};

export default NewsFeeds;
