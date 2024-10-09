import React, { useState } from "react";
import "./styles.css";

type ItemsT = { title: string; description: string };
type TabsT = { tabs?: ItemsT[] };

const itemsData: ItemsT[] = [
  {
    title: "item 1",
    description:
      "some description to show 1... text text... some description to show... some description to show...",
  },
  {
    title: "item 2",
    description:
      "some description to show 2... exampleeeee... some description to show... some description to show...",
  },
  {
    title: "item 3",
    description:
      "some description to show 3... codeeeee... some description to show... some description to show...",
  },
  {
    title: "item 4",
    description:
      "some description to show 4... studyyyyyyyyyy... some description to show... some description to show...",
  },
  {
    title: "item 5",
    description:
      "some description to show 5... cars......... some description to show... some description to show...",
  },
];

const Tabs: React.FC<TabsT> = ({ tabs = itemsData }) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="tabs-container">
      {/* tabs */}
      <div className="tabs">
        {itemsData.map((tab, idx) => {
          return (
            <button
              key={idx}
              className={`tab ${idx === activeTab ? "active-tab" : ""}`}
              onClick={() => setActiveTab(idx)}
            >
              {tab.title}
            </button>
          );
        })}
      </div>
      {/* content */}
      <div className="tab-content">{itemsData[activeTab].description}</div>
    </div>
  );
};

export default Tabs;
