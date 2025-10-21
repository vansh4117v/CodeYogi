import { useState } from "react";

const Table = () => {
  const [num, setNum] = useState(2);
  return (
    <div>
      <button onClick={() => setNum(num + 1)} className="bg-blue-500 text-white px-4 py-2 rounded">Next</button>
      <div>
        {Array.from({ length: 10 }).map((_, index) => (
          <p key={index} className="">
            {`${num} x ${index + 1} = ${num * (index + 1)}`}
          </p>
        ))}
      </div>
    </div>
  );
};
export default Table;
