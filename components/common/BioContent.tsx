import CrudAction from "../ui/CrudAction";
import PrivacyAction from "../ui/PrivacyAction";

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

const BioContent = () => {
  return (
    <div className="single-box p-3 p-sm-5">
      <div className="head-area text-start">
        <h6>Bio</h6>
        <p className="mdtxt mt-6">
          “Lorem ipsum dolor sit amet consectetur. Nec donec vestibulum eleifend
          lectus ipsum ultrices et dictum”.
        </p>
      </div>
      <ul className="d-grid gap-3 mt-4">
        {bioData.map((itm) => (
          <li key={itm.id} className="d-center gap-3 justify-content-between">
            <div className="info-area d-flex align-items-center gap-2">
              <i className="material-symbols-outlined mat-icon">{itm.icon}</i>
              <span className={`mdtxt ${itm.class}`}>{itm.type}</span>
            </div>
            <div className="input-item d-center text-start">
              {/* Privacy Action */}
              <PrivacyAction />

              {/* Bio Action */}
              <CrudAction />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BioContent;
