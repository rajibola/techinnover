import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../constants';
import { SectionHeaderStyle as styles } from './styles';

export const SectionHeader = ({ data }) => {
  const [header, setHeader] = useState('Left');

  return (
    <View style={styles.sectionHeader}>
      {data.map((item, i) => {
        const check = header === item;
        return (
          <TouchableOpacity
            style={[
              styles.headerItem,
              check && { borderBottomColor: colors.green },
            ]}
            onPress={() => setHeader(item)}
            key={i}
          >
            <Text
              style={[styles.headerText, check && { color: colors.darkBlue }]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
