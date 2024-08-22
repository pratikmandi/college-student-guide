import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import styles from '../../../styles';

const h1menu = {
  Monday: {
    Breakfast: 'Bread, Tea, Milk, Fruit, Butter, Jam, Paneer Bhujiya',
    Lunch: 'Rice, Rajma, French Fries, Dahi, Achaar, Salad',
    Snacks: 'Maggi, Sauce, Coffee',
    Dinner: 'Fried Rice, Roti, Tadka Dal, Mix Veg Sabji, Sweet'
  },
  Tuesday: {
    Breakfast: 'Puri, Aloo Chana Sabji, Tea',
    Lunch: 'Rice, Roti, Dal, Soyabean Chilli, Dahi, Achaar, Salad',
    Snacks: 'Samosa, Chola Chaat, Tea',
    Dinner: 'Rice, Dal, Sattu/Pyaaz Paratha, Achaar, Sweet, Salad'
  },
  Wednesday: {
    Breakfast: 'Bread, Tea, Fruit, Butter, Jam, Paneer Bhujiya',
    Lunch: 'Rice, Roti, Dal, Aloo Mattar Sabji, Dahi, Achaar, Salad',
    Snacks: 'Veg Patties, Pastry, Sauce, Tea',
    Dinner: 'Rice, Roti, Dal, Paneer Butter Masala, Achaar, Salad'
  },
  Thursday: {
    Breakfast: 'Poha, Jalebi, Sew Bhujiya, Sauce, Tea',
    Lunch: 'Rice, Roti, Besan Kadhi, Aloo Bhujiya, Achaar, Salad',
    Snacks: 'Chowmin, Sauce, Coffee',
    Dinner: 'Rice, Dal, Chhola, Kachodi, Achaar, Salad, Ice Cream'
  },
  Friday: {
    Breakfast: 'Bread, Tea, Fruit, Butter, Jam, Paneer Bhujiya',
    Lunch: 'Rice, Roti, Dal, Seasonal Veg, Dahi, Achaar, Salad',
    Snacks: 'Dhuska, Aloo Chana Sabji, Tea',
    Dinner: 'Rice, Roti, Dal, Paneer, Achaar, Salad'
  },
  Saturday: {
    Breakfast: 'Dosa-Sambar, Chutney, Tea',
    Lunch: 'Khichdi, Chokaha, Dahi, Papad, Achaar',
    Snacks: 'Bread Sandwich, Sauce, Tea',
    Dinner: 'Rice, Roti, Dal, Seasonal Veg, Achaar, Salad, Sweet'
  },
  Sunday: {
    Breakfast: 'Chole Bhature',
    Lunch: 'Rice, Roti, Dal, Seasonal Veg, Dahi, Achaar, Salad',
    Snacks: 'Aloo Chop, Banana Shake',
    Dinner: 'Rice, Roti, Dal, Paneer, Achaar, Salad'
  }
};

const DayMenu = ({ day, menu }) => (
  <View style={styles.dayContainer}>
    <Text style={styles.dayTitle}>{day}</Text>
    {/* <View style={styles.underlinemess}></View> */}
    {Object.entries(menu).map(([meal, items]) => (
      <View key={meal} style={styles.mealContainer}>
        <Text style={styles.mealTitle}>{meal}</Text>
        <Text style={styles.mealItems}>{items}</Text>
      </View>
    ))}
  </View>
);

const Hostel1Screen = () => {
  return (
    <View style={{ backgroundColor: '#101318' }}>
      <ScrollView style={{ marginBottom: 100 }}>
        {Object.entries(h1menu).map(([day, menu]) => (
          <DayMenu key={day} day={day} menu={menu} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Hostel1Screen