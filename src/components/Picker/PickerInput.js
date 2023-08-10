import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import Colors from '../../../Colors';
import Icon from 'react-native-vector-icons/FontAwesome';

const PickerInput = ({onPress, placeholder, value, icon}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{!value ? placeholder : value}</Text>
      {icon && <Icon name={icon} color={Colors.white} size={24} />}
    </TouchableOpacity>
  );
};

export default PickerInput;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: '4%',
    padding: '6%',
    backgroundColor: Colors.iconBackgroundColor,
    borderWidth: 0.5,
    borderColor: Colors.white,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {color: Colors.white, fontSize: 16},
});
