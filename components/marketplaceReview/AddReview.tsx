import Link from "next/link";

const AddReview = () => {
  return (
    <div className="add-review">
      <h5>Add A Review</h5>
      <div className="d-md-flex align-items-center my-4 mb-60">
        <p>Your Rating:</p>
        <div className="star-head d-flex mx-3 gap-4 flex-wrap align-items-center">
          <div className="star-item">
            <Link href="URL:void(0)">
              <i className="fas fa-star"></i>
            </Link>
          </div>
          <div className="star-item">
            <Link href="URL:void(0)">
              <i className="fas fa-star"></i>
            </Link>
            <Link href="URL:void(0)">
              <i className="fas fa-star"></i>
            </Link>
          </div>
          <div className="star-item">
            <Link href="URL:void(0)">
              <i className="fas fa-star"></i>
            </Link>
            <Link href="URL:void(0)">
              <i className="fas fa-star"></i>
            </Link>
            <Link href="URL:void(0)">
              <i className="fas fa-star"></i>
            </Link>
          </div>
          <div className="star-item">
            <Link href="URL:void(0)">
              <i className="fas fa-star"></i>
            </Link>
            <Link href="URL:void(0)">
              <i className="fas fa-star"></i>
            </Link>
            <Link href="URL:void(0)">
              <i className="fas fa-star"></i>
            </Link>
            <Link href="URL:void(0)">
              <i className="fas fa-star"></i>
            </Link>
          </div>
          <div className="star-item">
            <Link href="URL:void(0)">
              <i className="fas fa-star"></i>
            </Link>
            <Link href="URL:void(0)">
              <i className="fas fa-star"></i>
            </Link>
            <Link href="URL:void(0)">
              <i className="fas fa-star"></i>
            </Link>
            <Link href="URL:void(0)">
              <i className="fas fa-star"></i>
            </Link>
            <Link href="URL:void(0)">
              <i className="fas fa-star"></i>
            </Link>
          </div>
        </div>
      </div>
      <form action="#">
        <div className="row">
          <div className="col-sm-6">
            <div className="single-input">
              <input type="text" placeholder="Enter Your Name" required />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="single-input">
              <input type="text" placeholder="Enter Your Email" required />
            </div>
          </div>
          <div className="col-sm-12">
            <div className="single-input">
              <textarea
                cols={30}
                rows={5}
                placeholder="Enter Your Message"
                required
              ></textarea>
            </div>
          </div>
        </div>
        <div className="btn-area text-center">
          <button type={"submit"} className="cmn-btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddReview;
