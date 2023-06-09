import Image from "next/image";
import Link from "next/link";
import Select from "../select/Select";
import avatar_1 from "/public/images/avatar-1.png";

const privacy = [
  { id: 1, name: "Choose Privacy" },
  { id: 2, name: "Privacy One" },
  { id: 3, name: "Privacy Two" },
  { id: 4, name: "Privacy Three" },
];

const GroupCreateForm = () => {
  return (
    <div className="profile-sidebar cus-scrollbar p-5">
      <div className="d-block d-lg-none position-absolute end-0 top-0">
        <button className="button profile-close">
          <i className="material-symbols-outlined mat-icon fs-xl">close</i>
        </button>
      </div>
      <div className="head-area mb-5">
        <h5>Create Group</h5>
      </div>
      <div className="profile-picture d-flex gap-2 mb-5 align-items-center">
        <div className="avatar position-relative">
          <Image className="avatar-img max-un" src={avatar_1} alt="avatar" />
        </div>
        <div className="text-area">
          <h6 className="m-0 mb-1">
            <Link href="/profile/post">Lerio Mao</Link>
          </h6>
          <p className="mdtxt">Admin</p>
        </div>
      </div>
      <form action="#" className="text-center d-grid gap-4">
        <div className="input-area second">
          <input type="text" placeholder="Group name" required />
        </div>
        <div className="input-area second">
          {/* Select */}
          <Select data={privacy} />
        </div>
        <div className="input-area second">
          <input type="text" placeholder="Invite Friends" required />
        </div>
        <div className="btn-area">
          <Link href="/group-create-2" className="cmn-btn">
            Create Group
          </Link>
        </div>
      </form>
    </div>
  );
};

export default GroupCreateForm;
