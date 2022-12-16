import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import Colors from '../../Colors';

const CustomInput = ({placeholder, onChange, value, multiline, isEmpty}) => {
  return (
    <>
      <View style={styles.container}>
        <TextInput
          value={value}
          onChangeText={onChange}
          placeholder={placeholder}
          placeholderTextColor={Colors.white}
          style={[
            styles.input,
            {
              paddingTop: multiline ? '3%' : '3%',
            },
          ]}
          clearButtonMode={'always'}
          multiline={multiline}
        />
      </View>
      {isEmpty && (
        <Text
          style={{
            color: Colors.primary,
            alignSelf: 'stretch',
            marginTop: -4,
          }}>
          Test
        </Text>
      )}
    </>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: '2%',
    backgroundColor: Colors.iconBackgroundColor,
    borderWidth: 1,
    borderColor: Colors.white,
    borderRadius: 6,
  },
  input: {color: Colors.white, fontSize: 16, padding: '3%'},
});
