import Link from "next/link";
import HomeLeft from "../menu/HomeLeft";

const CheckoutMain = () => {
  return (
    <main className="main-content">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-4">
            {/* Home Left */}
            <HomeLeft clss="d-lg-none" />
          </div>

          <div className="col-xl-9 col-lg-8 contact-information">
            <div className="head-area mb-5">
              <h6>Checkout</h6>
            </div>
            <form action="#">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input type="text" placeholder="First Name" required />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input type="text" placeholder="Last Name" required />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <input type="text" placeholder="Address" required />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input type="text" placeholder="City" required />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input type="text" placeholder="Postal Code" required />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group mb-2">
                    <input type="text" placeholder="Phone" required />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="btn-area d-flex flex-wrap mt-4 align-items-center gap-3">
                    <button className="cmn-btn">Continue to Shipping</button>
                    <Link href="/cart" className="cmn-btn alt third">
                      Return to cart
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CheckoutMain;
