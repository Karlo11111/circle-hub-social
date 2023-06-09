import Select from "../select/Select";

const categoriesSelect = [
  { id: 1, name: "Design" },
  { id: 2, name: "Design 1" },
  { id: 3, name: "Design 2" },
  { id: 4, name: "Design 3" },
];

const PagesInfoMain = () => {
  return (
    <main className="main-content">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="head-area mb-5">
              <h5>General Info</h5>
            </div>
            <form className="text-center d-grid gap-4">
              <div className="single-box p-5 mb-0">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="single-input text-start">
                      <label htmlFor="categories">Categories</label>
                      <div className="input-area second">
                        {/* Select */}
                        <Select data={categoriesSelect} />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="single-input text-start">
                      <label htmlFor="number">Number</label>
                      <div className="input-area second">
                        <input
                          type="text"
                          placeholder="(316) 555-0116"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="single-input text-start">
                      <label htmlFor="Email">Email</label>
                      <div className="input-area second">
                        <input
                          type="text"
                          placeholder="test@mail.com"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="single-input text-start">
                      <label htmlFor="website">Website</label>
                      <div className="input-area second">
                        <input
                          type="text"
                          placeholder="www.abcd.com"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="single-input text-start">
                      <label htmlFor="address">Address</label>
                      <div className="input-area second">
                        <input
                          type="text"
                          placeholder="775 Rolling Green Rd."
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="single-input text-start">
                      <label htmlFor="country">Country</label>
                      <div className="input-area second">
                        <input type="text" placeholder="USA" required />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="btn-area mt-2 text-center">
                <button className="cmn-btn">Create Page</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PagesInfoMain;
