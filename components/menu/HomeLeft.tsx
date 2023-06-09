"use client";

import { homeLeftMenu } from "@/data/sidbarData";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Shortcuts from "../common/Shortcuts";
import avatar_1 from "/public/images/avatar-1.png";

const HomeLeft = ({ clss }: { clss?: string }) => {
  const [activeProfile, setActiveProfile] = useState<boolean>(false);
  const pathname = usePathname();

  return (
    <>
      <div className={`d-inline-block ${clss}`}>
        <button
          className="button profile-active mb-4 mb-lg-0 d-flex align-items-center gap-2"
          onClick={() => setActiveProfile(!activeProfile)}
        >
          <i className="material-symbols-outlined mat-icon"> tune </i>
          <span>My profile</span>
        </button>
      </div>
      <div
        className={`profile-sidebar cus-scrollbar p-5 ${
          activeProfile && "active"
        }`}
      >
        <div className="d-block d-lg-none position-absolute end-0 top-0">
          <button
            className="button profile-close mt-3 me-2"
            onClick={() => setActiveProfile(false)}
          >
            <i className="material-symbols-outlined mat-icon fs-xl"> close </i>
          </button>
        </div>
        <div className="profile-pic d-flex gap-2 align-items-center">
          <div className="avatar position-relative">
            <Image className="avatar-img max-un" src={avatar_1} alt="avatar" />
          </div>
          <div className="text-area">
            <h6 className="m-0 mb-1">
              <Link href="profile/post">Lerio Mao</Link>
            </h6>
            <p className="mdtxt">@maolio</p>
          </div>
        </div>
        <ul className="profile-link mt-7 mb-7 pb-7">
          {/* home Left Menu */}
          {homeLeftMenu.map(([icon, item, url], i) => (
            <li key={i}>
              <Link
                href={url}
                className={`d-flex gap-4 ${pathname === url ? "active" : ""}`}
              >
                <i className="material-symbols-outlined mat-icon"> {icon} </i>
                <span>{item}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="your-shortcuts">
          <h6 className="mb-7">Your shortcuts</h6>

          {/* Shortcuts */}
          <Shortcuts />
        </div>
      </div>
    </>
  );
};

export default HomeLeft;
