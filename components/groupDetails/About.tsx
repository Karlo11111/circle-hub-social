const About = () => {
  return (
    <div className="cus-scrollbar">
      <div className="sidebar-wrapper d-flex al-item flex-wrap justify-content-end justify-content-xl-center flex-column flex-md-row flex-xl-column flex gap-6">
        <div className="sidebar-area p-5">
          <div className="mb-3">
            <h6 className="d-inline-flex">About</h6>
          </div>
          <p className="mdtxt descript">
            Lorem ipsum dolor sit amet cons all Ofectetur. Pellentesque ipsum
            necat congue pretium cursus orci. It Commodo donec tellus lacus
            pellentesque sagittis habitant quam amet praesent.
          </p>
          <ul className="d-grid gap-2 mt-5">
            <li className="d-flex align-items-center gap-2">
              <i className="material-symbols-outlined mat-icon">schedule</i>
              <span className="mdtxt">Always</span>
            </li>
            <li className="d-flex align-items-center gap-2">
              <i className="material-symbols-outlined mat-icon">flag</i>
              <span className="mdtxt">31k Member</span>
            </li>
            <li className="d-flex align-items-center gap-2">
              <i className="material-symbols-outlined mat-icon">language</i>
              <span className="mdtxt">Public</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
