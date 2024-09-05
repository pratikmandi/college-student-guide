import React from 'react';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import Hostel from './Hostel';
import HostelMenuScreen from '../screens/mess_screens/HostelMenuScreen';

const Stack = createStackNavigator();

export default function Mess() {
  return (
    <Stack.Navigator initialRouteName="Mess Menu"
      screenOptions={{
        gestureEnabled: true,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        transitionSpec: {
          open: { animation: 'timing', config: { duration: 300 } },
          close: { animation: 'timing', config: { duration: 300 } },
        },
        headerShadowVisible: false,
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#202123' },
      }}
    >
      <Stack.Screen
        name="Mess Menu"
        component={Hostel}
        options={{ headerLeft: null }}
      />
      <Stack.Screen name="HostelMenu"
        component={HostelMenuScreen}
        options={({ route }) => ({ title: route.params.menuData.name })}
      />
    </Stack.Navigator>
  );
}
