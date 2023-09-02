import Item from "./Item";
import React, { useState } from "react";
export default function PackingList({
  items,
  onDeleteItem,
  onTOggleitems,
  setitem,
}) {
  const [sortBy, setSortby] = useState("input");

  let sortedItems;

  if (sortBy === "input") {
    sortedItems = items;
  }
  if (sortBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sortBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onTOggleitems={onTOggleitems}
            key={item.id}
          />
        ))}
      </ul>

      <div className="actions" onChange={(e) => setSortby(e.target.value)}>
        <select value={sortBy}>
          <option value="input"> sort by input order</option>
          <option value="description"> sort by description order</option>
          <option value="packed"> sort by packed status order</option>
        </select>

        <button
          onClick={() => {
            if (window.confirm("Are you sure you want to delete all  items?")) {
              setitem([]);
            }
          }}
        >
          Clear List
        </button>
      </div>
    </div>
  );
}
