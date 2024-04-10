import React, {PropsWithChildren} from 'react';

export enum THEMES {
  LIGHT = 'light',
  DARK = 'dark',
}

export const ThemeContext = React.createContext({
  theme: THEMES.LIGHT,
  toggleTheme: () => {},
});

export const ThemeProvider = ({children}: PropsWithChildren) => {
  const [theme, setTheme] = React.useState(THEMES.LIGHT);

  const toggleTheme = () => {
    const nextTheme = theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
    setTheme(nextTheme);
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
