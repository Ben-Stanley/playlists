import { create } from "zustand";

type State = {
  authorised: boolean;
  toggleAuthorisation: (value: boolean) => void;
};


const useStore = create<State>((set) => ({
  authorised: false,
  toggleAuthorisation: (value: boolean) => set({ authorised: value }),
}));

export default useStore;