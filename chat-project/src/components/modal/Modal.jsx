import { useState } from "react";
import { setIsModalOpen } from "../../store/modal/modal-actions";
import { useDispatch, useSelector } from "react-redux";

import { selectIsModalOpen } from "../../store/modal/modal-selector.js";

import Button, { BUTTON_TYPE_CLASSES } from "../button/Button";

import "./modal.scss";

import {
  BaseModal,
  ModalContainer,
  ModalContent,
  ModalButtons,
  ModalSpinner,
} from "./Modal.style";

export const MODAL_TYPE_CLASSES = {
  base: "base",
};

const getModal = (modalType = MODAL_TYPE_CLASSES.base) =>
  ({
    [MODAL_TYPE_CLASSES.base]: BaseModal,
  }[modalType]);

const defaultFormFields = {
  roomName: "",
  friendId: "",
};

const Modal = ({ children, modalType, isLoading = false, ...otherProps }) => {
  const CustomModal = getModal(modalType);
  const dispatch = useDispatch();

  const isOpen = useSelector(selectIsModalOpen);

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { roomName, friendId } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const closeModal = () => {
    dispatch(setIsModalOpen(false));
  };

  return (
    <ModalContainer className={isOpen ? "show-modal" : ""}>
      <CustomModal disabled={isLoading} {...otherProps}>
        {isLoading ? (
          <ModalSpinner />
        ) : (
          <ModalContent>
            <h3>Create new Group</h3>
            <div className="modal-inputs">
              <div className="modal-input-container">
                <label>Room Name</label>
                <input
                  type="text"
                  name="roomName"
                  onChange={handleChange}
                  value={roomName}
                  required
                  className="modal-input"
                />
              </div>
              <div className="modal-input-container">
                <label>Friend Id</label>
                <input
                  type="text"
                  name="friendId"
                  onChange={handleChange}
                  value={friendId}
                  required
                  className="modal-input"
                />
              </div>
            </div>
            <ModalButtons>
              <Button
                type="button"
                buttonType={BUTTON_TYPE_CLASSES.heroBtn}
                className="m-medium"
              >
                Create
              </Button>
              <Button
                type="button"
                className="m-medium"
                buttonType={BUTTON_TYPE_CLASSES.danger}
                onClick={closeModal}
              >
                Cancel
              </Button>
            </ModalButtons>
          </ModalContent>
        )}
      </CustomModal>
    </ModalContainer>
  );
};

export default Modal;
