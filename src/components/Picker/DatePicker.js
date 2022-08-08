import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';
import Colors from '../../../Colors';

const DatePicker = ({value, locale, onChange}) => {
  return (
    <View>
      <DateTimePicker
        mode={'date'}
        value={value}
        date={new Date()}
        display="spinner"
        locale={locale}
        onChange={onChange}
        textColor={Colors.white}
      />
    </View>
  );
};

export default DatePicker;

const styles = StyleSheet.create({});
