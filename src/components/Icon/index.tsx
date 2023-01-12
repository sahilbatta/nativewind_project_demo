import * as React from 'react';
import {
  Platform,
  StyleSheet,
  ViewStyle,
  StyleProp,
  TextStyle,
  ColorValue,
} from 'react-native';
import View from '../View';
import getIconStyle from '../../helpers/getIconStyle';
import getIconType from '../../helpers/getIconType';
import {
  IconButtonProps,
  IconProps as VectorIconProps,
} from 'react-native-vector-icons/Icon';
import {createStyles} from '../../helpers/createStyles';
import {Theme as theme} from '../../theme';

export interface IIconProps extends IconButtonProps {
  /* Type of icon set. [Supported sets here](#available-icon-sets). */
  type?: IconType;

  /** Update React Native Component.
   *  @default `Press handlers present then Pressable else View`
   */
  Component?: typeof React.Component;

  /* Reverses color scheme. */
  reverse?: boolean;

  /* Adds box shadow to button. */
  raised?: boolean;

  /* Add styling to container holding icon. */
  containerStyle?: StyleProp<ViewStyle>;

  /* Provide all props from react-native Icon component. */
  iconProps?: VectorIconProps;

  /* Specify reverse icon color. */
  reverseColor?: string;

  /* Disables onPress events. Only works when `onPress` has a handler. */
  disabled?: boolean;

  /* Style for the button when disabled. Only works when `onPress` has a handler. */
  disabledStyle?: StyleProp<ViewStyle>;

  /* Uses the solid font. */
  solid?: boolean;

  /* Uses the brands font (FontAwesome5 only). */
  brand?: boolean;

  /* custom theme to pass styles */
  theme?: theme;
}

export type IconType =
  | 'material'
  | 'material-community'
  | 'simple-line-icon'
  | 'zocial'
  | 'font-awesome'
  | 'octicon'
  | 'ionicon'
  | 'foundation'
  | 'evilicon'
  | 'entypo'
  | 'antdesign'
  | 'font-awesome-5'
  | string;

export type IconObject = {
  /* Name of icon. */
  name?: string;

  /* Color of icon. */
  color?: string;

  /* Size of icon. */
  size?: number;

  /* Type of icon */
  type?: IconType;

  /* Apply style to the icon using iconStyle. */
  iconStyle?: StyleProp<TextStyle>;
};
export type IconNode = boolean | React.ReactElement<{}> | Partial<IIconProps>;

const Icon = React.forwardRef<any, IIconProps>(
  (
    {
      type,
      name,
      size,
      color: colorProp,
      iconStyle,
      iconProps,
      reverse,
      raised,
      containerStyle,
      reverseColor: reverseColorProp,
      disabled,
      disabledStyle,
      solid,
      brand,
      theme,
    },
    ref,
  ) => {
    const Styles = useStyles();
    const color = colorProp || theme?.color?.onSurface;
    const reverseColor = reverseColorProp || theme?.color?.primary;
    const IconComponent = getIconType(type);
    const iconSpecificStyle = getIconStyle(type, {solid, brand});

    const getBackgroundColor = React.useMemo(() => {
      if (reverse) {
        return color;
      }
      return raised ? theme?.color?.primary : 'transparent';
    }, [color, raised, reverse, theme?.color?.onSurface]);

    const buttonStyles = React.useMemo(
      () => ({
        borderRadius: size + 4,
        height: size * 2 + 4,
        width: size * 2 + 4,
      }),
      [size],
    );

    return (
      <View
        style={StyleSheet.flatten([
          Styles.container,
          (reverse || raised) && Styles.button,
          (reverse || raised) && buttonStyles,
          raised && Styles.raised,
          iconStyle && iconStyle.borderRadius
            ? {
                borderRadius: iconStyle.borderRadius,
              }
            : {},
          containerStyle && containerStyle,
        ])}
        testID="Tru__ICON__CONTAINER">
        <View
          style={StyleSheet.flatten([
            (reverse || raised) && buttonStyles,
            {
              backgroundColor: getBackgroundColor as ColorValue,
              alignItems: 'center',
              justifyContent: 'center',
            },
            disabled && Styles.disabled,
            disabled && disabledStyle,
          ])}
          testID="Tru__ICON">
          <IconComponent
            testID="Tru__ICON__Component"
            style={StyleSheet.flatten([
              {backgroundColor: 'transparent'},
              iconStyle && iconStyle,
            ])}
            size={size}
            name={name}
            color={reverse ? reverseColor : color}
            ref={ref}
            {...iconSpecificStyle}
            {...iconProps}
          />
        </View>
      </View>
    );
  },
);

const useStyles = createStyles<StyleSheet.NamedStyles<any>, IIconProps>(
  (theme, props) => ({
    container: {
      overflow: 'hidden',
    },
    button: {
      margin: 7,
    },
    raised: {
      ...Platform.select({
        android: {
          elevation: 2,
        },
        default: {
          shadowColor: 'rgba(0,0,0, .4)',
          shadowOffset: {height: 1, width: 1},
          shadowOpacity: 1,
          shadowRadius: 1,
        },
      }),
    },
    disabled: {
      backgroundColor: '#D1D5D8',
    },
  }),
);

Icon.defaultProps = {
  type: 'material',
  size: 24,
  reverse: false,
  raised: false,
  disabled: false,
  solid: false,
  brand: false,
};

export default React.memo(Icon);

Icon.displayName = 'Icon';
