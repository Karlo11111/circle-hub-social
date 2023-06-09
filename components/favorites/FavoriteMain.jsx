import Image from "next/image";
import Link from "next/link";
import NewsFeeds from "../common/NewsFeeds";
import RightSide from "../home/RightSide";
import HomeLeft from "../menu/HomeLeft";
import avatar_2 from "/public/images/avatar-2.png";
import avatar_3 from "/public/images/avatar-3.png";
import avatar_4 from "/public/images/avatar-4.png";
import post_img_8 from "/public/images/post-img-8.png";

const FavoriteMain = () => {
  return (
    <main className="main-content">
      <div className="container sidebar-toggler">
        <div className="row">
          <div className="col-xxl-3 col-xl-3 col-lg-4 col-6 cus-z2">
            {/* Home Left */}
            <HomeLeft clss="d-lg-none" />
          </div>
          <div className="col-xxl-6 col-xl-5 col-lg-8 mt-0 mt-lg-10 mt-xl-0 d-flex flex-column gap-7 cus-z">
            <div className="filter-head d-center justify-content-between">
              <h5>Favorites</h5>
              <div className="d-center">
                <Link href="#" className="cmn-btn third gap-1">
                  <i className="material-symbols-outlined mat-icon"> add </i>
                  Manage Favotites
                </Link>
              </div>
            </div>
            <div className="post-item d-flex flex-column gap-5 gap-md-7">
              <div className="post-single-box p-3 p-sm-5">
                <div className="top-area pb-4">
                  <div className="post-img">
                    <Image src={post_img_8} className="w-100" alt="image" />
                  </div>
                  <div className="pt-4">
                    <h5 className="post-head">
                      A New Way to Stay Up to Date With Those You Choose
                    </h5>
                  </div>
                </div>
                <div className="total-react-share d-center gap-2 flex-wrap justify-content-between">
                  <div className="friends-list d-flex gap-1 align-items-center text-center">
                    <ul className="d-flex align-items-center justify-content-center">
                      <li>
                        <Image src={avatar_2} alt="image" />
                      </li>
                      <li>
                        <Image src={avatar_3} alt="image" />
                      </li>
                      <li>
                        <Image src={avatar_4} alt="image" />
                      </li>
                    </ul>
                    <p className="mdtxt">200+ Favorites</p>
                  </div>
                  <div className="react-list text-center">
                    <Link href="#" className="mdtxt py-2 cmn-btn">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* News Feeds */}
            <NewsFeeds clss="p-3 p-sm-5" />
          </div>
          <div className="col-xxl-3 col-xl-4 col-lg-4 mt-5 mt-xl-0">
            {/* Right Side */}
            <RightSide />
          </div>
        </div>
      </div>
    </main>
  );
};

export default FavoriteMain;
