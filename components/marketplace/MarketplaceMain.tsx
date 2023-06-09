import HomeLeft from "../menu/HomeLeft";
import AllProducts from "./AllProducts";

const MarketplaceMain = () => {
  return (
    <main className="main-content">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-4">
            {/* Home Left */}
            <HomeLeft clss="d-lg-none" />
          </div>
          <div className="col-xl-9 col-lg-8">
            <div className="head-area mb-5">
              <h6>Marketplace</h6>
            </div>
            <div className="row cus-mar">
              {/* All Products */}
              <AllProducts />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MarketplaceMain;
