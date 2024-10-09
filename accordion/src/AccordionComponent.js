import { useState } from "react";
function AccordionComponent({ items }) {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleToggle = (index) => {
    setSelectedItem(index === selectedItem ? null : index);
  };

  return (
    <div>
      {items.map((item, idx) => {
        return (
          <div style={{ marginBottom: "1rem" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "1rem",
              }}
            >
              <button
                onClick={() => handleToggle(idx)}
                style={{
                  cursor: "pointer",
                }}
              >
                {selectedItem === idx ? "🔻" : "🔺"}
              </button>
              <b>{item.name}</b>
            </div>
            {selectedItem === idx && <p>{item.content}</p>}
          </div>
        );
      })}
    </div>
  );
}

const items = [
  { name: "item1", content: "some contnet 1" },
  { name: "item2", content: "some contnet 2" },
  { name: "item3", content: "some contnet 3" },
  { name: "item4", content: "some contnet 4" },
  { name: "item5", content: "some contnet 5" },
];

export default () => <AccordionComponent items={items} />;
