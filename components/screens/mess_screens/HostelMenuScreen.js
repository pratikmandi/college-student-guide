import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import MenuCard from './MenuCard';

const HostelMenuScreen = ({ route }) => {
  const { menuData } = route.params;

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>{menuData.name} Menu</Text> */}
      <ScrollView style={{ 
        marginBottom: 85
        }}>
        {Object.keys(menuData.menu).map((day) => (
          <MenuCard key={day} day={day} meals={menuData.menu[day]} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202123',
    // padding: 10,
  },
  title: {
    fontSize: 24,
    color: 'white',
    marginBottom: 16,
  },
});

export default HostelMenuScreen;
