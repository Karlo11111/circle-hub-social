import FollowersTab from "../groupDetails/FollowersTab";
import FollowingTab from "../groupDetails/FollowingTab";

const Connections = ({ clss = "col-xxl-8" }) => {
  return (
    <div className={clss}>
      <div className="single-box p-5">
        <ul className="nav flex-wrap gap-2 tab-area" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link d-center active"
              id="followers-tab"
              data-bs-toggle="tab"
              data-bs-target="#followers-tab-pane"
              type="button"
              role="tab"
              aria-controls="followers-tab-pane"
              aria-selected="true"
            >
              followers
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="following-tab"
              data-bs-toggle="tab"
              data-bs-target="#following-tab-pane"
              type="button"
              role="tab"
              aria-controls="following-tab-pane"
              aria-selected="false"
              tabIndex={0}
            >
              following
            </button>
          </li>
        </ul>
      </div>
      <div className="tab-content">
        <div
          className="tab-pane fade show active"
          id="followers-tab-pane"
          role="tabpanel"
          aria-labelledby="followers-tab"
          tabIndex={0}
        >
          {/* Followers Tab */}
          <FollowersTab />
        </div>
        <div
          className="tab-pane fade"
          id="following-tab-pane"
          role="tabpanel"
          aria-labelledby="following-tab"
          tabIndex={0}
        >
          {/* Following Tab */}
          <FollowingTab />
        </div>
      </div>
    </div>
  );
};

export default Connections;
