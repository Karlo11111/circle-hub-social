import Connections from "../common/Connections";
import About from "./About";

const ConnectionsTab = () => {
  return (
    <>
      {/* Connections  */}
      <Connections />

      <div className="col-xxl-4 col-lg-10 mt-5 mt-xl-0">
        {/* About */}
        <About />
      </div>
    </>
  );
};

export default ConnectionsTab;
