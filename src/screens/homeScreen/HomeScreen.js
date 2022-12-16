import React, {useState} from 'react';
import {StyleSheet, Text, View, Alert} from 'react-native';

import Layout from '../../components/Layout';
import Colors from '../../../Colors';
import Input from '@ant-design/react-native/lib/input-item/Input';
import {Button, Grid} from '@ant-design/react-native';

const HomeScreen = () => {
  const [showActivityIndicator, setShowActivityIndicator] = useState(false);
  const [text, setText] = useState('');
  const [visible, setVisible] = useState(false);

  return (
    <Layout>
      <View style={styles.root}>
        <Button
          onPress={() => {
            setVisible(true);
          }}
          size={'large'}
          style={{
            backgroundColor: Colors.primary,
            borderColor: Colors.primary,
          }}>
          <Text style={{color: 'red', fontWeight: '600', fontSize: 18}}>
            Start
          </Text>
        </Button>

        <Input
          style={{
            marginTop: '4%',
            backgroundColor: Colors.iconBackgroundColor,
            padding: '4%',
            borderRadius: 4,
            borderColor: Colors.white,
          }}
          onChangeText={text => {
            setText(text);
          }}
          editable={true}
          clearButtonMode={'always'}
          placeholder={'Test'}
        />

        <Text>{text}</Text>
      </View>
    </Layout>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  root: {
    height: '100%',
    paddingHorizontal: '2%',
    width: '100%',
  },
});
