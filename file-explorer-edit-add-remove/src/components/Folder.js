import React, { useState } from "react";
import "./Folder.css";

export default function Folder({ data, addNewNode, removeNode, updateNode }) {
  const [name, setName] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: false,
  });

  function showInputField(e, isFolder) {
    e.stopPropagation();
    setShowInput({ visible: true, isFolder });
    setExpand(true);
  }

  function addNewChild(e) {
    if (e.target.value && e.keyCode === 13) {
      addNewNode(data.id, showInput.isFolder, e.target.value);
      setShowInput({ visible: false, isFolder: false });
    }
  }

  function handleEdit(e) {
    if (name.trim() !== "" && e.keyCode === 13) {
      updateNode(data.id, name);
      setEditMode(false);
    }
  }

  if (data.isFolder) {
    return (
      <div className="container">
        <div className="folder-container">
          <div className="folder" onClick={() => setExpand(!expand)}>
            {editMode ? (
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                onBlur={() => setEditMode(false)}
                onKeyDown={handleEdit}
                autoFocus
                placeholder="New name..."
              />
            ) : (
              <span> 📁 {data?.name} </span>
            )}
          </div>
          {/* actions */}
          <div className="actions-container">
            <button className="btn" onClick={(e) => showInputField(e, true)}>
              Folder+
            </button>
            <button className="btn" onClick={(e) => showInputField(e, false)}>
              File+
            </button>
            <button className="btn" onClick={() => removeNode(data.id)}>
              Delete
            </button>
            <button className="btn" onClick={() => setEditMode(true)}>
              Edit
            </button>
          </div>
        </div>

        {/* input - new node */}
        {showInput.visible && (
          <div className="input">
            {showInput.isFolder ? "📁" : "📄"}
            <input
              type="text"
              onKeyDown={addNewChild}
              onBlur={() => setShowInput({ ...showInput, visible: false })}
              autoFocus
            />
          </div>
        )}

        {/* children */}
        {expand && (
          <div className="children-container">
            {data?.items?.map((child) => (
              <Folder
                key={child?.id}
                data={child}
                addNewNode={addNewNode}
                removeNode={removeNode}
                updateNode={updateNode}
              />
            ))}
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div className="actions-container">
        {editMode ? (
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            onBlur={() => setEditMode(false)}
            onKeyDown={handleEdit}
          />
        ) : (
          <span> 📄 {data?.name} </span>
        )}
        {/* actions */}
        <button className="btn" onClick={() => removeNode(data.id)}>
          Delete
        </button>
        <button className="btn" onClick={() => setEditMode(true)}>
          Edit
        </button>
      </div>
    );
  }
}
