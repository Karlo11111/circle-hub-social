import avatar_1 from "/public/images/avatar-1.png";
import avatar_3 from "/public/images/avatar-3.png";
import avatar_4 from "/public/images/avatar-4.png";
import avatar_5 from "/public/images/avatar-5.png";
import avatar_7 from "/public/images/avatar-7.png";
import post_img_1 from "/public/images/post-img-1.png";
import post_img_2 from "/public/images/post-img-2.png";
import post_img_3 from "/public/images/post-img-3.png";
import post_img_4 from "/public/images/post-img-4.png";

const postData = [
  {
    id: 1,
    postText: `I created Roughly plugin to sketch crafted hand-drawn elements
      which can be used to any usage (diagrams/flows/decoration/etc)`,
    hashTags: [],
    imgs: [post_img_1],
    authorName: "Lori Cortez",
    authorAvt: avatar_1,
    comments: [],
  },
  {
    id: 2,
    postText: `I created Roughly plugin to sketch crafted hand-drawn elements
      which can be used to any usage (diagrams/flows/decoration/etc)`,
    hashTags: [],
    imgs: [post_img_2, post_img_3, post_img_4],
    authorName: "Lori Cortez",
    authorAvt: avatar_1,
    comments: [
      {
        id: 1,
        commentText:
          "The only way to solve the problem is to code for the hardware directly",
        authorName: "Lori Cortez",
        authorAvt: avatar_3,
        replies: [
          {
            id: 1,
            replyText: "The only way to solve the",
            authorName: "Alexa",
            authorAvt: avatar_4,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    postText:
      "Nam ornare a nibh id sagittis. Vestibulum nec molestie urna, eget convallis mi. Vestibulum rhoncus ligula eget sem sollicitudin interdum. Aliquam massa lectus, fringilla non diam ut, laoreet convallis risus. Curabitur at metus imperdiet, pellentesque ligula vel,",
    hashTags: [],
    imgs: [],
    authorName: "Loprayos",
    authorAvt: avatar_5,
    comments: [
      {
        id: 1,
        commentText:
          "The only way to solve the problem is to code for the hardware directly",
        authorName: "Lori Cortez",
        authorAvt: avatar_3,
        replies: [
          {
            id: 1,
            replyText: "The only way to solve the",
            authorName: "Alexa",
            authorAvt: avatar_4,
          },
          {
            id: 2,
            replyText: "The only way to solve the",
            authorName: "Haplika",
            authorAvt: avatar_7,
          },
        ],
      },
      {
        id: 2,
        commentText:
          "The only way to solve the problem is to code for the hardware directly",
        authorName: "Marlio",
        authorAvt: avatar_3,
        replies: [],
      },
    ],
  },
];

export default postData;
