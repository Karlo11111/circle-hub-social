import Image from "next/image";
import Link from "next/link";
import shortcuts_1 from "/public/images/shortcuts-1.png";
import shortcuts_2 from "/public/images/shortcuts-2.png";
import shortcuts_3 from "/public/images/shortcuts-3.png";
import shortcuts_4 from "/public/images/shortcuts-4.png";

const shortcutsData = [
  {
    id: 1,
    img: shortcuts_1,
    title: "Game Community",
  },
  {
    id: 2,
    img: shortcuts_2,
    title: "Pixel Think (Member)",
  },
  {
    id: 3,
    img: shortcuts_3,
    title: "8 Ball Pool",
  },
  {
    id: 4,
    img: shortcuts_4,
    title: "Gembio",
  },
];

const Shortcuts = () => {
  return (
    <ul>
      {shortcutsData.map((itm) => (
        <li key={itm.id}>
          <Link
            href="/public-profile/post"
            className="d-flex align-items-center gap-3"
          >
            <Image src={itm.img} alt="icon" className="img-fluid" />
            <span>{itm.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Shortcuts;
