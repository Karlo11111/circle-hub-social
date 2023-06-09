import Image from "next/image";
import Link from "next/link";
import avatar_2 from "/public/images/avatar-2.png";
import avatar_3 from "/public/images/avatar-3.png";
import avatar_4 from "/public/images/avatar-4.png";

const AboutTab = () => {
  return (
    <div className="row gap-5 gap-xl-0">
      <div className="col-xl-7">
        <div className="friends-list d-flex gap-3 align-items-center text-center">
          <ul className="d-flex align-items-center justify-content-center">
            <li>
              <Image src={avatar_2} alt="image" />
            </li>
            <li>
              <Image src={avatar_3} alt="image" />
            </li>
            <li>
              <Image src={avatar_4} alt="image" />
            </li>
          </ul>
          <span className="mdtxt d-center">476 People Going</span>
        </div>
        <ul className="d-grid gap-2 my-5">
          <li className="d-flex align-items-center gap-2">
            <i className="material-symbols-outlined mat-icon">schedule</i>
            <span className="mdtxt">6 Day</span>
          </li>
          <li className="d-flex align-items-center gap-2">
            <i className="material-symbols-outlined mat-icon">flag</i>
            <span className="mdtxt">Event by PLM (People Love Music)</span>
          </li>
          <li className="d-flex align-items-center gap-2">
            <i className="material-symbols-outlined mat-icon">language</i>
            <span className="mdtxt">Public</span>
          </li>
        </ul>
        <h5 className="time-schedule">DEC 2, 2022 AT 10:30 - 7:30 PM</h5>
        <div className="description-box mt-4">
          <p className="mdtxt">
            Are you missing the festive vibe toward the end of the year? ITCRC
            is thrilled to announce that it has organized the year&#39;s largest
            online event, Kings Outfit Presents TechnoGaze 1.0 powered by UVTR
            So sharpen your skills and prepare to be a part of this event while
            also enjoying the festive atmosphere.
          </p>
          <div className="segment-area mt-7">
            <p className="mdtxt">The event will have some amazing segments:</p>
            <ul className="mdtxt">
              <li>Programming contest</li>
              <li>Graphics Design</li>
              <li>Gaming (Brawlhalla)</li>
              <li>Tech Quiz & IT Olympiad</li>
              <li>PowerPoint Presentation.</li>
            </ul>
            <p className="mdtxt">Wants to energize the vibe?</p>
            <p className="mdtxt">
              Winners will be given certificate, crests & many more.
            </p>
          </div>
        </div>
      </div>
      <div className="col-xl-5">
        <div className="find-tickets p-5">
          <h6 className="head-area">Tickets</h6>
          <Link href="#" className="cmn-btn mt-5 mb-4 w-100 d-center gap-1">
            <i className="material-symbols-outlined mat-icon">add</i>
            Find Tickets
          </Link>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d142723.46117209745!2d-122.36259993497053!3d37.7719269407752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1677037248094!5m2!1sen!2sbd"></iframe>
          <p className="mdtxt">{"International Convention City, (ICCB)"}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutTab;
