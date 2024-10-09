import React, { useState } from "react";

const TreeNode = ({ node }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="container">
      {/* node description */}
      <div className="root-node" onClick={() => setExpanded(!expanded)}>
        {node.name} {node.children && (expanded ? "🔻" : "🔺")}
      </div>
      {/* children */}
      <div className="children-container">
        {node.children &&
          expanded &&
          node.children.map((currNode, idx) => {
            return <TreeNode key={idx} node={currNode} />;
          })}
      </div>
    </div>
  );
};

const Tree = ({ data }) => {
  return (
    <div>
      {data.map((node, idx) => (
        <TreeNode key={idx} node={node} />
      ))}
    </div>
  );
};

const data = [
  {
    name: "Root",
    children: [
      {
        name: "Child-1",
        children: [
          {
            name: "ndoe-1",
          },
          {
            name: "node-2",
          },
        ],
      },
      {
        name: "Child-2",
        children: [
          {
            name: "node-3",
          },
          {
            name: "node-4",
          },
        ],
      },
      {
        name: "Child-3",
        children: [
          {
            name: "noded-5",
          },
          {
            name: "node-6",
            children: [
              {
                name: "node-7",
              },
              {
                name: "node-8",
              },
            ],
          },
        ],
      },
    ],
  },
];

export default () => <Tree data={data} />;
