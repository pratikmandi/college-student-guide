import React from 'react';
import { ScrollView, View, Text} from 'react-native';
import styles from '../../../styles';

const h4menu = {
  Monday: {
    Breakfast:'Idli, Sambar, White Chutney, Chai, Banana(1Pc.)',
    Lunch:'Egg Curry/Paneer Kofta, Rice, Roti, Dal, Salad, Dahi',
    Snacks:'Patties and Pastry, Coffee, Tomato Sauce',
    Dinner:'Jira Rice, Rajma, Roti'
  },
  Tuesday: {
    Breakfast: 'Poha, Jalebi, Chai',
    Lunch: 'Kachori, Chola, Rice, Sweet, Bundi Raita',
    Snacks: 'Aloo Chap, Green Chutney, Chai',
    Dinner: 'Aloo Patta Gobhi, Dal, Rice, Roti'
  },
  Wednesday: {
    Breakfast: 'Bread(Butter,Jam), Milk, Omlette, Banana(2Pc.)',
    Lunch: 'Kadhi-Badi, Rice, Roti, Aloo Bhujia, Salad, Papad, Icecream',
    Snacks: 'White Pasta, Pepsi, Tomato Sauce',
    Dinner: 'Chicken/Mutton Curry/Paneer Curry, Rice, Butter Roti, Dal, Salad'
  },
  Thursday: {
    Breakfast: 'Uttapam-Sambar, White Chutney, Coffee',
    Lunch: 'Dal Makhni, Rice, Aloo Paratha, Salad, Dahi',
    Snacks: 'Back Forest Mousse, Cheese Italian Roll, Coffee, Tomato Sauce',
    Dinner: 'Puri, Matar Paneer, Kheer, Salad'
  },
  Friday: {
    Breakfast: 'Bread(Butter,Jam), Milk, Cornflakes, Banana(1Pc.)',
    Lunch: 'Pulao, Mix Veg, Roti, Salad, Dal, Dahi',
    Snacks: 'Samosa Chaat, Chai',
    Dinner: 'Chicken Chilli/Paneer, Rice, Butter Roti, Dal, Salad'
  },
  Saturday: {
    Breakfast: 'Dosa, Sambar Chutney, Chai',
    Lunch: 'Khichdi, Dahi, Papad, Aloo Chokha, Achaar',
    Snacks: 'Veg Cheese Sandwich, Banana Shake',
    Dinner: 'Tadka Chana Dal, Roti, Rice, Aloo Bhujia, Salad'
  },
  Sunday: {
    Breakfast: 'Chole Bhature, Salad, Jalebi, Chai',
    Lunch: 'Roti, Rice, Dal, Jeera Aloo, Salad, Custard',
    Snacks: 'Dabeli, Chai',
    Dinner: 'Chicken/Paneer Biryani, Raita'
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

const Hostel4Screen = () => {
  return (
      <View style={{backgroundColor:'#101318'}}>
    <ScrollView style={{marginBottom:100}}>
      {Object.entries(h4menu).map(([day, menu]) => (
        <DayMenu key={day} day={day} menu={menu} />
      ))}
    </ScrollView>
    </View>
  );
};

export default Hostel4Screen