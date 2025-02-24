import { ComponentProps } from "react";
import styles from "./WindowButton.module.css";
import { WINDOW_BUTTON_VARIANT } from "./WindowButtonVariant";

type WindowButtonProps = ComponentProps<"button"> & {
  variant: keyof typeof WINDOW_BUTTON_VARIANT;
};

export default function WindowButton({ variant, ...props }: WindowButtonProps) {
  return (
    <button {...props} className={styles.windowButton}>
      <img src={WINDOW_BUTTON_VARIANT[variant]} alt="" />
    </button>
  );
}
