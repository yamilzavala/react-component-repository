import React from "react";
import { v4 as uuidv4 } from "uuid";

export default function BtnContainer({ tabs, setCurrentItem, currentItem }) {
  return (
    <div key={uuidv4()} className="btn-container">
      {tabs.map((tab, idx) => {
        const { tabName } = tab;
        return (
          <button
            className={currentItem === idx ? "active-btn job-btn" : "job-btn"}
            onClick={(e) => setCurrentItem(idx)}
          >
            {tabName}
          </button>
        );
      })}
    </div>
  );
}
