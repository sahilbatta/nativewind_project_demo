import * as React from 'react';
import {
  StyleSheet,
  Text as NativeText,
  TextProps,
  StyleProp,
  TextStyle,
} from 'react-native';
import {createStyles} from '../../helpers/createStyles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

type CustomTextStyleProp = StyleProp<TextStyle> | Array<StyleProp<TextStyle>>;
export interface ITextProps extends TextProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  alignText?: 'left' | 'right' | 'center';
  color?: string;
  fontFamily?: string;
  style?: CustomTextStyleProp;
  children?: React.ReactNode;
}

const Text = React.forwardRef<any, ITextProps>(
  ({as, style, color, children, fontFamily, alignText, ...props}, ref) => {
    const Styles = useStyles();
    return (
      <NativeText
        testID="Tru__Text"
        // adjustsFontSizeToFit
        style={
          StyleSheet.flatten([
            Styles.default,
            Styles[as || 'p'],
            alignText && Styles[alignText],
            color && {color},
            fontFamily && {fontFamily},
            style && style,
          ]) as TextStyle
        }
        ref={ref}
        {...props}>
        {children?children:''}
      </NativeText>
    );
  },
);

const useStyles = createStyles<StyleSheet.NamedStyles<any>, ITextProps>(
  (theme, props) => ({
    default: {
      marginLeft: 0,
      marginRight: 0,
    },
    h1: {
      fontSize: hp(3.5),
    },
    h2: {
      fontSize: hp(2.8),
    },
    h3: {
      fontSize: hp(2),
    },
    h4: {
      fontSize: hp(1.8),
    },
    h5: {
      fontSize: hp(1.4),
    },
    h6: {
      fontSize: hp(1.2),
    },
    p: {
      fontSize: hp(1.5),
    },
    center: {
      textAlign: 'center',
    },
    left: {
      textAlign: 'left',
    },
    right: {
      textAlign: 'right',
    },
  }),
);

Text.defaultProps = {
  as: 'p',
  alignText: 'center',
};

export default React.memo(Text);
Text.displayName = 'Text';
