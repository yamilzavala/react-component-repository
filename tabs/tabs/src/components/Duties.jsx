import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
export default function Duties({ duties }) {
  return (
    <div className="job-desc">
      {duties.map((duty, idx) => (
        <div key={uuidv4()} className='sub-section-cell'>
          <p className="subtitle-cell">title</p>
          {/* <FaAngleDoubleRight className="job-icon" /> */}
          <p>{duty}</p>
        </div>
      ))}
    </div>
  );
}
