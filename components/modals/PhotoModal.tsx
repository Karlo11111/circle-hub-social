import Image from "next/image";
import Link from "next/link";
import add_post_avatar from "/public/images/add-post-avatar.png";

const PhotoModal = () => {
  return (
    <div className="go-live-popup video-popup">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="modal cmn-modal fade" id="photoVideoMod">
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
                    <h5>Add post photo/video</h5>
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
                  </div>
                  <div className="footer-area pt-5">
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

export default PhotoModal;
