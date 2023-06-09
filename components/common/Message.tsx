"use client";

import messageData from "@/data/messageData";
import Image from "next/image";
import Link from "next/link";

const Message = ({ activeHandler }: { activeHandler: (a: string) => void }) => {
  return (
    <>
      <div className="messages-btn cmn-head">
        <div
          className="icon-area d-center position-relative"
          onClick={() => activeHandler("message")}
        >
          <i className="material-symbols-outlined mat-icon">mail</i>
          <span className="abs-area position-absolute d-center mdtxt">4</span>
        </div>
      </div>

      <div className="main-area p-5 messages-content">
        <h5 className="mb-8">Messages</h5>
        {messageData.map((message) => {
          const {
            clss,
            id,
            last_message,
            number_of_message,
            user_avt,
            user_name,
          } = message;

          return (
            <div key={id} className="single-box p-0 mb-7">
              <Link
                href="/profile/chat"
                className="d-flex gap-2 align-items-center"
              >
                <div className="avatar">
                  <Image
                    className="avatar-img max-un"
                    src={user_avt}
                    alt="avatar"
                  />
                </div>
                <div className="text-area">
                  <div className="title-area position-relative d-inline-flex align-items-center">
                    <h6 className="m-0 d-inline-flex">{user_name}</h6>
                    {number_of_message && (
                      <span className="abs-area position-absolute d-center mdtxt">
                        {number_of_message}
                      </span>
                    )}
                  </div>
                  <p className={`mdtxt ${clss}`}>{last_message}</p>
                </div>
              </Link>
            </div>
          );
        })}
        <div className="btn-area">
          <Link href="/profile/chat">See all inbox</Link>
        </div>
      </div>
    </>
  );
};

export default Message;
