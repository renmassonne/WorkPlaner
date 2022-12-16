import React, {useState} from 'react';
import {
  Alert,
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import {Auth} from 'aws-amplify';
import {Icon} from '@rneui/themed';
import {useForm} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';

import i18n from 'i18n-js';
import Colors from '../../../Colors';
import IconInput from '../../components/IconInput';
import Logo from './../../../assets/images/Logo.png';
import CustomButton from '../../components/CustomButton';

const NewPassword = () => {
  const {control, handleSubmit, watch} = useForm();

  const password = watch('password');

  const {height} = useWindowDimensions();

  const navigation = useNavigation();

  const onSubmitPressed = async data => {
    //Validation

    try {
      await Auth.forgotPasswordSubmit(
        data.username,
        data.verificationCode,
        data.password,
      );
      navigation.navigate('SignIn');
    } catch (e) {
      Alert.alert('Oops', e.message);
    }
  };

  const onGoBackSignIn = () => {
    navigation.navigate('SignIn');
  };

  return (
    <View style={{flex: 1, backgroundColor: Colors.generalBackground}}>
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
          <Text style={styles.title}>{i18n.t('resetPassword')}</Text>
          <View style={{marginTop: '8%'}}>
            <IconInput
              name={'username'}
              placeholder={i18n.t('username')}
              control={control}
              rules={{required: i18n.t('userNameRequired')}}
            />

            <IconInput
              name={'verificationCode'}
              placeholder={i18n.t('verificationCode')}
              control={control}
              rules={{
                required: i18n.t('verificationCodeRequired'),
                minLength: {
                  value: 3,
                  message: i18n.t('verificationCodeRToShort'),
                },
                maxLength: {
                  value: 6,
                  message: i18n.t('verificationCodeRToLong'),
                },
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

            <CustomButton
              text={i18n.t('confirm')}
              onPress={handleSubmit(onSubmitPressed)}
              type={'PRIMARY'}
            />
          </View>
        </View>
        <Text style={styles.credentials}>{'©Workplaner - 2022'}</Text>
      </SafeAreaView>
    </View>
  );
};

export default NewPassword;

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
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: '2%',
    marginHorizontal: '2%',
  },
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
