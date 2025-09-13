import React from "react";
import ReactFlow, { Background } from "reactflow";
import "reactflow/dist/style.css";

// ✅ Node styles
const baseStyle = {
  background: "linear-gradient(135deg, #a855f7, #ec4899)",
  color: "white",
  borderRadius: "12px",
  padding: "10px 16px",
  fontWeight: "600",
  textAlign: "center",
  minWidth: "140px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
};

const smallStyle = {
  background: "linear-gradient(135deg, #d946ef, #8b5cf6)",
  color: "white",
  borderRadius: "8px",
  padding: "6px 12px",
  fontSize: "13px",
  textAlign: "center",
  minWidth: "110px",
  boxShadow: "0 3px 10px rgba(0,0,0,0.12)",
};

const edgeStyle = {
  stroke: "#a855f7",
  strokeWidth: 2,
};

// ✅ Nodes (static, non-draggable)
const nodes = [
  {
    id: "drdo",
    position: { x: 400, y: 200 },
    data: { label: "DRDO" },
    style: baseStyle,
    draggable: false,
  },

  {
    id: "labs",
    position: { x: 200, y: 150 },
    data: { label: "Laboratories" },
    style: baseStyle,
    draggable: false,
  },
  {
    id: "41labs",
    position: { x: 50, y: 150 },
    data: { label: "41 Laboratories" },
    style: smallStyle,
    draggable: false,
  },

  {
    id: "dysl",
    position: { x: 600, y: 200 },
    data: { label: "DYSLs" },
    style: baseStyle,
    draggable: false,
  },
  {
    id: "5dysl",
    position: { x: 750, y: 200 },
    data: { label: "5 DYSLs" },
    style: smallStyle,
    draggable: false,
  },

  {
    id: "corp",
    position: { x: 200, y: 270 },
    data: { label: "Corporate Directorates" },
    style: baseStyle,
    draggable: false,
  },
  {
    id: "diitm",
    position: { x: 50, y: 270 },
    data: { label: "DIITM" },
    style: smallStyle,
    draggable: false,
  },
  {
    id: "dtdf",
    position: { x: 50, y: 320 },
    data: { label: "DTDF" },
    style: smallStyle,
    draggable: false,
  },
  {
    id: "ditcs",
    position: { x: 50, y: 370 },
    data: { label: "DIT&CS" },
    style: smallStyle,
    draggable: false,
  },
  {
    id: "dfmm",
    position: { x: 50, y: 420 },
    data: { label: "DFMM" },
    style: smallStyle,
    draggable: false,
  },
];

// ✅ Edges with smooth curves
const edges = [
  {
    id: "e1",
    source: "labs",
    target: "41labs",
    animated: true,
    style: edgeStyle,
    type: "smoothstep",
  },
  {
    id: "e2",
    source: "drdo",
    target: "labs",
    animated: true,
    style: edgeStyle,
    type: "smoothstep",
  },
  {
    id: "e3",
    source: "drdo",
    target: "dysl",
    animated: true,
    style: edgeStyle,
    type: "smoothstep",
  },
  {
    id: "e4",
    source: "dysl",
    target: "5dysl",
    animated: true,
    style: edgeStyle,
    type: "smoothstep",
  },
  {
    id: "e5",
    source: "corp",
    target: "diitm",
    animated: true,
    style: edgeStyle,
    type: "smoothstep",
  },
  {
    id: "e6",
    source: "corp",
    target: "dtdf",
    animated: true,
    style: edgeStyle,
    type: "smoothstep",
  },
  {
    id: "e7",
    source: "corp",
    target: "ditcs",
    animated: true,
    style: edgeStyle,
    type: "smoothstep",
  },
  {
    id: "e8",
    source: "corp",
    target: "dfmm",
    animated: true,
    style: edgeStyle,
    type: "smoothstep",
  },
  {
    id: "e9",
    source: "drdo",
    target: "corp",
    animated: true,
    style: edgeStyle,
    type: "smoothstep",
  },
];

export default function DrdoOrgChart() {
  return (
    <div style={{ width: "100%", height: "600px" }}>
      <h2 className="text-center text-3xl font-bold mb-6 text-blue-300">
        DRDO Organizational Structure
      </h2>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        panOnScroll={false}
        panOnDrag={false}
      >
        <Background color="#f3e8ff" gap={18} />
      </ReactFlow>
    </div>
  );
}
