
import ReactFlow, {
    Background,
    Controls,
    MarkerType,
    addEdge,
    useEdgesState,
    useNodesState
} from 'reactflow';
import 'reactflow/dist/style.css';

const initialNodes = [
    {
        id: 'in1',
        type: 'input',
        data: { label: 'Zomato' },
        position: { x: 0, y: 50 },
    },
    {
        id: 'in2',
        type: 'input',
        data: { label: 'Public DB' },
        position: { x: 0, y: 150 },
    },
    {
        id: 'center',
        data: { label: 'Privue' },
        position: { x: 250, y: 100 },
        style: {
            background: '#22c55e',
            color: 'white',
            borderRadius: 8,
            padding: 10,
        },
    },
    {
        id: 'parse',
        data: { label: 'docParsing' },
        position: { x: 500, y: 40 },
    },
    {
        id: 'sentiment',
        data: { label: 'llm sentiment' },
        position: { x: 500, y: 160 },
    },
    {
        id: 'result',
        type: 'output',
        data: { label: 'result' },
        position: { x: 700, y: 100 },
    },
];

const initialEdges = [
    { id: 'e1', source: 'in1', target: 'center', type: 'smoothstep', markerEnd: { type: MarkerType.Arrow } },
    { id: 'e2', source: 'in2', target: 'center', type: 'smoothstep', markerEnd: { type: MarkerType.Arrow } },
    { id: 'e3', source: 'center', target: 'parse', type: 'smoothstep', markerEnd: { type: MarkerType.Arrow } },
    { id: 'e4', source: 'center', target: 'sentiment', type: 'smoothstep', markerEnd: { type: MarkerType.Arrow } },
    { id: 'e5', source: 'parse', target: 'result', type: 'smoothstep', markerEnd: { type: MarkerType.Arrow } },
    { id: 'e6', source: 'sentiment', target: 'result', type: 'smoothstep', markerEnd: { type: MarkerType.Arrow } },
];

export default function DataFlowDiagram() {
    const [nodes, , onNodesChange] = useNodesState(initialNodes);
    const [edges, , onEdgesChange] = useEdgesState(initialEdges);

    return (
        <div
            style={{
                height: '400px',
                width: '100%',
                border: '1px solid #ddd', // optional: to debug visibility
                borderRadius: '8px',
                overflow: 'hidden',
            }}
        >
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                fitView
            >
                <Background />
                <Controls />
            </ReactFlow>
        </div>
    );
}

