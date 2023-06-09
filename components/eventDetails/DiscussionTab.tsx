import NewsFeeds from "../common/NewsFeeds";

const DiscussionTab = () => {
  return (
    <div className="post-item d-flex flex-column gap-5 gap-md-7" id="news-feed">
      {/* News Feeds */}
      <NewsFeeds reaction="pt-4" />
    </div>
  );
};

export default DiscussionTab;
