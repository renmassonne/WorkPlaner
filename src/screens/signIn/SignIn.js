import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
  useWindowDimensions,
  Pressable,
  Alert,
  Switch,
} from 'react-native';
import {Auth} from 'aws-amplify';
import {useForm} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';

import i18n from 'i18n-js';
import Logo from './../../../assets/images/Logo.png';
import IconInput from '../../components/IconInput';
import CustomButton from '../../components/CustomButton';
import PressableText from '../../components/PressableText';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../../Colors';

import * as secureStorage from '../../../global/storage/secureStorage';

const SignIn = () => {
  const {height} = useWindowDimensions();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({defaultValues: {username: username, password: password}});

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const [loading, setLoading] = useState(false);

  const [saveLogin, setSaveLogin] = useState(false);

  const navigation = useNavigation();

  testFunction = async () => {
    const loginSaved = await secureStorage.getItemFromSecureStorage(
      'saveLogin',
    );

    if (loginSaved == 'true') {
      setSaveLogin(true);

      const userName = await secureStorage.getItemFromSecureStorage('username');
      const Password = await secureStorage.getItemFromSecureStorage('password');

      setUsername(userName);
      setPassword(Password);
    }
  };

  useEffect(() => {
    testFunction();
  });

  const onSignInPressed = async data => {
    if (loading) {
      return;
    }

    setLoading(true);

    try {
      await Auth.signIn(data.username, data.password);

      await secureStorage.saveItemToSecureStorage(
        'saveLogin',
        saveLogin.toString(),
      );

      if (saveLogin) {
        await secureStorage.saveItemToSecureStorage('username', data.username);
        await secureStorage.saveItemToSecureStorage('password', data.password);
      } else {
        await deleteLoginData();
      }

      navigation.navigate('BottomTabNavigator');
    } catch (e) {
      Alert.alert('Oops', e.message);
    }

    setLoading(false);
  };

  const onCreateAccount = () => {
    navigation.navigate('SignUp');
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
    navigation.navigate('ForgotPassword');
  };

  return (
    <LinearGradient colors={['#1D1879', '#393289']} style={{flex: 1}}>
      <SafeAreaView style={styles.root}>
        <Image source={Logo} style={[styles.logo, {height: height * 0.25}]} />
        <View style={styles.container}>
          <View style={{marginTop: '12%'}}>
            <IconInput
              name={'username'}
              Value={username}
              placeholder={i18n.t('username')}
              control={control}
              rules={{required: i18n.t('userNameRequired')}}
            />

            <IconInput
              name={'password'}
              placeholder={i18n.t('password')}
              Value={password}
              control={control}
              secureTextEntry
              rules={{
                required: i18n.t('passwordRequired'),
                minLength: {value: 3, message: i18n.t('passwordToShort')},
              }}
            />

            <View style={styles.loginContainer}>
              <View style={{flexDirection: 'row'}}>
                <Text style={[styles.text, {marginBottom: 8, marginTop: 2}]}>
                  {i18n.t('saveLoginCredentials')}
                </Text>
                <Switch
                  trackColor={{
                    false: Colors.backgroundColor_light,
                    true: Colors.primary,
                  }}
                  thumbColor={Colors.white}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={saveLoginSaved => setSaveLogin(saveLoginSaved)}
                  value={saveLogin}
                  style={{marginLeft: '4%', marginBottom: 8, marginTop: 2}}
                />
              </View>
              <PressableText
                text={i18n.t('forgotPassword')}
                onPress={onForgotPasswordPressed}
              />
            </View>

            <CustomButton
              text={i18n.t('SignIn')}
              onPress={handleSubmit(onSignInPressed)}
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
      </SafeAreaView>
    </LinearGradient>
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
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: '1%',
    marginTop: '1%',
  },
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
    bottom: 25,
    color: Colors.white,
  },
});
