import Image from "next/image";
import CrudAction from "../ui/CrudAction";
import PrivacyAction from "../ui/PrivacyAction";
import profile_cover from "/public/images/profile-cover.png";
import profile_picture from "/public/images/profile-picture.png";

const Settings = () => {
  return (
    <>
      <div className="single-box p-sm-5 p-3">
        <div className="row gap-6">
          <div className="col-xxl-2 col-md-3 col-sm-5 col-6 pe-0">
            <div className="upload-single">
              <div className="head-area mb-2 text-start">
                <h6>Profile Image</h6>
              </div>
              <div className="profile-picture text-start">
                <Image
                  className="preview-image w-100"
                  src={profile_picture}
                  alt="Preview Image"
                />
              </div>
              <div className="file-upload">
                <label className="file text-start mt-2">
                  <input type="file" required />
                  <span className="cmn-btn">Change Profile</span>
                </label>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="upload-single cover-img">
              <div className="head-area mb-2 text-start">
                <h6>Cover Image</h6>
              </div>
              <div className="profile-picture text-start">
                <Image
                  className="preview-image w-100"
                  src={profile_cover}
                  alt="Preview Image"
                />
              </div>
              <div className="file-upload">
                <label className="file text-start mt-2">
                  <input type="file" required />
                  <span className="cmn-btn">Change Cover photo</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="single-box text-start p-sm-5 p-3">
        <div className="head-area mb-6">
          <h6>General Information </h6>
        </div>
        <form className="text-center d-grid gap-4">
          <div className="row">
            <div className="col-sm-6">
              <div className="single-input text-start">
                <label htmlFor="name">Name</label>
                <div className="input-area second">
                  <input type="text" placeholder="Type name" required />
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="single-input text-start">
                <label htmlFor="number">Number</label>
                <div className="input-area second">
                  <input type="text" placeholder="Number" required />
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="single-input text-start">
                <label htmlFor="Email">Email</label>
                <div className="input-area second">
                  <input type="text" placeholder="Email" required />
                </div>
              </div>
            </div>
            <div className="col-sm-7 mt-4">
              <div className="single-input text-start">
                <h6>Bio</h6>
                <p className="mdtxt mt-6">
                  “Lorem ipsum dolor sit amet consectetur. Nec donec vestibulum
                  eleifend lectus ipsum ultrices et dictum”.
                </p>
              </div>
            </div>
            <div className="col-sm-5 mt-4 d-center justify-content-end">
              <div className="single-input d-center text-start">
                {/* Privacy Action */}
                <PrivacyAction />

                {/* Crus Action */}
                <CrudAction />
              </div>
            </div>
            <div className="col-sm-12 mt-4">
              <div className="btn-area text-end">
                <button type={"submit"} className="cmn-btn">
                  Saved Change
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Settings;
