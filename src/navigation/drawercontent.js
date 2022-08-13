import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, StyleSheet, Text, Dimensions} from 'react-native';
import {Auth} from 'aws-amplify';
import {Icon} from '@rneui/themed';
import {Avatar, Badge} from '@rneui/themed';
import {DrawerItem} from '@react-navigation/drawer';

import Colors from '../../Colors';
import i18n from 'i18n-js';

const win = Dimensions.get('window');

export function DrawerContent(props) {
  const [user, setUser] = useState();

  checkUser = async () => {
    const authUser = await Auth.currentAuthenticatedUser({bypassCache: true});

    if (!user) {
      setUser(authUser);
    }
  };

  useEffect(() => {
    checkUser();
  });

  return (
    <SafeAreaView style={[styles.container, {height: win.height - 128}]}>
      <View>
        <Avatar
          size={75}
          rounded
          icon={{name: 'user', type: 'font-awesome-5', color: 'black'}}
          containerStyle={styles.profile_Pic}
        />
        <Badge
          status="success"
          containerStyle={{
            position: 'absolute',
            top: 0,
            left: 55,
          }}
          rounded
          badgeStyle={{width: 18, height: 18, borderRadius: 50}}
        />
      </View>

      <View style={styles.userInformation}>
        <Text style={styles.text}>
          {user ? user.attributes.name : 'Username'}
        </Text>
        <Text style={styles.text}>
          {user ? user.attributes.email : 'Username'}
        </Text>
      </View>

      <View style={styles.wrapper}>
        <View>
          <DrawerItem
            label={i18n.t('homeScreen.homescreen')}
            labelStyle={styles.text}
            onPress={() => {
              navigateTo(props.navigation, 'HomeScreen');
            }}
            style={styles.margin0}
            icon={() => (
              <Icon
                name={'home'}
                type="font-awesome-5"
                iconStyle={{color: Colors.white}}
                size={24}
              />
            )}
          />
          <DrawerItem
            label={i18n.t('Calendar.Calendar')}
            labelStyle={styles.text}
            onPress={() => {
              navigateTo(props.navigation, 'Calendar');
            }}
            style={styles.margin0}
            icon={() => (
              <View style={{marginLeft: '1.5%', marginRight: '1.5%'}}>
                <Icon
                  name={'calendar'}
                  type="font-awesome-5"
                  iconStyle={{color: Colors.white}}
                  size={24}
                />
              </View>
            )}
          />
        </View>
        <View style={{marginBottom: '8%'}}>
          <DrawerItem
            label={i18n.t('SideDrawer.settings')}
            labelStyle={styles.text}
            onPress={() => {
              navigateTo(props.navigation, 'Settings');
            }}
            style={styles.margin0}
            icon={() => (
              <Icon
                name={'cogs'}
                type="font-awesome-5"
                iconStyle={{color: Colors.white}}
                size={20}
              />
            )}
          />
          <DrawerItem
            label={i18n.t('SideDrawer.logOut')}
            labelStyle={styles.text}
            onPress={() => {
              Auth.signOut();
              navigateTo(props.navigation, 'SignIn');
            }}
            style={styles.margin0}
            icon={() => (
              <Icon
                name={'sign-out-alt'}
                type="font-awesome-5"
                iconStyle={{color: Colors.white}}
                size={24}
              />
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

function navigateTo(navigation, screenName) {
  navigation.navigate(screenName);
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 64,
    marginHorizontal: 16,
    alignItems: 'center',
  },
  wrapper: {width: '100%', height: '85%', justifyContent: 'space-between'},
  userInformation: {
    alignItems: 'center',
    paddingVertical: '6%',
  },
  profile_Pic: {
    backgroundColor: Colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  text: {
    color: Colors.white,
  },
  margin0: {
    marginVertical: 0,
  },
});
