import {style, stylesheet} from 'typestyle'
export type ButtonProps = {
  fontWeight,
  border,
  borderColor,
  borderRadius,
  variant: ButtonVariant
}

export enum ButtonVariant {
  basic,
  primary,
  success,
  link
}

const baseButton = ({
  border: 'solid thin lightgray',
  borderRadius: 2,
  color: 'white',
  padding: '4px 10px'
})

// default
export const Button = text => `
  <button class="button" style="${baseButton}">${text}</button>
`;

// with Behavior
export const Link = (text, route) => ``;
export const Action = (text, action) => ``;
export const Create = (text, item) => ``;
export const Edit = (text, item) => ``;
export const Delete = (text, item) => ``;

// with variant
export const CtaButton = () => ``;
export const Toggle = (on, off) => ``;
export const Radio = (text, value) => ``;

// collection
export const ButtonGroup = buttons => ``;
export const Toolbar = buttons => ``;