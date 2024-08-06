import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, StyleSheet, Text } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';


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
          { label: 'Hostel 14', value: 'Hostel 14 Menu' },
        ]}
        placeholder={{ label: 'Select Hostel', value: null }}
      />
    </View>
  );
};

const Hostel1Screen = () => (
  <View style={[styles.screen, styles.page]}>
    <Text>Hostel 1 Screen</Text>
  </View>
);

const Hostel2Screen = () => (
  <View style={[styles.screen, styles.page]}>
    <Text>Hostel 2 Screen</Text>
  </View>
);

const Hostel3Screen = () => (
  <View style={[styles.screen, styles.page]}>
    <Text>Hostel 3 Screen</Text>
  </View>
);

const Hostel4Screen = () => (
  <View style={[styles.screen, styles.page]}>
    <Text>Hostel 4 Screen</Text>
  </View>
);

const Hostel5Screen = () => (
  <View style={[styles.screen, styles.page]}>
    <Text>Hostel 5 Screen</Text>
  </View>
);

const Hostel6Screen = () => (
  <View style={[styles.screen, styles.page]}>
    <Text>Hostel 6 Screen</Text>
  </View>
);

const Hostel7Screen = () => (
  <View style={[styles.screen, styles.page]}>
    <Text>Hostel 7 Screen</Text>
  </View>
);

const Hostel8Screen = () => (
  <View style={[styles.screen, styles.page]}>
    <Text>Hostel 8 Screen</Text>
  </View>
);

const Hostel9Screen = () => (
  <View style={[styles.screen, styles.page]}>
    <Text>Hostel 9 Screen</Text>
  </View>
);

const Hostel10Screen = () => (
  <View style={[styles.screen, styles.page]}>
    <Text>Hostel 10 Screen</Text>
  </View>
);

const Hostel11Screen = () => (
  <View style={[styles.screen, styles.page]}>
    <Text>Hostel 11 Screen</Text>
  </View>
);

const Hostel12Screen = () => (
  <View style={[styles.screen, styles.page]}>
    <Text>Hostel 12 Screen</Text>
  </View>
);

const Hostel14Screen = () => (
  <View style={[styles.screen, styles.page]}>
    <Text>Hostel 14 Screen</Text>
  </View>
);
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
      <Stack.Screen name="Hostel 14 Menu" component={Hostel14Screen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 16,
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  page: {
    backgroundColor: 'white'
  }
});
