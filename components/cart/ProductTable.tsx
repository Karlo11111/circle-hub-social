"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import marketplace_img_1 from "/public/images/marketplace-img-1.png";
import marketplace_img_2 from "/public/images/marketplace-img-2.png";
import marketplace_img_3 from "/public/images/marketplace-img-3.png";

const productData = [
  {
    id: 1,
    product: "Men's Watch",
    img: marketplace_img_1,
    prize: "49.90",
    quantity: 1,
    total: "49.90",
  },
  {
    id: 2,
    product: "Digital Camera",
    img: marketplace_img_2,
    prize: "49.90",
    quantity: 1,
    total: "49.90",
  },
  {
    id: 3,
    product: "Laptop",
    img: marketplace_img_3,
    prize: "49.90",
    quantity: 1,
    total: "49.90",
  },
  {
    id: 4,
    product: "Digital Camera",
    img: marketplace_img_2,
    prize: "49.90",
    quantity: 1,
    total: "49.90",
  },
];

const ProductTable = () => {
  const [data, setData] = useState(productData);

  const incressQuantity = (id: any) => {
    const updateData = data.map((itm) => {
      if (itm.id === id) {
        const updateQuantity = itm.quantity < 0 ? 1 : itm.quantity + 1;

        return {
          ...itm,
          quantity: updateQuantity,
        };
      } else {
        return itm;
      }
    });

    setData(updateData);
  };

  const decreaseQuantity = (id: any) => {
    const updateData = data.map((itm) => {
      if (itm.id === id) {
        const updateQuantity = itm.quantity <= 1 ? 1 : itm.quantity - 1;

        return {
          ...itm,
          quantity: updateQuantity,
        };
      } else {
        return itm;
      }
    });

    setData(updateData);
  };

  const changeHandle = (e: any, id: any) => {
    const updateData = data.map((itm) => {
      if (itm.id === id) {
        return {
          ...itm,
          quantity: e.target.value * 1,
        };
      } else {
        return itm;
      }
    });

    setData(updateData);
  };

  useEffect(() => {
    setData(productData);
  }, []);

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Product</th>
          <th scope="col">Prize</th>
          <th scope="col">Quantity</th>
          <th scope="col">Total</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {data.map((product) => (
          <tr key={product.id}>
            <th scope="row">
              <span className="img-area">
                <Image src={product.img} alt="image" />
              </span>
              <span>{product.product}</span>
            </th>
            <td>${product.prize}</td>
            <td className="shop-content">
              <div className="d-flex gap-3 d-center">
                <div className="qtySelector px-4 px-3 d-inline-flex align-items-center text-center">
                  <i
                    className="fas fa-minus d-center decreaseQty"
                    onClick={() => decreaseQuantity(product.id)}
                  ></i>
                  <input
                    type="text"
                    className="qtyValue text-center m-0 xxltxt"
                    value={product.quantity}
                    onChange={(e) => changeHandle(e, product.id)}
                  />
                  <i
                    className="fas fa-plus d-center increaseQty"
                    onClick={() => incressQuantity(product.id)}
                  ></i>
                </div>
              </div>
            </td>
            <td>${(+product.prize * product.quantity).toFixed(2)}</td>
            <td>
              <button type="button" className="cart-dismiss">
                <i className="fas fa-trash-alt"></i>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
