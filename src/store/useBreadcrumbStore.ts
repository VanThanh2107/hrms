import { create } from 'zustand';

type BreadcrumbItem = {
  label: string;
  href?: string;
};

interface BreadcrumbState {
  items: BreadcrumbItem[];
  setBreadcrumb: (items: BreadcrumbItem[]) => void;
  resetBreadcrumb: () => void;
}

export const useBreadcrumbStore = create<BreadcrumbState>((set) => ({
  items: [],
  setBreadcrumb: (items) => set({ items }),
  resetBreadcrumb: () => set({ items: [] }),
}));
