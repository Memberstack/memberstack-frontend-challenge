import * as React from 'react';

interface IColorContext {
  color: string;
  setColor: any;
}

export const ColorContext = React.createContext<Partial<IColorContext>>({});

export const ColorProvider = ({ children }: any) => {
  const [color, setColor] = React.useState('#fff');

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
