"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

const Shipping = () => {
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
              className="cmn-btn active"
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
              className="cmn-btn alt third"
            >
              Author
            </Link>
          </li>
        </ul>
      </div>
      <div className="tab-content">
        <div className="shipping">
          <h4 className="mb-4">Shipping Fee Details</h4>
          <ul>
            <li>
              • All of our products include free shipping within all USA Canada.
            </li>
            <li>
              • If you are in California, your order will arrive within 1-2
              business days.
            </li>
            <li>
              • If you are in any other state of USA, your order will arrive
              within 2-4 business days.
            </li>
            <li>
              • If you are in Canada, your order will arrive within 5-6 business
              days.
            </li>
            <li>
              • If you have any problems with your order, feel free to send us a
              message at
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Shipping;
