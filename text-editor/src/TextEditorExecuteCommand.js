import React, { useRef, useState } from "react";

export default function TextEditorExecuteCommand() {
  const [content, setContent] = useState();
  const editRef = useRef(null);

  const applyCommand = (command, value = null) => {
    document.execCommand(command, false, value);
    editRef.current.focus();
  };

  const handleInput = () => {
    setContent(editRef.current.innerHTML);
  };

  return (
    <div>
      <button onClick={() => applyCommand("bold")}>bold</button>
      <button onClick={() => applyCommand("italic")}>italic</button>
      <button onClick={() => applyCommand("underline")}>underline</button>
      <div
        ref={editRef}
        contentEditable
        style={{
          border: "solid 3px black",
          borderRadius: "3px",
          textAlign: "center",
          padding: "10px",
          minHeight: "200px",
          marginTop: "10px",
        }}
        onInput={handleInput}
      >
        Start typing here...
      </div>
      <h3>Editor content:</h3>
      <div>{content}</div>
    </div>
  );
}
