import React, { useState } from "react";

import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./Packinglist";
import Stats from "./Stats";

export default function App() {
  const [items, setitem] = useState([]);

  function handleAddItem(item) {
    setitem((items) => [...items, item]);
  }
  function handleDeleteItem(id) {
    setitem((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleItem(id) {
    setitem((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="">
      <Logo />
      <Form onAddItems={handleAddItem} />
      <PackingList
        items={items}
        setitem={setitem}
        onDeleteItem={handleDeleteItem}
        onTOggleitems={handleToggleItem}
      />
      <Stats items={items} />
    </div>
  );
}
