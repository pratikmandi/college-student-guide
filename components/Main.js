import * as React from 'react';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './tabs/Home';
import Profile from './tabs/Profile';
import Bus from './tabs/Bus';
import Mess from './tabs/Mess';
import Icon from 'react-native-vector-icons/Ionicons'
const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarLabel:false,
      // tabBarColor:'#1C1F24',
      tabBarStyle: {
        borderTopColor:'transparent',
        backgroundColor: '#2A2B2E',
        position: 'absolute',
        height: 60,
        bottom: 20,
        borderRadius: 100,
        marginHorizontal: 20,
      },
      tabBarShowLabel: false,
      headerTitleStyle:{color:'white'},
      headerShadowVisible:false,
    }}
    >

      <Tab.Screen name="Home" component={Home}
        options={{
          headerShown:false,
          headerStyle:{
            backgroundColor:'#202123'
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
            backgroundColor:'#202123'
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
            backgroundColor:'#202123'
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
            backgroundColor:'#202123'
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