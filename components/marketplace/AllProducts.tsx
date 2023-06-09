import productData from "@/data/productData";
import ProductCard from "../cards/ProductCard";

const AllProducts = () => {
  return (
    <>
      {productData.map((product) => (
        <div key={product.id} className="col-xl-6 col-lg-8 col-md-6">
          {/* Product Card */}
          <ProductCard data={product} />
        </div>
      ))}
    </>
  );
};

export default AllProducts;
