import pagesData from "@/data/pagesData";
import Link from "next/link";
import PageCard from "../cards/PageCard";
import HomeLeft from "../menu/HomeLeft";

const PagesMain = () => {
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
              <h6>Pages</h6>
            </div>
            <div className="top-area mb-5 d-center flex-wrap gap-3 justify-content-between">
              <ul className="nav flex-wrap gap-2 tab-area" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link d-center active"
                    id="liked-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#liked-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="liked-tab-pane"
                    aria-selected="true"
                  >
                    liked
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link d-center"
                    id="populer-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#populer-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="populer-tab-pane"
                    aria-selected="false"
                  >
                    popular
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link d-center"
                    id="suggested-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#suggested-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="suggested-tab-pane"
                    aria-selected="false"
                  >
                    suggested pages
                  </button>
                </li>
              </ul>
              <div className="btn-item">
                <Link href="/pages-create" className="cmn-btn gap-1">
                  <i className="material-symbols-outlined mat-icon"> add </i>
                  Create Pages
                </Link>
              </div>
            </div>
            <div className="tab-content pages-create">
              <div
                className="tab-pane fade show active"
                id="liked-tab-pane"
                role="tabpanel"
                aria-labelledby="liked-tab"
                tabIndex={0}
              >
                <div className="row cus-mar friend-request">
                  {pagesData.map((page) => (
                    <div key={page.id} className="col-xl-4 col-sm-6 col-8">
                      {/* Page Card */}
                      <PageCard page={page} />
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="populer-tab-pane"
                role="tabpanel"
                aria-labelledby="populer-tab"
                tabIndex={0}
              >
                <div className="row cus-mar friend-request">
                  {pagesData.map((page) => (
                    <div key={page.id} className="col-xl-4 col-sm-6 col-8">
                      {/* Page Card */}
                      <PageCard page={page} />
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="suggested-tab-pane"
                role="tabpanel"
                aria-labelledby="suggested-tab"
                tabIndex={0}
              >
                <div className="row cus-mar friend-request">
                  {pagesData.map((page) => (
                    <div key={page.id} className="col-xl-4 col-sm-6 col-8">
                      {/* Page Card */}
                      <PageCard page={page} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PagesMain;
