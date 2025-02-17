export const useTraverseTree = () => {
  function addNode(dataTree, nodeId, isFolder, nodeValue) {
    if (dataTree?.id === nodeId && dataTree?.isFolder) {
      const newNode = {
        id: new Date().getTime(),
        name: nodeValue,
        isFolder,
        items: [],
      };
      dataTree?.items?.unshift(newNode);
    }

    let childrenNodes = [];
    childrenNodes = dataTree?.items?.map((child) => {
      return addNode(child, nodeId, isFolder, nodeValue);
    });
    return {
      ...dataTree,
      items: childrenNodes,
    };
  }

  function editNode(dataTree, id, newName) {
    if (dataTree.id === id && newName.trim() !== "") {
      return { ...dataTree, name: newName };
    }

    const updatedItems = dataTree.items.map((child) =>
      editNode(child, id, newName)
    );
    return { ...dataTree, items: updatedItems };
  }

  function removeNode(dataTree, id) {
    if (!dataTree.isFolder) return dataTree;

    const updatedItems = dataTree.items
      .map((child) => removeNode(child, id))
      .filter((child) => child.id !== id);

    return { ...dataTree, items: updatedItems };
  }

  return { addNode, removeNode, editNode };
};
