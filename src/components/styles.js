import { StyleSheet } from 'react-native';
import { colors, fonts } from '../constants';
import { hp, wp } from '../utils/layout';

export const RoundButtonStyle = StyleSheet.create({
  roundButtonText: {
    ...fonts[15],
    marginHorizontal: wp(24),
    color: colors.darkGrey,
  },
  roundButton: {
    height: hp(47),
    borderRadius: wp(47),
    backgroundColor: colors.grey,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: wp(16),
  },
});

export const CardComponentStyle = StyleSheet.create({
  card: {
    marginBottom: hp(32 - 16),
  },
  bottomContainer: {
    flexDirection: 'row',
    paddingHorizontal: wp(24),
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingTop: hp(24),
  },
  dot: {
    marginHorizontal: hp(8),
    marginBottom: hp(3),
    width: hp(5),
    height: hp(5),
    borderRadius: hp(5),
    backgroundColor: colors.darkGrey,
  },
  details: {
    ...fonts[12],
    color: colors.darkGrey,
  },
  itemName: {
    ...fonts[17],
    color: colors.darkBlue,
    marginTop: hp(16),
    marginBottom: hp(8),
  },
  food: {
    width: wp(151),
    height: wp(151),
    borderRadius: wp(16),
    resizeMode: 'contain',
  },
  cardName: {
    ...fonts[12],
    marginLeft: wp(8),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(16),
  },
  icon: {
    width: wp(31),
    height: wp(31),
    resizeMode: 'cover',
  },
});

export const SectionHeaderStyle = StyleSheet.create({
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    height: hp(60),
    borderBottomWidth: 1,
    borderBottomColor: colors.grey,
  },

  headerItem: {
    width: wp(187),
    height: hp(60),
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: hp(3),
    borderBottomColor: colors.white,
  },

  headerText: {
    ...fonts[15],
    color: colors.darkGrey,
  },
});
