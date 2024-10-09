import React, { useState } from "react";
import "./styles.css";

type ItemsT = { title: string; description: string };
type AccordionT = { items?: ItemsT[] };

const itemsData: ItemsT[] = [
  {
    title: "item 1",
    description:
      "some description to show 1... some description to show... some description to show... some description to show...",
  },
  {
    title: "item 2",
    description:
      "some description to show 2... some description to show... some description to show... some description to show...",
  },
  {
    title: "item 3",
    description:
      "some description to show 3... some description to show... some description to show... some description to show...",
  },
  {
    title: "item 4",
    description:
      "some description to show 4... some description to show... some description to show... some description to show...",
  },
  {
    title: "item 5",
    description:
      "some description to show 5... some description to show... some description to show... some description to show...",
  },
];

const Accordion: React.FC<AccordionT> = ({ items = itemsData }) => {
  const [currIndex, setCurrIdx] = useState<number | null>(null);

  const handleDisplay = (index: number) => {
    if (currIndex == index) {
      setCurrIdx(null);
    } else {
      setCurrIdx(index);
    }
  };

  return (
    <div className="accordion-container">
      {items.map((item, idx) => {
        return (
          <section key={idx}>
            <div className="header-item">
              <h1>{item.title}</h1>
              <button onClick={() => handleDisplay(idx)}>
                {currIndex === idx ? "🔼" : "🔽"}
              </button>
            </div>
            {currIndex === idx && <p>{item.description}</p>}
          </section>
        );
      })}
    </div>
  );
};

export default Accordion;
