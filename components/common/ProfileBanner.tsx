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

const ProfileBanner = ({ tabData }: { tabData: string[][] }) => {
  const path = usePathname();
  const slugs = path.split("/");
  const lastPath = slugs[slugs.length - 1];

  return (
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
            <Image className="avatar-img max-un" src={avatar_14} alt="avatar" />
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
          <Link href="URL:void()" className="cmn-btn d-center gap-1">
            <i className="material-symbols-outlined mat-icon fs-4">
              person_add
            </i>
            Follow
          </Link>
          <Link href="URL:void()" className="cmn-btn d-center gap-1">
            <i className="material-symbols-outlined mat-icon fs-4">send</i>
            Message
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
          {tabData.map(([itm, slug, url], i) => (
            <li key={i} className="nav-item" role="presentation">
              <Link
                // href="/marketplace/post"
                href={url}
                className={`nav-link d-center ${
                  lastPath === slug ? "active" : ""
                } `}
              >
                {itm}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfileBanner;
