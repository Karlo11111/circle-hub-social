import Image, { StaticImageData } from "next/image";

interface SingleChatProps {
  id: number;
  user_name: string;
  user_avt: StaticImageData;
  number_of_message: number | null;
  last_message: string;
  clss: string;
}

const SingleChat = ({ data }: { data: SingleChatProps }) => {
  const { clss, id, last_message, number_of_message, user_avt, user_name } =
    data;

  return (
    <div
      className={`text-start d-flex justify-content-between chat-single p-4 mb-2 ${
        id === 1 ? "active" : ""
      }`}
    >
      <div className="d-flex gap-2 align-items-center">
        <div className="avatar">
          <Image className="avatar-img max-un" src={user_avt} alt="avatar" />
        </div>
        <div className="text-area">
          <div className="title-area position-relative d-inline-flex align-items-center">
            <h6 className="m-0 d-inline-flex">{user_name}</h6>
            {number_of_message && (
              <span className="abs-area position-absolute d-center mdtxt">
                {number_of_message}
              </span>
            )}
          </div>
          <p className={`mdtxt ${clss}`}>{last_message}</p>
        </div>
      </div>
      <div className="btn-group cus-dropdown dropend">
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
              <i className="material-symbols-outlined mat-icon">
                person_remove
              </i>
              <span>Unfollow</span>
            </button>
          </li>
          <li>
            <button className="droplist d-flex align-items-center gap-2">
              <i className="material-symbols-outlined mat-icon">hide_source</i>
              <span>Hide Contact</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SingleChat;
