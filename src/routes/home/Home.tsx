import { useCallback, useMemo, useState } from 'react';
import ReactFlow, {
  Background,
  Controls,
  DefaultEdgeOptions,
  Edge,
  Node,
  OnEdgesChange,
  OnNodesChange,
  applyEdgeChanges,
  applyNodeChanges,
} from 'reactflow';
import { Drawer } from '../../components/Drawer';
import { useDisclosure } from '@chakra-ui/react';
import { Tooltip } from '../../components/Tooltip';
import { useStore } from '../../store/store';
import { CustomNode } from '../../lib/customNodes/customNodes';
import { initialEdges, initialNodes } from '../../data';

const NeuralNetworkGraph = () => {
  const { updateNode } = useStore();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: tooltipIsOpen,
    onOpen: openTooltip,
    onClose: closeTooltip,
  } = useDisclosure();
  const [tooltipContent, setTooltipContent] = useState('');
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);

  const nodeTypes: any = useMemo(() => ({ customNode: CustomNode }), []);

  const defaultEdgeOptions: DefaultEdgeOptions = {
    animated: true,
  };

  const onNodesChange: OnNodesChange = useCallback(changes => {
    setNodes((nds): Node[] => applyNodeChanges(changes, nds));
  }, []);

  const onEdgesChange: OnEdgesChange = useCallback(changes => {
    setEdges((eds): Edge[] => applyEdgeChanges(changes, eds));
  }, []);

  const showSidebar = () => {
    onOpen();
  };

  const handleNodeHover = (event, node) => {
    openTooltip();
    updateNode(node);
    setTooltipContent(node.data.label);
    setTooltipPosition({ x: event.clientX, y: event.clientY });
  };

  // Handle node mouse leave event
  const handleNodeMouseLeave = () => {
    closeTooltip();
    setTooltipContent('');
  };

  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        background: '#242424',
        position: 'relative', // Add position relative
      }}
    >
      <ReactFlow
        fitView
        onNodeClick={showSidebar}
        onEdgesChange={onEdgesChange}
        onNodesChange={onNodesChange}
        nodes={nodes}
        defaultEdgeOptions={defaultEdgeOptions}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodeMouseEnter={handleNodeHover} // Handle node hover
        onNodeMouseLeave={handleNodeMouseLeave} // Handle node mouse leave
      >
        <Background />
        <Controls />
      </ReactFlow>
      {tooltipIsOpen && (
        <Tooltip content={tooltipContent} position={tooltipPosition} />
      )}

      <Drawer isOpen={isOpen} onClose={onClose} />
    </div>
  );
};

export default NeuralNetworkGraph;
