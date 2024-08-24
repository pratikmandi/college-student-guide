import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import styles from '../../styles'
import hostelMenus from '../screens/mess_screens/hostelMenus.json'

const Hostel = ({ navigation }) => {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleValueChange = (value) => {
    setSelectedValue(value);
    if (value) {
      navigation.navigate('HostelMenu', { menuData: hostelMenus.hostels[value] });
    }
  };

  const items = Object.keys(hostelMenus.hostels).map((key) => ({
    label: hostelMenus.hostels[key].name,
    value: key,
  }));

  return (
    <View style={[styles.container, styles.page]}>
      <RNPickerSelect
        onValueChange={handleValueChange}
        items={items}
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
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 100,
  },
});

export default Hostel;