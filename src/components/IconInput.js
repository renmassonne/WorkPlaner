import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

import Colors from '../../Colors';

const IconInput = ({value, setValue, placeholder, secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={styles.input}
        placeholderTextColor={Colors.white}
        secureTextEntry={secureTextEntry}
        clearButtonMode={'always'}
      />
    </View>
  );
};

export default IconInput;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.iconBackgroundColor,
    borderWidth: 0.5,
    borderColor: Colors.white,
    borderRadius: 8,
  },
  input: {fontSize: 16, color: Colors.white},
});
