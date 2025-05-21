import { useState, useCallback } from "react";
import {
  ReactFlow,
  Controls,
  Panel,
  Background,
  useNodesState,
  useEdgesState,
} from "@xyflow/react";
 import "@xyflow/react/dist/style.css";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { FaPlus } from "react-icons/fa6";
import { BiText } from "react-icons/bi";

function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [isVisible, setIsVisible] = useState(false);

  // Toggle panel on icon click
  const togglePanel = () => {
    setIsVisible(!isVisible);
  };


    // Function to add a node on click
  const addNode = useCallback(() => {
    // Create a new node object with unique id and default position
    const newNode = {
      id: `${nodes.length + 1}`,
      position: { x: 250 + nodes.length * 10, y: 150 + nodes.length * 10 },
      data: { label: `Custom Node ${nodes.length + 1}` },
      type: "default", // or your custom node type if defined
    };

    setNodes((nds) => nds.concat(newNode));
  }, [nodes, setNodes]);


  const onConnect = useCallback(
    (connection) => {
      setEdges((eds) => [...eds, connection]);
    },
    [setEdges]
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
      >
         <Panel position="top-left">
          <div className="space-y-3">
            <div className="bg-white w-[350px] p-3 border border-gray-200 rounded-md flex flex-row space-x-3">
              <span className="flex items-center gap-x-1 font-medium cursor-pointer">
                <HiOutlineBars3CenterLeft/>
                <h2>Flow-Verse</h2>
              </span>
              <span>|</span>
              <input 
                type="text" 
                className="text-medium"
                value="Untitled"
              />
            </div>

            {/* Vertical Panel */}
            <div className="flex p-3 rounded-md gap-x-3">
              <div className="flex flex-col justify-center items-center bg-white border border-gray-200 rounded-md shadow-2xl w-[44px] h-[75px] gap-3">
                <span className="cursor-pointer" onClick={togglePanel}><FaPlus/></span>
                <span className="cursor-pointer"><BiText/></span>
              </div>
              {/* body panel */}

              {isVisible && (
                <div className="bg-white border border-gray-200 rounded-md h-[300px] shadow-2xl w-[250px]">
                  <ul className="grid grid-cols-2">
                    {
                      [1,2,3,4,5,6,7,8,9].map((item, index)=>(
                        <li onClick={addNode} key={index} className="flex justify-center items-center border cursor-pointer m-1">
                          <h3>Rores</h3>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              )}
             
            </div>
          </div>
        </Panel>
        <Controls />
        <Background color="red"/>  
      </ReactFlow>
    </div>
  )
}

export default App
