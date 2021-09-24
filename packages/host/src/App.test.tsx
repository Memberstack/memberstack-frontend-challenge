import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { INITIAL_COLOR } from './constants';

describe('App', ()=>{
  describe('sanity', ()=>{
    it('matches snapshot', ()=>{
      const {container} = render(<App/>)
      expect(container.firstChild).toMatchSnapshot();
    })
    it('renders Check the code out on GitHub link', () => {
      render(<App />);
      const linkElement = screen.getByText(/Check the code out on GitHub/i);
      expect(linkElement).toBeInTheDocument();
    });

    it('input has correct initial value', () => {
      render(<App />);
      const colorPickerInput = screen.getByTestId(/color-test/i);
      expect(colorPickerInput).toHaveValue(INITIAL_COLOR);
    });
  })

  describe('ColorPickerInput value changes onChange', ()=>{
    it('color value changes', ()=>{
      render(<App/>)
      const colorPickerInput = screen.getByTestId(/color-test/i);
      fireEvent.change(colorPickerInput, {target: {value: '#292d3e'}})
      expect(colorPickerInput).toHaveValue('#292d3e');
    })
  })
});