import ProductDetails from "../common/ProductDetails";
import HomeLeft from "../menu/HomeLeft";
import ProductReviews from "./ProductReviews";

const ReviewMain = () => {
  return (
    <>
      <main className="main-content">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4">
              {/* Home Left */}
              <HomeLeft clss="d-lg-none" />
            </div>
            <div className="col-xl-9 col-lg-8">
              <div className="head-area mb-5">
                <h5>Marketplace Details</h5>
              </div>
              <div className="row">
                <div className="shop-content">
                  {/* Product Details */}
                  <ProductDetails>
                    {/* Product Description */}
                    <ProductReviews />
                  </ProductDetails>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ReviewMain;
