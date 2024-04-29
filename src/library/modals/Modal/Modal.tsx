/** @format */

import { ModalInit } from "./ModalInit";
import { ModalHeader } from "./ModalHeader";
import { ModalBody } from "./ModalBody";
import { ModalFooter } from "./ModalFooter";
import { ModalComponent } from "./types";

export const Modal: ModalComponent = ({ children }) => children;

Modal.Init = ModalInit;
Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
Modal.displayName = "@/library/modals/Modal";
