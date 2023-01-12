import {useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {Theme, useTheme} from '../theme';

export const createStyles =
  <T extends StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>, V>(
    styles: T | ((theme: Partial<Theme>, props: V) => T),
  ) =>
  (props: V = {} as any): T => {
    const {theme} = useTheme();
    const css = useMemo(() => {
      return typeof styles === 'function' ? styles(theme, props) : styles;
    }, [theme, styles]);

    return StyleSheet.create(css);
  };
