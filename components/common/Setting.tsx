"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import avatar_1 from "/public/images/avatar-1.png";

const Setting = ({ activeHandler }: { activeHandler: (a: string) => void }) => {
  const [enabled, setEnabled] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleTheme = () => {
    setTheme(theme === "dark" || theme === "system" ? "light" : "dark");
  };

  useEffect(() => setEnabled(true), []);

  if (!enabled) return null;

  return (
    <>
      <div className="profile-pic d-flex align-items-center">
        <span
          className="avatar cmn-head active-status"
          onClick={() => activeHandler("settings")}
        >
          <Image className="avatar-img max-un" src={avatar_1} alt="avatar" />
        </span>
      </div>
      <div className="main-area p-5 profile-content">
        <div className="head-area">
          <div className="d-flex gap-3 align-items-center">
            <div className="avatar-item">
              <Image
                className="avatar-img max-un"
                src={avatar_1}
                alt="avatar"
              />
            </div>
            <div className="text-area">
              <h6 className="m-0 mb-1">Lori Ferguson</h6>
              <p className="mdtxt">Web Developer</p>
            </div>
          </div>
        </div>
        <div className="view-profile my-2">
          <Link href="/profile/post" className="mdtxt w-100 text-center py-2">
            View profile
          </Link>
        </div>
        <ul>
          <li>
            <Link href="/profile/edit" className="mdtxt">
              <i className="material-symbols-outlined mat-icon"> settings </i>
              Settings & Privacy
            </Link>
          </li>
          <li>
            <Link href="/#" className="mdtxt">
              <i className="material-symbols-outlined mat-icon">
                power_settings_new
              </i>
              Sign Out
            </Link>
          </li>
        </ul>
        <div className="switch-wrapper mt-4 d-flex gap-1 align-items-center">
          <i
            className={`mat-icon material-symbols-outlined sun icon ${
              theme === "light" && "active"
            }`}
          >
            light_mode
          </i>
          <label className="switch">
            <input type="checkbox" className="checkbox" onClick={handleTheme} />
            <span
              className={`slider ${theme === "dark" ? " slider-active" : ""}`}
            ></span>
          </label>
          <i
            className={`mat-icon material-symbols-outlined moon icon ${
              theme === "dark" && "active"
            }`}
          >
            dark_mode
          </i>
          <span className="mdtxt ms-2">Dark mode</span>
        </div>
      </div>
    </>
  );
};

export default Setting;
