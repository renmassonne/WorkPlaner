import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  useWindowDimensions,
  Pressable,
} from 'react-native';
import i18n from 'i18n-js';

import Logo from './../../../assets/images/Logo2.png';
import IconInput from '../../components/IconInput';
import CustomButton from '../../components/CustomButton';
import PressableText from '../../components/PressableText';
import Colors from '../../../Colors';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {height} = useWindowDimensions();

  const onSignInPressed = () => {
    console.warn('Login');
  };

  const onCreateAccount = () => {
    console.warn('Account Create');
  };

  const onSignInFacebook = () => {
    console.warn('Facebook');
  };

  const onSignInGoogle = () => {
    console.warn('Google');
  };

  const onSignInApple = () => {
    console.warn('Apple');
  };

  const onForgotPasswordPressed = () => {
    console.warn('Forgot Password');
  };

  return (
    <View style={styles.root}>
      <Image source={Logo} style={[styles.logo, {height: height * 0.25}]} />
      <View style={styles.container}>
        <View style={{marginTop: '12%'}}>
          <IconInput
            placeholder={i18n.t('username')}
            value={username}
            setValue={setUsername}
          />

          <IconInput
            placeholder={i18n.t('password')}
            value={password}
            setValue={setPassword}
            secureTextEntry
          />

          <PressableText
            text={i18n.t('forgotPassword')}
            onPress={onForgotPasswordPressed}
            align={'flex-end'}
          />

          <CustomButton
            text={i18n.t('SignIn')}
            onPress={onSignInPressed}
            type={'PRIMARY'}
          />

          <Pressable style={styles.signUp} onPress={onCreateAccount}>
            <Text style={styles.text}>{i18n.t('createAccount')}</Text>
            <Text style={styles.textMarked}>{i18n.t('SignUp')}</Text>
          </Pressable>
        </View>

        <View style={{marginTop: '18%'}}>
          <CustomButton
            text={i18n.t('signInFacebook')}
            onPress={onSignInFacebook}
            type={'TERTIARY'}
            iconButton
            iconName={'facebook'}
          />
          <CustomButton
            text={i18n.t('signInGoogle')}
            onPress={onSignInGoogle}
            type={'TERTIARY'}
            iconButton
            iconName={'google'}
          />
          <CustomButton
            text={i18n.t('signInApple')}
            onPress={onSignInApple}
            type={'TERTIARY'}
            iconButton
            iconName={'apple'}
          />
        </View>
      </View>
      <Text style={styles.credentials}>{'©Workplaner - 2022'}</Text>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  root: {
    height: '100%',
    alignItems: 'center',
    paddingHorizontal: '2%',
  },
  container: {width: '100%', paddingHorizontal: '8%'},
  logo: {
    resizeMode: 'contain',
    width: '100%',
    maxWidth: 500,
    maxHeight: 300,
  },
  signUp: {
    flexDirection: 'row',
    marginTop: '5%',
    alignSelf: 'center',
  },
  text: {
    fontSize: 14,
    color: Colors.white,
    alignSelf: 'center',
  },
  textMarked: {
    fontSize: 15,
    color: Colors.link,
    alignSelf: 'center',
    fontWeight: '600',
  },
  credentials: {
    position: 'absolute',
    bottom: 0,
    color: Colors.white,
  },
});
