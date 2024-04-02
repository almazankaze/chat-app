import { useState } from "react";
import { setIsModalOpen } from "../../store/modal/modal-actions";
import { useDispatch, useSelector } from "react-redux";

import {
  selectIsModalOpen,
  selectModalType,
} from "../../store/modal/modal-selector.js";
import { selectChatModalLoading } from "../../store/chat/chat-selector.js";
import { selectUser } from "../../store/user/user-selector";
import { createNewChat } from "../../store/chat/chat-actions.js";

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
  friendName: "",
};

const Modal = ({ children, modalType, ...otherProps }) => {
  const CustomModal = getModal(modalType);
  const dispatch = useDispatch();

  const isOpen = useSelector(selectIsModalOpen);
  const myModalType = useSelector(selectModalType);
  const user = useSelector(selectUser);
  const modalLoading = useSelector(selectChatModalLoading);

  const [formFields, setFormFields] = useState(defaultFormFields);
  const [showError, setShowError] = useState(false);
  const { roomName, friendName } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const closeModal = () => {
    resetFormFields();
    setShowError(false);
    dispatch(setIsModalOpen(false));
  };

  const createChat = () => {
    if (roomName) {
      const chat = {
        senderId: user._id,
        name: roomName,
        receiverId: null,
      };

      dispatch(createNewChat(chat)).then((resp) => {
        if (resp === 200) {
          closeModal();
        } else {
          setShowError(true);
        }
      });
    }
  };

  return (
    <ModalContainer className={isOpen ? "show-modal" : ""}>
      <CustomModal disabled={modalLoading} {...otherProps}>
        {modalLoading ? (
          <ModalSpinner />
        ) : (
          <ModalContent>
            {myModalType === "create" ? (
              <>
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
                </div>
                <span
                  className={
                    showError ? "modal-error show-modal-error" : "modal-error"
                  }
                >
                  Something went wrong
                </span>
                <ModalButtons>
                  <Button
                    type="button"
                    buttonType={BUTTON_TYPE_CLASSES.heroBtn}
                    className="m-medium"
                    onClick={createChat}
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
              </>
            ) : (
              <>
                <h3>Invite Member</h3>
                <div className="modal-inputs">
                  <div className="modal-input-container">
                    <label>Email</label>
                    <input
                      type="text"
                      name="friendName"
                      onChange={handleChange}
                      value={friendName}
                      required
                      className="modal-input"
                    />
                  </div>
                </div>
                <span
                  className={
                    showError ? "modal-error show-modal-error" : "modal-error"
                  }
                >
                  Something went wrong
                </span>
                <ModalButtons>
                  <Button
                    type="button"
                    buttonType={BUTTON_TYPE_CLASSES.heroBtn}
                    className="m-medium"
                  >
                    Invite
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
              </>
            )}
          </ModalContent>
        )}
      </CustomModal>
    </ModalContainer>
  );
};

export default Modal;
