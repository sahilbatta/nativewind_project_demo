import {Theme} from './Theme.interface';

export const defaultTheme: Theme = {
  color: {
    primary: '#03a9f4',
    onPrimary: '#fff',
    primaryDark: '#0288d1',
    surface: '#fff',
    onSurface: '#000',
    background: '#f4b233',
    themeBackground: '#fff',
    custom: '#009688',
    textColor: '#f4b233',
    disabledTextColor: '#000',
    borderColor: '#f4b233',
    disabledColor: '#dedede',
    shadowColor: '#757575',
    nav: {
      backgroundColor: '#202124',
      active: '#fff',
      inActive: '#c489bc',
    },
    title: '#fff',
    subTitle: '#fff',
    primaryHeader: '#000',
    secondaryBackground: '#F4F4F4',
    secondary: '#fff',
    itemTxt: '#4B4F54',
    itemTitleTxt: '#000000',
  },
  themeMode: 'default',
};

export const darkTheme: Theme = {
  color: {
    primary: '#03a9f4',
    onPrimary: '#fff',
    primaryDark: '#0288d1',
    surface: '#545454',
    onSurface: '#fff',
    background: '#3f3f3f',
    custom: '#009688',
    textColor: '#fff',
    disabledTextColor: '#000',
    borderColor: '#f4b233',
    themeBackground: '#555',
    disabledColor: '#dedede',
    shadowColor: '#757575',
    nav: {
      backgroundColor: '#202124',
      active: '#fff',
      inActive: '#c489bc',
    },
    title: '#000',
    subTitle: '#000',
    primaryHeader: '#fff',
    secondaryBackground: '#F4F4F4',
    secondary: '#fff',
    itemTxt: '#4B4F54',
    itemTitleTxt: '#000000',
  },

  themeMode: 'dark',
};
