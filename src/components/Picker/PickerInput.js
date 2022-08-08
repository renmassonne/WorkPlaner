import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Colors from '../../../Colors';

const PickerInput = ({onPress, placeholder, value}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{!value ? placeholder : value}</Text>
    </TouchableOpacity>
  );
};

export default PickerInput;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: '2%',
    backgroundColor: Colors.iconBackgroundColor,
    borderWidth: 0.5,
    borderColor: Colors.white,
    borderRadius: 6,
  },
  text: {color: Colors.white, fontSize: 16, padding: '3%'},
});
