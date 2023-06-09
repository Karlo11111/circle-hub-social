import ProfileBanner from "./ProfileBanner";

const MarketplacePostMain = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="main-content">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="banner-area pages-create mb-5">
              {/* Profile Banner */}
              <ProfileBanner
                tabData={[
                  ["Post", "post", "/marketplace/post"],
                  ["About", "about", "/marketplace/about"],
                  ["Photos", "photos", "/marketplace/photos"],
                  ["Groups", "group", "/marketplace/group"],
                  ["Connections", "connections", "/marketplace/connections"],
                  ["Events", "events", "/marketplace/events"],
                  ["Marketplace", "market", "/marketplace/market"],
                ]}
              />
            </div>
          </div>
        </div>
        <div className="row sidebar-toggler">
          {/* Content */}
          {children}
        </div>
      </div>
    </main>
  );
};

export default MarketplacePostMain;
