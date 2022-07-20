import create from 'zustand'

type GlobalProps = {
  bears: number
  increasePopulation: () => void
  removeAllBears: ()=> void
}

export const globalStore = create<GlobalProps>()((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))