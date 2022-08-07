import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import MenuIcon from './../../assets/images/Menu-Icon.png';
import LinearGradient from 'react-native-linear-gradient';

const Layout = props => {
  const navigation = useNavigation();

  return (
    <LinearGradient colors={['#1D1879', '#393289']} style={styles.container}>
      <SafeAreaView>
        <View style={{paddingVertical: '6%'}}>
          <View style={styles.innerContainer}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Image source={MenuIcon} style={styles.menuIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.content}>{props.children}</View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Layout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingHorizontal: '8%',
  },
  innerContainer: {
    alignContent: 'center',
    justifyContent: 'flex-start',
  },
  menuIcon: {
    width: '10%',
    height: 24,
    maxHeight: 28,
  },
  content: {
    paddingTop: '12%',
  },
});
