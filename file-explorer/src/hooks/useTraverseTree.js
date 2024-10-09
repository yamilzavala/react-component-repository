function useTraverseTree() {
  function insertNode(tree, folderId, itemName, isFolder) {
    if (tree.id === folderId && tree.isFolder) {
      const newItem = {
        id: new Date().getTime(),
        name: itemName,
        isFolder: isFolder,
        items: [],
      };
      tree.items.unshift(newItem);
      return tree;
    }

    //DFS
    let lastestNode = [];
    lastestNode = tree.items.map((nestedTree) => {
      return insertNode(nestedTree, folderId, itemName, isFolder);
    });

    return { ...tree, items: lastestNode };
  }

  return { insertNode };
}

export default useTraverseTree;
