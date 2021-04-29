import { Ionicons, AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';
import { CardComponent, RoundButton, SectionHeader } from '../components';
import { HomeScreenStyles as styles } from './styles';
import { CardData, CategoryData, SectionHeaderData } from '../utils/_Datas';
import { wp, hp } from '../utils/layout';
import { colors } from '../constants';

export const HomeScreen = () => {
  const [selected, setSelected] = useState('All');

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <AntDesign name='search1' size={hp(24)} color={colors.darkBlue} />
        <TextInput style={styles.input} placeholder='Search' />
      </View>

      <Text style={styles.category}>Category</Text>

      <View style={styles.buttonContainer}>
        {CategoryData.map((item, i) => (
          <RoundButton
            text={item}
            key={i}
            selected={selected === item}
            onPress={() => setSelected(item)}
          />
        ))}
      </View>

      <View style={styles.line} />

      <SectionHeader data={SectionHeaderData} />

      <ScrollView>
        <View style={styles.bottomContainer}>
          {CardData.map(({ name, icon, item_name, item_image }, i) => {
            return (
              <CardComponent
                name={name}
                icon={icon}
                itemName={item_name}
                itemImage={item_image}
                key={i}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};
