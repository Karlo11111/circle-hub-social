const CrudAction = () => {
  return (
    <div className="group-btn cus-dropdown dropend">
      <button
        type="button"
        className="dropdown-btn d-center ps-2"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i className="material-symbols-outlined fs-xxl m-0">more_horiz</i>
      </button>
      <ul className="dropdown-menu p-4 pt-2">
        <li>
          <button className="droplist d-flex align-items-center gap-2">
            <i className="material-symbols-outlined mat-icon">edit</i>
            <span>Edit</span>
          </button>
        </li>
        <li>
          <button className="droplist d-flex align-items-center gap-2">
            <i className="material-symbols-outlined mat-icon">delete</i>
            <span>Delete</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default CrudAction;
