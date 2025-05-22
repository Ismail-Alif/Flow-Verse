import { Handle, Position } from "@xyflow/react";
import { MapView } from "../icons";
import Handles from "./lib/Handles";
import Footer from "./lib/Footer";
import Label from "./lib/Label";

/**
 * Map Node
 * A custom node for React Flow (@xyflow) with a centered label and styled visual layout.
 */

const MapNode = ({ data }) => (
  <section
    role="group"
    aria-label="Map Node"
    className="relative bg-white border border-sky-400 rounded shadow text-center"
  >
    <Handles/>
   
    {/* Node Label */}
    <Label data={data.label} />

    {/* Header with window control dots */}
    <div
      className="h-4 flex items-center space-x-0.5 px-1.5 bg-sky-50 rounded-t"
      aria-hidden="true"
    >
      <span className="w-1 h-1 rounded-full bg-red-400"></span>
      <span className="w-1 h-1 rounded-full bg-yellow-400"></span>
      <span className="w-1 h-1 rounded-full bg-green-400"></span>
    </div>

    <div className="px-1 py-1">
        <MapView />
        <Footer/>
    </div>

  </section>
);


export default MapNode;