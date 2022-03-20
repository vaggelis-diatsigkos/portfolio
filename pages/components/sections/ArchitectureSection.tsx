import { useEffect, useState } from "react";
import ReactFlow, {
  ConnectionLineType,
  ReactFlowInstance,
} from "react-flow-renderer";
import { ArchitectureData } from "../../../core/data";
import { IArchitecture } from "../../../core/models";
import CodeHeader from "../CodeHeader";

const ArchitectureSection = () => {
  return (
    <div className="py-8">
      <CodeHeader header="architectures"/>
      
      <div className="grid grid-cols-12 gap-4 sm:gap-6 mt-6 lg:mt-12">
        {ArchitectureData.map((architecture, key) => (
          <div key={key} className="col-span-12 xl:col-span-6">
            <ArchitectureSectionFlow architecture={architecture} />
          </div>
        ))}
      </div>
    </div>
  );
};

const ArchitectureSectionFlow: React.FC<{ architecture: IArchitecture }> = ({
  architecture,
}) => {
  const defaultEdgeOptions = { animated: true };
  const [reactFlowInstance, setReactFlowInstance] = useState<
    ReactFlowInstance | undefined
  >(undefined);

  const onInit = (instance: ReactFlowInstance) => {
    setReactFlowInstance(instance);
  };

  useEffect(() => {
    function handleResize() {
      if (reactFlowInstance) {
        setTimeout(() => reactFlowInstance.fitView());
      }
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [reactFlowInstance]);

  return (
    <div className="rounded-xl border-none shadow bg-gray-800">
      <div className="p-6">
        <div className="text-gray-600 font-normal text-sm uppercase font-sans tracking-wider">
          {architecture.title}
        </div>
        <div className="font-medium italic text-xl">
          <small className="font-extralight text-gray-400">the</small>
          <span className="mx-2">{architecture.description}</span>
          <small className="font-extralight text-gray-400">Architecture</small>
        </div>
      </div>
      <div
        className="w-full h-[500px] py-6"
        style={{
          backgroundImage: "radial-gradient(rgb(55 65 81) 1px, transparent 0)",
          backgroundSize: "30px 30px",
          backgroundPosition: "-5px -5px",
        }}
      >
        <ReactFlow
          nodes={architecture.nodes}
          edges={architecture.edges}
          connectionLineType={ConnectionLineType.SmoothStep}
          defaultEdgeOptions={defaultEdgeOptions}
          fitView
          onInit={onInit}
          panOnScroll={false}
          zoomOnScroll={false}
          panOnDrag={false}
          preventScrolling={false}
          style={{ overflow: "hidden" }}
        >
          {/* <Controls showInteractive={false} /> */}
        </ReactFlow>
      </div>
    </div>
  );
};

export default ArchitectureSection;
