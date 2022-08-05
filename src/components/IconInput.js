import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {Controller} from 'react-hook-form';

import Colors from '../../Colors';

const IconInput = ({
  control,
  name,
  rules = {},
  placeholder,
  secureTextEntry,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <>
          <View
            style={[
              styles.container,
              {borderColor: error ? Colors.primary : Colors.white},
            ]}>
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              placeholderTextColor={Colors.white}
              style={styles.input}
              secureTextEntry={secureTextEntry}
              clearButtonMode={'always'}
            />
          </View>
          {error && (
            <Text
              style={{
                color: Colors.primary,
                alignSelf: 'stretch',
                marginTop: -4,
              }}>
              {error.message}
            </Text>
          )}
        </>
      )}
    />
  );
};

export default IconInput;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 12,
    marginVertical: '2%',
    backgroundColor: Colors.iconBackgroundColor,
    borderWidth: 0.5,
    borderColor: Colors.white,
    borderRadius: 6,
  },
  input: {fontSize: 16, color: Colors.white},
});
