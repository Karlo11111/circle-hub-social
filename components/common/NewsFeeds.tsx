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

          {/* Post Reaction  <PostReaction reaction={reaction} /> */}
          

          {/* Write Comment  <WriteComment />  */}
          

          
        </div>
      ))}
    </div>
  );
};

export default NewsFeeds;
