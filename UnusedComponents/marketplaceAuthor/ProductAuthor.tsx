"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import avatar_5 from "/public/images/avatar-5.png";

const ProductAuthor = () => {
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
              className="cmn-btn alt third"
            >
              Review
            </Link>
          </li>
          <li className="nav-item" role="presentation">
            <Link
              href={`/marketplace/${productId}/author`}
              className="cmn-btn active"
            >
              Author
            </Link>
          </li>
        </ul>
      </div>
      <div className="tab-content">
        <div className="author">
          <h5 className="mb-3">Item Author</h5>
          <div className="profile-area d-flex my-5 gap-3">
            <div className="img-area">
              <Image src={avatar_5} alt="image" />
            </div>
            <div className="text-area">
              <h6>Darren Maxwell</h6>
              <span className="fs-6">29 items published</span>
            </div>
          </div>
          <Link className="cmn-btn" href="/marketplace/post">
            View Author&#39;s Store
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductAuthor;
