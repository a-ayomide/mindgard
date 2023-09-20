import { MarkerType } from 'reactflow';

export const initialNodes = [
  {
    id: 'a',
    position: { x: 0, y: 0 },
    data: {
      label: 'Conv',
      weights: [
        [0.1, 0.2, 0.3],
        [0.4, 0.5, 0.6],
        [0.7, 0.8, 0.9],
        [0.1, 0.11, 0.12],
      ],
      biases: [0.1, 0.2, 0.3, 0.4],
      activation: 'relu',
    },
    type: 'customNode',
  },
  {
    id: 'b',
    position: { x: 49, y: 100 },
    data: {
      label: 'Relu',
    },
    type: 'customNode',
  },
  {
    id: 'c',
    position: { x: 36, y: 200 },
    data: {
      label: 'MaxPool',
    },
    type: 'customNode',
  },
  {
    id: 'd',
    position: { x: 0, y: 300 },
    data: {
      label: 'Conv',
      activation: 'sigmoid',
      weights: [
        [0.1, 0.2, 0.3],
        [0.4, 0.5, 0.6],
      ],
      biases: [0.1, 0.2],
    },
    type: 'customNode',
  },
  {
    id: 'e',
    position: { x: 49, y: 400 },
    data: {
      label: 'Relu',
      activation: 'sigmoid',
      weights: [[0.1, 0.3]],
      biases: [0.1, 0.2],
    },
    type: 'customNode',
  },
  {
    id: 'f',
    position: { x: -100, y: 500 },
    data: {
      label: 'Conv',
      activation: 'sigmoid',
      weights: [[0.1, 0.2, 0.3]],
      biases: [0.1, 0.2],
    },
    type: 'customNode',
  },
  {
    id: 'g',
    position: { x: 100, y: 500 },
    data: {
      label: 'Conv',
      activation: 'sigmoid',
      weights: [[0.1, 0.2, 0.3]],
      biases: [0.1, 0.2],
    },
    type: 'customNode',
  },
  {
    id: 'h',
    position: { x: -51, y: 600 },
    data: { label: 'Relu' },
    type: 'customNode',
  },
  {
    id: 'i',
    position: { x: 149, y: 600 },
    data: { label: 'Relu' },
    type: 'customNode',
  },
  {
    id: 'j',
    position: { x: 40, y: 700 },
    data: { label: 'Concat' },
    type: 'customNode',
  },
  {
    id: 'k',
    position: { x: 0, y: 800 },
    data: {
      label: 'Conv',
      activation: 'sigmoid',
      weights: [[0.1, 0.2, 0.3]],
      biases: [0.1, 0.2],
    },
    type: 'customNode',
  },
  {
    id: 'l',
    position: { x: 49, y: 900 },
    data: { label: 'Relu' },
    type: 'customNode',
  },
  {
    id: 'm',
    position: { x: -100, y: 1000 },
    data: {
      label: 'Conv',
      activation: 'sigmoid',
      weights: [[0.1, 0.2, 0.3]],
      biases: [0.1, 0.2],
    },
    type: 'customNode',
  },
  {
    id: 'n',
    position: { x: 100, y: 1000 },
    data: {
      label: 'Conv',
      activation: 'sigmoid',
      weights: [[0.1, 0.2, 0.3]],
      biases: [0.1, 0.2],
    },
    type: 'customNode',
  },
  {
    id: 'o',
    position: { x: 40, y: 1100 },
    data: { label: 'Concat' },
    type: 'customNode',
  },
  {
    id: 'p',
    position: { x: -1, y: 1200 },
    data: {
      label: 'Conv',
      activation: 'sigmoid',
      weights: [[0.1, 0.2, 0.3]],
      biases: [0.1, 0.2],
    },
    type: 'customNode',
  },
  {
    id: 'q',
    position: { x: 48, y: 1300 },
    data: { label: 'Relu' },
    type: 'customNode',
  },
  {
    id: 'r',
    position: { x: -100, y: 1400 },
    data: {
      label: 'Conv',
      activation: 'sigmoid',
      weights: [[0.1, 0.2, 0.3]],
      biases: [0.1, 0.2],
    },
    type: 'customNode',
  },
  {
    id: 's',
    position: { x: 100, y: 1400 },
    data: {
      label: 'Conv',
      activation: 'sigmoid',
      weights: [[0.1, 0.2, 0.3]],
      biases: [0.1, 0.2],
    },
    type: 'customNode',
  },
  {
    id: 't',
    position: { x: -51, y: 1500 },
    data: { label: 'Relu' },
    type: 'customNode',
  },
  {
    id: 'u',
    position: { x: 150, y: 1500 },
    data: { label: 'Relu' },
    type: 'customNode',
  },
  {
    id: 'v',
    position: { x: 40, y: 1600 },
    data: { label: 'Concat' },
    type: 'customNode',
  },
  {
    id: 'w',
    position: { x: 0, y: 1700 },
    data: {
      label: 'Conv',
      activation: 'sigmoid',
      weights: [[0.1, 0.2, 0.3]],
      biases: [0.1, 0.2],
    },
    type: 'customNode',
  },
  {
    id: 'x',
    position: { x: 49, y: 1800 },
    data: { label: 'Relu' },
    type: 'customNode',
  },
  {
    id: 'y',
    position: { x: -100, y: 1900 },
    data: {
      label: 'Conv',
      activation: 'sigmoid',
      weights: [[0.1, 0.2, 0.3]],
      biases: [0.1, 0.2],
    },
    type: 'customNode',
  },
  {
    id: 'z',
    position: { x: 100, y: 1900 },
    data: {
      label: 'Conv',
      activation: 'sigmoid',
      weights: [[0.1, 0.2, 0.3]],
      biases: [0.1, 0.2],
    },
    type: 'customNode',
  },
  {
    id: 'za',
    position: { x: 40, y: 2000 },
    data: { label: 'Concat' },
    type: 'customNode',
  },
  {
    id: 'zb',
    position: { x: 38, y: 2100 },
    data: { label: 'Dropout' },
    type: 'customNode',
  },
  {
    id: 'zc',
    position: { x: 0, y: 2200 },
    data: {
      label: 'Conv',
      activation: 'sigmoid',
      weights: [[0.1, 0.2, 0.3]],
      biases: [0.1, 0.2],
    },
    type: 'customNode',
  },
  {
    id: 'zd',
    position: { x: 49, y: 2300 },
    data: {
      label: 'Relu',
      activation: 'sigmoid',
      weights: [[0.1, 0.2, 0.3]],
      biases: [0.1, 0.2],
    },
    type: 'customNode',
  },
  {
    id: 'ze',
    position: { x: 49, y: 2400 },
    data: {
      label: 'GlobalAveragePool',
    },
    type: 'customNode',
  },
  {
    id: 'zf',
    position: { x: 40, y: 2500 },
    data: {
      label: 'Softmax',
    },
    type: 'customNode',
  },
];

export const initialEdges = [
  {
    id: 'a-b',
    source: 'a',
    target: 'b',
    markerEnd: {
      type: MarkerType.Arrow,
    },
    type: 'smoothstep',
  },
  {
    id: 'b-c',
    source: 'b',
    target: 'c',
    markerEnd: {
      type: MarkerType.Arrow,
    },
    type: 'smoothstep',
  },
  {
    id: 'c-d',
    source: 'c',
    target: 'd',
    markerEnd: {
      type: MarkerType.Arrow,
    },
    type: 'smoothstep',
  },
  {
    id: 'd-e',
    source: 'd',
    target: 'e',
    markerEnd: {
      type: MarkerType.Arrow,
    },
    type: 'smoothstep',
  },
  {
    id: 'e-f',
    source: 'e',
    target: 'f',
    markerEnd: {
      type: MarkerType.Arrow,
    },
    type: 'smoothstep',
  },
  {
    id: 'e-g',
    source: 'e',
    target: 'g',
    markerEnd: {
      type: MarkerType.Arrow,
    },
    type: 'smoothstep',
  },
  {
    id: 'f-h',
    source: 'f',
    target: 'h',
    markerEnd: {
      type: MarkerType.Arrow,
    },
    type: 'smoothstep',
  },
  {
    id: 'g-i',
    source: 'g',
    target: 'i',
    markerEnd: {
      type: MarkerType.Arrow,
    },
    type: 'smoothstep',
  },
  {
    id: 'h-j',
    source: 'h',
    target: 'j',
    markerEnd: {
      type: MarkerType.Arrow,
    },
    type: 'smoothstep',
  },
  {
    id: 'i-j',
    source: 'i',
    target: 'j',
    markerEnd: {
      type: MarkerType.Arrow,
    },
    type: 'smoothstep',
  },
  {
    id: 'j-k',
    source: 'j',
    target: 'k',
    markerEnd: {
      type: MarkerType.Arrow,
    },
    type: 'smoothstep',
  },
  {
    id: 'k-l',
    source: 'k',
    target: 'l',
    markerEnd: {
      type: MarkerType.Arrow,
    },
    type: 'smoothstep',
  },
  {
    id: 'l-m',
    source: 'l',
    target: 'm',
    markerEnd: {
      type: MarkerType.Arrow,
    },
    type: 'smoothstep',
  },
  {
    id: 'l-n',
    source: 'l',
    target: 'n',
    markerEnd: {
      type: MarkerType.Arrow,
    },
    type: 'smoothstep',
  },
  {
    id: 'm-o',
    source: 'm',
    target: 'o',
    markerEnd: {
      type: MarkerType.Arrow,
    },
    type: 'smoothstep',
  },
  {
    id: 'n-o',
    source: 'n',
    target: 'o',
    markerEnd: {
      type: MarkerType.Arrow,
    },
    type: 'smoothstep',
  },
  {
    id: 'o-p',
    source: 'o',
    target: 'p',
    markerEnd: {
      type: MarkerType.Arrow,
    },
    type: 'smoothstep',
  },
  {
    id: 'p-q',
    source: 'p',
    target: 'q',
    markerEnd: {
      type: MarkerType.Arrow,
    },
    type: 'smoothstep',
  },
  {
    id: 'q-r',
    source: 'q',
    target: 'r',
    markerEnd: {
      type: MarkerType.Arrow,
    },
    type: 'smoothstep',
  },
  {
    id: 'q-s',
    source: 'q',
    target: 's',
    markerEnd: {
      type: MarkerType.Arrow,
    },
    type: 'smoothstep',
  },
  {
    id: 'r-t',
    source: 'r',
    target: 't',
    markerEnd: {
      type: MarkerType.Arrow,
    },
    type: 'smoothstep',
  },
  {
    id: 's-u',
    source: 's',
    target: 'u',
    markerEnd: {
      type: MarkerType.Arrow,
    },
    type: 'smoothstep',
  },
  {
    id: 't-v',
    source: 't',
    target: 'v',
    markerEnd: {
      type: MarkerType.Arrow,
    },
    type: 'smoothstep',
  },
  {
    id: 'u-v',
    source: 'u',
    target: 'v',
    markerEnd: {
      type: MarkerType.Arrow,
    },
    type: 'smoothstep',
  },
  {
    id: 'v-w',
    source: 'v',
    target: 'w',
    markerEnd: {
      type: MarkerType.Arrow,
    },
    type: 'smoothstep',
  },
  {
    id: 'w-x',
    source: 'w',
    target: 'x',
    markerEnd: {
      type: MarkerType.Arrow,
    },
    type: 'smoothstep',
  },
  {
    id: 'x-y',
    source: 'x',
    target: 'y',
    markerEnd: {
      type: MarkerType.Arrow,
    },
    type: 'smoothstep',
  },
  {
    id: 'x-z',
    source: 'x',
    target: 'z',
    markerEnd: {
      type: MarkerType.Arrow,
    },
    type: 'smoothstep',
  },
  {
    id: 'y-za',
    source: 'y',
    target: 'za',
    markerEnd: {
      type: MarkerType.Arrow,
    },
    type: 'smoothstep',
  },
  {
    id: 'z-za',
    source: 'z',
    target: 'za',
    markerEnd: {
      type: MarkerType.Arrow,
    },
    type: 'smoothstep',
  },
  {
    id: 'za-zb',
    source: 'za',
    target: 'zb',
    markerEnd: {
      type: MarkerType.Arrow,
    },
    type: 'smoothstep',
  },
  {
    id: 'zb-zc',
    source: 'zb',
    target: 'zc',
    markerEnd: {
      type: MarkerType.Arrow,
    },
    type: 'smoothstep',
  },
  {
    id: 'zc-zd',
    source: 'zc',
    target: 'zd',
    markerEnd: {
      type: MarkerType.Arrow,
    },
    type: 'smoothstep',
  },
  {
    id: 'zd-ze',
    source: 'zd',
    target: 'ze',
    markerEnd: {
      type: MarkerType.Arrow,
    },
    type: 'smoothstep',
  },
  {
    id: 'ze-zf',
    source: 'ze',
    target: 'zf',
    markerEnd: {
      type: MarkerType.Arrow,
    },
    type: 'smoothstep',
  },
];
