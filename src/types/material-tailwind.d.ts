declare module "@material-tailwind/react" {
  import * as React from "react";

  export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    size?: "sm" | "md" | "lg";
    variant?: "text" | "filled" | "outlined" | "gradient";
    color?: "white" | "black" | "blue-gray" | "gray" | "brown" | "deep-orange" | "orange" | "amber" | "yellow" | "lime" | "light-green" | "green" | "teal" | "cyan" | "light-blue" | "blue" | "indigo" | "deep-purple" | "purple" | "pink" | "red" | string;
    [key: string]: any;
  }
  
  export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    [key: string]: any;
  }
  
  export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    [key: string]: any;
  }

  export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "lead" | "paragraph" | "small";
    color?: string;
    as?: keyof JSX.IntrinsicElements;
    [key: string]: any;
  }

  export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    [key: string]: any;
  }

  export interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    [key: string]: any;
  }

  export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "text" | "filled" | "outlined" | "gradient";
    color?: string;
    [key: string]: any;
  }

  export interface CollapseProps {
    open: boolean;
    children: React.ReactNode;
    [key: string]: any;
  }

  export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
    blurred?: boolean;
    color?: string;
    className?: string;
    children: React.ReactNode;
    [key: string]: any;
  }

  export const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
  export const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
  export const Textarea: React.ForwardRefExoticComponent<TextareaProps & React.RefAttributes<HTMLTextAreaElement>>;
  export const Typography: React.ForwardRefExoticComponent<TypographyProps & React.RefAttributes<HTMLElement>>;
  export const Card: React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>>;
  export const CardBody: React.ForwardRefExoticComponent<CardBodyProps & React.RefAttributes<HTMLDivElement>>;
  export const IconButton: React.ForwardRefExoticComponent<IconButtonProps & React.RefAttributes<HTMLButtonElement>>;
  export const Collapse: React.FC<CollapseProps>;
  export const Navbar: React.ForwardRefExoticComponent<NavbarProps & React.RefAttributes<HTMLElement>>;
  export const ThemeProvider: React.FC<{ children: React.ReactNode }>;
}

