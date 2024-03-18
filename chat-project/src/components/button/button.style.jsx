import styled from "styled-components";

export const BaseButton = styled.button`
  background-color: var(--secondary-color);
  color: var(--white);
  min-width: 200px;
  text-align: center;
  padding: 0.5em;
  margin: 0;
  display: inline-block;
  transition: all 0.3s linear;
  font-size: 1.125rem;
  font-weight: 700;
  text-transform: uppercase;
  border: 1px solid var(--secondary-color);
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  &:hover {
    border: 1px solid var(--secondary-color-hover);
    background-color: var(--secondary-color-hover);
  }

  &.full-btn {
    width: 100%;
    margin: 0.75rem 0 1.5rem;
  }

  &.m-medium {
    margin: 1rem;
  }

  @media (max-width: 600px) {
    font-size: 1rem;
    min-width: 180px;
  }

  @media (max-width: 320px) {
  }
`;

export const FormButton = styled(BaseButton)`
  margin: 0.625rem 0;
  outline: none;

  font-size: 1rem;
  width: 100%;
  text-transform: none;

  &:hover {
    background-color: var(--secondary-color-hover);
    color: var(--white);
  }
`;

export const ChatButton = styled(BaseButton)`
  min-width: 72px;
  max-width: 72px;
  text-transform: none;
  outline: none;
  border: none;
  background-image: linear-gradient(
    to right,
    #dd5e89 0%,
    #f7bb97 51%,
    #dd5e89 100%
  );
  transition: 0.5s;
  background-size: 200% auto;

  &:hover {
    border: none;
    background-position: right;
    text-decoration: none;
  }
`;

export const HeroButton = styled(BaseButton)`
  margin: 0.75rem 0;
`;

export const ClearButton = styled(BaseButton)`
  background: transparent;
  color: var(--white);
  margin: 0;
  font-weight: 500;
  border: 1px solid var(--secondary-color);

  &:hover {
    background-color: var(--secondary-color);
    color: var(--white);
  }
`;

export const DangerButton = styled(HeroButton)`
  background-color: var(--error);
  border: 1px solid var(--error);
  &:hover {
    background-color: transparent;
    color: var(--white);
  }
`;

export const LoadingSpinner = styled.div`
  display: inline-block;
  width: 30px;
  height: 30px;
  border: 3px solid rgba(195, 195, 195, 0.6);
  border-radius: 50%;
  border-top-color: #636767;
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
