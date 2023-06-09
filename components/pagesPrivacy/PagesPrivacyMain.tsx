import PrivacyTable from "../common/PrivacyTable";

const PagesPrivacyMain = () => {
  return (
    <div className="col-xl-9 col-lg-8">
      <div className="head-area mb-5">
        <h5>Page Privacy</h5>
      </div>
      <div className="single-box p-sm-5 p-3">
        {/* Privacy Table */}
        <PrivacyTable />
      </div>
    </div>
  );
};

export default PagesPrivacyMain;
