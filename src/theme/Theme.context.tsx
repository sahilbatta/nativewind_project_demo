import React, {useEffect} from 'react';

import {darkTheme, defaultTheme} from './Theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Theme} from './Theme.interface';

interface ProvidedValue {
  theme: Theme;
  isLoadingTheme: boolean;
  toggleTheme: () => void;
}

const Context = React.createContext<ProvidedValue>({
  theme: defaultTheme,
  isLoadingTheme: false,
  toggleTheme: () => {
    console.log('ThemeProvider is not rendered!');
  },
});

export interface Props {
  initial: Theme;
  children?: React.ReactNode;
}

export const ThemeProvider = React.memo<Props>(props => {
  const [theme, setTheme] = React.useState<Theme>(defaultTheme);
  const [isLoadingTheme, setIsLoadingTheme] = React.useState<boolean>(true);

  useEffect(() => {
    findOldTheme();
  }, []);

  const findOldTheme = async () => {
    const themeMode = await AsyncStorage.getItem('themeMode');
    if (themeMode !== null) {
      themeMode === 'default' ? setTheme(defaultTheme) : setTheme(darkTheme);
      setIsLoadingTheme(false);
    }
    setIsLoadingTheme(false);
  };

  const toggleTheme = async () => {
    const newTheme = theme.themeMode === 'default' ? darkTheme : defaultTheme;
    setTheme(newTheme);
    await AsyncStorage.setItem('themeMode', newTheme.themeMode);
  };

  return (
    <Context.Provider value={{theme, isLoadingTheme, toggleTheme}}>
      {props.children}
    </Context.Provider>
  );
});

export const useTheme = () => React.useContext(Context);
