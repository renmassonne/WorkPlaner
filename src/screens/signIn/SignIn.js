import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
  useWindowDimensions,
  Pressable,
  Alert,
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

const SignIn = () => {
  const {height} = useWindowDimensions();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const onSignInPressed = async data => {
    //navigation.navigate('HomeScreen');

    if (loading) {
      return;
    }

    setLoading(true);

    try {
      await Auth.signIn(data.username, data.password);
      navigation.navigate('DrawerNavigator');
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
              placeholder={i18n.t('username')}
              control={control}
              rules={{required: i18n.t('userNameRequired')}}
            />

            <IconInput
              name={'password'}
              placeholder={i18n.t('password')}
              control={control}
              secureTextEntry
              rules={{
                required: i18n.t('passwordRequired'),
                minLength: {value: 3, message: i18n.t('passwordToShort')},
              }}
            />

            <PressableText
              text={i18n.t('forgotPassword')}
              onPress={onForgotPasswordPressed}
              align={'flex-end'}
            />

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
