type TextProps = {
  placeholder: String
  pattern: RegExp
  multiline: Boolean
}
type NumberProps = {
  min: Number
  max: Number
  step: Number
  range: Boolean
}
enum ChoiceType {
  Select,
  MultiSelect,
  Radio,
  Tab
}
type ChoiceProps = {
  options: String[]
  initialOption: String
  selectedOption: String
  multiple: Boolean
  display: ChoiceType
}

enum BoolType {
  Checkbox,
  Switch,
  Toggle
}
type BoolProps = {
  falseLabel: String
  trueLabel: String
  checked: Boolean
  display: BoolType
}

const Input = (name, variant) => `
  <label class="label" for=${name}>${name}
    <input id=${name} class="input" type=${variant || 'text'} />
  </label>
`;

const Text = (props: TextProps) => ``;
const Number = (props:NumberProps) => ``;
const Date = (props: TextProps) => ``;
const Range = (props: NumberProps[]) => ``;
const Color = (props: TextProps) => ``;

const Select = (props: ChoiceProps) => ``;
const Radio = (props: ChoiceProps) => ``;

const Checkbox = (props: BoolProps) => ``;
const Toggle = (props: BoolProps) => ``;

export {Input}
