import { StyleSheet } from 'react-native';
import { colors, fonts } from '../constants';
import { hp, wp } from '../utils/layout';

export const HomeScreenStyles = StyleSheet.create({
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
    marginHorizontal: wp(8),
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
  headerText: {
    ...fonts[15],
    color: colors.darkGrey,
  },
  headerItem: {
    width: wp(187),
    height: hp(60),
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: hp(3),
    borderBottomColor: colors.white,
  },

  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    height: hp(60),
    borderBottomWidth: 1,
    borderBottomColor: colors.grey,
  },
  line: {
    height: hp(8),
    backgroundColor: colors.grey,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(24),
    marginTop: hp(16),
    marginBottom: hp(23),
  },
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
  category: {
    ...fonts[17],
    color: colors.darkBlue,
    marginLeft: wp(24),
    marginTop: hp(24),
  },
  searchContainer: {
    width: wp(327),
    height: hp(56),
    borderRadius: wp(50),
    backgroundColor: colors.grey,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(24),
    marginTop: hp(16),
    alignSelf: 'center',
  },
  input: {
    flex: 1,
    marginLeft: wp(10.99),
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: hp(44),
  },
});
