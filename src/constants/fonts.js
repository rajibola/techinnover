import { hp } from '../utils/layout';
import { colors } from './colors';

export const customFonts = {
  Black: require('../assets/fonts/Poppins-Black.ttf'),
  Bold: require('../assets/fonts/Poppins-Bold.ttf'),
  ExtraBold: require('../assets/fonts/Poppins-ExtraBold.ttf'),
  ExtraLight: require('../assets/fonts/Poppins-ExtraLight.ttf'),
  Light: require('../assets/fonts/Poppins-Light.ttf'),
  Medium: require('../assets/fonts/Poppins-Medium.ttf'),
  Regular: require('../assets/fonts/Poppins-Regular.ttf'),
  SemiBold: require('../assets/fonts/Poppins-SemiBold.ttf'),
  Thin: require('../assets/fonts/Poppins-Thin.ttf'),
};

export const fonts = {
  17: {
    fontSize: hp(17),
    lineHeight: hp(27),
    fontFamily: 'Medium',
    color: colors.black,
  },
  12: {
    fontSize: hp(12),
    lineHeight: hp(14.52),
    fontFamily: 'Medium',
    color: colors.black,
  },
  15: {
    fontSize: hp(15),
    lineHeight: hp(18.15),
    fontFamily: 'Medium',
    color: colors.black,
  },
};
