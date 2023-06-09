import productData from "@/data/productData";
import ProductCard from "../cards/ProductCard";
import Contact from "../common/Contact";

const MarketMain = () => {
  return (
    <>
      <div className="col-xxl-9 col-xl-8">
        <div className="best-sellers-area mb-5 d-center flex-wrap gap-3 justify-content-between">
          <ul className="nav flex-wrap gap-2 tab-area" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link d-center active"
                id="best-sellers-tab"
                data-bs-toggle="tab"
                data-bs-target="#best-sellers-tab-pane"
                type="button"
                role="tab"
                aria-controls="best-sellers-tab-pane"
                aria-selected="true"
              >
                best sellers
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link d-center"
                id="recently-added-tab"
                data-bs-toggle="tab"
                data-bs-target="#recently-added-tab-pane"
                type="button"
                role="tab"
                aria-controls="recently-added-tab-pane"
                aria-selected="false"
                tabIndex={-1}
              >
                recently added
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link d-center"
                id="best-rated-tab"
                data-bs-toggle="tab"
                data-bs-target="#best-rated-tab-pane"
                type="button"
                role="tab"
                aria-controls="best-rated-tab-pane"
                aria-selected="false"
                tabIndex={-1}
              >
                best rated
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link d-center"
                id="lowest-price-tab"
                data-bs-toggle="tab"
                data-bs-target="#lowest-price-tab-pane"
                type="button"
                role="tab"
                aria-controls="lowest-price-tab-pane"
                aria-selected="false"
                tabIndex={-1}
              >
                lowest price
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link d-center"
                id="highest-price-tab"
                data-bs-toggle="tab"
                data-bs-target="#highest-price-tab-pane"
                type="button"
                role="tab"
                aria-controls="highest-price-tab-pane"
                aria-selected="false"
                tabIndex={-1}
              >
                highest price
              </button>
            </li>
          </ul>
        </div>
        <div className="tab-content">
          <div
            className="tab-pane fade show active"
            id="best-sellers-tab-pane"
            role="tabpanel"
            aria-labelledby="best-sellers-tab"
            tabIndex={0}
          >
            <div className="row cus-mar">
              {productData.slice(2, 6).map((product) => (
                <div key={product.id} className="col-xl-6 col-lg-8 col-md-6">
                  <ProductCard data={product} />
                </div>
              ))}
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="recently-added-tab-pane"
            role="tabpanel"
            aria-labelledby="recently-added-tab"
            tabIndex={0}
          >
            <div className="row cus-mar">
              {productData.slice(0, 4).map((product) => (
                <div key={product.id} className="col-xl-6 col-lg-8 col-md-6">
                  <ProductCard data={product} />
                </div>
              ))}
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="best-rated-tab-pane"
            role="tabpanel"
            aria-labelledby="best-rated-tab"
            tabIndex={0}
          >
            <div className="row cus-mar">
              {productData.slice(0, 4).map((product) => (
                <div key={product.id} className="col-xl-6 col-lg-8 col-md-6">
                  <ProductCard data={product} />
                </div>
              ))}
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="lowest-price-tab-pane"
            role="tabpanel"
            aria-labelledby="lowest-price-tab"
            tabIndex={0}
          >
            <div className="row cus-mar">
              {productData.slice(2, 6).map((product) => (
                <div key={product.id} className="col-xl-6 col-lg-8 col-md-6">
                  <ProductCard data={product} />
                </div>
              ))}
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="highest-price-tab-pane"
            role="tabpanel"
            aria-labelledby="highest-price-tab"
            tabIndex={0}
          >
            <div className="row cus-mar">
              {productData.slice(1, 5).map((product) => (
                <div key={product.id} className="col-xl-6 col-lg-8 col-md-6">
                  <ProductCard data={product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="col-xxl-3 col-xl-4 col-lg-8 mt-5 mt-xl-0">
        <div className="cus-scrollbar">
          <div className="sidebar-wrapper d-flex al-item justify-content-end justify-content-xl-center flex-column flex-md-row flex-xl-column flex gap-6">
            <div className="sidebar-area p-5">
              {/* Contact */}
              <Contact>
                <div className="mb-4">
                  <h6 className="d-inline-flex">Contact</h6>
                </div>
              </Contact>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarketMain;
