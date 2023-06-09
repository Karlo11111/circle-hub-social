import Image from "next/image";
import profile_picture from "/public/images/profile-picture.png";

const Profile = () => {
  return (
    <div className="single-box p-3">
      <div className="d-block d-lg-none position-absolute end-0 top-0">
        <button className="button profile-close">
          <i className="material-symbols-outlined mat-icon fs-xl">close</i>
        </button>
      </div>
      <div className="upload-single">
        <div className="profile-picture text-start">
          <Image
            className="preview-image w-100"
            src={profile_picture}
            alt="Preview Image"
          />
        </div>
        <div className="file-upload">
          <label className="file text-center mt-4">
            <input type="file" required />
            <span className="cmn-btn d-center gap-1">
              <i className="material-symbols-outlined mat-icon fs-2">
                edit_note
              </i>
              Change Profile Photo
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Profile;
