import Select from "../select/Select";

const overviewData = [
  {
    id: 1,
    option: "Post Reach",
    count: 0,
  },
  {
    id: 2,
    option: "New Page Like",
    count: 0,
  },
  {
    id: 3,
    option: "Page Follower",
    count: 0,
  },
  {
    id: 4,
    option: "Like",
    count: 0,
  },
  {
    id: 5,
    option: "Comment",
    count: 0,
  },
  {
    id: 6,
    option: "Share",
    count: 0,
  },
  {
    id: 7,
    option: "Photo View",
    count: 0,
  },
];

const filterDate = [
  { id: 1, name: "Last 7 days" },
  { id: 2, name: "Last 15 days" },
  { id: 3, name: "Last 30 days" },
];

const Overview = () => {
  return (
    <>
      <div className="head-area d-center justify-content-between mb-5">
        <h5>Overview</h5>
        <div className="input-area py-2">
          {/* Select */}
          <Select data={filterDate} />
        </div>
      </div>
      <div className="single-box d-grid gap-4 p-5">
        {overviewData.map((itm) => (
          <div
            key={itm.id}
            className="d-center top-review-wrapper overview-area pb-4 justify-content-between"
          >
            <div className="left-side">
              <div className="profile-item">
                <div className="text-area text-start">
                  <h6 className="m-0">{itm.option}</h6>
                </div>
              </div>
            </div>
            <div className="right-side d-center">
              <h5 className="m-0">{itm.count}</h5>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Overview;
