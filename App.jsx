/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import i18n from 'i18n-js';
import {Amplify} from 'aws-amplify';
import {de, en} from './i18n/supportedLanguages';
import {View, StyleSheet, Text} from 'react-native';
import {configureFontAwesomePro} from 'react-native-fontawesome-pro';

import config from './src/aws-exports';

import * as RNLocalize from 'react-native-localize';
import Navigation from './src/navigation';

configureFontAwesomePro();
Amplify.configure(config);

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

function App() {
  return (
    <View style={{flex: 1}}>
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default App;
