const CommentAction = () => {
  return (
    <>
      <button
        type="button"
        className="dropdown-btn"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i className="material-symbols-outlined fs-xxl m-0">more_horiz</i>
      </button>
      <ul className="dropdown-menu p-4 pt-2">
        <li>
          <button className="droplist d-flex align-items-center gap-2">
            <i className="material-symbols-outlined mat-icon">hide_source</i>
            <span>Hide Comments</span>
          </button>
        </li>
        <li>
          <button className="droplist d-flex align-items-center gap-2">
            <i className="material-symbols-outlined mat-icon">flag</i>
            <span>Report Comments</span>
          </button>
        </li>
      </ul>
    </>
  );
};

export default CommentAction;
