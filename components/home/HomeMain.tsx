import MakePost from "../common/MakePost";
import NewsFeeds from "../common/NewsFeeds";
import HomeLeft from "../menu/HomeLeft";
import StorySlider from "../sliders/StorySlider";
import RightSide from "./RightSide";

const HomeMain = () => {
  return (
    <>
      <main className="main-content">
        <div className="container sidebar-toggler">
          <div className="row">
            <div className="col-xxl-3 col-xl-3 col-lg-4 col-6 cus-z2">
              {/* Home Left */}
              <HomeLeft clss="d-lg-none" />
            </div>
            <div className="col-xxl-6 col-xl-5 col-lg-8 mt-0 mt-lg-10 mt-xl-0 d-flex flex-column gap-7 cus-z">
              {/* Story Slider */}
              <StorySlider />

              {/* Make Post */}
              <MakePost />

              {/* Feeds */}
              <NewsFeeds clss="p-3 p-sm-5" />
            </div>
            <div className="col-xxl-3 col-xl-4 col-lg-4 col-6 mt-5 mt-xl-0">
              {/* Home Right */}
              <RightSide />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default HomeMain;
