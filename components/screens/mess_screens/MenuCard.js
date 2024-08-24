import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MenuCard = ({ day, meals }) => {
  return (
    <View style={styles.dayContainer}>
      <Text style={styles.dayTitle}>{day}</Text>
      {Object.keys(meals).map((mealType) => (
        <View key={mealType} style={styles.mealContainer}>
          <Text style={styles.mealTitle}>{mealType}</Text>
          {meals[mealType].map((item, index) => (
            <Text key={index} style={styles.mealItems}>
              {item}
            </Text>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  dayContainer: {
    marginHorizontal: 20,
    marginVertical: 5,
    padding: 10,
    backgroundColor: '#2C2F34',
    borderRadius: 10,
    elevation: 2,

  },
  dayTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 2,
    color: '#e73e36',
  },
  mealContainer: {
    marginVertical: 5,
  },
  mealTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'rgba(255, 255, 255, 0.87)',
  },
  mealItems: {
    color: '#e0e0e0',
    fontSize: 15,
  },
  underlinemess: {
    borderBottomWidth: 2,
    borderBottomColor: '#e73e36',
    width: 50,
    justifyContent: 'flex-start',
  }
});

export default MenuCard;
