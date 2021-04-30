import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../constants';
import { SectionHeaderStyle as styles } from './styles';

export const SectionHeader = ({ active, onPress, title }) => {
  return (
    <TouchableOpacity
      style={[styles.headerItem, active && { borderBottomColor: colors.green }]}
      onPress={onPress}
    >
      <Text style={[styles.headerText, active && { color: colors.darkBlue }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
