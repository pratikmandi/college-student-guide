import React from 'react';
import { ScrollView, View, Text} from 'react-native';
import styles from '../../../styles';

const h10menu = {
    Monday: {
      Breakfast: 'Cheese Sandwich, Boiled Egg/Milk, Tea',
      Lunch: 'Kadhi Badi, Aloo Bhujiya, Rice, Roti, Papad, Salad',
      Snacks: 'Chowmeen, Coffee',
      Dinner: 'Sattu Paratha, Aloo+Baingan Chokha, Dal, Chawal, Sweets'
    },
    Tuesday: {
      Breakfast: 'Onion Paratha, Aloo Sabzi, Green Chutney, Coffee',
      Lunch: 'Pulao, Matar Paneer, Chana Dal, Roti, Salad',
      Snacks: 'Litti Chokha, Tea, Juices',
      Dinner: 'Chole Bhature, Salad, Pickle, Sewai, Rice'
    },
    Wednesday: {
      Breakfast: 'Uttapam/Idli- Sambar, Chutney, Tea',
      Lunch: 'Rajma-Chawal, Finger Chips, Salad',
      Snacks: 'Patties, Pastry, Coffee, Juices',
      Dinner: 'Chicken Biryani/Veg Biryani, Raita, Salad'
    },
    Thursday: {
      Breakfast: 'Aloo Paratha, Dahi, Chutney, Coffee',
      Lunch: 'Seasonal Veg, Rice, Roti, Chana Dal, Aloo Bhujiya, Salad',
      Snacks: 'Papdi Chaat, Tea',
      Dinner: 'Paneer Kofta, Jeera Rice, Roti, Custard, Dal, Salad'
    },
    Friday: {
      Breakfast: 'Bread-Butter/Jam, Egg Bhurji/Milk, Tea',
      Lunch: 'Pulao, Puri, Aloo Dam, Tadka Dal, Salad',
      Snacks: 'Poha, Jalebi, Coffee',
      Dinner: 'Chicken Chilly/Egg Chilly, Paneer Chily, Lachha Paratha, Rice, Dal, Salad'
    },
    Saturday: {
      Breakfast: 'Corn Flakes, Milk, Fruit, Coffee',
      Lunch: 'Khichdi, Curd, Aloo Chokha, Papad',
      Snacks: 'Samosa Chaat, Tea',
      Dinner: 'Aloo Soya, Dal, Roti, Rice, Papad, Sweets'
    },
    Sunday: {
      Breakfast: 'Maida Puri, Dry Sabzi, Tea',
      Lunch: 'Seasonal Veg, Rice, Roti, Chana Dal, Aloo/Parbal Bhujiya,Salad,Raita',
      Snacks: 'Maggi/Cream Roll, Coffee, Juices',
      Dinner: 'Chicken/Mutton/Fish Curry, Paneer Butter Masala, Yellow Pulao, Salad, Dal'
    }
  };

  const DayMenu = ({ day, menu }) => (
    <View style={styles.dayContainer}>
      <Text style={styles.dayTitle}>{day}</Text>
      <View style={styles.underlinemess}></View>
      {Object.entries(menu).map(([meal, items]) => (
        <View key={meal} style={styles.mealContainer}>
          <Text style={styles.mealTitle}>{meal}</Text>
          <Text style={styles.mealItems}>{items}</Text>
        </View>
      ))}
    </View>
  );

const Hostel10Screen = () => {
    return (
        <View style={{backgroundColor:'white'}}>
      <ScrollView style={{marginBottom:100}}>
        {Object.entries(h10menu).map(([day, menu]) => (
          <DayMenu key={day} day={day} menu={menu} />
        ))}
      </ScrollView>
      </View>
    );
  };

export default Hostel10Screen