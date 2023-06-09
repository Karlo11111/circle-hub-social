import GroupPostCard from "../cards/GroupPostCard";
import avatar_1 from "/public/images/avatar-1.png";
import avatar_3 from "/public/images/avatar-3.png";
import post_img_13 from "/public/images/post-img-13.png";

const groupPostData = [
  {
    id: 1,
    author_name: "Alen Lio",
    author_img: avatar_3,
    post_text: `I created Roughly plugin to sketch crafted hand-drawn elements which can be used to any usage (diagrams/flows/decoration/etc)`,
    post_img: post_img_13,
  },
  {
    id: 2,
    author_name: "Lori Cortez",
    author_img: avatar_1,
    post_text: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.`,
    post_img: "",
  },
];

const GroupPosts = () => {
  return (
    <>
      {groupPostData.map((post) => (
        <GroupPostCard key={post.id} post={post} />
      ))}
    </>
  );
};

export default GroupPosts;
