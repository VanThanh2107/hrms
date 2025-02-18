import { create } from 'zustand';

interface SelectionState {
  selectedItems: string[];
  setSelectedItems: (items: string[]) => void;
  clearSelection: () => void;
}

export const useSelectionStore = create<SelectionState>((set) => ({
  selectedItems: [],
  setSelectedItems: (items) => set({ selectedItems: items }),
  clearSelection: () => set({ selectedItems: [] }),
}));
