import React, {useState} from 'react';
import {StyleSheet, Text, SafeAreaView, View} from 'react-native';
import {Agenda} from 'react-native-calendars';

import Colors from '../../../Colors';
import {Icon} from '@rneui/base';
import FloatingActionButton from '../../components/FloatingActionButton';

const timeToString = time => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};

const Calendar = () => {
  const [items, setItems] = useState({});

  const loadItems = day => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);

        if (!items[strTime]) {
          items[strTime] = [];

          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: 'Item for ' + strTime + ' #' + j,
              height: Math.max(50, Math.floor(Math.random() * 150)),
              day: strTime,
            });
          }
        }
      }

      const newItems = {};
      Object.keys(items).forEach(key => {
        newItems[key] = items[key];
      });
      setItems(newItems);
    }, 1000);
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
          indicatorColor: Colors.primary,
          dotColor: Colors.primary,
          agendaKnobColor: Colors.white,

          agendaDayTextColor: Colors.primary,
          agendaDayNumColor: Colors.calendarText,
          agendaTodayColor: Colors.primary,
        }}
      />

      <View style={{position: 'absolute', right: 25, bottom: 25}}>
        <FloatingActionButton
          buttonSize={70}
          iconSize={24}
          singleButtonMode={true}
          showAddButton={[true, 1]}
          distanceToEdge={0}
          onPressItem={button => {
            if (button == 'btn_add') {
              console.log('Coming Soon');
            }
          }}
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
});
