import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { ChangeEventHandler, CSSProperties, ReactNode, FocusEventHandler, ReactElement } from 'react';

// OBJECT INTERFACES

export type CTAButtonProps = {
  id: string;
  btn_label?: string;
  onClick: () => void;
  btn_class?: string;
  btn_type: string;
  icon?: ReactNode;
  disabled?: boolean;
  icon_after?: boolean;
  props?: any;
  is_submitting?: boolean,
}

export type FormInputProps = {
	type?: string,
	onChange: ChangeEventHandler<HTMLInputElement>,
	placeholder: string,
	label?: string,
	div_class?: string,
	label_class?: string,
	input_class?: string,
	error_message?: string,
  onBlur?: FocusEventHandler<HTMLInputElement>,
  mandatory?: boolean,
  value?: string,
}

export type FormTextAreaProps = {
  placeholder: string,
	label?: string,
	div_class?: string,
	label_class?: string,
	input_class?: string,
	error_message?: string,
  mandatory?: boolean,
  value?: string,
	onChange: ChangeEventHandler<HTMLTextAreaElement>,
  onBlur: ChangeEventHandler<HTMLTextAreaElement>,
}

export type LoginSignupProps = {
  type: string;
}

export type LoginSignupFormProps = {
  name?: string;
  emailid: string;
  password: string;
  confirmpwd?: string;
}

export type DashboardLayoutProps = {
  header_title?: string;
  dashboard_right_content?: ReactNode;
  children?: ReactNode;
  header_subtitle?: string;
  breadcrumbs?: BreadcrumbProps;
  preview_right_content?: ReactNode;
};

export type IconImageProps = {
  src: string;
  alt: string;
  className?: string;
  style?: CSSProperties;
  height?: number;
  width?: number;
};

export type SVGIconProps = {
  children: ReactElement<any, any>,
  fill: string,
  height?: string,
  width?: string,
  viewBox?: string,
  className?: string,
}

export type AccentHoverProps = {
  [key: string]: string;
}

export type ViewDropdownProps = {
  id: string;
  btn_type: string;
  btn_label: string;
  btn_class?: string;
  icon?: ReactNode;
  dd_size: string;
  children: ReactNode;
};

// ARRAY INTERFACES
export interface ProfileFormProps {
  // theme_basis?: string, 
  theme_color?: string,
  interface_theme?: string;
  profile_picture?: string,
  company_name: string,
  company_address: string,
  company_description: string,
}[];

export type NavLinks = {
  id: string;
  label: string;
  url: string;
  light_icon: string;
  dark_icon: string;
  color_icon: string;
  fa_icon: IconDefinition,
  theme_color: string,
  icon_color: string,
  custom_wid?: string;
  custom_hei?: string;
  path: (color: string, height?: string, width?: string) => ReactElement;
}[];

export type TaskList = {
  task_name: string;
  task_key: string;
  ready: boolean;
  locked?: boolean;
}[];

export type TaskCardProps = {
  title: string;
  key: string;
  progress_value: number;
  max_subtasks: number;
  task_list: TaskList;
  // quantity: string;
}[];

export type BreadcrumbProps = {
  title: string;
  href: string;
}[];

export type GenerateCardList = {
  id: string;
  list: TaskList;
}[]

export type NavTabsProps = {
  id: number;
  label: string;
}[];

export type TableProps = {
  id: string;
  title: string;
  width?: string;
  add_classes?: string;
}[];

export type IndustryListProps = {
  id: string;
  name: string;
  short_name: string;
  code: string;
  bg_color: string;
  txt_color?: string;
}[];

export type ThemeColorProps = {
  id: string;
  color_class: string;
  color_code: string;
}[];