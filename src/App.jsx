import { useState, useCallback } from "react";
import {
  ReactFlow,
  Controls,
  Panel,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { FaPlus } from "react-icons/fa6";
import { BiText } from "react-icons/bi";

import { nodeTypes } from "./CustomNodes"; // Custom node types (e.g., page, image, map)
import MapButton from "./icons/MapButton"; // Icon component for node preview

function App() {
  // State management for flow nodes and edges
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [isVisible, setIsVisible] = useState(false); // For toggle panel visibility

  const nodeTypesList = ["page", "image", "map"]; // Available node types for user to add

  // Handle connection between nodes
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  // Toggle the left panel visibility
  const togglePanel = () => {
    setIsVisible(!isVisible);
  };

  // Function to add a new node dynamically to the canvas
  const addNode = useCallback(
    (type) => {
      const newNode = {
        id: `${nodes.length + 1}`,
        position: { x: 250 + nodes.length * 10, y: 150 + nodes.length * 10 },
        data: { label: `${type.charAt(0).toUpperCase() + type.slice(1)}` },
        type,
      };
      setNodes((nds) => nds.concat(newNode));
    },
    [nodes, setNodes]
  );

  return (
    <div className="w-full h-screen">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        nodeTypes={nodeTypes}
        defaultEdgeOptions={{ type: "default", animated: true }}
      >
        {/* Top-left control panel */}
        <Panel position="top-left">
          <div className="space-y-3">
            {/* Header panel with title and input */}
            <div className="bg-white w-[350px] p-3 border border-gray-200 rounded-md flex flex-row space-x-3">
              <span
                className="flex items-center gap-x-1 font-medium cursor-pointer"
                role="heading"
                aria-level={1}
              >
                <HiOutlineBars3CenterLeft />
                <h2>Flow-Verse</h2>
              </span>
              <span aria-hidden="true">|</span>
              <input
                type="text"
                aria-label="Flow Title"
                className="text-medium"
                defaultValue="Untitled"
              />
            </div>

            {/* Vertical side panel */}
            <div className="flex rounded-md gap-x-3">
              {/* Toggle Buttons */}
              <div className="flex flex-col justify-center items-center bg-white border border-gray-200 rounded-md shadow-2xl w-[44px] h-[75px] gap-5">
                <span
                  className="cursor-pointer"
                  onClick={togglePanel}
                  aria-label="Add Node"
                >
                  <FaPlus />
                </span>
                <span className="cursor-pointer" aria-label="Add Text">
                  <BiText />
                </span>
              </div>

              {/* Node Selection Panel */}
              {isVisible && (
                <div
                  className="bg-white border border-gray-200 rounded-md h-[300px] shadow-2xl w-[250px]"
                  role="region"
                  aria-label="Add Nodes Panel"
                >
                  <ul className="grid grid-cols-2 p-3 gap-3">
                    {nodeTypesList.map((type, index) => (
                      <li
                        key={index}
                        onClick={() => addNode(type)}
                        className="cursor-pointer bg-gray-50 p-2"
                      >
                        <div className="flex flex-col justify-center items-center">
                          <div className="p-1 border bg-white border-gray-300">
                            <MapButton />
                          </div>
                          <h3 className="text-sm">
                            {type.charAt(0).toUpperCase() + type.slice(1)}
                          </h3>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </Panel>

        {/* React Flow controls and canvas background */}
        <Controls />
        <Background color="gray" />
      </ReactFlow>
    </div>
  );
}

export default App;
