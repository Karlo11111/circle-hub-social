"use client";

import { useState } from "react";
import Message from "../common/Message";
import Notification from "../common/Notification";
import Setting from "../common/Setting";

const BottomMenu = () => {
  const [active, setActive] = useState<string>("");

  const activeHandler = (opt: string) => {
    if (opt === active) {
      setActive("");
    } else {
      setActive(opt);
    }
  };

  return (
    <div className="header-menu py-3 header-menu d-block d-lg-none position-fixed bottom-0 w-100 cus-z">
      <div className="right-area position-relative d-flex justify-content-around gap-3 gap-xxl-6 align-items-center">
        <div
          className={`single-item messages-area ${
            active === "message" ? "active" : ""
          }`}
        >
          <Message activeHandler={activeHandler} />
        </div>
        <div
          className={`single-item messages-area notification-area ${
            active === "notification" ? "active" : ""
          }`}
        >
          <Notification activeHandler={activeHandler} />
        </div>
        <div
          className={`single-item profile-area position-relative ${
            active === "settings" ? "active" : ""
          }`}
        >
          <Setting activeHandler={activeHandler} />
        </div>
      </div>
    </div>
  );
};

export default BottomMenu;
