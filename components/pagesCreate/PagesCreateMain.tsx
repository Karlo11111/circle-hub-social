import Image from "next/image";
import Link from "next/link";
import Select from "../select/Select";
import avatar_1 from "/public/images/avatar-1.png";
import create_page_cover from "/public/images/create-page-cover.png";

const categorySelect = [
  { id: 1, name: "Category" },
  { id: 2, name: "Category One" },
  { id: 3, name: "Category Two" },
  { id: 4, name: "Category Three" },
];

const PagesCreateMain = () => {
  return (
    <main className="main-content">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-4">
            <div className="d-block d-lg-none">
              <button className="button profile-active mb-4 mb-lg-0 d-flex align-items-center gap-2">
                <i className="material-symbols-outlined mat-icon"> tune </i>
                <span>My Create</span>
              </button>
            </div>
            <div className="profile-sidebar cus-scrollbar p-5">
              <div className="d-block d-lg-none position-absolute end-0 top-0">
                <button className="button profile-close">
                  <i className="material-symbols-outlined mat-icon fs-xl">
                    close
                  </i>
                </button>
              </div>
              <div className="head-area mb-5">
                <h5>Create Page</h5>
              </div>
              <div className="profile-picture d-flex gap-2 mb-5 align-items-center">
                <div className="avatar position-relative">
                  <Image
                    className="avatar-img max-un"
                    src={avatar_1}
                    alt="avatar"
                  />
                </div>
                <div className="text-area">
                  <h6 className="m-0 mb-1">
                    <Link href="/profile/post">Lerio Mao</Link>
                  </h6>
                  <p className="mdtxt">Admin</p>
                </div>
              </div>
              <form className="text-center d-grid gap-4">
                <div className="input-area second">
                  <input type="text" placeholder="Page name" />
                </div>
                <div className="input-area second">
                  {/* Select */}
                  <Select data={categorySelect} />
                </div>
                <div className="input-area second">
                  <textarea
                    cols={30}
                    placeholder="Bio(optional)"
                    rows={3}
                  ></textarea>
                </div>
                <div className="btn-area text-end">
                  <button className="cmn-btn">Next</button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-xl-9 col-lg-8">
            <div className="banner-area create-group pages-create mb-5">
              <div className="single-box p-5">
                <div className="avatar-area position-relative">
                  <Image
                    className="avatar-img w-100"
                    src={create_page_cover}
                    alt="avatar"
                  />
                  <div className="abs-area w-100 position-absolute bottom-0 p-3 d-center justify-content-end">
                    <form>
                      <div className="file-upload">
                        <label className="file mt-1">
                          <input type="file" />
                          <span className="file-custom bg-transparent border-0 p-3 d-grid text-center">
                            <p className="cmn-btn">Select Photo</p>
                          </span>
                        </label>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="top-area py-4 px-5 d-center flex-wrap gap-3 justify-content-between">
                  <div className="d-grid gap-4 align-items-center">
                    <div className="abs-avatar-item m-0">
                      <form>
                        <div className="file-upload">
                          <label className="file mt-1">
                            <input type="file" />
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
                      <h5 className="m-0 mb-1">Page Name</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PagesCreateMain;
