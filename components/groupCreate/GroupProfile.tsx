import Image from "next/image";
import create_group_cover from "/public/images/create-group-cover.png";

const GroupProfile = () => {
  return (
    <div className="banner-area create-group pages-create mb-5">
      <div className="single-box p-5">
        <div className="avatar-area position-relative">
          <Image
            className="avatar-img w-100"
            src={create_group_cover}
            alt="avatar"
          />
          <div className="abs-area w-100 position-absolute bottom-0 p-3 d-center justify-content-end">
            <form action="#">
              <div className="file-upload">
                <label className="file mt-1">
                  <input type="file" required />
                  <span className="file-custom bg-transparent border-0 p-3 d-grid text-center">
                    <p className="cmn-btn">Select Photo</p>
                  </span>
                </label>
              </div>
            </form>
          </div>
        </div>
        <div className="top-area py-4 d-center flex-wrap gap-3 justify-content-between">
          <div className="d-flex gap-4 align-items-center">
            <div className="abs-avatar-item m-0">
              <form action="#">
                <div className="file-upload">
                  <label className="file mt-1">
                    <input type="file" required />
                    <span className="file-custom border-0 px-3 py-6 d-grid text-center">
                      <span className="material-symbols-outlined mat-icon fs-xxxl">
                        perm_media
                      </span>
                      <span className="mdtxt">Group Profile</span>
                    </span>
                  </label>
                </div>
              </form>
            </div>
            <div className="text-area text-start">
              <h4 className="m-0 mb-1">Name</h4>
              <p className="mdtxt">@abcdef</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupProfile;
