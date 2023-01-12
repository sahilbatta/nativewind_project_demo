import React, {memo} from 'react';
import {
  View as CustomView,
  StyleSheet,
  ViewProps,
  ViewStyle,
  StyleProp,
} from 'react-native';
import {createStyles} from '../../helpers/createStyles';

export interface IViewProps extends Omit<ViewProps, 'style'> {
  children?: JSX.Element | JSX.Element[] | string | any;
  style?: StyleProp<ViewStyle>;
}

const View = memo<IViewProps>(props => {
  const useStyles = createStyles<StyleSheet.NamedStyles<any>, IViewProps>(
    (theme, props) => ({
     
    }),
  );

  const themeStyles = useStyles(props);
  return (
    <CustomView
      {...props}
      style={[viewStyles.container, themeStyles.test, props.style]}
    />
  );
});

const viewStyles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
  },
});
export default View;
