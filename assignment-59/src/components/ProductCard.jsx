import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product);
    alert(`${product.title} added to cart!`);
  };

  return (
    <div
      onClick={() => {
        navigate(`/${product.id}`);
      }}
      className="bg-white border border-gray-200 rounded hover:shadow-lg relative"
    >
      {product.onSale && (
        <span className="absolute top-1.5 right-1.5 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full z-10">
          Sale!
        </span>
      )}
      <div>
        <img src={product.image} className="w-full object-cover" />
      </div>
      <div className="p-2.5">
        <p className="text-xs text-gray-500 uppercase mb-0.5">{product.category}</p>
        <h3 className="text-sm text-gray-800 mb-1 cursor-pointer min-h-[2rem]">{product.title}</h3>
        <div className="flex items-center mb-1.5">
          {Array.from({ length: 5 }, (_, i) => (
            <span
              key={i}
              className={`text-lg ${i < product.rating ? "text-orange-400" : "text-gray-300"}`}
            >
              ☆
            </span>
          ))}
        </div>
        <div className="flex items-center gap-1.5">
          {product.originalPrice && (
            <span className="text-xs text-gray-400 line-through">${product.originalPrice}</span>
          )}
          <span className="text-lg font-semibold text-gray-900">${product.price}</span>
        </div>
        <button
          onClick={handleAddToCart}
          className="mt-2 w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 text-sm font-medium"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
