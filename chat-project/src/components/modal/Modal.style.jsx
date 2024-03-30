import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: grid;
  place-items: center;
  visibility: hidden;
  z-index: -100;

  &.show-modal {
    visibility: visible;
    z-index: 1100;
  }
`;

export const BaseModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--third-color);
  border-radius: 1rem;
  width: 80vw;
  height: 30vh;
  max-width: 480px;
  position: relative;
  color: var(--white);
  box-shadow: 0 6px 18px 7px rgba(253, 117, 38, 0.2);
`;

export const ModalContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  padding: 2rem;

  @media (max-width: 360px) {
    > h3 {
      font-size: 1rem;
    }
  }
`;

export const ModalButtons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  justify-content: space-around;

  @media (max-width: 360px) {
    flex-direction: column;
  }
`;

export const ModalSpinner = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 3px solid rgba(195, 195, 195, 0.6);
  border-radius: 50%;
  border-top-color: var(--secondary-color);
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;
