import ChatOption from "./ChatOption";
import Message from "./Message";

const ProfileChatMain = () => {
  return (
    <main className="main-content">
      <div className="container">
        <div className="row">
          <div className="col-xxl-3 col-xl-4 col-lg-4 pe-0">
            {/* Chat Option */}
            <ChatOption />
          </div>
          <div className="col-xxl-9 col-xl-8 col-lg-8 ps-4 ps-lg-0 d-flex flex-column gap-7">
            <div className="chat-area">
              {/* Message */}
              <Message />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProfileChatMain;
