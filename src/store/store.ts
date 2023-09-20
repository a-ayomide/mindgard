import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export type nodeType = {
  data: {
    label: string;
    weights: [string][];
    activation: string;
    biases: string[];
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
