import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Colors from '../../../../Colors';
import Icon from 'react-native-vector-icons/FontAwesome';

const AddCalendarTask = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date());

  const onSavePressed = () => {
    var isFormattedDate = timeToString(date);

    var index = Math.random() * 10000;

    items[isFormattedDate].push({
      id: index,
      name: name,
      description: description,
      day: isFormattedDate,
    });

    index += 1;

    setIsDatePickerVisible(false);

    refRBSheet.current.close();

    setName('');
    setDescription('');
  };

  return (
    <>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}>
        <Text
          style={{
            fontSize: 26,
            fontWeight: '600',
            color: Colors.white,
            // marginRight: '25%',
            textAlign: 'center',
          }}>
          Add Task
        </Text>
        <TouchableOpacity style={styles.saveButton} onPress={onSavePressed}>
          <Icon name={'save'} color={'white'} size={22} />
        </TouchableOpacity>
      </View>

      <View style={styles.innerWrapper}>
        <CustomInput
          placeholder={I18n.t('Calendar.name')}
          value={name}
          onChange={value => {
            setName(value);
          }}
        />
        <CustomInput
          placeholder={I18n.t('Calendar.description')}
          value={description}
          onChange={value => setDescription(value)}
          multiline
        />

        <PickerInput
          value={date.toLocaleDateString()}
          placeholder={I18n.t('Calendar.date')}
          onPress={() => setIsDatePickerVisible(!isDatePickerVisible)}
        />

        {isDatePickerVisible && (
          <DatePicker
            value={date}
            locale={I18n.locale}
            onChange={(event, date) => {
              setDate(date);
              setIsDatePickerVisible(false);
            }}
          />
        )}
      </View>
    </>
  );
};

export default AddCalendarTask;

const styles = StyleSheet.create({
  saveButton: {
    backgroundColor: Colors.primary,
    padding: '4%',
    alignSelf: 'flex-end',
    borderRadius: 50,
  },
});
