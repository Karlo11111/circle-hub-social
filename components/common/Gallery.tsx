import Image from "next/image";
import photo_gallery_1 from "/public/images/photo-gallery-1.png";
import photo_gallery_10 from "/public/images/photo-gallery-10.png";
import photo_gallery_11 from "/public/images/photo-gallery-11.png";
import photo_gallery_12 from "/public/images/photo-gallery-12.png";
import photo_gallery_2 from "/public/images/photo-gallery-2.png";
import photo_gallery_3 from "/public/images/photo-gallery-3.png";
import photo_gallery_4 from "/public/images/photo-gallery-4.png";
import photo_gallery_5 from "/public/images/photo-gallery-5.png";
import photo_gallery_6 from "/public/images/photo-gallery-6.png";
import photo_gallery_7 from "/public/images/photo-gallery-7.png";
import photo_gallery_8 from "/public/images/photo-gallery-8.png";
import photo_gallery_9 from "/public/images/photo-gallery-9.png";

const Gallery = ({ clss = "col-xxl-8" }) => {
  return (
    <div className={clss}>
      <div className="single-box p-5">
        <div className="row cus-mar">
          {[
            photo_gallery_1,
            photo_gallery_2,
            photo_gallery_3,
            photo_gallery_4,
            photo_gallery_5,
            photo_gallery_6,
            photo_gallery_7,
            photo_gallery_8,
            photo_gallery_9,
            photo_gallery_10,
            photo_gallery_11,
            photo_gallery_12,
          ].map((itm, i) => (
            <div key={i} className="col-md-4 col-6">
              <div className="single-box">
                <Image className="w-100" src={itm} alt="image" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
