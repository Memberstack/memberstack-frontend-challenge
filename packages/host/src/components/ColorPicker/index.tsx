interface ColorPickerProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const ColorPicker = ({ value, onChange }: ColorPickerProps) => (
  <input
    type="color"
    value={value}
    onChange={onChange}
  />
);

export default ColorPicker;
