import BarChart from "../charts/BarChart";
import DoubleLineChart from "../charts/DoubleLineChart";
import LineChart from "../charts/LineChart";
import Select from "../select/Select";

const summaryData = [
  {
    id: 1,
    title: "Post",
    totalCount: 10,
    title_icon: "post_add",
    count_icon: "north_west",
  },
  {
    id: 2,
    title: "Comments",
    totalCount: 10,
    title_icon: "chat",
    count_icon: "north_west",
  },
  {
    id: 3,
    title: "Reactions",
    totalCount: 10,
    title_icon: "favorite",
    count_icon: "north_west",
  },
];

const filterDate = [
  { id: 1, name: "Last 7 days" },
  { id: 2, name: "Last 15 days" },
  { id: 3, name: "Last 30 days" },
];

const PagesDashboardMain = () => {
  return (
    <div className="col-xl-9 col-lg-8">
      <div className="banner-area pages-create mb-5">
        <div className="head-area d-center justify-content-between">
          <h5>Overview</h5>
          <div className="input-area py-2">
            {/* Select */}
            <Select data={filterDate} />
          </div>
        </div>
        <div className="cus-border pt-6 my-6">
          <div className="row graph-col">
            <div className="col-xl-4 col-6">
              <div className="single-box graph-box text-start p-4">
                <h6 className="head-color">Post Content</h6>
                <div className="d-flex align-items-center">
                  <h2 className="m-0">2</h2>
                  {/* line chart */}
                  <LineChart data={[50, 100, 40, 50, 50, 50, 50, 50, 50, 50]} />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-6">
              <div className="single-box graph-box second text-start p-4">
                <h6 className="head-color">Post Content</h6>
                <div className="d-flex align-items-center">
                  <h2 className="m-0">6</h2>
                  {/* line chart */}
                  <LineChart data={[5, 100, 0, 20, 70, 45, 60, 30, 70, 80]} />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-6">
              <div className="single-box graph-box third text-start p-4">
                <h6 className="head-color">Page Growth</h6>
                <div className="d-flex align-items-center">
                  <h2 className="m-0">9%</h2>
                  {/* line chart */}
                  <LineChart data={[5, 40, 30, 20, 70, 45, 60, 30, 70, 80]} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-6">
            <div className="single-box d-grid gap-2 p-4">
              <div className="head-area mb-4 d-center justify-content-between">
                <h5>Summary</h5>
                <span className="mdtxt">Last 7 days</span>
              </div>
              {summaryData.map((itm) => (
                <div
                  key={itm.id}
                  className="summary-wrapper d-center p-5 justify-content-between"
                >
                  <div className="left-side">
                    <div className="profile-item d-flex gap-3 align-items-center">
                      <div className="icon-area d-center">
                        <i className="material-symbols-outlined mat-icon fs-xl">
                          {itm.title_icon}
                        </i>
                      </div>
                      <div className="text-area text-start">
                        <p>{itm.title}</p>
                      </div>
                    </div>
                  </div>
                  <div className="right-summary d-center">
                    <h5 className="m-0">{itm.totalCount}</h5>
                    <i className="material-symbols-outlined mat-icon fs-4">
                      {itm.count_icon}
                    </i>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-xl-6">
            <div className="single-box post-graph">
              <div className="head-area pt-5 px-5 d-flex flex-wrap gap-3 justify-content-between">
                <p className="mdtxt head-color">Post Reach</p>
                <div className="right-area head-color d-sm-flex d-none gap-12 align-items-center">
                  <span className="mdtxt like d-center">Like</span>
                  <span className="mdtxt d-center">Comments</span>
                </div>
              </div>
              {/* Double Line Chart */}
              <DoubleLineChart />
            </div>
          </div>
          <div className="col-xl-6">
            <div className="single-box post-graphs">
              <div className="head-area pt-5 px-5 d-flex justify-content-between">
                <p className="mdtxt head-color">Page Like</p>
                <div className="right-area head-color d-flex gap-12 align-items-center">
                  <span className="mdtxt like-area d-center">Like</span>
                </div>
              </div>
              {/* Bar Chart */}
              <BarChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PagesDashboardMain;
