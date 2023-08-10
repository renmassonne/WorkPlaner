import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {FloatingAction} from 'react-native-floating-action';

import i18n from 'i18n-js';
import Colors from '../../Colors';

//https://github.com/santomegonzalo/react-native-floating-action
const FloatingActionButton = props => {
  const checkButtonType = type => {
    if (type == 'add') {
      return <Icon name={'plus'} color={'white'} size={24} />;
    } else if (type == 'save') {
      return <Icon name={'save'} color={'white'} size={24} />;
    }
  };

  return (
    <FloatingAction
      color={Colors.primary_dark}
      buttonSize={props.buttonSize}
      onPressMain={props.onPressMain}
      distanceToEdge={{
        vertical: props.distanceToEdge,
        horizontal: props.distanceToHorizont,
      }}
      floatingIcon={checkButtonType(props.type)}
    />
  );
};

export default FloatingActionButton;
