import groupData from "@/data/groupData";
import GroupCard from "../cards/GroupCard";

const MostMemberTab = () => {
  return (
    <div className="row cus-mar friend-request">
      {groupData.map((itm) => (
        <div key={itm.id} className="col-xl-4 col-sm-6 col-8">
          {/* Group Card  */}
          <GroupCard data={itm} />
        </div>
      ))}
    </div>
  );
};

export default MostMemberTab;
