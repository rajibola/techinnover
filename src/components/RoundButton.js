import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { colors } from '../constants';
import { RoundButtonStyle as styles } from './styles';

export const RoundButton = ({ text, selected, onPress }) => {
  return (
    <TouchableOpacity
      style={[
        styles.roundButton,
        selected && { backgroundColor: colors.green },
      ]}
      onPress={onPress}
    >
      <Text
        style={[styles.roundButtonText, selected && { color: colors.white }]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};
