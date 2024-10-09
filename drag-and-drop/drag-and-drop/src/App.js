import "./styles.css";
import React, { useState } from "react";
import DragAndDrop from "./DragAndDrop";

export default function App() {
  return (
    <div className="App">
      <h1>Drag and Drop</h1>
      <DragAndDrop />
    </div>
  );
}
