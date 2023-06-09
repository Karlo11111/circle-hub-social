import Image from "next/image";
import Link from "next/link";
import avatar_3 from "/public/images/avatar-3.png";
import avatar_4 from "/public/images/avatar-4.png";
import avatar_5 from "/public/images/avatar-5.png";
import avatar_6 from "/public/images/avatar-6.png";
import avatar_7 from "/public/images/avatar-7.png";

const ProfileNotificationMain = () => {
  return (
    <main className="main-content">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="head-area pb-6">
              <h5>Notifications</h5>
            </div>
            <div className="d-grid gap-5">
              <div className="single-box">
                <div className="notification-single d-center p-5 gap-5 justify-content-between">
                  <div className="d-flex top-review-wrapper gap-3 align-items-center">
                    <div className="avatar-item">
                      <Image
                        className="avatar-img max-un"
                        src={avatar_3}
                        alt="avatar"
                      />
                    </div>
                    <div className="text-area text-start">
                      <h6 className="m-0 mb-1">
                        <Link href="/public-profile/post">Lori Ferguson</Link>
                        <span>Comment on your post</span>
                      </h6>
                      <span className="mdtxt time-schedule">Just now</span>
                    </div>
                  </div>
                  <div className="btn-area d-flex gap-3">
                    <button className="cmn-btn alt p-2 p-sm-3">
                      <i className="material-symbols-outlined mat-icon">
                        delete
                      </i>
                    </button>
                  </div>
                </div>
                <div className="notification-single d-center p-5 flex-wrap gap-5 justify-content-between">
                  <div className="d-flex top-review-wrapper gap-3 align-items-center">
                    <div className="avatar-item">
                      <Image
                        className="avatar-img max-un"
                        src={avatar_4}
                        alt="avatar"
                      />
                    </div>
                    <div className="text-area text-start">
                      <h6 className="m-0 mb-1">
                        <Link href="/public-profile/post">Jacob Jones</Link>
                        <span>Sent you a request</span>
                      </h6>
                      <span className="mdtxt time-schedule">Just now</span>
                    </div>
                  </div>
                  <div className="btn-area d-flex gap-3">
                    <button className="cmn-btn py-1">Accept</button>
                    <button className="cmn-btn alt py-1">Delete</button>
                  </div>
                </div>
                <div className="notification-single d-center p-5 gap-5 justify-content-between">
                  <div className="d-flex top-review-wrapper gap-3 align-items-center">
                    <div className="avatar-item">
                      <Image
                        className="avatar-img max-un"
                        src={avatar_5}
                        alt="avatar"
                      />
                    </div>
                    <div className="text-area text-start">
                      <h6 className="m-0 mb-1">
                        <Link href="/public-profile/post">Piter Maio</Link>
                        <span>Comment on your post</span>
                      </h6>
                      <span className="mdtxt time-schedule">Just now</span>
                    </div>
                  </div>
                  <div className="btn-area d-flex gap-3">
                    <button className="cmn-btn alt p-2 p-sm-3">
                      <i className="material-symbols-outlined mat-icon">
                        delete
                      </i>
                    </button>
                  </div>
                </div>
                <div className="notification-single d-center p-5 gap-5 justify-content-between">
                  <div className="d-flex top-review-wrapper gap-3 align-items-center">
                    <div className="avatar-item">
                      <Image
                        className="avatar-img max-un"
                        src={avatar_7}
                        alt="avatar"
                      />
                    </div>
                    <div className="text-area text-start">
                      <h6 className="m-0 mb-1">
                        <Link href="/public-profile/post">Piter Ferguson</Link>
                        <span>Share apost</span>
                      </h6>
                      <span className="mdtxt time-schedule">Just now</span>
                    </div>
                  </div>
                  <div className="btn-area d-flex gap-3">
                    <button className="cmn-btn alt p-2 p-sm-3">
                      <i className="material-symbols-outlined mat-icon">
                        delete
                      </i>
                    </button>
                  </div>
                </div>
                <div className="notification-single d-center p-5 flex-wrap gap-5 justify-content-between">
                  <div className="d-flex top-review-wrapper gap-3 align-items-center">
                    <div className="avatar-item">
                      <Image
                        className="avatar-img max-un"
                        src={avatar_6}
                        alt="avatar"
                      />
                    </div>
                    <div className="text-area text-start">
                      <h6 className="m-0 mb-1">
                        <Link href="/public-profile/post">Jacob Jones</Link>
                        <span>Sent you a request</span>
                      </h6>
                      <span className="mdtxt time-schedule">Just now</span>
                    </div>
                  </div>
                  <div className="btn-area d-flex gap-3">
                    <button className="cmn-btn py-1">Accept</button>
                    <button className="cmn-btn alt py-1">Delete</button>
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

export default ProfileNotificationMain;
