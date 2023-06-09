"use client";

import { useState } from "react";
import ProductSlider from "../sliders/ProductSlider";

const ProductDetails = ({ children }: { children: JSX.Element }) => {
  const [product, setProduct] = useState<number>(1);

  return (
    <>
      <div className="shop-details-content">
        <div className="row justify-content-center align-items-center">
          <div className="col-xl-6 col-md-8">
            {/* Product Slider */}
            <ProductSlider />
          </div>
          <div className="col-xl-6 col-md-8 mt-7 mt-xl-0">
            <form>
              <h4>Digital Camera</h4>
              <div className="star-item my-4 d-flex gap-2 align-items-center">
                <div className="star-area">
                  <button>
                    <i className="fas fa-star"></i>
                  </button>
                  <button>
                    <i className="fas fa-star"></i>
                  </button>
                  <button>
                    <i className="fas fa-star"></i>
                  </button>
                  <button>
                    <i className="fas fa-star"></i>
                  </button>
                  <button>
                    <i className="fas fa-star"></i>
                  </button>
                </div>
                <p className="mdr">
                  <span>(534 ratings)</span>
                </p>
              </div>
              <p>Product Id: 08.01.028.48</p>
              <div className="price-area d-flex my-4 gap-3 align-items-center">
                <h4 className="cur-price">$49.00</h4>
                <h5>
                  <del>$70.00</del>
                </h5>
              </div>
              <p className="description">
                Aliquam luctus, nibh quis scelerisque scelerisque, purus magna
                sollicitudin magna, quis cursus nunc tellus eget nisi.{" "}
              </p>
              <div className="single-input cart-content my-4">
                <div className="d-flex gap-3">
                  <div className="qtySelector px-4 px-3 d-inline-flex align-items-center text-center">
                    <i
                      className="fas fa-minus d-center decreaseQty"
                      onClick={() =>
                        setProduct((prev) => (prev <= 1 ? prev : prev - 1))
                      }
                    ></i>
                    <input
                      type="text"
                      className="qtyValue text-center m-0 xxltxt"
                      value={product}
                      onChange={(e) => setProduct(+e.target.value)}
                    />
                    <i
                      className="fas fa-plus d-center increaseQty"
                      onClick={() => setProduct((prev) => prev + 1)}
                    ></i>
                  </div>
                </div>
              </div>
              <button className="cmn-btn w-100 text-center d-flex justify-content-center">
                Add To Cart
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="product-about mt-60">
        <div className="row">
          <div className="col-lg-9">{children}</div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
