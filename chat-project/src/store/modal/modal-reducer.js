import { MODAL_ACTION_TYPES } from "./modal-types";

const MODAL_INITIAL_STATE = {
  isModalOpen: false,
  modalType: "",
};

export const modalReducer = (state = MODAL_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case MODAL_ACTION_TYPES.SET_IS_MODAL_OPEN:
      return {
        ...state,
        modalType: payload.modalType,
        isModalOpen: payload.boolean,
      };
    default:
      return state;
  }
};
