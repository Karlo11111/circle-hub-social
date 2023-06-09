import CrudAction from "../ui/CrudAction";
import PrivacyAction from "../ui/PrivacyAction";

const bioData = [
  {
    id: 1,
    type: "Associate Creative Director – Experience Design",
    icon: "work",
    class: "",
  },
  {
    id: 2,
    type: "Former Designer at TECHTEK",
    icon: "work",
    class: "",
  },
  {
    id: 3,
    type: "Former Designer at Telpino",
    icon: "work",
    class: "link",
  },
  {
    id: 4,
    type: "Master's degree",
    icon: "school",
    class: "link",
  },
  {
    id: 5,
    type: "Honors (English)",
    icon: "school",
    class: "",
  },
  {
    id: 6,
    type: "Religione",
    icon: "auto_awesome",
    class: "",
  },
  {
    id: 7,
    type: "Relationship (Single)",
    icon: "favorite",
    class: "",
  },
];

const Bio = () => {
  return (
    <ul className="d-grid gap-3 mt-5">
      {bioData.map((itm) => (
        <li key={itm.id} className="d-center gap-3 justify-content-between">
          <div className="info-area d-flex text-start align-items-center gap-2">
            <i className="material-symbols-outlined mat-icon">{itm.icon}</i>
            <span className="mdtxt">{itm.type}</span>
          </div>
          <div className="input-item d-center text-start">
            {/* Privacy Action */}
            <PrivacyAction />

            {/* Crud Action */}
            <CrudAction />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Bio;
