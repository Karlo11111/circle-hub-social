import Settings from "../common/Settings";

const PagesSettingMain = () => {
  return (
    <div className="col-xl-9 col-lg-8 cus-mar setting-row">
      <div className="head-area mb-6 text-start">
        <h5>Settings</h5>
      </div>
      {/* Settings */}
      <Settings />
    </div>
  );
};

export default PagesSettingMain;
