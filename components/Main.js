import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './tabs/Home';
import Profile from './tabs/Profile';
import Bus from './tabs/Bus';
import Mess from './tabs/Mess';
import Icon from 'react-native-vector-icons/Ionicons'


const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <Tab.Navigator screenOptions={{
      tabBarStyle: {
        backgroundColor: 'white',
        position: 'absolute',
        height: 60,
        bottom: 30,
        borderRadius: 100,
        marginHorizontal: 20,
      },
      tabBarShowLabel: false,
    }}>
      <Tab.Screen name="Home" component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="home"
              size={30}
              color={focused ? '#e73e36' : 'grey'}
            />
          )
        }}
      />
      <Tab.Screen name="Mess" component={Mess}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Icon
              name="fast-food-outline"
              size={30}
              color={focused ? '#e73e36' : 'grey'}
            />
          )
        }}
      />
      <Tab.Screen name="Bus Schedule" component={Bus}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="bus"
              size={30}
              color={focused ? '#e73e36' : 'grey'}
            />
          )
        }}
      />
      <Tab.Screen name="Profile" component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="person-outline"
              size={30}
              color={focused ? '#e73e36' : 'grey'}
            />
          )
        }}
      />
    </Tab.Navigator>
  );
}

export default Main