import React from 'react';
import { View, Text, Image } from 'react-native';
import { CardComponentStyle as styles } from './styles';

export const CardComponent = ({ name, icon, itemName, itemImage }) => {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Image source={icon} style={styles.icon} />
        <Text style={styles.cardName}>{name}</Text>
      </View>

      <Image source={itemImage} style={styles.food} />
      <Text style={styles.itemName}>{itemName}</Text>

      <View style={styles.row}>
        <Text style={styles.details}>Food</Text>
        <View style={styles.dot} />
        <Text style={styles.details}>{'>'}60 mins</Text>
      </View>
    </View>
  );
};
