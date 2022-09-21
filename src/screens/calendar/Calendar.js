import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Platform,
} from 'react-native';
import {Card, Icon} from '@rneui/themed';
import {Agenda} from 'react-native-calendars';
import {BottomSheet} from '@rneui/themed';

import Colors from '../../../Colors';
import RBSheet from 'react-native-raw-bottom-sheet';
import FloatingActionButton from '../../components/FloatingActionButton';
import CustomInput from '../../components/CustomInput';
import I18n from 'i18n-js';
import DatePicker from '../../components/Picker/DatePicker';
import PickerInput from '../../components/Picker/PickerInput';
import CalendarDetail from './calendarDetail/CalendarDetail';

const timeToString = time => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};

const Calendar = () => {
  const refRBSheet = useRef();

  const [items, setItems] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date());

  const loadItems = day => {
    for (let i = -15; i < 85; i++) {
      const time = day.timestamp + i * 24 * 60 * 60 * 1000;
      const strTime = timeToString(time);

      if (!items[strTime]) {
        items[strTime] = [];
      }
    }

    const newItems = {};
    Object.keys(items).forEach(key => {
      newItems[key] = items[key];
    });
    setItems(newItems);
  };

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

  const onDeleteItem = id => {
    Alert.alert('Coming Soon');
  };

  const CustomTabButton = props => {
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        position: 'absolute',
        top: 0,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 3,
      }}>
      <View style={styles.customButton}>
        <Icon
          name={'home'}
          type="font-awesome-5"
          iconStyle={{
            color: Colors.white,
          }}
          size={20}
        />
      </View>
    </TouchableOpacity>;
  };

  const renderItem = item => {
    return (
      <TouchableOpacity
        style={{marginTop: '2%'}}
        onPress={() => refRBSheet.current.open()}
        onLongPress={() => onDeleteItem(item.id)}>
        <Card>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
            }}>
            <Card.Title>{item.name}</Card.Title>
            <View>
              <Text multiline>{item.description}</Text>
            </View>
          </View>
        </Card>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        theme={{
          calendarBackground: Colors.backgroundColor,
          textSectionTitleColor: Colors.white,
          dayTextColor: Colors.white,
          monthTextColor: Colors.white,
          todayTextColor: Colors.primary,
          selectedDayBackgroundColor: Colors.iconBackgroundColor,
          indicatorColor: Colors.backgroundColor,
          dotColor: Colors.primary,
          agendaKnobColor: Colors.white,
          agendaDayTextColor: Colors.primary,
          agendaDayNumColor: Colors.calendarText,
          agendaTodayColor: Colors.primary,
        }}
        renderItem={renderItem}
      />

      <RBSheet
        ref={refRBSheet}
        height={480}
        closeOnDragDown={true}
        closeOnPressMask={true}
        keyboardAvoidingViewEnabled={true}
        customStyles={{
          container: {
            backgroundColor: Colors.backgroundColor_light,
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            paddingVertical: '4%',
            paddingHorizontal: '4%',
          },
        }}>
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
              marginRight: '25%',
            }}>
            Add Task
          </Text>
          <TouchableOpacity style={styles.saveButton} onPress={onSavePressed}>
            <Icon
              name={'save'}
              type="font-awesome-5"
              iconStyle={{color: 'white'}}
              size={22}
            />
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
      </RBSheet>

      <View style={{position: 'absolute', right: 25, bottom: 25}}>
        <FloatingActionButton
          type={'add'}
          buttonSize={70}
          iconSize={24}
          distanceToEdge={0}
          distanceToHorizont={0}
          onPressMain={() => refRBSheet.current.open()}
        />
      </View>
    </View>
  );
};

export default Calendar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    paddingTop: '10%',
  },
  addWrapper: {
    flex: 1,
    height: 600,
    backgroundColor: Colors.backgroundColor_light,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingVertical: '4%',
    paddingHorizontal: '4%',
  },
  innerWrapper: {
    paddingHorizontal: '6%',
    paddingBottom: '6%',
    paddingTop: '4%',
  },
  saveButton: {
    backgroundColor: Colors.primary,
    padding: '4%',
    alignSelf: 'flex-end',
    borderRadius: 50,
  },
  customButton: {
    width: 65,
    height: 65,
    borderRadius: 35,
    backgroundColor: Colors.primary,
    alignContent: 'center',
    justifyContent: 'center',
  },
});
