import { useState } from "react";
function Folder({ explorer, addNewNodeToTree }) {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });

  function handleNewChild(e, isFolder) {
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      visible: true,
      isFolder,
    });
  }

  function onAddNewChild(e) {
    if (e.target.value && e.keyCode === 13) {
      addNewNodeToTree(explorer.id, e.target.value, showInput.isFolder);

      setShowInput({
        ...showInput,
        visible: false,
      });
    }
  }

  //folder
  if (explorer.isFolder) {
    return (
      <div style={{ marginTop: "3px" }}>
        {/* row folder */}
        <div className="folder" onClick={() => setExpand(!expand)}>
          <span>📂{explorer.name}</span>
          {/*actions  */}
          <div>
            <button onClick={(e) => handleNewChild(e, true)}>folder+</button>
            <button onClick={(e) => handleNewChild(e, false)}>file+</button>
          </div>
        </div>

        {/* children */}
        <div
          style={{ display: expand ? "block" : "none", paddingLeft: "25px" }}
        >
          {/* new child */}
          {showInput.visible && (
            <div className="inputContainer">
              <span>{showInput.isFolder ? "📂" : "📄"}</span>
              <input
                className="inputContainer__input"
                type="text"
                autoFocus
                onBlur={() => setShowInput({ ...showInput, visible: false })}
                onKeyDown={onAddNewChild}
              />
            </div>
          )}

          {/* children */}
          {explorer.items.map((child) => {
            return (
              <Folder
                key={child.id}
                explorer={child}
                addNewNodeToTree={addNewNodeToTree}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    return <span className="file">📄{explorer.name}</span>; //file
  }
}

export default Folder;
