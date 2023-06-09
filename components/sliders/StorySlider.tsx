"use client";

import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import { storyData } from "./sliderData";
import story_slider_owner from "/public/images/story-slider-owner.png";

const Next = ({ onClick }: any) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="arafat-prev cmn-btn pull-left slick-arrow"
    >
      <i className="material-symbols-outlined mat-icon" aria-hidden="true">
        chevron_left
      </i>
    </button>
  );
};

const Prev = ({ onClick }: any) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="arafat-next cmn-btn pull-right slick-arrow"
    >
      <i className="material-symbols-outlined mat-icon" aria-hidden="true">
        chevron_left
      </i>
    </button>
  );
};

const StorySlider = () => {
  const settings = {
    infinite: false,
    autoplay: false,
    centerMode: false,
    centerPadding: "0px 50px",
    focusOnSelect: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <Next />,
    nextArrow: <Prev />,
    dots: false,
    dotsClass: "section-dots",
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          arrows: false,
        },
      },
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
    <Slider {...settings} className="story-carousel">
      <div className="single-item">
        <div className="single-slide">
          <Link href="URL:void()" className="position-relative d-center">
            <Image className="bg-img" src={story_slider_owner} alt="icon" />
            <div className="abs-area d-grid p-3 position-absolute bottom-0">
              <div className="icon-box m-auto d-center mb-3">
                <i className="material-symbols-outlined text-center mat-icon">
                  add
                </i>
              </div>
              <span className="mdtxt">Add Story</span>
            </div>
          </Link>
        </div>
      </div>
      {storyData.map((itm) => (
        <div key={itm.id} className="single-item">
          <div className="single-slide">
            <div className="position-relative d-flex">
              <Image className="bg-img" src={itm.story} alt="image" />
              <Link
                href="/public-profile/post"
                className="abs-area p-3 position-absolute bottom-0"
              >
                <Image src={itm.user_avt} alt="image" />
                <span className="mdtxt">{itm.user_name}</span>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default StorySlider;
