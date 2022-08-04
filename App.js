import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import i18n from 'i18n-js';
import {de, en} from './i18n/supportedLanguages';

import SignIn from './src/screens/signIn/SignIn';
import Colors from './Colors';
import LinearGradient from 'react-native-linear-gradient';

import * as RNLocalize from 'react-native-localize';

i18n.locale = RNLocalize.getLocales()[0].languageCode;

switch (i18n.locale) {
  case 'de':
    i18n.translations = {de};
    break;

  case 'en':
    i18n.translations = {en};
    break;

  default:
    i18n.translations = {en};
    break;
}

const App = () => {
  return (
    <LinearGradient colors={['#1D1879', '#393289']} style={styles.root}>
      <SafeAreaView>
        <SignIn />
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default App;
