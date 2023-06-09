import Gallery from "../common/Gallery";
import About from "./About";

const MediaTab = () => {
  return (
    <>
      {/* Gallery */}
      <Gallery />

      <div className="col-xxl-4 col-lg-10 mt-5 mt-xl-0">
        {/* About */}
        <About />
      </div>
    </>
  );
};

export default MediaTab;
