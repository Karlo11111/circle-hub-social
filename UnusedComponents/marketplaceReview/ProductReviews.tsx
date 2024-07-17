"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import AddReview from "./AddReview";
import avatar_2 from "/public/images/avatar-2.png";
import avatar_3 from "/public/images/avatar-3.png";
import avatar_5 from "/public/images/avatar-5.png";

const reviewData = [
  {
    id: 1,
    name: "Darren Maxwell",
    country: "United States",
    img: avatar_5,
    title: "Possibly My Favorite Controller Of All Time.",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.",
    date: "November 2, 2023",
    rating: 5,
  },
  {
    id: 2,
    name: "Diane Hall",
    country: "United States",
    img: avatar_2,
    title: "Ergonomics Perfected - Detail Oriented",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.",
    date: "November 2, 2023",
    rating: 5,
  },
  {
    id: 3,
    name: "Robin Parker",
    country: "United States",
    img: avatar_3,
    title: "Very Comfortable But Requires A Little Bit Of Setup (For Now)",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.",
    date: "November 2, 2023",
    rating: 5,
  },
];

const ProductReviews = () => {
  const { productId } = useParams();

  return (
    <>
      <div className="shop-section my-8">
        <ul className="nav gap-2" role="tablist">
          <li className="nav-item" role="presentation">
            <Link
              href={`/marketplace/${productId}`}
              className="cmn-btn alt third"
            >
              Product Description
            </Link>
          </li>
          <li className="nav-item" role="presentation">
            <Link
              href={`/marketplace/${productId}/shipping`}
              className="cmn-btn alt third"
            >
              Shipping
            </Link>
          </li>
          <li className="nav-item" role="presentation">
            <Link
              href={`/marketplace/${productId}/review`}
              className="cmn-btn active"
            >
              Review
            </Link>
          </li>
          <li className="nav-item" role="presentation">
            <Link
              href={`/marketplace/${productId}/author`}
              className="cmn-btn alt third"
            >
              Author
            </Link>
          </li>
        </ul>
      </div>
      <div className="tab-content">
        <div className="customer-reviews">
          {reviewData.map((review) => {
            const { comment, title, country, date, id, img, name, rating } =
              review;
            return (
              <div key={id} className="single-review">
                <div className="head-area d-flex align-items-center justify-content-between">
                  <div className="star-area d-flex align-items-center">
                    {[...Array(rating)].map((_, i) => (
                      <button key={i}>
                        <i className="fas fa-star"></i>
                      </button>
                    ))}
                  </div>
                  <div className="date">
                    <span className="fs-6">{date}</span>
                  </div>
                </div>
                <div className="profile-area d-flex my-5 gap-3">
                  <div className="img-area">
                    <Image src={img} alt="image" />
                  </div>
                  <div className="text-area">
                    <h6>
                      <Link href="/public-profile/post">{name}</Link>
                    </h6>
                    <span className="fs-6">{country}</span>
                  </div>
                </div>
                <div className="review-text">
                  <h6>{title}</h6>
                  <p>{comment}</p>
                </div>
              </div>
            );
          })}
          <div className="review-box">
            {/* Add Review */}
            <AddReview />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductReviews;
