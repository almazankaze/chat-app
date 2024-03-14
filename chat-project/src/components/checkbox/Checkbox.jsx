import { useState } from "react";

import {
  CheckBoxContainer,
  Icon,
  HiddenCheckbox,
  BaseCheckbox,
} from "./checkbox.style";

const Checkbox = ({ label, ischecked, ...otherProps }) => {
  const defaultChecked = ischecked ? ischecked : false;
  const [checked, setChecked] = useState(defaultChecked);

  return (
    <CheckBoxContainer {...otherProps}>
      <HiddenCheckbox
        checked={checked}
        onChange={() => setChecked((prev) => !prev)}
      />
      <BaseCheckbox checked={checked}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </BaseCheckbox>
      <span>{label}</span>
    </CheckBoxContainer>
  );
};

export default Checkbox;
