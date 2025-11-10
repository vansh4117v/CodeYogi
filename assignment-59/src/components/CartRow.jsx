const CartRow = ({ item, onRemove, onQuantityChange }) => {
  return (
    <tr className="border-b">
      <td className="p-6">
        <button
          onClick={() => onRemove(item.id)}
          className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded-full text-gray-400"
        >
          X
        </button>
      </td>
      <td className="py-6">
        <img src={item.image} className="w-20 h-20 object-cover rounded" />
      </td>
      <td className="py-6">
        <h3 className="text-red-500 font-medium">{item.title}</h3>
      </td>
      <td className="py-6 text-gray-700">${item.price}</td>
      <td className="py-6">
        <input
          type="number"
          min="1"
          value={item.quantity}
          onChange={(e) => onQuantityChange(item.id, parseInt(e.target.value) || 1)}
          className="w-20 px-3 py-2 border border-gray-300 rounded text-center focus:outline-none focus:border-gray-400"
        />
      </td>
      <td className="py-6 text-gray-900 font-semibold">
        ${(parseFloat(item.price) * item.quantity).toFixed(2)}
      </td>
    </tr>
  );
};

export default CartRow;
