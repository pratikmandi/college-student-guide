import React from 'react';
import { ScrollView, View, Text} from 'react-native';
import styles from '../../../styles';

const h6menu = {
  Monday: {
    Breakfast:'Plain Parantha, Aloo Methi/Jeera Aloo, Tea',
    Lunch:'Kadhi, Crispy Aloo Bhujia, Rice, Roti',
    Snacks:'Veg/Egg Roll, Tea',
    Dinner:'SoyaBean Aloo, Dal Tadka, Roti, Rice, Custard'
  },
  Tuesday: {
    Breakfast: 'Atta Puri, Aloo Sabji, Tea',
    Lunch: 'Rajma, Finger Aloo Wedges, Jeera Rice, Roti',
    Snacks: 'Suji Halwa, Chana Masala, Tea',
    Dinner: 'Palak Paneer, Rice, Roti, Sweet(Kalakand)'
  },
  Wednesday: {
    Breakfast: 'Fried Idli, Sambar, Chutney, Coffee, 2pc Banana',
    Lunch: 'Urad Dal, Seasonal Veg, Jeera Rice, Roti, Boondi Raita, Salad',
    Snacks: 'Maggi+Ketchup and Coffee',
    Dinner: 'Chicken Biryani, Veg Fried Rice, Raita, Onion'
  },
  Thursday: {
    Breakfast: 'Poha-Jalebi, Tea',
    Lunch: 'Soya Chilli, Arhar Dal, Rice, Roti, Pickle, Sprouts',
    Snacks: 'Patties, Pastry(Chocolate/Pineapple), Coffee',
    Dinner: 'Atta Puri, Chole, Rice, Kheer'
  },
  Friday: {
    Breakfast: 'Milk+Cornflakes/Omlette, White Bread, Ketchup, Tea, Apple(1pc)',
    Lunch: 'Rajma, Finger Aloo Wedges, Jeera Rice, Roti, Salad(Cucumber,Carrot)',
    Snacks: 'Dal Kachodi, Ketchup, Tea',
    Dinner: 'Chicken Curry/ Kadhai Paneer, Rice, Roti, Onion'
  },
  Saturday: {
    Breakfast: 'Aloo Parantha, Curd, Ketchup, Tea',
    Lunch: 'Khichdi, Chokha, Curd, Papad',
    Snacks: 'Samosa, Tea',
    Dinner: 'Butter Roti, Dal Tadka, Mix-Veg Rice, Gulab Jamun'
  },
  Sunday: {
    Breakfast: 'Chole Bhature, Onion, Lemon, Coffee',
    Lunch: 'Mix Dal, Seasonal Veg, Veg Pulao',
    Snacks: 'Burger, Coffee',
    Dinner: 'Butter Chicken/Chilli Paneer, Laccha Paratha, Onion'
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

const Hostel6Screen = () => {
  return (
      <View style={{backgroundColor:'#101318'}}>
    <ScrollView style={{marginBottom:100}}>
      {Object.entries(h6menu).map(([day, menu]) => (
        <DayMenu key={day} day={day} menu={menu} />
      ))}
    </ScrollView>
    </View>
  );
};

export default Hostel6Screen