const Info = () => {
  return (
    <div className="sidebar-area p-5">
      <div className="mb-3">
        <h6 className="d-inline-flex">Info</h6>
      </div>
      <ul className="d-grid gap-2 mt-5">
        <li className="d-flex align-items-center gap-2">
          <i className="material-symbols-outlined mat-icon">schedule</i>
          <span className="mdtxt">Page- Travel Agency</span>
        </li>
        <li className="d-flex align-items-center gap-2">
          <i className="material-symbols-outlined mat-icon">language</i>
          <span className="mdtxt">Public</span>
        </li>
        <li className="d-flex align-items-center gap-2">
          <i className="material-symbols-outlined mat-icon">flag</i>
          <span className="mdtxt link">test@mail.com</span>
        </li>
        <li className="d-flex align-items-center gap-2">
          <i className="material-symbols-outlined mat-icon">language</i>
          <span className="mdtxt link">www.wisoky.com</span>
        </li>
        <li className="d-flex align-items-center gap-2">
          <i className="material-symbols-outlined mat-icon">call</i>
          <span className="mdtxt">(316) 555-0116</span>
        </li>
      </ul>
    </div>
  );
};

export default Info;
