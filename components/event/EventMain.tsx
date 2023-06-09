import eventData from "@/data/eventData";
import Link from "next/link";
import EventCard from "../cards/EventCard";
import HomeLeft from "../menu/HomeLeft";

const EventMain = () => {
  return (
    <main className="main-content">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-4">
            {/* Home Left */}
            <HomeLeft clss="d-lg-none" />
          </div>
          <div className="col-xl-9 col-lg-8">
            <div className="head-area mb-4 mb-lg-5 mt-5 mt-lg-0">
              <h6>Discover Events</h6>
            </div>
            <div className="top-area mb-5 d-center flex-wrap gap-3 justify-content-between">
              <ul className="nav flex-wrap gap-2 tab-area" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link d-center active"
                    id="top-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#top-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="top-tab-pane"
                    aria-selected="true"
                  >
                    top
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link d-center"
                    id="local-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#local-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="local-tab-pane"
                    aria-selected="false"
                  >
                    local
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link d-center"
                    id="online-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#online-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="online-tab-pane"
                    aria-selected="false"
                  >
                    online
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link d-center"
                    id="saved-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#saved-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="saved-tab-pane"
                    aria-selected="false"
                  >
                    saved
                  </button>
                </li>
              </ul>
              <div className="btn-item">
                <Link href="/event" className="cmn-btn gap-1">
                  <i className="material-symbols-outlined mat-icon"> add </i>
                  Create Event
                </Link>
              </div>
            </div>
            <div className="tab-content">
              <div
                className="tab-pane fade show active"
                id="top-tab-pane"
                role="tabpanel"
                aria-labelledby="top-tab"
                tabIndex={0}
              >
                <div className="row cus-mar friend-request">
                  {eventData.map((itm) => (
                    <div key={itm.id} className="col-xl-4 col-sm-6 col-8">
                      {/* Event Card  */}
                      <EventCard data={itm} />
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="local-tab-pane"
                role="tabpanel"
                aria-labelledby="local-tab"
                tabIndex={0}
              >
                <div className="row cus-mar friend-request">
                  {eventData.slice(0, 6).map((itm) => (
                    <div key={itm.id} className="col-xl-4 col-sm-6 col-8">
                      {/* Event Card  */}
                      <EventCard data={itm} />
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="online-tab-pane"
                role="tabpanel"
                aria-labelledby="online-tab"
                tabIndex={0}
              >
                <div className="row cus-mar friend-request">
                  {eventData.slice(0, 7).map((itm) => (
                    <div key={itm.id} className="col-xl-4 col-sm-6 col-8">
                      {/* Event Card  */}
                      <EventCard data={itm} />
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="saved-tab-pane"
                role="tabpanel"
                aria-labelledby="saved-tab"
                tabIndex={0}
              >
                <div className="row cus-mar friend-request">
                  {eventData.slice(0, 6).map((itm) => (
                    <div key={itm.id} className="col-xl-4 col-sm-6 col-8">
                      {/* Event Card  */}
                      <EventCard data={itm} />
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

export default EventMain;
