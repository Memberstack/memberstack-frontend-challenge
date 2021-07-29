import { makeStyles, Button } from "@material-ui/core";
import { useCallback, useRef } from "react";
import ColorizeIcon from '@material-ui/icons/Colorize';

interface ColorPickerProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

type ColorPickerStyleProps = {
  color: string
}

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  card: {
    width: '25%',
    height: '25%'
  },
  input: {
    opacity: 0,
    position: 'absolute'
  },
  button: {
    backgroundColor: ({ color }: ColorPickerStyleProps) => color,
    "&:hover": {
      backgroundColor: ({ color }: ColorPickerStyleProps) => color,
    }
  }
}));
export const ColorPicker = ({ value, onChange }: ColorPickerProps) => {
  const classes = useStyles({ color: value });
  const pickerRef = useRef<HTMLInputElement>(null);

  const onClick = useCallback(() => {
    pickerRef.current?.click();
  }, [])

  /* 
    * We can further modify the button text to change based on the brightness of the selected color 
    * eg. Text becomes white when black background is chosen
    */
  return (
    <div className={classes.container}>
      <Button variant="contained" onClick={onClick} startIcon={<ColorizeIcon />} className={classes.button}>
        Please select a color
      </Button>
      <input
        type="color"
        value={value}
        onChange={onChange}
        ref={pickerRef}
        className={classes.input}
      />
    </div>
  );
};

export default ColorPicker;
