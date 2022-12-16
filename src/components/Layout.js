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
import Colors from '../../Colors';

const Layout = props => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex: 1}}>
        <View style={{paddingVertical: '6%'}}>
          <View style={styles.innerContainer}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Image source={MenuIcon} style={styles.menuIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.content}>{props.children}</View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Layout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingHorizontal: '8%',
    backgroundColor: Colors.generalBackground,
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
