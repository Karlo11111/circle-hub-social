"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ContactAction from "../ui/ContactAction";

interface GroupMenuProps {
  name: string;
  type: string;
  img: StaticImageData;
  adminTools: string[][];
}

const GroupLeftMenu = ({ name, type, img, adminTools }: GroupMenuProps) => {
  const [activeProfile, setActiveProfile] = useState<boolean>(false);
  const pathname = usePathname();

  return (
    <>
      <div className="d-block d-lg-none">
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
            className="button profile-close d-flex align-items-center justify-content-center mt-2"
            onClick={() => setActiveProfile(false)}
          >
            <i className="material-symbols-outlined mat-icon fs-xl">close</i>
          </button>
        </div>
        <div className="profile-item">
          <div className="profile-item d-flex gap-3 align-items-center">
            <div className="avatar position-relative">
              <Image className="avatar-img max-un" src={img} alt="avatar" />
            </div>
            <div className="text-area">
              <h6 className="m-0 mb-1">{name}</h6>
              <p className="mdtxt">{type}</p>
            </div>
          </div>
          <div className="btn-item mt-5 d-center gap-3">
            <Link
              href="/#"
              className="cmn-btn w-100 justify-content-center gap-1"
            >
              <i className="material-symbols-outlined mat-icon"> add </i>
              Invite
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
        <ul className="profile-link my-5 pb-5">
          <li>
            <Link href="/" className="d-flex gap-4">
              <i className="material-symbols-outlined mat-icon"> home </i>
              <span>Home</span>
            </Link>
          </li>
        </ul>
        <div className="admin-tool">
          <p className="mdtxt">Admin tool</p>
          <ul className="profile-link border-0 mt-4">
            {adminTools.map(([icon, item, url], i) => (
              <li key={i}>
                <Link
                  href={url}
                  className={`d-flex gap-4 ${pathname === url ? "active" : ""}`}
                >
                  <i className="material-symbols-outlined mat-icon">{icon}</i>
                  <span>{item}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default GroupLeftMenu;
