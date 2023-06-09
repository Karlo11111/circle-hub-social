import GroupCreateForm from "./GroupCreateForm";
import GroupProfile from "./GroupProfile";

const GroupCreateMain = () => {
  return (
    <main className="main-content">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-4">
            <div className="d-block d-lg-none">
              <button className="button profile-active mb-4 mb-lg-0 d-flex align-items-center gap-2">
                <i className="material-symbols-outlined mat-icon"> tune </i>
                <span>My Create</span>
              </button>
            </div>
            {/* Group Create Form */}
            <GroupCreateForm />
          </div>
          <div className="col-xl-9 col-lg-8">
            {/* Group Profile */}
            <GroupProfile />
          </div>
        </div>
      </div>
    </main>
  );
};

export default GroupCreateMain;
