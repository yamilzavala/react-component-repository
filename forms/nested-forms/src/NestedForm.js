import React, { useState } from "react";

const NestedForm = () => {
  const [skills, setSkills] = useState([{ skill: "", level: "" }]);

  const handleChange = (index, event) => {
    const newSkills = skills.map((skill, i) =>
      i === index
        ? { ...skill, [event.target.name]: event.target.value }
        : skill
    );
    setSkills(newSkills);
  };

  const addSkill = () => {
    setSkills([...skills, { skill: "", level: "" }]);
  };

  return (
    <div>
      {skills.map((skill, index) => (
        <div key={index}>
          <input
            type="text"
            name="skill"
            value={skill.skill}
            onChange={(e) => handleChange(index, e)}
            placeholder="Skill"
          />
          <input
            type="text"
            name="level"
            value={skill.level}
            onChange={(e) => handleChange(index, e)}
            placeholder="Level"
          />
        </div>
      ))}
      <button onClick={addSkill}>Add Skill</button>
    </div>
  );
};

export default NestedForm;
