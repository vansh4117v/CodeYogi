import CartRow from "./CartRow";

const CartList = ({ cartItems, onRemove, onQuantityChange }) => {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="py-4 px-6 text-left text-sm font-semibold text-gray-600"></th>
            <th className="py-4 px-6 text-left text-sm font-semibold text-gray-600"></th>
            <th className="py-4 px-6 text-left text-sm font-semibold text-gray-600">Product</th>
            <th className="py-4 px-6 text-left text-sm font-semibold text-gray-600">Price</th>
            <th className="py-4 px-6 text-left text-sm font-semibold text-gray-600">Quantity</th>
            <th className="py-4 px-6 text-left text-sm font-semibold text-gray-600">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <CartRow
              key={item.id}
              item={item}
              onRemove={onRemove}
              onQuantityChange={onQuantityChange}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CartList;
