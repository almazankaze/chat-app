import styled from "styled-components";

export const CheckBoxContainer = styled.label`
  display: flex;
  cursor: pointer;
  gap: 0.5rem;
  user-select: none;
  -moz-user-select: none;
  -webkit-text-select: none;
  -webkit-user-select: none;
  transition: all 0.25s ease-in-out;

  &:hover {
    color: var(--link-text);
  }
`;

export const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  vertical-align: middle;
  position: relative;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;

  @media (max-width: 560px) {
    bottom: 2px;
  }
`;

export const BaseCheckbox = styled.div`
  display: inline-block;
  height: 1rem;
  width: 1rem;
  vertical-align: middle;
  position: relative;
  border-radius: 0.25rem;
  border: 1px solid var(--third-color);
  background: ${(props) =>
    props.checked ? "var(--link-text)" : "var(--third-color)"};

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 2px var(--link-text);
  }

  ${Icon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }

  @media (max-width: 560px) {
    height: 0.875rem;
    width: 0.875rem;
    bottom: 2px;
  }
`;
