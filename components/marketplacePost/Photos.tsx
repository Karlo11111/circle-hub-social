import Image from "next/image";
import post_img_14 from "/public/images/post-img-14.png";
import post_img_15 from "/public/images/post-img-15.png";
import post_img_16 from "/public/images/post-img-16.png";
import post_img_17 from "/public/images/post-img-17.png";
import post_img_5 from "/public/images/post-img-5.png";
import post_img_6 from "/public/images/post-img-6.png";

const Photos = () => {
  return (
    <>
      <div className="mb-3">
        <h6 className="d-inline-flex">Photos</h6>
      </div>
      <div className="post-single-box">
        <div className="post-img d-flex justify-content-between flex-wrap gap-2 gap-lg-3">
          <div className="single d-grid gap-3">
            <Image src={post_img_6} alt="image" />
            <Image src={post_img_14} alt="image" />
          </div>
          <div className="single d-grid gap-3">
            <Image src={post_img_5} alt="image" />
            <Image src={post_img_15} alt="image" />
          </div>
          <div className="single d-flex gap-3">
            <Image src={post_img_16} alt="image" />
            <Image src={post_img_17} alt="image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Photos;
