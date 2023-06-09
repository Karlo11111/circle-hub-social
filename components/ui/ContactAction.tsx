const ContactAction = ({ actionList }: { actionList: string[][] }) => {
  return (
    <div className="btn-group cus-dropdown dropend">
      <button
        type="button"
        className="d-flex dropdown-btn px-2"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i className="material-symbols-outlined fs-xxl m-0">more_horiz</i>
      </button>
      <ul className="dropdown-menu p-4 pt-2">
        {actionList?.map(([itm, icon], i) => (
          <li key={i}>
            <button className="droplist d-flex align-items-center gap-2">
              <i className="material-symbols-outlined mat-icon">{icon}</i>
              <span>{itm}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactAction;
