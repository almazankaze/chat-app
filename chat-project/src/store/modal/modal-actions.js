import { createAction } from "../../utils/reducer/reducer";
import { MODAL_ACTION_TYPES } from "./modal-types";

export const setIsModalOpen = (boolean) => {
  const data = {
    boolean,
  };
  return createAction(MODAL_ACTION_TYPES.SET_IS_MODAL_OPEN, data);
};
