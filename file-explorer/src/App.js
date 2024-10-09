import "./styles.css";
import { useState } from "react";
import explorer from "./data/folderData";
import Folder from "./components/Folder";
import useTraverseTree from "./hooks/useTraverseTree";

export default function App() {
  const [explorerData, setExplorerData] = useState(explorer);
  const { insertNode } = useTraverseTree();

  function addNewNodeToTree(folderId, itemName, isFolder) {
    const finalTree = insertNode(explorerData, folderId, itemName, isFolder);
    setExplorerData(finalTree);
  }
  return (
    <div className="App">
      <Folder explorer={explorerData} addNewNodeToTree={addNewNodeToTree} />
    </div>
  );
}
