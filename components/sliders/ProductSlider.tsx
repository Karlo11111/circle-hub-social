"use client";

import Image from "next/image";
import { useState } from "react";
import Slider from "react-slick";

import marketplace_img_1 from "/public/images/marketplace-img-1.png";
import marketplace_img_2 from "/public/images/marketplace-img-2.png";
import marketplace_img_3 from "/public/images/marketplace-img-3.png";
import marketplace_img_4 from "/public/images/marketplace-img-4.png";
import marketplace_img_5 from "/public/images/marketplace-img-5.png";
import marketplace_img_6 from "/public/images/marketplace-img-6.png";

const ProductSlider = () => {
  const [nav1, setNav1] = useState<any>();
  const [nav2, setNav2] = useState<any>();

  const settings = {
    infinite: false,
    autoplay: false,
    centerMode: false,
    centerPadding: "0px 50px",
    focusOnSelect: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    dotsClass: "section-dots",
  };

  const settingsTwo = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      <Slider
        {...settings}
        asNavFor={nav2}
        ref={(slider1) => setNav1(slider1)}
        className="slider-for"
      >
        {[
          marketplace_img_1,
          marketplace_img_2,
          marketplace_img_3,
          marketplace_img_4,
          marketplace_img_5,
          marketplace_img_6,
        ].map((itm, i) => (
          <div key={i} className="single-slide">
            <Image src={itm} alt="avatar" />
          </div>
        ))}
      </Slider>
      <Slider
        {...settingsTwo}
        asNavFor={nav1}
        ref={(slider2) => setNav2(slider2)}
        slidesToShow={3}
        swipeToSlide={true}
        focusOnSelect={true}
        className="slider-nav"
      >
        {[
          marketplace_img_1,
          marketplace_img_2,
          marketplace_img_3,
          marketplace_img_4,
          marketplace_img_5,
          marketplace_img_6,
        ].map((itm, i) => (
          <div key={i} className="single-slide">
            <div className="slide">
              <Image src={itm} alt="avatar" />
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default ProductSlider;
