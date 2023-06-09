import FriendRequestCard from "../cards/FriendRequestCard";
import all_friend_img_1 from "/public/images/all-friend-img-1.png";
import all_friend_img_10 from "/public/images/all-friend-img-10.png";
import all_friend_img_11 from "/public/images/all-friend-img-11.png";
import all_friend_img_12 from "/public/images/all-friend-img-12.png";
import all_friend_img_13 from "/public/images/all-friend-img-13.png";
import all_friend_img_14 from "/public/images/all-friend-img-14.png";
import all_friend_img_15 from "/public/images/all-friend-img-15.png";
import all_friend_img_16 from "/public/images/all-friend-img-16.png";
import all_friend_img_2 from "/public/images/all-friend-img-2.png";
import all_friend_img_3 from "/public/images/all-friend-img-3.png";
import all_friend_img_4 from "/public/images/all-friend-img-4.png";
import all_friend_img_5 from "/public/images/all-friend-img-5.png";
import all_friend_img_6 from "/public/images/all-friend-img-6.png";
import all_friend_img_7 from "/public/images/all-friend-img-7.png";
import all_friend_img_8 from "/public/images/all-friend-img-8.png";
import all_friend_img_9 from "/public/images/all-friend-img-9.png";

const frientData = [
  {
    id: 1,
    img: all_friend_img_1,
    name: "Guy Hawkins",
  },
  {
    id: 2,
    img: all_friend_img_2,
    name: "Jerome Bell",
  },
  {
    id: 3,
    img: all_friend_img_3,
    name: "Arlene McCoy",
  },
  {
    id: 4,
    img: all_friend_img_4,
    name: "Darlene Robertson",
  },
  {
    id: 5,
    img: all_friend_img_5,
    name: "Bessie Cooper",
  },
  {
    id: 6,
    img: all_friend_img_6,
    name: "Courtney Henry",
  },
  {
    id: 7,
    img: all_friend_img_7,
    name: "Cody Fisher",
  },
  {
    id: 8,
    img: all_friend_img_8,
    name: "Ronald Richards",
  },
  {
    id: 9,
    img: all_friend_img_9,
    name: "Kristin Watson",
  },
  {
    id: 10,
    img: all_friend_img_10,
    name: "Darrell Steward",
  },
  {
    id: 11,
    img: all_friend_img_11,
    name: "Annette Black",
  },
  {
    id: 12,
    img: all_friend_img_12,
    name: "Devon Lane",
  },
  {
    id: 13,
    img: all_friend_img_13,
    name: "Kathryn Murphy",
  },
  {
    id: 14,
    img: all_friend_img_14,
    name: "Ralph Edwards",
  },
  {
    id: 15,
    img: all_friend_img_15,
    name: "Eleanor Pena",
  },
  {
    id: 16,
    img: all_friend_img_16,
    name: "Esther Howard",
  },
];

const Friends = () => {
  return (
    <div className="row cus-mar friend-request">
      {frientData.map((friend) => (
        <div key={friend.id} className="col-xxl-3 col-md-5 col-sm-6 col-8">
          {/* Friend Request Card */}
          <FriendRequestCard friend={friend} />
        </div>
      ))}
    </div>
  );
};

export default Friends;
