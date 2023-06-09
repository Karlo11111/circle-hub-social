import Link from "next/link";
import Contact from "../common/Contact";
import MakePost from "../common/MakePost";
import NewsFeeds from "../common/NewsFeeds";
import Photos from "../marketplacePost/Photos";

const bioData = [
  {
    id: 1,
    type: "Developer",
    icon: "integration_instructions",
    class: "",
  },
  {
    id: 2,
    type: "Master's degree",
    icon: "school",
    class: "",
  },
  {
    id: 3,
    type: "test@mail.com",
    icon: "flag",
    class: "link",
  },
  {
    id: 4,
    type: "www.wisoky.com",
    icon: "language",
    class: "link",
  },
  {
    id: 5,
    type: "(316) 555-0116",
    icon: "call",
    class: "",
  },
  {
    id: 6,
    type: "USA",
    icon: "pin_drop",
    class: "",
  },
  {
    id: 7,
    type: "775 Rolling Green Rd.",
    icon: "house",
    class: "",
  },
];

const ProfilePostMain = () => {
  return (
    <>
      <div className="col-xxl-3 col-xl-3 col-lg-4 col-6 cus-z2">
        <div className="d-inline-block d-lg-none">
          <button className="button profile-active mb-4 mb-lg-0 d-flex align-items-center gap-2">
            <i className="material-symbols-outlined mat-icon"> tune </i>
            <span>My profile</span>
          </button>
        </div>
        <div className="profile-sidebar cus-scrollbar max-width p-5">
          <div className="d-block d-lg-none position-absolute end-0 top-0">
            <button className="button profile-close">
              <i className="material-symbols-outlined mat-icon fs-xl">close</i>
            </button>
          </div>
          <div className="sidebar-area">
            <div className="mb-3">
              <h6 className="d-inline-flex">About</h6>
            </div>
            <p className="mdtxt descript">
              Lorem ipsum dolor sit amet cons all Ofectetur. Pellentesque ipsum
              necat congue pretium cursus orci. It Commodo donec tellus lacus
              pellentesque sagittis habitant quam amet praesent.
            </p>
            <Link
              href="#"
              className="cmn-btn w-100 mt-5 alt third d-center gap-1"
            >
              <i className="material-symbols-outlined mat-icon fs-2">
                edit_note
              </i>
              Edit Bio
            </Link>
          </div>
          <div className="sidebar-area mt-5">
            <div className="mb-2">
              <h6 className="d-inline-flex">Info</h6>
            </div>
            <ul className="d-grid gap-2 mt-4">
              {bioData.map((itm) => (
                <li key={itm.id} className="d-flex align-items-center gap-2">
                  <i className="material-symbols-outlined mat-icon">
                    {itm.icon}
                  </i>
                  <span className={`mdtxt ${itm.class}`}>{itm.type}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="col-xxl-6 col-xl-5 col-lg-8 mt-0 mt-lg-10 mt-xl-0 d-flex flex-column gap-7 cus-z">
        {/* Make Post */}
        <MakePost />

        {/* Feeds */}
        <NewsFeeds clss="p-3 p-sm-5" />
      </div>
      <div className="col-xxl-3 col-xl-4 col-lg-4 col-6 mt-5 mt-xl-0">
        <div className="cus-overflow cus-scrollbar sidebar-head">
          <div className="d-flex justify-content-end">
            <div className="d-block d-xl-none me-4">
              <button className="button toggler-btn mb-4 mb-lg-0 d-flex align-items-center gap-2">
                <span>My List</span>
                <i className="material-symbols-outlined mat-icon"> tune </i>
              </button>
            </div>
          </div>
          <div className="cus-scrollbar side-wrapper">
            <div className="sidebar-wrapper d-flex flex-column gap-6 max-width">
              <div className="sidebar-area post-item p-5">
                {/* Photos */}
                <Photos />
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
      </div>
    </>
  );
};

export default ProfilePostMain;
