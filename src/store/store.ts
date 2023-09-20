import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export type nodeType = {
  data: {
    type: string;
    parameters: {
      kernel_size: number;
      stride: number;
      padding: string;
      activation: string;
      filters: number;
      dilation_rate: number;
      use_bias: boolean;
      kernel_initializer: string;
      bias_initializer: string;
      kernel_regularizer: {
        type: string;
        strength: number;
      };
      weights: [string][];
      biases: string[];
    };
  };
  positionAbsolute: {
    x: number;
    y: number;
  };
  position: {
    x: number;
    y: number;
  };
  id: string;
  height: number;
  width: number;
};
interface storeState {
  node?: nodeType;
  updateNode: (data: nodeType) => void;
}

export const useStore = create<storeState>()(
  devtools(
    persist(
      set => ({
        updateNode: data => set({ node: data }),
      }),
      {
        name: 'update-node',
      },
    ),
  ),
);
