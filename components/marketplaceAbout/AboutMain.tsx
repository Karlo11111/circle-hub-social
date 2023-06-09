import BioContent from "../common/BioContent";
import Contact from "../common/Contact";

const AboutMain = () => {
  return (
    <>
      <div className="col-xxl-9 col-xl-8 col-lg-7">
        {/* Bio Content */}
        <BioContent />
      </div>

      <div className="col-xxl-3 col-xl-4 col-lg-5">
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
    </>
  );
};

export default AboutMain;
