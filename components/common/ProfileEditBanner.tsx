"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ContactAction from "../ui/ContactAction";
import avatar_14 from "/public/images/avatar-14.png";
import avatar_2 from "/public/images/avatar-2.png";
import avatar_3 from "/public/images/avatar-3.png";
import avatar_4 from "/public/images/avatar-4.png";
import profile_cover_img from "/public/images/profile-cover-img.png";

const ProfileEditBanner = () => {
  const path = usePathname();
  const splitPath = path.split("/");
  const lastPath = splitPath[splitPath.length - 1];

  return (
    <div className="banner-area pages-create mb-5">
      <div className="single-box p-5">
        <div className="avatar-area">
          <Image
            className="avatar-img w-100"
            src={profile_cover_img}
            alt="image"
          />
        </div>
        <div className="top-area py-4 d-center flex-wrap gap-3 justify-content-between align-items-start">
          <div className="d-flex gap-3 align-items-center">
            <div className="avatar-item p">
              <Image
                className="avatar-img max-un"
                src={avatar_14}
                alt="avatar"
              />
            </div>
            <div className="text-area text-start">
              <h4 className="m-0 mb-2">Lerio Mao</h4>
              <div className="friends-list d-flex flex-wrap gap-2 align-items-center text-center">
                <ul className="d-flex align-items-center justify-content-center">
                  <li>
                    <Image src={avatar_3} alt="image" />
                  </li>
                  <li>
                    <Image src={avatar_2} alt="image" />
                  </li>
                  <li>
                    <Image src={avatar_4} alt="image" />
                  </li>
                </ul>
                <span className="mdtxt d-center">10k Followers</span>
                <span className="mdtxt d-center following">200 Following</span>
              </div>
            </div>
          </div>
          <div className="btn-item d-center gap-3">
            <Link href="#" className="cmn-btn d-center gap-1">
              <i className="material-symbols-outlined mat-icon fs-2">
                edit_note
              </i>
              Edit Profile
            </Link>

            {/* Contact Action */}
            <ContactAction
              actionList={[
                ["Block", "lock"],
                ["Report", "flag"],
              ]}
            />
          </div>
        </div>
        <div className="page-details">
          <ul className="nav mt-5 pt-4 flex-wrap gap-2 tab-area">
            <li className="nav-item" role="presentation">
              <Link
                href="/profile/post"
                className={`nav-link d-center ${
                  lastPath === "post" && "active"
                }`}
              >
                Post
              </Link>
            </li>
            <li className="nav-item" role="presentation">
              <Link
                href="/profile/about"
                className={`nav-link d-center ${
                  lastPath === "about" && "active"
                }`}
              >
                About
              </Link>
            </li>
            <li className="nav-item" role="presentation">
              <Link
                href="/profile/photos"
                className={`nav-link d-center ${
                  lastPath === "photos" && "active"
                }`}
              >
                Photos
              </Link>
            </li>
            <li className="nav-item" role="presentation">
              <Link
                href="/profile/group"
                className={`nav-link d-center ${
                  lastPath === "group" && "active"
                }`}
              >
                Groups
              </Link>
            </li>
            <li className="nav-item" role="presentation">
              <Link
                href="/profile/connections"
                className={`nav-link d-center ${
                  lastPath === "connections" && "active"
                }`}
              >
                Connections
              </Link>
            </li>
            <li className="nav-item" role="presentation">
              <Link
                href="/profile/events"
                className={`nav-link d-center ${
                  lastPath === "events" && "active"
                }`}
              >
                Events
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileEditBanner;
