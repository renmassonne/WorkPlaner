import React from 'react';
import {StyleSheet, Text, SafeAreaView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const HomeScreen = () => {
  return (
    <LinearGradient colors={['#1D1879', '#393289']} style={{flex: 1}}>
      <SafeAreaView style={styles.root}></SafeAreaView>
    </LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  root: {
    height: '100%',
    alignItems: 'center',
    paddingHorizontal: '2%',
  },
});
