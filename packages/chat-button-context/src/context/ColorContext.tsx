import * as React from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

interface IColorContext {
  color: string;
  setColor: any;
}

export const ColorContext = React.createContext<Partial<IColorContext>>({});

export const ColorProvider = ({ children }: any) => {
  const [color, setColor] = useLocalStorage('color', '#ccc');

  return (
    <ColorContext.Provider
      value={{
        color,
        setColor,
      }}
    >
      {children}
    </ColorContext.Provider>
  );
};
