import React from 'react';
import {StyleSheet, View} from 'react-native';
import {de, en} from './i18n/supportedLanguages';
import {SafeAreaView} from 'react-native-safe-area-context';
import {configureFontAwesomePro} from 'react-native-fontawesome-pro';

import i18n from 'i18n-js';
import Navigation from './src/navigation';
import RNBootSplash from 'react-native-bootsplash';

import * as RNLocalize from 'react-native-localize';

configureFontAwesomePro();
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
  React.useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide();
    }, 1000);
  }, []);

  return (
    <View colors={['#1D1879', '#393289']} style={styles.root}>
      <Navigation />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default App;
