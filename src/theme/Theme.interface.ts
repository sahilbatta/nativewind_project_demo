// export interface ColorTheme {
//   primary: string;
//   onPrimary: string;
//   primaryDark: string;
//   surface: string;
//   onSurface: string;
//   background: string;
//   custom: string;
//   textColor: string;
//   disabledTextColor: string;
//   borderColor: string;
//   themeBackground: string;
//   disabledColor: string;
//   shadowColor: string;
// }

// export interface SpacingTheme {
//   base: number;
//   double: number;
// }

// export interface Size {
//   small: number;
//   medium: number;
//   large: number;
//   h1: number;
//   h2: number;
//   h3: number;
//   h4: number;
//   h5: number;
//   h6: number;
//   p: number;
// }

// export interface Theme {
//   id: string;
//   color: ColorTheme;
//   spacing: SpacingTheme;
//   fontSize: Size;
// }

export interface Theme {
  color: {
    primary: string;
    onPrimary: string;
    primaryDark: string;
    surface: string;
    onSurface: string;
    background: string;
    themeBackground: string;
    custom: string;
    textColor: string;
    disabledTextColor: string;
    borderColor: string;
    disabledColor: string;
    shadowColor: string;
    nav: {
      backgroundColor: string;
      active: string;
      inActive: string;
    };
    title: string;
    subTitle: string;
    primaryHeader: string;
    secondaryBackground: string;
    secondary: string;
    itemTxt: string;
    itemTitleTxt: string;
  };
  themeMode: string;
}
