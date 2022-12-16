import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
  useWindowDimensions,
  TouchableOpacity,
  Alert,
  Button,
} from 'react-native';
import {Icon} from '@rneui/themed';
import {Auth} from 'aws-amplify';
import {useForm} from 'react-hook-form';
import {useNavigation, useRoute} from '@react-navigation/native';

import i18n from 'i18n-js';
import Colors from '../../../Colors';
import IconInput from '../../components/IconInput';
import Logo from './../../../assets/images/Logo.png';
import CustomButton from '../../components/CustomButton';
import PressableText from '../../components/PressableText';

const ConfirmEmail = () => {
  const route = useRoute();

  const {control, handleSubmit, watch} = useForm({
    defaultValues: {username: route?.params?.username},
  });

  const userName = watch('username');
  const navigation = useNavigation();

  const {height} = useWindowDimensions();

  const [newVeriCodeSend, setNewVeriCodeSend] = useState(false);

  const onConfirmPressed = async data => {
    try {
      await Auth.confirmSignUp(data.username, data.verificationCode);
      navigation.navigate('SignIn');
    } catch (e) {
      Alert.alert('Oops', e.message);
    }
  };

  const onResendCodePressed = async data => {
    try {
      await Auth.resendSignUp(userName);
      setNewVeriCodeSend(true);

      Alert.alert(i18n.t('newVeriCode'));
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
          <Text style={styles.title}>{i18n.t('confirmMail')}</Text>
          <View style={{marginTop: '4%'}}>
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

            <CustomButton
              text={i18n.t('confirm')}
              onPress={handleSubmit(onConfirmPressed)}
              type={'PRIMARY'}
            />

            <View style={styles.innerContainer}>
              <PressableText
                text={i18n.t('resendCode')}
                onPress={onResendCodePressed}
              />
            </View>
          </View>
        </View>
        <Text style={styles.credentials}>{'©Workplaner - 2022'}</Text>
      </SafeAreaView>
    </View>
  );
};

export default ConfirmEmail;

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
