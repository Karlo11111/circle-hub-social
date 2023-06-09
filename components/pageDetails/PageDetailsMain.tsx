"use client";

import Image from "next/image";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import BioContent from "../common/BioContent";
import Connections from "../common/Connections";
import Gallery from "../common/Gallery";
import NewsFeeds from "../common/NewsFeeds";
import Vedios from "../common/Vedios";
import About from "../groupDetails/About";
import HomeLeft from "../menu/HomeLeft";
import Info from "./Info";
import PageProfile from "./PageProfile";
import post_img_5 from "/public/images/post-img-5.png";
import post_img_6 from "/public/images/post-img-6.png";

const PageDetailsMain = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <>
      {/* TODO: Video Modal  */}
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="muczNvx9fgg"
        onClose={() => setOpen(false)}
      />

      <main className="main-content">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4">
              {/* Home Left */}
              <HomeLeft clss="d-lg-none" />
            </div>
            <div className="col-xl-9 col-lg-8">
              <div className="banner-area pages-create mb-5">
                <div className="single-box p-5">
                  {/* Page Profile */}
                  <PageProfile />

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
                    <div className="col-xxl-8 col-xl-8 col-lg-12 d-flex flex-column gap-7">
                      {/* News Feeds */}
                      <NewsFeeds clss="p-3 p-sm-5" />
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-10 mt-5 mt-xl-0">
                      <div className="cus-scrollbar">
                        <div className="sidebar-wrapper d-flex al-item flex-wrap justify-content-end justify-content-xl-center flex-column flex-md-row flex-xl-column flex gap-6">
                          {/* Info */}
                          <Info />
                          {/* About */}
                          <About />

                          <div className="sidebar-area post-item p-5">
                            <div className="mb-3">
                              <h6 className="d-inline-flex">Photos</h6>
                            </div>
                            <div className="post-single-box">
                              <div className="post-img d-flex justify-content-between flex-wrap gap-2 gap-lg-3">
                                <div className="single d-grid gap-3">
                                  <Image src={post_img_6} alt="image" />
                                  <Image src={post_img_5} alt="image" />
                                </div>
                                <div className="single d-grid gap-3">
                                  <Image src={post_img_6} alt="image" />
                                  <Image src={post_img_5} alt="image" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
                    <div className="col-xxl-8 col-xl-7">
                      {/* Bio Content */}
                      <BioContent />
                    </div>

                    <div className="col-xxl-4 col-xl-5 col-lg-10 mt-5 mt-xl-0">
                      <div className="cus-scrollbar">
                        <div className="sidebar-wrapper d-flex al-item flex-wrap justify-content-end justify-content-xl-center flex-column flex-md-row flex-xl-column flex gap-6">
                          {/* Info */}
                          <Info />
                          {/* About */}
                          <About />
                        </div>
                      </div>
                    </div>
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
                    {/* Connections */}
                    <Connections />

                    <div className="col-xxl-4 col-xl-5 col-lg-10 mt-5 mt-xl-0">
                      <div className="cus-scrollbar">
                        <div className="sidebar-wrapper d-flex al-item flex-wrap justify-content-end justify-content-xl-center flex-column flex-md-row flex-xl-column flex gap-6">
                          {/* Info */}
                          <Info />
                          {/* About */}
                          <About />
                        </div>
                      </div>
                    </div>
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
                    {/* Gallery */}
                    <Gallery />

                    <div className="col-xxl-4 col-xl-5 col-lg-10 mt-5 mt-xl-0">
                      <div className="cus-scrollbar">
                        <div className="sidebar-wrapper d-flex al-item flex-wrap justify-content-end justify-content-xl-center flex-column flex-md-row flex-xl-column flex gap-6">
                          {/* Info */}
                          <Info />
                          {/* About */}
                          <About />
                        </div>
                      </div>
                    </div>
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
                    {/* Vedios */}
                    <Vedios setOpen={setOpen} />

                    <div className="col-xxl-4 col-xl-5 col-lg-10 mt-5 mt-xl-0">
                      <div className="cus-scrollbar">
                        <div className="sidebar-wrapper d-flex al-item flex-wrap justify-content-end justify-content-xl-center flex-column flex-md-row flex-xl-column flex gap-6">
                          {/* Info */}
                          <Info />
                          {/* About */}
                          <About />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default PageDetailsMain;
