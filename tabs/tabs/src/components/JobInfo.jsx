import React from "react";
import Duties from "./Duties";

export default function JobInfo({ data, currentItem }) {
  const sections = data[currentItem].sections;

  return (
    <>
      {sections.map((section, idx) => {
        const { sectionComponent } = section;
        return (
          <article key={idx} className="job-info">
            {/* here goes you custom component */}
            <div className="header-sub-section">{sectionComponent}</div>
            {/* remove next line */}
            <Duties duties={["item 1", "item 2"]} />
          </article>
        );
      })}
    </>
  );
}
