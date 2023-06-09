import eventData from "@/data/eventData";
import Image from "next/image";
import Link from "next/link";
import EventCard from "../cards/EventCard";
import HomeLeft from "../menu/HomeLeft";
import ContactAction from "../ui/ContactAction";
import AboutTab from "./AboutTab";
import DiscussionTab from "./DiscussionTab";
import event_cover_img from "/public/images/event-cover-img.png";

const EventDetailsMain = () => {
  return (
    <main className="main-content">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-4">
            {/* Home Left */}
            <HomeLeft clss="d-lg-none" />
          </div>
          <div className="col-xl-9 col-lg-8">
            <div className="banner-area mb-5">
              <div className="single-box">
                <div className="avatar-box position-relative">
                  <Image
                    className="avatar-img w-100"
                    src={event_cover_img}
                    alt="image"
                  />
                  <div className="abs-area position-absolute top-0 p-3 p-lg-5 p-xl-10">
                    <span className="date-area mdtxt">2 DEC 2022</span>
                  </div>
                  <div className="abs-area position-absolute bottom-0 p-3 p-lg-5 p-xl-10 pb-3 pb-lg-5 pb-xl-8">
                    <h4>Martio Music Event I Biggest Music Festival</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="details-area p-5 mb-5">
              <div className="top-area pb-6 mb-6 d-center flex-wrap gap-3 justify-content-between">
                <ul className="nav flex-wrap gap-2 tab-area" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link d-center active"
                      id="about-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#about-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="about-tab-pane"
                      aria-selected="true"
                    >
                      about
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link d-center"
                      id="discussion-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#discussion-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="discussion-tab-pane"
                      aria-selected="false"
                    >
                      discussion
                    </button>
                  </li>
                </ul>
                <div className="btn-item d-center flex-wrap gap-3">
                  <Link href="#" className="cmn-btn d-center third gap-1">
                    <i className="material-symbols-outlined mat-icon fs-xl">
                      grade
                    </i>
                    Interested
                  </Link>
                  <Link href="#" className="cmn-btn third gap-1">
                    <i className="material-symbols-outlined mat-icon fs-xl">
                      add_box
                    </i>
                    Invite
                  </Link>
                  <Link href="#" className="cmn-btn third gap-1">
                    <i className="material-symbols-outlined mat-icon fs-xl">
                      google_plus_reshare
                    </i>
                    Share
                  </Link>
                  {/* Contact Action */}
                  <ContactAction
                    actionList={[
                      ["Unfollow", "person_remove"],
                      ["Hide", "hide_source"],
                    ]}
                  />
                </div>
              </div>
              <div className="tab-content">
                <div
                  className="tab-pane fade show active"
                  id="about-tab-pane"
                  role="tabpanel"
                  aria-labelledby="about-tab"
                  tabIndex={0}
                >
                  {/* About Tab */}
                  <AboutTab />
                </div>
                <div
                  className="tab-pane fade"
                  id="discussion-tab-pane"
                  role="tabpanel"
                  aria-labelledby="discussion-tab"
                  tabIndex={0}
                >
                  {/* Discussion Tab */}
                  <DiscussionTab />
                </div>
              </div>
            </div>
            <div className="row cus-mar friend-request">
              {eventData.slice(0, 3).map((itm) => (
                <div key={itm.id} className="col-xl-4 col-sm-6 col-8">
                  {/* Event Card  */}
                  <EventCard data={itm} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default EventDetailsMain;
