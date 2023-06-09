"use client";

import { useState } from "react";
import Contact from "../common/Contact";

const RightSide = () => {
  const [activeContact, setActiveContact] = useState<boolean>(false);

  return (
    <>
      <div className="d-flex justify-content-end mb-4">
        <button
          className="button contact-active mb-4 mb-lg-0 d-flex align-items-center gap-2"
          onClick={() => setActiveContact(!activeContact)}
        >
          <span>My contact</span>
          <i className="material-symbols-outlined mat-icon"> tune </i>
        </button>
      </div>
      <div
        className={`cus-scrollbar contact-sidebar ${
          activeContact ? "active" : ""
        }`}
      >
        <div className="sidebar-wrapper d-flex al-item justify-content-end justify-content-xl-center flex-column flex-md-row flex-xl-column flex gap-6">
          <div className="d-block d-lg-none position-absolute end-0 top-0">
            <button className="button contact-close">
              <i className="material-symbols-outlined mat-icon fs-xl">close</i>
            </button>
          </div>
          <div className="sidebar-area p-5">
            {/* content */}
            <Contact>
              <div className="title-bar">
                <h6 className="mb-4">Contact</h6>
              </div>
            </Contact>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightSide;
