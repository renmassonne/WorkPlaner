import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Colors from '../../Colors';
import {DrawerContent} from './drawercontent';
import HomeScreen from '../screens/homeScreen/HomeScreen';

const Drawer = createDrawerNavigator();

export default class DrawerNavigator extends React.Component {
  render() {
    return (
      <Drawer.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerShown: false,
          drawerStyle: {
            backgroundColor: '#393289',
          },
        }}
        drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen
          name="HomeScreen"
          component={HomeScreen}
          username={this.props.username}
        />
      </Drawer.Navigator>
    );
  }
}

const styles = StyleSheet.create({});
