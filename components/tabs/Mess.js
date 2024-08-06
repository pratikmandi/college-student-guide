import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';
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
        style={{}}
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
      />
    </View>
  );
};

export default function Mess() {
  return (
    <Stack.Navigator initialRouteName="Mess Menu" >
      <Stack.Screen name="Mess Menu" component={Hostel} options={{ headerLeft: null }} />
      <Stack.Screen name="Hostel 1 Menu" component={Hostel1Screen} />
      <Stack.Screen name="Hostel 2 Menu" component={Hostel2Screen} />
      <Stack.Screen name="Hostel 3 Menu" component={Hostel3Screen} />
      <Stack.Screen name="Hostel 4 Menu" component={Hostel4Screen} />
      <Stack.Screen name="Hostel 5 Menu" component={Hostel5Screen} />
      <Stack.Screen name="Hostel 6 Menu" component={Hostel6Screen} />
      <Stack.Screen name="Hostel 7 Menu" component={Hostel7Screen} />
      <Stack.Screen name="Hostel 8 Menu" component={Hostel8Screen} />
      <Stack.Screen name="Hostel 9 Menu" component={Hostel9Screen} />
      <Stack.Screen name="Hostel 10 Menu" component={Hostel10Screen} />
      <Stack.Screen name="Hostel 11 Menu" component={Hostel11Screen} />
      <Stack.Screen name="Hostel 12 Menu" component={Hostel12Screen} />
      <Stack.Screen name="Hostel 13 Menu" component={Hostel13Screen} />
    </Stack.Navigator>
  );
}
