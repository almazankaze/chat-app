import styled from "styled-components";

export const SpinnerOverlay = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SpinnerContainer = styled.div`
  display: inline-block;
  width: 64px;
  height: 64px;
  border: 6px solid rgba(195, 195, 195, 0.6);
  border-radius: 50%;
  border-top-color: var(--secondary-color);
  animation: spin 1.2s linear infinite;
  -webkit-animation: spin 1.2s linear infinite;
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
