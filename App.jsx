import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './components/tabs/Home';
import Profile from './components/tabs/Profile';
import Bus from './components/tabs/Bus';
import Mess from './components/tabs/Mess';
import Icon from 'react-native-vector-icons/Ionicons'


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarStyle:{
          backgroundColor:'white',
          position: 'absolute',
          height: 60,
          bottom: 30,
          borderRadius: 20,
          marginHorizontal:20,
        },
        tabBarShowLabel:false
      }}>
        <Tab.Screen name="Home" component={Home} 
        options={{
          tabBarIcon:({focused})=>(
            <Icon 
            name="home" 
            size={30}
            color={focused? '#0163d2':'grey'}
            />
          )
        }}
        />
        <Tab.Screen name="Mess" component={Mess} 
        options={{
          tabBarIcon:({focused})=>(
            <Icon 
            name="fast-food-outline" 
            size={30}
            color={focused? '#0163d2':'grey'}
            />
          )
        }}
        />
        <Tab.Screen name="Bus Timings" component={Bus}
        options={{
          tabBarIcon:({focused})=>(
            <Icon 
            name="bus" 
            size={30}
            color={focused? '#0163d2':'grey'}
            />
          )
        }}
        />
        <Tab.Screen name="Profile" component={Profile}
        options={{
          tabBarIcon:({focused})=>(
            <Icon 
            name="person-outline" 
            size={30}
            color={focused? '#0163d2':'grey'}
            />
          )
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}