"use client";

import Image from "next/image";
import Link from "next/link";
import avatar_1 from "/public/images/avatar-1.png";
import avatar_2 from "/public/images/avatar-2.png";
import avatar_3 from "/public/images/avatar-3.png";
import avatar_4 from "/public/images/avatar-4.png";
import emoji_love from "/public/images/icon/emoji-love.png";
import speech_bubble from "/public/images/icon/speech-bubble.png";

const Notification = ({
  activeHandler,
}: {
  activeHandler: (a: string) => void;
}) => {
  return (
    <>
      <div className="notification-btn cmn-head position-relative">
        <div
          className="icon-area d-center position-relative"
          onClick={() => activeHandler("notification")}
        >
          <i className="material-symbols-outlined mat-icon">notifications</i>
          <span className="abs-area position-absolute d-center mdtxt">3</span>
        </div>
      </div>
      <div className="main-area p-5 notification-content">
        <h5 className="mb-8">Notification</h5>
        <div className="single-box p-0 mb-7">
          <Link
            href="/profile/notification"
            className="d-flex justify-content-between align-items-center"
          >
            <div className="left-item position-relative d-inline-flex gap-3">
              <div className="avatar position-relative d-inline-flex">
                <Image
                  className="avatar-img max-un"
                  src={avatar_1}
                  alt="avatar"
                />
                <Image
                  className="abs-item position-absolute max-un"
                  src={speech_bubble}
                  alt="icon"
                />
              </div>
              <div className="text-area">
                <h6 className="m-0 mb-1">Piter Maio</h6>
                <p className="mdtxt">Comment on your post</p>
              </div>
            </div>
            <div className="time-remaining">
              <p className="mdtxt">Just now</p>
            </div>
          </Link>
        </div>
        <div className="single-box p-0 mb-7">
          <Link
            href="/profile/notification"
            className="d-flex justify-content-between align-items-center"
          >
            <div className="left-item position-relative d-inline-flex gap-3">
              <div className="avatar position-relative d-inline-flex">
                <Image
                  className="avatar-img max-un"
                  src={avatar_2}
                  alt="avatar"
                />
                <Image
                  className="abs-item position-absolute max-un"
                  src={emoji_love}
                  alt="icon"
                />
              </div>
              <div className="text-area">
                <h6 className="m-0 mb-1">Kathryn Murphy</h6>
                <p className="mdtxt">Like your photo</p>
              </div>
            </div>
            <div className="time-remaining">
              <p className="mdtxt">2min</p>
            </div>
          </Link>
        </div>
        <div className="single-box p-0 mb-7">
          <Link
            href="/profile/notification"
            className="d-flex justify-content-between align-items-center"
          >
            <div className="left-item position-relative d-inline-flex gap-3">
              <div className="avatar position-relative d-inline-flex">
                <Image
                  className="avatar-img max-un"
                  src={avatar_3}
                  alt="avatar"
                />
                <Image
                  className="abs-item position-absolute max-un"
                  src={emoji_love}
                  alt="icon"
                />
              </div>
              <div className="text-area">
                <h6 className="m-0 mb-1">Jacob Jones</h6>
                <p className="mdtxt">Sent you a request</p>
              </div>
            </div>
            <div className="time-remaining">
              <p className="mdtxt">1hr</p>
            </div>
          </Link>
          <div className="d-flex gap-3 mt-4">
            <button className="cmn-btn">Accept</button>
            <button className="cmn-btn alt">Delete</button>
          </div>
        </div>
        <div className="single-box p-0 mb-7">
          <Link
            href="/profile/notification"
            className="d-flex justify-content-between align-items-center"
          >
            <div className="left-item position-relative d-inline-flex gap-3">
              <div className="avatar position-relative d-inline-flex">
                <Image
                  className="avatar-img max-un"
                  src={avatar_4}
                  alt="avatar"
                />
                <Image
                  className="abs-item position-absolute max-un"
                  src={emoji_love}
                  alt="icon"
                />
              </div>
              <div className="text-area">
                <h6 className="m-0 mb-1">Kathryn Murphy</h6>
                <p className="mdtxt">officia consequat duis enim...</p>
              </div>
            </div>
            <div className="time-remaining">
              <p className="mdtxt">2hr</p>
            </div>
          </Link>
        </div>
        <div className="btn-area">
          <Link href="/profile/notification">See all notification</Link>
        </div>
      </div>
    </>
  );
};

export default Notification;
