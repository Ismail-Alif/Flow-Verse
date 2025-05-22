import React from "react";
import { Handle, Position } from "@xyflow/react";

const Handles = () =>{
    return(
    <>
        {/* Top Handle - Target */}
        <Handle
            type="target"
            position={Position.Top}
            id="top"
            style={{ background: '#3b82f6' }}
            isConnectable={true}
        />

        {/* Right Handle - Source */}
        <Handle
            type="source"
            position={Position.Right}
            id="right"
            style={{ background: '#3b82f6' }}
            isConnectable={true}
        />

        {/* Bottom Handle - Source */}
        <Handle
            type="source"
            position={Position.Bottom}
            id="bottom"
            style={{ background: '#3b82f6' }}
            isConnectable={true}
        />

        {/* Left Handle - Target */}
        <Handle
            type="target"
            position={Position.Left}
            id="left"
            style={{ background: '#3b82f6' }}
            isConnectable={true}
        />
    </>
    )
}
export default Handles;