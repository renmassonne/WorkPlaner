import React from 'react';
import {FloatingAction} from 'react-native-floating-action';
import i18n from 'i18n-js';
import Icon from 'react-native-fontawesome-pro';
import Colors from '../../Colors';

//https://github.com/santomegonzalo/react-native-floating-action
const FloatingActionButton = props => {
  const actions = [];

  const iconSize = props.iconSize;

  const addButton = {
    text: i18n.t('add'),
    icon: (
      <Icon name="plus" type="regular" size={iconSize} color={Colors.white} />
    ),
    name: 'btn_add',
  };

  const saveButton = {
    text: i18n.t('save'),
    icon: (
      <Icon
        name="check"
        type="regular"
        size={iconSize}
        color={Colors.pa_white}
      />
    ),
    name: 'btn_save',
  };

  if (props.showAddButton && props.showAddButton[0]) {
    addButton.position = props.showAddButton[1];
    actions.push(addButton);
  }

  if (props.showSaveButton && props.showSaveButton[0]) {
    saveButton.position = props.showSaveButton[1];
    actions.push(saveButton);
  }

  return (
    <FloatingAction
      actions={actions}
      color={Colors.backgroundColor}
      buttonSize={props.buttonSize}
      overrideWithAction={props.singleButtonMode}
      onPressItem={props.onPressItem}
      distanceToEdge={{vertical: 12, horizontal: 0}}
    />
  );
};

export default FloatingActionButton;
