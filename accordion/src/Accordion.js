import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          <div
            onClick={() => handleToggle(index)}
            style={{ cursor: "pointer", fontWeight: "bold" }}
          >
            {item.title}
          </div>
          {openIndex === index && <div>{item.content}</div>}
        </div>
      ))}
    </div>
  );
};

const items = [
  { title: "Section 1", content: "Content of Section 1" },
  { title: "Section 2", content: "Content of Section 2" },
];

export default () => <Accordion items={items} />;
