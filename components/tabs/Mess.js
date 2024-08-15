import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Hostel1Screen from '../screens/mess_screens/Hostel1Screen';
import Hostel2Screen from '../screens/mess_screens/Hostel2Screen';
import Hostel3Screen from '../screens/mess_screens/Hostel3Screen';
import Hostel4Screen from '../screens/mess_screens/Hostel4Screen';
import Hostel5Screen from '../screens/mess_screens/Hostel5Screen';
import Hostel6Screen from '../screens/mess_screens/Hostel6Screen';
import Hostel7Screen from '../screens/mess_screens/Hostel7Screen';
import Hostel8Screen from '../screens/mess_screens/Hostel8Screen';
import Hostel9Screen from '../screens/mess_screens/Hostel9Screen';
import Hostel10Screen from '../screens/mess_screens/Hostel10Screen';
import Hostel11Screen from '../screens/mess_screens/Hostel11Screen';
import Hostel12Screen from '../screens/mess_screens/Hostel12Screen';
import Hostel13Screen from '../screens/mess_screens/Hostel13Screen';
import styles from '../../styles';

const Stack = createStackNavigator();

const Hostel = ({ navigation }) => {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleValueChange = (value) => {
    setSelectedValue(value);
    if (value) {
      navigation.navigate(value);
    }
  };

  return (
    <View style={[styles.container, styles.page]}>
      <RNPickerSelect
        onValueChange={handleValueChange}
        items={[
          { label: 'Hostel 1', value: 'Hostel 1 Menu' },
          { label: 'Hostel 2', value: 'Hostel 2 Menu' },
          { label: 'Hostel 3', value: 'Hostel 3 Menu' },
          { label: 'Hostel 4', value: 'Hostel 4 Menu' },
          { label: 'Hostel 5', value: 'Hostel 5 Menu' },
          { label: 'Hostel 6', value: 'Hostel 6 Menu' },
          { label: 'Hostel 7', value: 'Hostel 7 Menu' },
          { label: 'Hostel 8', value: 'Hostel 8 Menu' },
          { label: 'Hostel 9', value: 'Hostel 9 Menu' },
          { label: 'Hostel 10', value: 'Hostel 10 Menu' },
          { label: 'Hostel 11', value: 'Hostel 11 Menu' },
          { label: 'Hostel 12', value: 'Hostel 12 Menu' },
          { label: 'Hostel 13', value: 'Hostel 13 Menu' },
        ]}
        placeholder={{ label: 'Select Hostel', value: null }}
        style={pickerSelectStyles}
      />
    </View>
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    color: 'white',
    paddingRight: 30,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    color: 'white',
    paddingRight: 30,
  },
  placeholder: {
    color: 'white',
    fontSize: 16,
  },
  viewContainer: {
    // marginHorizontal:
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 100,
  },
});

export default function Mess() {
  return (
    <Stack.Navigator initialRouteName="Mess Menu">
      <Stack.Screen name="Mess Menu" component={Hostel} options={{ 
      headerShadowVisible:false,
      headerTintColor:'white',
        headerLeft: null, 
        headerStyle:{
        backgroundColor:'#101318'
        }}} />
      <Stack.Screen name="Hostel 1 Menu" component={Hostel1Screen} options={{ 
        headerShadowVisible:false,
        headerTintColor:'white',
          headerStyle:{
          backgroundColor:'#101318'
          }}} />
      <Stack.Screen name="Hostel 2 Menu" component={Hostel2Screen} options={{ 
        headerShadowVisible:false,
        headerTintColor:'white',
          headerStyle:{
          backgroundColor:'#101318'
          }}} />
      <Stack.Screen name="Hostel 3 Menu" component={Hostel3Screen} options={{ 
        headerShadowVisible:false,
        headerTintColor:'white',
          headerStyle:{
          backgroundColor:'#101318'
          }}} />
      <Stack.Screen name="Hostel 4 Menu" component={Hostel4Screen} options={{ 
        headerShadowVisible:false,
        headerTintColor:'white',
          headerStyle:{
          backgroundColor:'#101318'
          }}} />
      <Stack.Screen name="Hostel 5 Menu" component={Hostel5Screen} options={{ 
        headerShadowVisible:false,
        headerTintColor:'white',
          headerStyle:{
          backgroundColor:'#101318'
          }}} />
      <Stack.Screen name="Hostel 6 Menu" component={Hostel6Screen} options={{ 
        headerShadowVisible:false,
        headerTintColor:'white',
          headerStyle:{
          backgroundColor:'#101318'
          }}} />
      <Stack.Screen name="Hostel 7 Menu" component={Hostel7Screen} options={{ 
        headerShadowVisible:false,
        headerTintColor:'white',
          headerStyle:{
          backgroundColor:'#101318'
          }}} />
      <Stack.Screen name="Hostel 8 Menu" component={Hostel8Screen} options={{ 
        headerShadowVisible:false,
        headerTintColor:'white',
          headerStyle:{
          backgroundColor:'#101318'
          }}} />
      <Stack.Screen name="Hostel 9 Menu" component={Hostel9Screen} options={{ 
        headerShadowVisible:false,
        headerTintColor:'white',
          headerStyle:{
          backgroundColor:'#101318'
          }}} />
      <Stack.Screen name="Hostel 10 Menu" component={Hostel10Screen} 
      options={{ 
        headerShadowVisible:false,
        headerTintColor:'white',
          headerStyle:{
          backgroundColor:'#101318'
          }}} />
      <Stack.Screen name="Hostel 11 Menu" component={Hostel11Screen} options={{ 
        headerShadowVisible:false,
        headerTintColor:'white',
          headerStyle:{
          backgroundColor:'#101318'
          }}} />
      <Stack.Screen name="Hostel 12 Menu" component={Hostel12Screen} options={{ 
        headerShadowVisible:false,
        headerTintColor:'white',
          headerStyle:{
          backgroundColor:'#101318'
          }}} />
      <Stack.Screen name="Hostel 13 Menu" component={Hostel13Screen} options={{ 
        headerShadowVisible:false,
        headerTintColor:'white',
          headerStyle:{
          backgroundColor:'#101318'
          }}} />
    </Stack.Navigator>
  );
}
