import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DrawerContent} from './drawercontent';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeScreen from '../screens/homeScreen/HomeScreen';
import Calendar from '../screens/calendar/Calendar';
import Colors from '../../Colors';

const Drawer = createDrawerNavigator();

export default class DrawerNavigator extends React.Component {
  render() {
    return (
      <Drawer.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerShown: false,
          drawerStyle: {
            backgroundColor: Colors.generalBackground,
          },
        }}
        drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen
          name="HomeScreen"
          component={HomeScreen}
          username={this.props.username}
        />
        <Drawer.Screen name="Calendar" component={Calendar} />
      </Drawer.Navigator>
    );
  }
}

const styles = StyleSheet.create({});
