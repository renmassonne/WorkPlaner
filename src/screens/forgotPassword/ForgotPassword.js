import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  Alert,
  StyleSheet,
  SafeAreaView,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import {Auth} from 'aws-amplify';
import {useForm} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';

import i18n from 'i18n-js';
import Colors from '../../../Colors';
import IconInput from '../../components/IconInput';
import Logo from './../../../assets/images/Logo.png';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomButton from '../../components/CustomButton';

const ForgotPassword = () => {
  const {control, handleSubmit, watch} = useForm();

  const {height} = useWindowDimensions();

  const navigation = useNavigation();

  const onSubmitPressed = async data => {
    //Validation username exists

    try {
      await Auth.forgotPassword(data.username, data.verificationCode);
      navigation.navigate('NewPassword');
    } catch (e) {
      Alert.alert('Oops', e.message);
    }
  };

  const onGoBackSignIn = () => {
    navigation.goBack();
  };

  return (
    <View style={{flex: 1, backgroundColor: Colors.generalBackground}}>
      <SafeAreaView style={styles.root}>
        <Image source={Logo} style={[styles.logo, {height: height * 0.25}]} />
        <TouchableOpacity style={styles.goBack} onPress={onGoBackSignIn}>
          <Icon name={'arrow-left'} color={'white'} size={36} />
        </TouchableOpacity>
        <View style={styles.container}>
          <Text style={styles.title}>{i18n.t('resetPassword')}</Text>
          <View style={{marginTop: '4%'}}>
            <IconInput
              name={'username'}
              placeholder={i18n.t('username')}
              control={control}
              rules={{required: i18n.t('userNameRequired')}}
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

export default ForgotPassword;

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
