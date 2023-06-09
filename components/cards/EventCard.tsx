import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import ContactAction from "../ui/ContactAction";

interface EventCardProps {
  id: number;
  title: string;
  published: string;
  place: string;
  img: StaticImageData;
}

const EventCard = ({ data }: { data: EventCardProps }) => {
  const { id, img, place, published, title } = data;

  return (
    <div className="single-box p-5">
      <div className="avatar-box position-relative">
        <Image className="avatar-img w-100" src={img} alt="avatar" />
        <div className="abs-area w-100 position-absolute top-0 p-3 d-center justify-content-between">
          <span className="date-area mdtxt">{published}</span>
          {/* Contact Action */}
          <ContactAction
            actionList={[
              ["Unfollow", "person_remove"],
              ["Hide", "hide_source"],
            ]}
          />
        </div>
      </div>
      <Link href={`/event/${id}`}>
        <h6 className="m-0 mt-4">{title}</h6>
      </Link>
      <span className="smtxt city-area">{place}</span>
      <div className="d-center gap-2 mt-4">
        <button className="cmn-btn">interested</button>
        <button className="cmn-btn alt third">Share</button>
      </div>
    </div>
  );
};

export default EventCard;
