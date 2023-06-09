import Link from "next/link";
import HomeLeft from "../menu/HomeLeft";
import MostMemberTab from "./MostMemberTab";
import PopularTab from "./PopularTab";
import SuggestedGroupTab from "./SuggestedGroupTab";

const GroupMain = () => {
  return (
    <main className="main-content">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-4">
            {/* Home Left */}
            <HomeLeft clss="d-lg-none" />
          </div>
          <div className="col-xl-9 col-lg-8">
            <div className="head-area mb-5">
              <h6>Group</h6>
            </div>
            <div className="popular-area mb-5 d-center flex-wrap gap-3 justify-content-between">
              <ul className="nav flex-wrap gap-2 tab-area" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link d-center active"
                    id="popular-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#popular-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="popular-tab-pane"
                    aria-selected="true"
                  >
                    popular
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link d-center"
                    id="most-member-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#most-member-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="most-member-tab-pane"
                    aria-selected="false"
                  >
                    most-member
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link d-center"
                    id="suggested-group-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#suggested-group-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="suggested-group-tab-pane"
                    aria-selected="false"
                  >
                    suggested-group
                  </button>
                </li>
              </ul>
              <div className="btn-item">
                <Link href="#" className="cmn-btn gap-1">
                  <i className="material-symbols-outlined mat-icon"> add </i>
                  Create Group
                </Link>
              </div>
            </div>
            <div className="tab-content">
              <div
                className="tab-pane fade show active"
                id="popular-tab-pane"
                role="tabpanel"
                aria-labelledby="popular-tab"
                tabIndex={0}
              >
                {/* Popular Tab */}
                <PopularTab />
              </div>
              <div
                className="tab-pane fade"
                id="most-member-tab-pane"
                role="tabpanel"
                aria-labelledby="most-member-tab"
                tabIndex={0}
              >
                {/* Most Member Tab */}
                <MostMemberTab />
              </div>
              <div
                className="tab-pane fade"
                id="suggested-group-tab-pane"
                role="tabpanel"
                aria-labelledby="suggested-group-tab"
                tabIndex={0}
              >
                {/* Suggested Group Tab */}
                <SuggestedGroupTab />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default GroupMain;
