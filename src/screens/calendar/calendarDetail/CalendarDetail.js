import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import RBSheet from 'react-native-raw-bottom-sheet';

const CalendarDetail = ({item, ref}) => {
  return (
    <RBSheet
      ref={ref}
      closeOnDragDown={true}
      closeOnPressMask={false}
      customStyles={{
        wrapper: {
          backgroundColor: 'transparent',
        },
        draggableIcon: {
          backgroundColor: '#000',
        },
      }}>
      <View>
        <Text>Test</Text>
      </View>
    </RBSheet>
  );
};

export default CalendarDetail;

const styles = StyleSheet.create({});
