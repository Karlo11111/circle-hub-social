import ActivityModal from "./ActivityModal";
import LiveModal from "./LiveModal";
import PhotoModal from "./PhotoModal";

const privacySelect = [
  { id: 1, name: "Public" },
  { id: 2, name: "Only Me" },
  { id: 3, name: "Friends" },
  { id: 4, name: "Custom" },
];

const PostPopups = () => {
  return (
    <>
      {/* Go Live Popup start  */}
      <LiveModal />
      {/* Go Live Popup end  */}

      {/* Photo/Video popup start  */}
      <PhotoModal />
      {/* Photo/Video popup end  */}

      {/* Fallings/Activity Popup start  */}
      <ActivityModal />
      {/* Fallings/Activity Popup end  */}
    </>
  );
};

export default PostPopups;
