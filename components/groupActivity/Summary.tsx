const Summary = () => {
  return (
    <>
      <div className="summary-wrapper d-center p-5 justify-content-between">
        <div className="left-side">
          <div className="profile-item d-flex gap-3 align-items-center">
            <div className="icon-area d-center">
              <i className="material-symbols-outlined mat-icon fs-xl">
                post_add
              </i>
            </div>
            <div className="text-area text-start">
              <p>Post</p>
            </div>
          </div>
        </div>
        <div className="right-summary d-center">
          <h5 className="m-0">10</h5>
          <i className="material-symbols-outlined mat-icon fs-4">north_west</i>
        </div>
      </div>
      <div className="summary-wrapper d-center p-5 justify-content-between">
        <div className="left-side">
          <div className="profile-item d-flex gap-3 align-items-center">
            <div className="icon-area d-center">
              <i className="material-symbols-outlined mat-icon fs-xl">chat</i>
            </div>
            <div className="text-area text-start">
              <p>Comments</p>
            </div>
          </div>
        </div>
        <div className="right-summary d-center">
          <h5 className="m-0">10</h5>
          <i className="material-symbols-outlined mat-icon fs-4">north_west</i>
        </div>
      </div>
      <div className="summary-wrapper d-center p-5 justify-content-between">
        <div className="left-side">
          <div className="profile-item d-flex gap-3 align-items-center">
            <div className="icon-area d-center">
              <i className="material-symbols-outlined mat-icon fs-xl">
                favorite
              </i>
            </div>
            <div className="text-area text-start">
              <p>Reactions</p>
            </div>
          </div>
        </div>
        <div className="right-summary d-center">
          <h5 className="m-0">10</h5>
          <i className="material-symbols-outlined mat-icon fs-4">north_west</i>
        </div>
      </div>
    </>
  );
};

export default Summary;
