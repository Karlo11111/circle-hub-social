import ProfileEditBanner from "./ProfileEditBanner";

const ProfileMain = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="main-content">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* Profile Edit Banner */}
            <ProfileEditBanner />
          </div>
        </div>
        <div className="row sidebar-toggler">
          {/* content */}
          {children}
        </div>
      </div>
    </main>
  );
};

export default ProfileMain;
