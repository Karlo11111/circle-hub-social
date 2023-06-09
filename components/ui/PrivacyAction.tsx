const PrivacyAction = () => {
  return (
    <div className="group-btn cus-dropdown dropend">
      <button
        type="button"
        className="dropdown-btn d-center"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i className="material-symbols-outlined fs-3 m-0">public</i>
      </button>
      <ul className="dropdown-menu p-4 pt-2">
        <li>
          <button className="droplist d-flex align-items-center gap-2">
            <i className="material-symbols-outlined mat-icon">public</i>
            <span>Public</span>
          </button>
        </li>
        <li>
          <button className="droplist d-flex align-items-center gap-2">
            <i className="material-symbols-outlined mat-icon">person</i>
            <span>Only me</span>
          </button>
        </li>
        <li>
          <button className="droplist d-flex align-items-center gap-2">
            <i className="material-symbols-outlined mat-icon">share</i>
            <span>Share</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default PrivacyAction;
