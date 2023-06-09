import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ProductProps {
  id: number;
  name: string;
  price: number;
  img: StaticImageData;
  author_name: string;
  author_img: StaticImageData;
  brand: string;
}

const ProductCard = ({ data }: { data: ProductProps }) => {
  const { author_img, author_name, brand, id, img, name, price } = data;

  return (
    <div className="single-box marketplace-item p-2 p-sm-5">
      <div className="avatar-area position-relative">
        <Image className="avatar-img w-100" src={img} alt="avatar" />
        <h5 className="position-absolute price-box">${price}</h5>
      </div>
      <div className="info-box mt-12 text-start">
        <Link href={`/marketplace/${id}`}>
          <h5>{name}</h5>
        </Link>
      </div>
      <div className="head-area mt-5 d-flex justify-content-between">
        <div className="d-flex w-100 gap-3 align-items-center justify-content-between">
          <div className="d-flex gap-3 align-items-center">
            <div className="avatar-item">
              <Image
                className="avatar-img max-un"
                src={author_img}
                alt="avatar"
              />
            </div>
            <div className="text-area text-start">
              <h6 className="m-0 mb-1">
                <Link href="/public-profile/post">{author_name}</Link>
              </h6>
              <p className="mdtxt">{brand}</p>
            </div>
          </div>
          <div className="star-area">
            <button type={"button"}>
              <i className="fas fa-star"></i>
            </button>
            <button type={"button"}>
              <i className="fas fa-star"></i>
            </button>
            <button type={"button"}>
              <i className="fas fa-star"></i>
            </button>
            <button type={"button"}>
              <i className="fas fa-star"></i>
            </button>
            <button type={"button"}>
              <i className="fas fa-star"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
