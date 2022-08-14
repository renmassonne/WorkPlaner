import React, {useRef} from 'react';
import {Icon} from '@rneui/themed';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import i18n from 'i18n-js';
import Colors from '../../Colors';
import Calendar from '../screens/calendar/Calendar';
import HomeScreen from '../screens/homeScreen/HomeScreen';
import AddCalendarTask from '../screens/calendar/AddCalendarTask/AddCalendarTask';
import {Auth} from 'aws-amplify';

const Tab = createBottomTabNavigator();

const SignOut = ({children, onPress}) => {
  <TouchableOpacity onPress={onPress} style={styles.customButton}>
    <View>{children}</View>
  </TouchableOpacity>;
};

function navigateTo(navigation, screenName) {
  navigation.navigate(screenName);
}

const CustomTabBar = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.tabNavigator}>
      {state.routes.map((route, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate(route.name)}>
            <View style={styles.container}>
              <Icon
                name={route.name}
                type="font-awesome-5"
                iconStyle={{
                  color: Colors.white,
                }}
                size={20}
              />
              <Text style={[styles.text, {color: Colors.white}]}>
                {i18n.t(`SideDrawer.${route.name}`)}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}

      <View style={{paddingHorizontal: '4%'}}></View>
      <TouchableOpacity>
        <View style={styles.container}>
          <Icon
            name={'user'}
            type="font-awesome-5"
            iconStyle={{
              color: Colors.white,
            }}
            size={20}
          />
          <Text style={[styles.text, {color: Colors.white}]}>
            {i18n.t('SideDrawer.profile')}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          Auth.signOut();
          navigateTo(navigation, 'SignIn');
        }}>
        <View style={styles.container}>
          <Icon
            name={'sign-out-alt'}
            type="font-awesome-5"
            iconStyle={{
              color: Colors.white,
            }}
            size={20}
          />
          <Text style={[styles.text, {color: Colors.white}]}>
            {i18n.t('SideDrawer.logOut')}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const BottomTabNavigator = props => {
  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{headerShown: false}}>
      <Tab.Screen name="home" component={HomeScreen} />
      <Tab.Screen name="calendar" component={Calendar} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabNavigator: {
    position: 'relative',
    bottom: 0,
    height: 90,
    width: '100%',
    paddingHorizontal: '6%',
    paddingTop: '3%',
    borderRadius: 25,
    backgroundColor: Colors.backgroundColor,
    alignContent: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  container: {
    top: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  customButton: {
    width: 65,
    height: 65,
    borderRadius: 35,
    backgroundColor: Colors.primary,
    alignContent: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 15,
    fontWeight: '700',
    marginTop: '2%',
  },
});
