import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import video_bg_1 from "/public/images/video-bg-1.png";
import video_bg_2 from "/public/images/video-bg-2.png";
import video_bg_3 from "/public/images/video-bg-3.png";
import video_bg_4 from "/public/images/video-bg-4.png";
import video_bg_5 from "/public/images/video-bg-5.png";
import video_bg_6 from "/public/images/video-bg-6.png";

const Vedios = ({
  setOpen,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className="col-xxl-8 col-xl-8">
      <div className="single-box p-5">
        <div className="row cus-mar">
          {[
            video_bg_1,
            video_bg_2,
            video_bg_3,
            video_bg_4,
            video_bg_5,
            video_bg_6,
          ].map((itm, i) => (
            <div key={i} className="col-md-6">
              <div className="single-box">
                <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                  <div className="bg-area w-100">
                    <Image className="bg-item w-100" src={itm} alt="image" />
                  </div>
                  <div className="content-area text-center position-absolute d-flex align-items-center justify-content-center">
                    <div className="content-box">
                      <button
                        className="mfp-iframe popupvideo d-flex align-items-center justify-content-center"
                        onClick={() => setOpen(true)}
                      >
                        <i className="material-symbols-outlined mat-icon fs-1">
                          play_arrow
                        </i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Vedios;
