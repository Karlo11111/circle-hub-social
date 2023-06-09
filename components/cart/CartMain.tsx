import HomeLeft from "../menu/HomeLeft";
import ProductTable from "./ProductTable";

const CartMain = () => {
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
              <h6>Cart</h6>
            </div>
            <div className="cart-content">
              <div className="row justify-content-center align-items-center">
                <div className="col-xl-12">
                  <form action="checkout">
                    <div className="table-responsive cart-table">
                      {/* Product Table */}
                      <ProductTable />
                    </div>
                    <div className="sub-total mt-3">
                      <div className="row d-center justify-content-between">
                        <div className="col-md-6">
                          <h4 className="mb-2">Subtotal</h4>
                          <p>Taxes and shipping calculated at checkout</p>
                        </div>
                        <div className="col-md-6 d-center gap-4 mt-4 mt-md-0 justify-content-start justify-content-md-end">
                          <h5 className="m-0">$79.96</h5>
                          <button className="cmn-btn">Checkout</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CartMain;
