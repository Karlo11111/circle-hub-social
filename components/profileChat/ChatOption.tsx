"use client";

import messageData from "@/data/messageData";
import Image from "next/image";
import { useState } from "react";
import ContactAction from "../ui/ContactAction";
import SingleChat from "./SingleChat";
import avatar_1 from "/public/images/avatar-1.png";

const ChatOption = () => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <>
      <div className="d-block d-lg-none">
        <button
          className="button profile-active mb-4 mb-lg-0 d-flex align-items-center gap-2"
          onClick={() => setActive(!active)}
        >
          <i className="material-symbols-outlined mat-icon"> tune </i>
          <span>Chat List</span>
        </button>
      </div>
      <div className={`profile-sidebar ${active && "active"}`}>
        <div className="d-block d-lg-none position-absolute end-0 top-0">
          <button
            className="button profile-close m-1"
            onClick={() => setActive(false)}
          >
            <i className="material-symbols-outlined mat-icon fs-xl">close</i>
          </button>
        </div>
        <div className="chat-area">
          <aside>
            <div className="chat-top p-5">
              <div className="profile-area d-center justify-content-between">
                <div className="avatar-item d-flex mb-4 gap-3 align-items-center">
                  <div className="avatar-item">
                    <Image
                      className="avatar-img max-un"
                      src={avatar_1}
                      alt="avatar"
                    />
                  </div>
                  <div className="info-area">
                    <h6 className="m-0">Chat</h6>
                  </div>
                </div>
                {/* Contact Action */}
                <ContactAction
                  actionList={[
                    ["Unfollow", "person_remove"],
                    ["Hide Contact", "hide_source"],
                  ]}
                />
              </div>
              <form
                action="#"
                className="input-area py-2 d-flex align-items-center"
              >
                <i className="material-symbols-outlined mat-icon">search</i>
                <input type="text" placeholder="Search" />
              </form>
            </div>
            <div className="header-menu cus-scrollbar">
              <div className="single-item messages-area pb-5">
                {/* Single Chat */}
                {messageData.map((data) => (
                  <SingleChat key={data.id} data={data} />
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default ChatOption;
