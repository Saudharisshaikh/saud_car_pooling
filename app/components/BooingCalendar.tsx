import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import Colors from '../constant/Colors';
import {
  updateBookingDate,
  updateBookingTime,
} from '../redux/reducers/BookingtimeReducer';
import {useSelector, useDispatch} from 'react-redux';

export default function BooingCalendar({setDateState}: any) {
  const [selectedDate, setSelectedDate] = useState('');
  const bookingDate = useSelector(
    (state: any) => state.bookingDateTime.bookingDate,
  );
  console.log(`bookingDate = ${bookingDate}`);

  const dispatch = useDispatch();


  const handleDayPress = (day: any) => {
    const {dateString} = day;
    setSelectedDate(dateString);
    setDateState(dateString);
    dispatch(
      updateBookingDate(
        dateString
      ),
    ); 
    // Update parent state
  };

  return (
    <Calendar
      onDayPress={handleDayPress}
      markedDates={{
        [selectedDate]: {
          selected: true,
          disableTouchEvent: true,
          selectedColor: Colors.PRIMARY_COLOR,
        },
      }}
    />
  );
}
