/** @format */

import { ModalProviderReturn } from "./Modal";

// Modal's data type.
export type ModalType = {
  component: React.ReactNode;
  showing: boolean;
};

// Use modal store hook's return.
export type UseModalStoreReturn = {
  subscribe: (callback: () => void) => () => boolean;
  getModal: () => ModalType;
  setModal: (modalData: Partial<ModalType>) => void;
};

// Modals provider's props.
export type ModalsProviderProps = object;

// Use modal hook's return.
export interface UseModalReturn extends Partial<ModalProviderReturn> {
  showModal: (component: React.ReactNode) => void;
  hideModal: () => void;
}
