import VerticalRequestCard from "../cards/VerticalRequestCard";
import FriendLeftMenu from "../menu/FriendLeftMenu";
import suggestion_img_1 from "/public/images/suggestion-img-1.png";
import suggestion_img_10 from "/public/images/suggestion-img-10.png";
import suggestion_img_11 from "/public/images/suggestion-img-11.png";
import suggestion_img_12 from "/public/images/suggestion-img-12.png";
import suggestion_img_2 from "/public/images/suggestion-img-2.png";
import suggestion_img_3 from "/public/images/suggestion-img-3.png";
import suggestion_img_4 from "/public/images/suggestion-img-4.png";
import suggestion_img_5 from "/public/images/suggestion-img-5.png";
import suggestion_img_6 from "/public/images/suggestion-img-6.png";
import suggestion_img_7 from "/public/images/suggestion-img-7.png";
import suggestion_img_8 from "/public/images/suggestion-img-8.png";
import suggestion_img_9 from "/public/images/suggestion-img-9.png";

const SuggestionUserData = [
  {
    id: 1,
    name: "Marvin McKinney",
    avt: suggestion_img_1,
    mutual: 10,
  },
  {
    id: 2,
    name: "Darlene Robertson",
    avt: suggestion_img_2,
    mutual: 10,
  },
  {
    id: 3,
    name: "Jerome Bell",
    avt: suggestion_img_3,
    mutual: 10,
  },
  {
    id: 4,
    name: "Cameron Williamson",
    avt: suggestion_img_4,
    mutual: 10,
  },
  {
    id: 5,
    name: "Courtney Henry",
    avt: suggestion_img_5,
    mutual: 10,
  },
  {
    id: 6,
    name: "Ralph Edwards",
    avt: suggestion_img_6,
    mutual: 10,
  },
  {
    id: 7,
    name: "Robert Fox",
    avt: suggestion_img_7,
    mutual: 10,
  },
  {
    id: 8,
    name: "Cody Fisher",
    avt: suggestion_img_8,
    mutual: 10,
  },
  {
    id: 9,
    name: "Ronald Richards",
    avt: suggestion_img_9,
    mutual: 10,
  },
  {
    id: 10,
    name: "Brooklyn Simmons",
    avt: suggestion_img_10,
    mutual: 10,
  },
  {
    id: 11,
    name: "Devon Lane",
    avt: suggestion_img_11,
    mutual: 10,
  },
  {
    id: 12,
    name: "Jenny Wilson",
    avt: suggestion_img_12,
    mutual: 10,
  },
];

const SuggestionsMain = () => {
  return (
    <main className="main-content">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-4">
            {/* Friend Left Menu */}
            <FriendLeftMenu />
          </div>
          <div className="col-xl-9 col-lg-8">
            <div className="row cus-mar friend-request">
              {SuggestionUserData.map((user) => (
                <div key={user.id} className="col-xl-4 col-sm-6 col-8">
                  {/* Friend Suggestion Card */}
                  <VerticalRequestCard data={user} reqType="Request" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SuggestionsMain;
