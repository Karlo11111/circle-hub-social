import MakePost from "../common/MakePost";
import NewsFeeds from "../common/NewsFeeds";
import About from "./About";

const FeedTab = () => {
  return (
    <>
      <div className="col-xxl-8 col-xl-8 col-lg-12 d-flex flex-column gap-7">
        {/* Make Post */}
        <MakePost />

        {/* News Feeds */}
        <NewsFeeds clss="p-3 p-sm-5" />
      </div>
      <div className="col-xxl-4 col-xl-4 col-lg-10 mt-5 mt-xl-0">
        {/* About */}
        <About />
      </div>
    </>
  );
};

export default FeedTab;
