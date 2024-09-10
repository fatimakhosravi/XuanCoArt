import { MouseEventHandler, ReactElement } from "react";

export interface CommonButtonProps {
  class_name?: string;
  text_button: string;
  icon?: ReactElement;
  on_click: MouseEventHandler<HTMLButtonElement>;
}
