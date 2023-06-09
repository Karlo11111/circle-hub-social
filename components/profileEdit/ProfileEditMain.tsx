import Image from "next/image";
import Bio from "./Bio";
import Profile from "./Profile";
import profile_edit_cover from "/public/images/profile-edit-cover.png";

const ProfileEditMain = () => {
  return (
    <main className="main-content">
      <div className="container">
        <div className="row profile-picture-area">
          <div className="col-xl-3 col-lg-4 col-md-5 col-sm-6 col-8">
            {/* Profile */}
            <Profile />
          </div>
          <div className="col-xl-9 col-lg-8">
            <div className="head-area mb-5">
              <h6>Edit Profile</h6>
            </div>
            <form className="text-center d-grid gap-4">
              <div className="single-box p-5">
                <div className="col-md-12">
                  <div className="upload-single cover-img">
                    <div className="head-area mb-2 text-start">
                      <h6>Cover Image</h6>
                    </div>
                    <div className="profile-picture position-relative text-start">
                      <Image
                        className="preview-image w-100"
                        src={profile_edit_cover}
                        alt="Preview Image"
                      />
                      <div className="file-upload position-absolute p-4 bottom-0 end-0">
                        <label className="file text-start mt-2">
                          <input type="file" required />
                          <span className="cmn-btn d-center gap-1">
                            <i className="material-symbols-outlined mat-icon fs-2">
                              edit_note
                            </i>
                            Change Cover Photo
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single-box p-3 p-sm-5">
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
                  <div className="col-sm-6">
                    <div className="single-input text-start">
                      <label htmlFor="birthday">Birthday</label>
                      <div className="input-area second">
                        <input type="text" placeholder="birthday" required />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="single-input text-start">
                      <label htmlFor="address">Address</label>
                      <div className="input-area second">
                        <input type="text" placeholder="address" required />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="single-input text-start">
                      <label htmlFor="country">Country</label>
                      <div className="input-area second">
                        <input type="text" required />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="head-area mt-5 text-start">
                      <h6>Bio</h6>
                      <p className="mdtxt mt-4">
                        “Lorem ipsum dolor sit amet consectetur. Nec donec
                        vestibulum eleifend lectus ipsum ultrices et dictum”.
                      </p>
                    </div>
                    {/* Bio */}
                    <Bio />
                  </div>
                  <div className="col-sm-12 mt-4">
                    <div className="btn-area text-end">
                      <button className="cmn-btn">Saved Change</button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProfileEditMain;
