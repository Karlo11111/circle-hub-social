"use client";

import { useState } from "react";
import Contact from "../common/Contact";
import Request from "./Request";

const RightSide = () => {
  const [activeProfile, setActiveProfile] = useState<boolean>(false);

  return (
    <div
      className={`cus-overflow cus-scrollbar sidebar-head ${
        activeProfile ? "active" : ""
      }`}
    >
      <div className="d-flex justify-content-end">
        <div className="d-block d-xl-none me-4">
          <button
            className="button toggler-btn mb-4 mb-lg-0 d-flex align-items-center gap-2"
            onClick={() => setActiveProfile(!activeProfile)}
          >
            <span>My List</span>
            <i className="material-symbols-outlined mat-icon"> tune </i>
          </button>
        </div>
      </div>
      <div className="cus-scrollbar side-wrapper">
        <div className="sidebar-wrapper d-flex flex-column gap-6">
          <div className="sidebar-area p-5">
            {/* Request */}
            <Request />
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
  );
};

export default RightSide;
