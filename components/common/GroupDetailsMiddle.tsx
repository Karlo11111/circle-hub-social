import AboutTab from "../groupDetails/AboutTab";
import ConnectionsTab from "../groupDetails/ConnectionsTab";
import FeedTab from "../groupDetails/FeedTab";
import MediaTab from "../groupDetails/MediaTab";
import VideosTab from "../groupDetails/VideosTab";

const GroupDetailsMiddle = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <div className="banner-area pages-create mb-5">
        <div className="single-box p-5">
          {/* Group Head */}
          {children}

          <div className="page-details">
            <ul
              className="nav mt-5 pt-4 flex-wrap gap-2 tab-area"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link d-center active"
                  id="feed-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#feed-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="feed-tab-pane"
                  aria-selected="true"
                >
                  feed
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link d-center"
                  id="about-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#about-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="about-tab-pane"
                  aria-selected="false"
                >
                  about
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link d-center"
                  id="connections-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#connections-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="connections-tab-pane"
                  aria-selected="false"
                >
                  connections
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link d-center"
                  id="media-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#media-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="media-tab-pane"
                  aria-selected="false"
                >
                  media
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link d-center"
                  id="videos-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#videos-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="videos-tab-pane"
                  aria-selected="false"
                >
                  videos
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="tab-content">
        <div
          className="tab-pane fade show active"
          id="feed-tab-pane"
          role="tabpanel"
          aria-labelledby="feed-tab"
          tabIndex={0}
        >
          <div className="row">
            {/* Feed Tab */}
            <FeedTab />
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="about-tab-pane"
          role="tabpanel"
          aria-labelledby="about-tab"
          tabIndex={0}
        >
          <div className="row">
            {/* About Tab */}
            <AboutTab />
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="connections-tab-pane"
          role="tabpanel"
          aria-labelledby="connections-tab"
          tabIndex={0}
        >
          <div className="row">
            {/* Connections Tab */}
            <ConnectionsTab />
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="media-tab-pane"
          role="tabpanel"
          aria-labelledby="media-tab"
          tabIndex={0}
        >
          <div className="row">
            {/* Media Tab */}
            <MediaTab />
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="videos-tab-pane"
          role="tabpanel"
          aria-labelledby="videos-tab"
          tabIndex={0}
        >
          <div className="row">
            {/* Videos Tab */}
            <VideosTab />
          </div>
        </div>
      </div>
    </>
  );
};

export default GroupDetailsMiddle;
