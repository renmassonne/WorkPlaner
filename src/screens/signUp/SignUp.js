import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  Text,
  useWindowDimensions,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {Icon} from '@rneui/themed';
import {useForm} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';

import i18n from 'i18n-js';
import Logo from './../../../assets/images/Logo2.png';
import IconInput from '../../components/IconInput';
import CustomButton from '../../components/CustomButton';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../../Colors';

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

const SignIn = () => {
  const {control, handleSubmit, watch} = useForm();

  const password = watch('password');

  const {height} = useWindowDimensions();

  const navigation = useNavigation();

  const onRegisterPressed = data => {
    navigation.navigate('ConfirmEmail');
  };

  const onGoBackSignIn = () => {
    navigation.goBack();
  };

  return (
    <LinearGradient colors={['#1D1879', '#393289']} style={{flex: 1}}>
      <SafeAreaView style={styles.root}>
        <Image source={Logo} style={[styles.logo, {height: height * 0.25}]} />
        <TouchableOpacity style={styles.goBack} onPress={onGoBackSignIn}>
          <Icon
            name={'arrow-left'}
            type="font-awesome-5"
            iconStyle={{color: 'white'}}
            size={36}
          />
        </TouchableOpacity>
        <View style={styles.container}>
          <Text style={styles.title}>{i18n.t('signUpHeader')}</Text>
          <View style={{marginTop: '4%'}}>
            <IconInput
              name={'username'}
              placeholder={i18n.t('username')}
              control={control}
              rules={{
                required: i18n.t('userNameRequired'),
                minLength: {value: 3, message: i18n.t('userNameToShort')},
                maxLength: {value: 12, message: i18n.t('userNameToLong')},
              }}
            />

            <IconInput
              name={'email'}
              placeholder={i18n.t('email')}
              control={control}
              rules={{
                required: i18n.t('emailRequired'),
                pattern: {value: EMAIL_REGEX, message: i18n.t('emailInvalid')},
              }}
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

            <IconInput
              name={'passwordConfirm'}
              placeholder={i18n.t('confirmPassword')}
              control={control}
              secureTextEntry
              rules={{
                required: i18n.t('passwordRequired'),
                minLength: {value: 3, message: i18n.t('passwordToShort')},
                validate: value => value == password || 'Stimmen nicht überein',
              }}
            />

            <Text style={styles.privacyText}>
              By registering, you accept our{' '}
              <Text style={[styles.privacyText, {color: Colors.link}]}>
                Terms of Use
              </Text>{' '}
              and{' '}
              <Text style={[styles.privacyText, {color: Colors.link}]}>
                Privacy Policy
              </Text>
            </Text>

            <CustomButton
              text={i18n.t('register')}
              onPress={handleSubmit(onRegisterPressed)}
              type={'PRIMARY'}
            />

            <Pressable style={styles.signUp} onPress={onGoBackSignIn}>
              <Text style={styles.text}>{i18n.t('alreadyAccountExist')}</Text>
              <Text style={styles.textMarked}>{i18n.t('SignIn')}</Text>
            </Pressable>
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
  goBack: {position: 'absolute', left: 25, top: 55},
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: Colors.link,
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
    marginVertical: '5%',
    alignSelf: 'center',
  },
  text: {
    fontSize: 14,
    color: Colors.white,
    alignSelf: 'center',
  },
  privacyText: {
    marginVertical: '2%',
    marginHorizontal: '1%',
    fontSize: 13,
    color: Colors.white,
    alignSelf: 'flex-start',
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
