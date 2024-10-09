import React, { useRef } from "react";

export default function TextEditorWithSelection() {
  const editRef = useRef(null);
  const wrapSelectionWithElement = (tagName) => {
    //selection
    const selection = window.getSelection();
    if (!selection.rangeCount) return;

    //range
    const range = selection.getRangeAt(0);
    //content
    const textSelected = range.extractContents();

    // Crear un nuevo elemento (e.g., <b>, <i>, <u>)
    const newEl = document.createElement(tagName);
    newEl.appendChild(textSelected);

    // Insertar el nuevo elemento en la posición original del texto seleccionado
    range.insertNode(newEl);

    // Mantener el cursor después del nuevo elemento
    range.setStartAfter(newEl);
    editRef.current.focus();
  };
  return (
    <div>
      <button onClick={() => wrapSelectionWithElement("b")}>bold</button>
      <button onClick={() => wrapSelectionWithElement("i")}>italic</button>
      <button onClick={() => wrapSelectionWithElement("u")}>underline</button>

      <div
        contentEditable
        ref={editRef}
        style={{
          border: "solid 3px black",
          borderRadius: "3px",
          textAlign: "center",
          padding: "10px",
          minHeight: "200px",
          marginTop: "10px",
        }}
      >
        Start typing here...
      </div>
    </div>
  );
}
