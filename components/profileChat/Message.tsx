import Image from "next/image";
import Link from "next/link";
import avatar_1 from "/public/images/avatar-1.png";
import avatar_2 from "/public/images/avatar-2.png";

const Message = () => {
  return (
    <div className="main">
      <div className="chat-head py-4 px-5 d-center justify-content-between">
        <div className="d-flex gap-4 align-items-center">
          <Image src={avatar_2} alt="image" />
          <div className="profile-status">
            <h5 className="m-0">
              <Link href="/public-profile/post" className="m-0">
                Piter Maio
              </Link>
            </h5>
            <span className="mdtxt">online</span>
          </div>
        </div>
        <div className="d-flex gap-3 align-items-center">
          <Link href="#">
            <i className="material-symbols-outlined mat-icon fw-600">call</i>
          </Link>
          <Link href="#">
            <i className="material-symbols-outlined mat-icon">videocam</i>
          </Link>
        </div>
      </div>
      <ul className="py-4 px-5 cus-scrollbar bottom-0 main-chat-box">
        <li className="you">
          <div className="entete">
            <Image src={avatar_2} alt="image" />
          </div>
          <div className="message">
            <p>Hello! Have you seen my backpack anywhere in office?</p>
            <span className="mdtxt">10:42</span>
          </div>
        </li>
        <li className="me">
          <div className="message">
            <p>No, There is no backpack in office.</p>
            <span className="mdtxt">10:43</span>
          </div>
          <div className="entete">
            <Image src={avatar_1} alt="image" />
          </div>
        </li>
        <li className="me">
          <div className="message">
            <p>Thank you for work, see you!</p>
            <span className="mdtxt">10:43</span>
          </div>
          <div className="entete">
            <Image src={avatar_1} alt="image" />
          </div>
        </li>
        <li className="you">
          <div className="entete">
            <Image src={avatar_2} alt="image" />
          </div>
          <div className="message">
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <span className="mdtxt">10:44</span>
          </div>
        </li>
        <li className="me">
          <div className="message">
            <p>Many desktop publishing packages and web page editors now</p>
            <span className="mdtxt">10:45</span>
          </div>
          <div className="entete">
            <Image src={avatar_1} alt="image" />
          </div>
        </li>
        <li className="you">
          <div className="entete">
            <Image src={avatar_2} alt="image" />
          </div>
          <div className="message">
            <p>A page when looking at its layout.</p>
            <span className="mdtxt">10:46</span>
          </div>
        </li>
        <li className="me">
          <div className="message">
            <p>It was nice talking to you</p>
            <span className="mdtxt">10:47</span>
          </div>
          <div className="entete">
            <Image src={avatar_1} alt="image" />
          </div>
        </li>
        <li className="you">
          <div className="entete">
            <Image src={avatar_2} alt="image" />
          </div>
          <div className="message">
            <p>What time is it?</p>
            <span className="mdtxt">10:48</span>
          </div>
        </li>
        <li className="me">
          <div className="message">
            <p>It is 11 o&#39;clock</p>
            <span className="mdtxt">11:00</span>
          </div>
          <div className="entete">
            <Image src={avatar_1} alt="image" />
          </div>
        </li>
        <li className="you">
          <div className="entete">
            <Image src={avatar_2} alt="image" />
          </div>
          <div className="message">
            <p>I am late</p>
            <span className="mdtxt">11:42</span>
          </div>
        </li>
        <li className="me">
          <div className="message">
            <p>I have to go now</p>
            <span className="mdtxt">11:45</span>
          </div>
          <div className="entete">
            <Image src={avatar_1} alt="image" />
          </div>
        </li>
        <li className="you">
          <div className="entete">
            <Image src={avatar_2} alt="image" />
          </div>
          <div className="message">
            <p>Are you okay?</p>
            <span className="mdtxt">10:48</span>
          </div>
        </li>
        <li className="you">
          <div className="entete">
            <Image src={avatar_2} alt="image" />
          </div>
          <div className="message">
            <p>Can I help you?</p>
            <span className="mdtxt">10:49</span>
          </div>
        </li>
      </ul>
      <div className="m-4 text-end chat-footer">
        <form action="#" className="py-2 pt-1 px-5">
          <div className="d-flex align-items-sm-center align-items-end flex-column flex-sm-row mt-2 gap-3">
            <div className="form-content p-0 d-flex gap-2 align-items-center w-100">
              <div className="file-input d-flex gap-1 gap-md-2">
                <div className="file-upload">
                  <label className="file">
                    <input type="file" />
                    <span className="file-custom border-0 d-grid text-center">
                      <span className="material-symbols-outlined rotateInDownLeft mat-icon fs-xxl">
                        attachment
                      </span>
                    </span>
                  </label>
                </div>
                <div className="file-upload">
                  <label className="file">
                    <input type="file" />
                    <span className="file-custom border-0 d-grid text-center">
                      <span className="material-symbols-outlined mat-icon fs-xxl">
                        perm_media
                      </span>
                    </span>
                  </label>
                </div>
                <div className="file-upload">
                  <label className="file">
                    <input type="file" />
                    <span className="file-custom border-0 d-grid text-center">
                      <span className="material-symbols-outlined mat-icon fs-xxl">
                        gif_box
                      </span>
                    </span>
                  </label>
                </div>
              </div>
              <input className="py-2" placeholder="Type your message here.." />
            </div>
            <div className="btn-area">
              <button className="cmn-btn px-2 px-sm-5 px-lg-6">Send</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Message;
