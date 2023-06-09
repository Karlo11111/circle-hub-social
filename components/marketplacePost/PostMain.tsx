import Contact from "../common/Contact";
import NewsFeeds from "../common/NewsFeeds";
import About from "./About";
import Photos from "./Photos";

const PostMain = () => {
  return (
    <>
      <div className="col-xxl-3 col-xl-3 col-lg-4 col-6 cus-z2">
        {/* About */}
        <About />
      </div>

      <div className="col-xxl-6 col-xl-5 col-lg-8 mt-0 mt-lg-10 mt-xl-0 d-flex flex-column gap-7 cus-z">
        {/* News Feeds */}
        <NewsFeeds clss="p-3 p-sm-5" />
      </div>

      <div className="col-xxl-3 col-xl-4 col-lg-4 col-6 mt-5 mt-xl-0">
        <div className="cus-overflow cus-scrollbar sidebar-head">
          <div className="d-flex justify-content-end">
            <div className="d-block d-xl-none me-4">
              <button className="button toggler-btn mb-4 mb-lg-0 d-flex align-items-center gap-2">
                <span>My List</span>
                <i className="material-symbols-outlined mat-icon"> tune </i>
              </button>
            </div>
          </div>
          <div className="cus-scrollbar side-wrapper">
            <div className="sidebar-wrapper d-flex flex-column gap-6 max-width">
              <div className="sidebar-area post-item p-5">
                {/* Photos */}
                <Photos />
              </div>
              <div className="sidebar-area p-5">
                {/* Contact */}
                <Contact>
                  <div className="mb-4">
                    <h6 className="d-inline-flex">Contact</h6>
                  </div>
                </Contact>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostMain;
