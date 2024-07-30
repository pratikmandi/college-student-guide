import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './components/Welcome';
import Main from './components/Main';


const Stack=createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="Welcome">
        <Stack.Screen 
        name="Welcome" 
        component={Welcome} 
        options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App