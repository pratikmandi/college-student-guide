import React from 'react';
import { ScrollView, View, Text} from 'react-native';
import styles from '../../../styles';

const h3menu = {
  Monday: {
    Breakfast:'Bread+Butter/Jam, Omelette/Milk, Tea',
    Lunch:'Kadhi, Rice, Roti, Aloo Bhujiya, Pickle',
    Snacks:'Egg Roll/Veg Roll, Ketchup, Tea',
    Dinner:'Rice, Dal, Butter Roti, Seasonal Veg, Sweet(1)'
  },
  Tuesday: {
    Breakfast: 'Uttapam+Sambar, Chutney, Fruits, Coffee',
    Lunch: 'Pulao, Salad, Soya Chilli, Dal Tadka',
    Snacks: 'Hot Dog, Tea, Ketchup',
    Dinner: 'Kachori, Chole, Kheer'
  },
  Wednesday: {
    Breakfast: 'Bread+Butter/Jam, Omelette/Milk, Tea',
    Lunch: 'Rice, Roti, Rajma, Aloo Bhujiya',
    Snacks: 'Burger, Sauce, Tea',
    Dinner: 'Chicken Biryani/Veg Biryani, Raita'
  },
  Thursday: {
    Breakfast: 'Poha, Jalebi, Coffee, Ketchup',
    Lunch: 'Rice, Roti, Dal, Besan Gatta, Salad',
    Snacks: 'Chowmin, Tea, Sauce, Juice',
    Dinner: 'Rice, Roti, Dal, Mix Veg, Ice Cream'
  },
  Friday: {
    Breakfast: 'Idli-Sambar, Chutney, Coffee',
    Lunch: 'Rice, Roti, Dal, Soya Bean, Achaar',
    Snacks: 'Patties, Pastry, Tea',
    Dinner: 'Egg Curry/Paneer Masala, Rice, Roti'
  },
  Saturday: {
    Breakfast: 'Aloo Paratha, Dahi, Ketchup, Tea',
    Lunch: 'Khichdi, Dahi, Papad, Aloo Chokha, Pickle',
    Snacks: 'Litti-Chokha, Tea',
    Dinner: 'Rice, DaL, Roti, Seasonal Veg, Sweet'
  },
  Sunday: {
    Breakfast: 'Chole Bhature, Onion, Coffee',
    Lunch: 'Rice, Roti, Dal, Seasonal Veg, Achaar, Salad',
    Snacks: 'Aloo Pyaaz Pakori, Ketchup, Juice, Tea/Pav Bhaji',
    Dinner: 'Rice, Roti, Chilli Paneer/Chicken/Mutton'
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

const Hostel3Screen = () => {
  return (
      <View style={{backgroundColor:'#101318'}}>
    <ScrollView style={{marginBottom:100}}>
      {Object.entries(h3menu).map(([day, menu]) => (
        <DayMenu key={day} day={day} menu={menu} />
      ))}
    </ScrollView>
    </View>
  );
};

export default Hostel3Screen