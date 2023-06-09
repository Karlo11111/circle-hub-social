import Image from "next/image";
import Link from "next/link";
import Select from "../select/Select";
import add_post_avatar from "/public/images/add-post-avatar.png";

const privacySelect = [
  { id: 1, name: "Public" },
  { id: 2, name: "Only Me" },
  { id: 3, name: "Friends" },
  { id: 4, name: "Custom" },
];

const ActivityModal = () => {
  return (
    <div className="go-live-popup">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="modal cmn-modal fade" id="activityMod">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content p-5">
                  <div className="modal-header justify-content-center">
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      <i className="material-symbols-outlined mat-icon xxltxt">
                        close
                      </i>
                    </button>
                  </div>
                  <div className="top-content pb-5">
                    <h5>Create post</h5>
                  </div>
                  <div className="mid-area">
                    <div className="d-flex mb-5 gap-3">
                      <div className="profile-box">
                        <Link href="#">
                          <Image
                            src={add_post_avatar}
                            className="max-un"
                            alt="icon"
                          />
                        </Link>
                      </div>
                      <textarea
                        cols={10}
                        rows={2}
                        placeholder="Write something to Lerio.."
                      ></textarea>
                    </div>
                    <div className="file-upload">
                      <label>Upload attachment</label>
                      <label className="file mt-1">
                        <input type="file" />
                        <span className="file-custom pt-8 pb-8 d-grid text-center">
                          <i className="material-symbols-outlined mat-icon">
                            perm_media
                          </i>
                          <span>Drag here or click to upload photo.</span>
                        </span>
                      </label>
                    </div>
                    <div className="tooltips-area d-flex mt-3 gap-2">
                      <button
                        type="button"
                        className="btn d-center"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Fallings/Activity"
                      >
                        <i className="material-symbols-outlined mat-icon">
                          mood
                        </i>
                      </button>
                      <button
                        type="button"
                        className="btn d-center"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Video"
                      >
                        <i className="material-symbols-outlined mat-icon">
                          movie
                        </i>
                      </button>
                      <button
                        type="button"
                        className="btn d-center"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Maps"
                      >
                        <i className="material-symbols-outlined mat-icon">
                          location_on
                        </i>
                      </button>
                      <button
                        type="button"
                        className="btn d-center"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Tag"
                      >
                        <i className="material-symbols-outlined mat-icon">
                          sell
                        </i>
                      </button>
                    </div>
                  </div>
                  <div className="footer-area d-flex justify-content-between pt-5">
                    <div className="left-area">
                      {/* Select */}
                      <Select data={privacySelect} />
                    </div>
                    <div className="btn-area d-flex justify-content-end gap-2">
                      <button
                        type="button"
                        className="cmn-btn alt"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >
                        Cancel
                      </button>
                      <button className="cmn-btn">Post</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityModal;
