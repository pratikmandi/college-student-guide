import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './tabs/Home';
import Profile from './tabs/Profile';
import Bus from './tabs/Bus';
import Mess from './tabs/Mess';
import Icon from 'react-native-vector-icons/Ionicons'
import { color } from '@rneui/base';


const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <Tab.Navigator screenOptions={{
      tabBarStyle: {
        borderTopColor:'transparent',
        backgroundColor: '#1C1F24',
        position: 'absolute',
        height: 60,
        bottom: 20,
        borderRadius: 100,
        marginHorizontal: 20,
      },
      tabBarShowLabel: false,
      headerTitleStyle:{color:'white'},
      headerShadowVisible:false
    }}>
      <Tab.Screen name="Home" component={Home}
        options={{
          headerStyle:{
            backgroundColor:'#101318'
          },
          tabBarIcon: ({ focused }) => (
            <Icon
              name="home"
              size={30}
              color={focused ? '#e73e36' : 'gray'}
            />
          )
        }}
      />
      <Tab.Screen name="Mess" component={Mess}
        options={{
          headerStyle:{
            backgroundColor:'#101318'
          },
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Icon
              name="fast-food-outline"
              size={30}
              color={focused ? '#e73e36' : 'gray'}
            />
          )
        }}
      />
      <Tab.Screen name="Bus Schedule" component={Bus}
        options={{
          headerStyle:{
            backgroundColor:'#101318'
          },
          tabBarIcon: ({ focused }) => (
            <Icon
              name="bus"
              size={30}
              color={focused ? '#e73e36' : 'gray'}
            />
          )
        }}
      />
      <Tab.Screen name="Profile" component={Profile}
        options={{
          headerStyle:{
            backgroundColor:'#101318'
          },
          tabBarIcon: ({ focused }) => (
            <Icon
              name="person-outline"
              size={30}
              color={focused ? '#e73e36' : 'gray'}
            />
          )
        }}
      />
    </Tab.Navigator>
  );
}

export default Main