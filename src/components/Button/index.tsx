import * as React from 'react';
import {
  StyleProp,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import renderNode from '../../helpers/renderNode';
import {createStyles} from '../../helpers/createStyles';
import {IconNode} from '../Icon';
import Icon from '../Icon';
import View from '../View';
import Text from '../Text';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
type CustomTextStyleProp = StyleProp<TextStyle> | Array<StyleProp<TextStyle>>;

export interface IButtonProps {
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  type?: 'text' | 'solid' | 'outline' | 'link';
  text?: string;
  disable?: boolean;
  backgroundColor?: string;
  buttonStyle?: CustomStyleProp;
  style?: CustomStyleProp;
  textStyle?: CustomTextStyleProp;
  shadowStyle?: CustomStyleProp;
  onPress?: () => void;
  disableStyle?: boolean;
  startIcon?: IconNode;
  endIcon?: IconNode;
  children?: React.ReactNode;
  iconContainerStyle?: StyleProp<ViewStyle>;
  activeOpacity?: number;
  shadow?: boolean;
  radius?: number;
  hitslop?: any;
}

const Button = React.forwardRef<any, IButtonProps>(
  (
    {
      size,
      type,
      style,
      disable,
      textStyle,
      shadowStyle,
      backgroundColor,
      disableStyle,
      startIcon,
      endIcon,
      children,
      iconContainerStyle,
      activeOpacity,
      text,
      shadow,
      buttonStyle,
      fullWidth,
      radius,
      hitslop,
      ...props
    },
    ref,
  ) => {
    const Styles = useStyles(props);

    const renderContent = (type: any) => {
      return (
        <View style={Styles.contentStyle}>
          {startIcon &&
            renderNode(Icon, startIcon, {
              containerStyle: StyleSheet.flatten([
                Styles.iconContainer,
                iconContainerStyle,
              ]),
            })}
          {text ? (
            <Text
              style={[
                type === 'solid' ? Styles.solidTextStyle : Styles.txtStyle,
                textStyle,
              ]}>
              {text}
            </Text>
          ) : null}
          {endIcon &&
            renderNode(Icon, endIcon, {
              containerStyle: StyleSheet.flatten([
                Styles.iconContainer,
                iconContainerStyle,
              ]),
            })}
        </View>
      );
    };

    return (
      <View>
        <TouchableOpacity
          // hitSlop={hitslop?hitslop:{right: 15, top: 15, left: 15, bottom: 15}}
          testID="Tru__Button"
          disabled={disable}
          activeOpacity={activeOpacity}
          style={
            StyleSheet.flatten([
              Styles.container,
              shadow && Styles.shadowStyle,
              disable && Styles.disableStyle,
              type && !fullWidth && Styles[type],
              size && Styles[size],
              backgroundColor && {backgroundColor},
              buttonStyle && buttonStyle,
              style && style,
            ]) as ViewStyle
          }
          ref={ref}
          {...props}>
          {renderContent(type)}
          {children}
        </TouchableOpacity>
      </View>
    );
  },
);

const useStyles = createStyles<StyleSheet.NamedStyles<any>, IButtonProps>(
  (theme, props) => ({
    container: {
      borderRadius: hp(1.2),
      paddingVertical: hp(1.2),
      alignItems: 'center',
      justifyContent: 'center',
    },
    contentStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    txtStyle: {
      fontSize: hp(1.7),
      color: theme?.color?.textColor,
      // fontFamily: 'Gotham-Book',
    },
    solidTextStyle: {
      fontSize: hp(1.7),
      color: '#000',
      // fontFamily: 'Gotham-Bold',
    },
    disableStyle: {
      opacity: 0.5,
      backgroundColor: theme?.color?.disabledColor,
    },
    shadowStyle: {
      shadowRadius: 8,
      shadowOpacity: 0.2,
      shadowColor: theme?.color?.shadowColor,
      shadowOffset: {
        width: 0,
        height: 3,
      },
    },
    outline: {
      borderWidth: 1,
      borderColor: theme?.color?.borderColor,
    },
    solid: {
      backgroundColor: theme?.color?.background,
    },
    link: {
      borderWidth: 0,
      fontSize: hp(5.5),
      backgroundColor: 'transparent',
    },
    // small: {
    //   fontSize: theme?.fontSize?.small,
    //   paddingHorizontal: hp(1.8),
    // },
    // medium: {
    //   fontSize: theme?.fontSize?.medium,
    //   paddingHorizontal: hp(3.5),
    // },
    // large: {
    //   fontSize: theme?.fontSize?.large,
    //   paddingHorizontal: hp(5.5),
    // },
    iconContainer: {
      marginHorizontal: 5,
    },
  }),
);

Button.defaultProps = {
  type: 'outline',
  size: 'medium',
  shadow: false,
  disable: false,
};

export default React.memo(Button);
Button.displayName = 'Button';
