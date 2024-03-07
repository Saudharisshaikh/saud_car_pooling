import {
  ActivityIndicator,
  Alert,
  Button,
  Image,
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Images from '../constant/Images';
import CommonButton from './Buttons/CommonButton';
import Colors from '../constant/Colors';
import CustomButton from './Buttons/CommonButton';
import BooingCalendar from './BooingCalendar';
import DateTimePicker from '@react-native-community/datetimepicker';
import {
  updateBookingDate,
  updateBookingTime,
} from '../redux/reducers/BookingtimeReducer';
import {useSelector, useDispatch} from 'react-redux';

export default function ConfimationModal({
  modalConfirmationisible,
  setModalConfirmationVisible,
  setBookingDate,
  setBookingTime,
}: any) {
  const bookTime = useSelector(
    (state: any) => state.bookingDateTime.bookingTime,
  );
  console.log(`bookingtime = ${bookTime}`);

  const bookingDate = useSelector(
    (state: any) => state.bookingDateTime.bookingDate,
  );
  console.log(`bookingDate = ${bookingDate}`);

  const dispatch = useDispatch();

  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [diplayDate, setDisplayDate] = useState('');
  const [timeState, setTimeState] = useState('');
  const [dateState, setDateState] = useState('');

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = async () => {
    setTimePickerVisibility(false);
  };

  const handleDateChange = ({type, nativeEvent}: any) => {
    if (Platform.OS === 'ios') {
      // DateTimePicker on iOS does not close automatically
      setTimePickerVisibility(false);
    }

    if (type === 'set' && nativeEvent !== undefined) {
      const selectedDate = new Date(nativeEvent.timestamp);
      setSelectedTime(selectedDate);
      dispatch(
        updateBookingTime(
          selectedDate.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          }),
        ),
      );

      // Delay setting timeState to ensure setSelectedTime has updated the value
      setTimeout(() => {
        setTimeState(
          selectedDate.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          }),
        );
      }, 100); // Delay time can be adjusted if necessary

      setTimePickerVisibility(false);
      hideTimePicker();
      console.log(bookTime);
    } else {
      hideTimePicker();
      setTimePickerVisibility(false); // Hides the picker if canceled without selecting a time
    }
  };
  useEffect(() => {
    const currentDate = new Date().toDateString();
    setDisplayDate(currentDate);

    if (bookTime === '') {
      setTimeState(
        selectedTime.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        }),
      );
    } else {
      setTimeState(bookTime);
    }

    if (bookingDate === '') {
      setDateState(currentDate);
    } else {
      setDateState(bookingDate);
    }
  }, [bookTime, selectedTime]);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalConfirmationisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        hideTimePicker();
        setModalConfirmationVisible(false);
      }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.63)',
        }}>
        <View
          style={{
            width: responsiveWidth(85),
            height: responsiveHeight(70),
            backgroundColor: 'white',
            borderRadius: 20,
            padding: 15,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            elevation: 5,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                marginTop: responsiveHeight(1.5),
                color: Colors.BLACK_COLOR,
              }}>
              Date
            </Text>

            <TouchableOpacity
              style={styles.rightIcons}
              onPress={() => {
                console.log('done');
              }}>
              <Text
                style={{
                  marginEnd: responsiveWidth(2),
                  color: Colors.BLACK_COLOR,
                }}>
                {dateState}
              </Text>

              <Image
                source={Images.DROP_DOWN_ICON}
                style={{
                  width: responsiveWidth(5),
                  height: responsiveHeight(5),
                  marginBottom: responsiveHeight(-1),
                }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                marginTop: responsiveHeight(1.5),
                color: Colors.BLACK_COLOR,
              }}>
              Time
            </Text>

            <TouchableOpacity
              style={styles.rightIcons2}
              onPress={() => {
                setTimePickerVisibility(true);
              }}>
              <Text
                style={{
                  marginEnd: responsiveWidth(2),
                  color: Colors.BLACK_COLOR,
                }}>
                {timeState}
              </Text>

              <Image
                source={Images.DROP_DOWN_ICON}
                style={{
                  width: responsiveWidth(5),
                  height: responsiveHeight(5),
                  marginBottom: responsiveHeight(-1),
                }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>

          <BooingCalendar setDateState={setDateState} />

          {isTimePickerVisible && (
            <DateTimePicker
              value={selectedTime}
              mode="time"
              display={Platform.OS === 'ios' ? 'spinner' : 'clock'}
              onChange={handleDateChange}
            />
          )}

          <CustomButton
            title="Set"
            onPress={() => {
              setModalConfirmationVisible(false);
              console.log(diplayDate);
              setBookingTime(dateState + ' : ' + timeState);
              dispatch(
                updateBookingTime(
                  selectedTime.toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  }),
                ),
              );
            }}
            customHeight={responsiveHeight(6)}
            background={Colors.BLACK_COLOR}
            customWidth={responsiveWidth(70)}
            btnStyle={{marginTop: 5}}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  rightIcons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  rightIcons2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: responsiveHeight(1.5),
  },
});
