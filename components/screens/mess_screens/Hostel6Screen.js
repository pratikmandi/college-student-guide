import React from 'react';
import { ScrollView, View, Text} from 'react-native';
import styles from '../../../styles';

const h6menu = {
  Monday: {
    Breakfast:'',
    Lunch:'',
    Snacks:'',
    Dinner:''
  },
  Tuesday: {
    Breakfast: '',
    Lunch: '',
    Snacks: '',
    Dinner: ''
  },
  Wednesday: {
    Breakfast: '',
    Lunch: '',
    Snacks: '',
    Dinner: ''
  },
  Thursday: {
    Breakfast: '',
    Lunch: '',
    Snacks: '',
    Dinner: ''
  },
  Friday: {
    Breakfast: '',
    Lunch: '',
    Snacks: '',
    Dinner: ''
  },
  Saturday: {
    Breakfast: '',
    Lunch: '',
    Snacks: '',
    Dinner: ''
  },
  Sunday: {
    Breakfast: '',
    Lunch: '',
    Snacks: '',
    Dinner: ''
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

const Hostel6Screen = () => {
    return (
        <View style={{backgroundColor:'white'}}>
      <ScrollView style={{marginBottom:100}}>
        {Object.entries(h6menu).map(([day, menu]) => (
          <DayMenu key={day} day={day} menu={menu} />
        ))}
      </ScrollView>
      </View>
    );
  };

export default Hostel6Screen