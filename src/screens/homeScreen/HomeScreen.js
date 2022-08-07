import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Layout from '../../components/Layout';

const HomeScreen = () => {
  return (
    <Layout>
      <View>
        <Text>Test</Text>
      </View>
    </Layout>
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
