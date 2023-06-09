import MakePost from "../common/MakePost";
import NewsFeeds from "../common/NewsFeeds";
import HomeLeft from "../menu/HomeLeft";
import StorySlider from "../sliders/StorySlider";
import RightSide from "./RightSide";

const HomeTwoMain = () => {
  return (
    <>
      <main className="main-content sidebar-content">
        <div className="container-fluid">
          <div className="row justify-content-between">
            <div className="col-xxl-3 col-xl-3 col-lg-4 col-6 cus-z2">
              {/* Home Left */}
              <HomeLeft />
            </div>
            <div className="col-xxl-5 col-xl-6 col-lg-8 d-flex flex-column gap-7 mt-0 mt-lg-12 mt-xl-0">
              {/* Story Slider */}
              <StorySlider />

              {/* Make Post */}
              <MakePost />

              {/* Feeds */}
              <NewsFeeds clss="p-3 p-sm-5" />
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-4 col-6 mt-5 mt-xl-0">
              <div className="cus-scrollbar cus-overflow sidebar-head">
                {/* Home Right */}
                <RightSide />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default HomeTwoMain;
