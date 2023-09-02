export default function Stats({ items }) {
  if (items.length === 0) {
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </footer>
    );
  }
  const sizeofItem = items.length;
  const sizePacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((sizePacked / sizeofItem) * 100);
  if (percentage === 100) {
    return (
      <footer className="stats">
        <em> "You got everything! Ready to go✈️ " </em>
      </footer>
    );
  } else {
    return (
      <footer className="stats">
        <em>
          💝You have {sizeofItem} items on you list, and you already have packed{" "}
          {sizePacked} or {percentage}%{" "}
        </em>
      </footer>
    );
  }
}
