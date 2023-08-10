import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import Colors from '../../Colors';
import Icon from 'react-native-vector-icons/FontAwesome';

const CustomButton = ({onPress, text, type, iconButton, iconName}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, styles[`container_${type}`]]}>
      <View
        style={{
          flexDirection: iconButton ? 'row' : '',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
        }}>
        {iconButton && (
          <View style={{position: 'absolute', left: 15}}>
            <Icon name={iconName} color={'white'} size={20} />
          </View>
        )}
        <Text style={[styles.text, {fontWeight: '500'}]}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 12,
    marginVertical: 5,
    borderRadius: 8,
  },
  container_PRIMARY: {backgroundColor: Colors.primary_dark},
  container_TERTIARY: {
    backgroundColor: Colors.iconBackgroundColor,
    borderWidth: 1,
    borderColor: Colors.white,
  },
  text: {
    color: Colors.white,
    fontSize: 16,
  },
});
