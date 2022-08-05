import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignIn from '../screens/signIn/SignIn';
import SignUp from './../screens/signUp/SignUp';
import ConfirmEmail from './../screens/confirmEmail/ConfirmEmail';
import NewPassword from './../screens/newPassword/NewPassword';
import ForgotPassword from './../screens/forgotPassword/ForgotPassword';
import HomeScreen from '../screens/homeScreen/HomeScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={'SignIn'} component={SignIn} />
        <Stack.Screen name={'SignUp'} component={SignUp} />
        <Stack.Screen name={'ConfirmEmail'} component={ConfirmEmail} />
        <Stack.Screen name={'NewPassword'} component={NewPassword} />
        <Stack.Screen name={'ForgotPassword'} component={ForgotPassword} />
        <Stack.Screen name={'HomeScreen'} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default Navigation;
