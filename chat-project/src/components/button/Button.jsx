import {
  BaseButton,
  FormButton,
  ChatButton,
  HeroButton,
  ClearButton,
  DangerButton,
  LoadingSpinner,
} from "./button.style";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  form: "form",
  chat: "chat",
  heroBtn: "hero-btn",
  clear: "clear-btn",
  danger: "danger-btn",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.form]: FormButton,
    [BUTTON_TYPE_CLASSES.chat]: ChatButton,
    [BUTTON_TYPE_CLASSES.heroBtn]: HeroButton,
    [BUTTON_TYPE_CLASSES.clear]: ClearButton,
    [BUTTON_TYPE_CLASSES.danger]: DangerButton,
  }[buttonType]);

const Button = ({ children, buttonType, isLoading = false, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton disabled={isLoading} {...otherProps}>
      {isLoading ? <LoadingSpinner /> : <>{children}</>}
    </CustomButton>
  );
};

export default Button;
