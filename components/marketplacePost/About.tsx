const bioData = [
  {
    id: 1,
    type: "Developer",
    icon: "integration_instructions",
    class: "",
  },
  {
    id: 2,
    type: "Master's degree",
    icon: "school",
    class: "",
  },
  {
    id: 3,
    type: "test@mail.com",
    icon: "flag",
    class: "link",
  },
  {
    id: 4,
    type: "www.wisoky.com",
    icon: "language",
    class: "link",
  },
  {
    id: 5,
    type: "(316) 555-0116",
    icon: "call",
    class: "",
  },
  {
    id: 6,
    type: "USA",
    icon: "pin_drop",
    class: "",
  },
  {
    id: 7,
    type: "775 Rolling Green Rd.",
    icon: "house",
    class: "",
  },
];

const About = () => {
  return (
    <>
      <div className="d-inline-block d-lg-none">
        <button className="button profile-active mb-4 mb-lg-0 d-flex align-items-center gap-2">
          <i className="material-symbols-outlined mat-icon"> tune </i>
          <span>My profile</span>
        </button>
      </div>
      <div className="profile-sidebar cus-scrollbar max-width p-5">
        <div className="d-block d-lg-none position-absolute end-0 top-0">
          <button className="button profile-close">
            <i className="material-symbols-outlined mat-icon fs-xl">close</i>
          </button>
        </div>
        <div className="sidebar-area">
          <div className="mb-3">
            <h6 className="d-inline-flex">About</h6>
          </div>
          <p className="mdtxt descript">
            Lorem ipsum dolor sit amet cons all Ofectetur. Pellentesque ipsum
            necat congue pretium cursus orci. It Commodo donec tellus lacus
            pellentesque sagittis habitant quam amet praesent.
          </p>
        </div>
        <div className="sidebar-area mt-5">
          <div className="mb-2">
            <h6 className="d-inline-flex">Info</h6>
          </div>
          <ul className="d-grid gap-2 mt-4">
            {bioData.map((itm) => (
              <li key={itm.id} className="d-flex align-items-center gap-2">
                <i className="material-symbols-outlined mat-icon">{itm.icon}</i>
                <span className={`mdtxt ${itm.class}`}>{itm.type}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default About;
