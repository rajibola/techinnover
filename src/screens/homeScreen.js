import React, { useState } from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';
import { CardComponent, RoundButton, SectionHeader } from '../components';
import { CardData, CategoryData, SectionHeaderData } from '../utils/_Datas';
import { HomeScreenStyles as styles } from './styles';
import { hp } from '../utils/layout';
import { colors } from '../constants';
import { AntDesign } from '@expo/vector-icons';

export const HomeScreen = () => {
  const [selected, setSelected] = useState('All');
  const [header, setHeader] = useState('Left');

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

      <View style={styles.sectionHeader}>
        {SectionHeaderData.map((title, i) => {
          active = header === title;
          return (
            <SectionHeader
              onPress={() => setHeader(title)}
              title={title}
              active={active}
              key={i}
            />
          );
        })}
      </View>

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
