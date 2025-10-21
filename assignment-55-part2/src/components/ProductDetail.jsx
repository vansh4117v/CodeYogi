import { useParams } from "react-router-dom";
import { products } from "../products";
import { useState } from "react";

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const handleQuantityChange = (e) => {
    let n = e.target.value;
    if (n === "") {
      setQuantity(""); // keep it empty while editing
      return;
    }
    n = parseInt(n);

    if (isNaN(n)) n = 1;
    if (n < 1) n = 1;
    setQuantity(n);
  }
  const product = products.find((p) => p.id === parseInt(id));
  return (
    <div classNameName="bg-gray-200">
      <div className="mx-auto mt-4 flex bg-white shadow-md max-w-5xl">
        <div className="w-1/2 flex items-center justify-center p-8 pr-0">
          <img src={product.image} className="w-full" />
        </div>
        <div className="w-1/2 p-12">
          <h1 className="text-3xl text-gray-700 mb-6">{product.title}</h1>
          <p className="text-xl font-semibold text-gray-800 mb-6">${product.price}</p>
          <p className="text-gray-600 text-base leading-relaxed mb-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi nulla praesentium, ex
            delectus nesciunt officiis asperiores, ducimus, aliquam nemo animi sunt consectetur
            consequatur!
          </p>
          <div className="flex items-center gap-4">
            <input
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              min="1"
              className="w-20 border-2 border-gray-300 rounded px-4 py-2 text-lg"
            />
            <button className="cursor-pointer flex-1 bg-red-500 text-white px-8 py-3 rounded-lg text-lg font-semibold">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetail;
