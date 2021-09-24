import styled from "styled-components";

interface ColorPickerProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const ColorPicker = ({ value, onChange }: ColorPickerProps) => (
  <ColorPickerInput
    type="color"
    value={value}
    onChange={onChange}
    data-testid='color-test'
  />
);

export default ColorPicker;

const ColorPickerInput = styled.input`
  width: 220px;
  height: 24px;
`;