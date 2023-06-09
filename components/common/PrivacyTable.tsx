import Select from "../select/Select";

const followerPrivacy = [
  { id: 1, name: "Public" },
  { id: 2, name: "Private" },
];
const memberPrivacy = [
  { id: 1, name: "Public" },
  { id: 2, name: "Private" },
];
const postPrivacy = [
  { id: 1, name: "Public" },
  { id: 2, name: "Private" },
];
const requestPrivacy = [
  { id: 1, name: "Public" },
  { id: 2, name: "Private" },
];

const PrivacyTable = () => {
  return (
    <>
      <div className="table-responsive overflow-visible text-start">
        <table className="table group-privacy-table m-0">
          <thead>
            <tr>
              <th scope="col">
                <span>General Info</span>
              </th>
              <th className="text-start" scope="col">
                <span>Visibility</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <p className="m-0">Group Follower</p>
              </th>
              <td>
                <div className="input-area w-100 py-2">
                  {/* Select */}
                  <Select data={followerPrivacy} />
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <p className="m-0">Group Member</p>
              </th>
              <td>
                <div className="input-area w-100 py-2">
                  {/* Select */}
                  <Select data={memberPrivacy} />
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <p className="m-0">Post</p>
              </th>
              <td>
                <div className="input-area w-100 py-2">
                  {/* Select */}
                  <Select data={postPrivacy} />
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <p className="m-0">Member Request</p>
              </th>
              <td>
                <div className="input-area w-100 py-2">
                  {/* Select */}
                  <Select data={requestPrivacy} />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="btn-area mt-6 text-end">
        <button type="submit" className="cmn-btn">
          Saved Change
        </button>
      </div>
    </>
  );
};

export default PrivacyTable;
