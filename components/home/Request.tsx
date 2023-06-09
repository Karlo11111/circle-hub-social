import contentData from "@/data/contentData";
import HorizontalRequestCard from "../cards/HorizontalRequestCard";

const Request = () => {
  return (
    <>
      <div className="mb-4">
        <h6 className="d-inline-flex position-relative">
          Request
          <span className="mdtxt abs-area d-center position-absolute">2</span>
        </h6>
      </div>
      <div className="d-grid gap-6">
        {/* Request Card */}
        {contentData.slice(0, 2).map((itm) => (
          <HorizontalRequestCard key={itm.id} data={itm} />
        ))}
      </div>
    </>
  );
};

export default Request;
