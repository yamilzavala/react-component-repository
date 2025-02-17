import "./styles.css";
import { useState } from "react";
import { explorer } from "./data/data";
import { useTraverseTree } from "./hooks/useTraverseTree";
import Folder from "./components/Folder";

export default function App() {
  const [dataTree, setDataTree] = useState(explorer);
  const { addNode, editNode, removeNode } = useTraverseTree();

  function addNewNodeToTree(nodeId, isFolder, nodeValue) {
    const newDataTree = addNode(dataTree, nodeId, isFolder, nodeValue);
    setDataTree(newDataTree);
  }

  function removeNodeTree(nodeId) {
    const newTree = removeNode(dataTree, nodeId);
    setDataTree(newTree);
  }

  function editNodeTree(nodeId, name) {
    const newTree = editNode(dataTree, nodeId, name);
    setDataTree(newTree);
  }

  console.log("Tree: ", dataTree);

  return (
    <div className="wrapper">
      <Folder
        data={dataTree}
        addNewNode={addNewNodeToTree}
        removeNode={removeNodeTree}
        updateNode={editNodeTree}
      />
    </div>
  );
}
