import {StyleSheet, Text, Pressable} from 'react-native';
import React from 'react';
import Colors from '../../Colors';

const PressableText = ({onPress, text, align}) => {
  return (
    <Pressable onPress={onPress} style={[styles.container, {alignSelf: align}]}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default PressableText;

const styles = StyleSheet.create({
  container: {marginBottom: 8, marginTop: 2},
  text: {fontSize: 14, color: Colors.white},
});
