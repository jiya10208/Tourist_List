import React, { useState } from "react";
export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setCount] = useState(1);

  function handlesubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);
    onAddItems(newItem);
    setDescription("");
    setCount(1);
  }

  return (
    <form className="add-form" onSubmit={handlesubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      {/* for quantity  of the item that we need to take */}
      <select
        value={quantity}
        onChange={(e) => setCount(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      {/* text area for the name of the item */}
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button> Add</button>
    </form>
  );
}
