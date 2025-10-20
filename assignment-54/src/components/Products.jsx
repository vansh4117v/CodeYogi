import { products } from "../products";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-end mb-6">
          <select className="border border-gray-300 rounded px-4 py-2 text-sm text-gray-600 focus:outline-none">
            <option>Default sorting</option>
          </select>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="flex gap-2">
          <button className="w-10 h-10 flex items-center justify-center bg-red-500 text-white rounded font-medium">
            1
          </button>
          <button className="w-10 h-10 flex items-center justify-center border border-gray-300 text-gray-700 rounded">
            2
          </button>
          <button className="w-10 h-10 flex items-center justify-center border border-gray-300 text-gray-700 rounded">
            →
          </button>
        </div>
      </div>
    </div>
  );
};
export default Products;
