import Image from "next/image";
import Link from "next/link";
import avatar_1 from "/public/images/avatar-1.png";
import avatar_2 from "/public/images/avatar-2.png";
import avatar_3 from "/public/images/avatar-3.png";
import avatar_4 from "/public/images/avatar-4.png";

const blockedMembersData = [
  {
    id: 1,
    img: avatar_1,
    name: "Jerome Bell",
    blocked_date: "27/08/2022",
  },
  {
    id: 2,
    img: avatar_2,
    name: "Piter Maio",
    blocked_date: "26/08/2022",
  },
  {
    id: 3,
    img: avatar_3,
    name: "Floyd Miles",
    blocked_date: "26/08/2022",
  },
  {
    id: 4,
    img: avatar_4,
    name: "Devon Lane",
    blocked_date: "26/08/2022",
  },
];

const BlockedMembers = () => {
  return (
    <div className="table-responsive">
      <div className="title-area mb-3">
        <h6>Blocked Member</h6>
      </div>
      <table className="table m-0">
        <tbody>
          {blockedMembersData.map((member) => (
            <tr key={member.id}>
              <th scope="row">
                <div className="d-flex gap-3 align-items-center">
                  <div className="avatar-item">
                    <Image
                      className="avatar-img max-un"
                      src={member.img}
                      alt="avatar"
                    />
                  </div>
                  <Link href="/public-profile/post" className="text-area">
                    <p className="m-0">{member.name}</p>
                  </Link>
                </div>
              </th>
              <td>
                <p className="blocked">Blocked {member.blocked_date}</p>
              </td>
              <td>
                <div className="btn-area d-flex justify-content-end gap-3">
                  <button className="cmn-btn">Unblock</button>
                  <button className="d-center cmn-btn alt px-2">
                    <i className="material-symbols-outlined"> delete </i>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BlockedMembers;
