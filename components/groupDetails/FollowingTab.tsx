import followData from "@/data/followData";
import FollowCard from "../cards/FollowCard";

const FollowingTab = () => {
  return (
    <>
      <div className="search-area d-center my-7 flex-wrap gap-2 justify-content-between">
        <div className="total-followers">
          <h6>30k Followers</h6>
        </div>
        <form
          action="#"
          className="d-flex align-items-stretch justify-content-between gap-4"
        >
          <div className="input-area py-2 w-100 gap-2 d-flex align-items-center">
            <i className="material-symbols-outlined mat-icon">search</i>
            <input type="text" placeholder="Search" />
          </div>
        </form>
      </div>
      <div className="row">
        {followData.slice(7, 14).map((data) => (
          <div key={data.id} className="col-md-6">
            {/* Follow Card  */}
            <FollowCard data={data} />
          </div>
        ))}
        <div className="col-12 my-5 text-center">
          <button className="cmn-btn alt third fw-600">Load More</button>
        </div>
      </div>
    </>
  );
};

export default FollowingTab;
