import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';

import {useFocusEffect, useNavigation} from '@react-navigation/native';
import Images from '../constant/Images';
import Colors from '../constant/Colors';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import CustomButton from './Buttons/CommonButton';
import ConfimationModal from './ConfirmationModal';
import {useSelector, useDispatch} from 'react-redux';
import {saveTravelDetails} from '../redux/reducers/travelSlice';
import UserStateConfirmationModal from './Texts/UserStateConfirmationModal';
import VehicleSelectedModal from './VehicleSelectedModal';

const HomeAnimatableCard = ({isUpdateState, saveData}: any) => {
  const dispatch = useDispatch();

  const [staringPoint, setStartingPoint] = useState('');
  const [number_people, setNumberPeople] = useState(
    isUpdateState ? saveData.seats : '',
  );
  const [number_people2,setNumberPeople2] = useState('');
  const [destination, setDestination] = useState('');
  const [rideTime, setRideTime] = useState('');
  const [specialInstruction, setSpecialInstruction] = useState('');
  const navigation: any = useNavigation();
  const [activeSearch, setActiveSearch] = useState(true);
  const [activeRide, setActiveRide] = useState(false);
  const [openCalendar, setOpenCalendar] = useState(false);
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('Pick your time.');
  const [showConirmModal, setShowConfirmModal] = useState(false);
  const [showVehicleModal, setShowVehicleModal] = useState(false);

  const [formData, setFormData] = useState({
    startingPoint: '',
    destinationPoint: '',
    date: '',
    seats: '',
    note: '',
  });


  console.log('saveData = ',saveData);

  let locationValue = {
    latitude: null,
    longitude: null,
    name: '',
  };

  let destinationValue = {
    latitude: null,
    longitude: null,
    name: '',
  }

  locationValue = useSelector((state: any) => state.location);
   console.log(locationValue.latitude,locationValue.longitude,locationValue.name);

  destinationValue = useSelector((state: any) => state.destinationLocation);  
  console.log(destinationValue.latitude,destinationValue.longitude,destinationValue.name);

  const travelDetails = useSelector((state: any) => state.travel.travelDetails);
  console.log({travelDetails});

  const bookTime = useSelector(
    (state: any) => state.bookingDateTime.bookingTime,
  );
  console.log(`bookingtime home = ${bookTime}`);

  const handleFormSubmit = () => {
    setFormData({
      startingPoint: locationValue.name,
      destinationPoint: destinationValue.name,
      date: bookingTime,
      seats: number_people2,
      note: specialInstruction,
    });

    dispatch(saveTravelDetails(formData));
    const destination = 'homeScreen';
    navigation.navigate('RouteRider', {destination});

  };
  useEffect(() => {
    if (!isUpdateState) {
      dispatch(saveTravelDetails(formData));
    }
  }, [formData, isUpdateState]);

  const handleSubmit = () => {
    if (isUpdateState) {
      console.log('update state');
      console.log('done', saveData.date);
      handleFormSubmit();
      // This below modal is for change user status to rider
      //setShowConfirmModal(true);
    } else {
      handleFormSubmit();
    }
  };

  const toggleBackground = () => {
    setActiveRide(!activeRide);
    setActiveSearch(!activeSearch);
    setStartingPoint('');
    setDestination('');
    setRideTime('');
    setSpecialInstruction('');
    setNumberPeople('');
  };
  const areFieldsFilled = () => {
    return (
      staringPoint.trim() !== '' &&
      number_people.trim() !== '' &&
      destination.trim() !== '' &&
      bookingTime.trim() !== '' &&
      specialInstruction.trim() !== ''
    );
  };

  
  function isAllFilled() {
    return locationValue.name !='' && destinationValue.name !='' && bookingTime !='Pick your time.' && number_people2 !='' && specialInstruction !=''
  }

  console.log('isField =', isAllFilled());
  
  const isButtonEnabled = areFieldsFilled();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.cardContainer}>
        <View style={[styles.card]}>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <TouchableOpacity onPress={toggleBackground}>
              <View
                style={{
                  width: responsiveWidth(35),
                  height: responsiveHeight(4),
                  borderRadius: responsiveHeight(2),
                  backgroundColor: activeSearch
                    ? Colors.CHIPS_BACK_COLOR
                    : Colors.WHITE_COLOR,
                  flexDirection: 'row',
                }}>
                <Image
                  source={
                    activeSearch
                      ? Images.SEARCH_RIDE_ACTIVE
                      : Images.SEARCH_RIDE
                  }
                  style={{
                    height: responsiveHeight(4),
                    width: responsiveWidth(4),
                    marginStart: responsiveWidth(3),
                  }}
                  resizeMode="contain"
                />
                <Text
                  style={{
                    marginStart: responsiveWidth(1),
                    alignSelf: 'center',
                    color: activeSearch
                      ? Colors.PRIMARY_COLOR
                      : Colors.BLACK_COLOR,
                  }}>
                  Find Ride
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={toggleBackground}>
              <View
                style={{
                  width: responsiveWidth(35),
                  height: responsiveHeight(4),
                  borderRadius: responsiveHeight(2),
                  flexDirection: 'row',
                  marginStart: responsiveWidth(3),
                  backgroundColor: activeRide
                    ? Colors.CHIPS_BACK_COLOR
                    : Colors.WHITE_COLOR,
                }}>
                <Image
                  source={activeRide ? Images.CAR_RIDE_ACTIVE : Images.CAR_RIDE}
                  style={{
                    height: responsiveHeight(4.5),
                    width: responsiveWidth(4.5),
                    marginStart: responsiveWidth(3),
                  }}
                  resizeMode="contain"
                />
                <Text
                  style={{
                    marginStart: responsiveWidth(1),
                    alignSelf: 'center',
                    color: activeRide
                      ? Colors.PRIMARY_COLOR
                      : Colors.BLACK_COLOR,
                  }}>
                  Offer Ride
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Image
              source={Images.STARTNG_POINT_ICON}
              style={{
                height: responsiveHeight(3),
                width: responsiveWidth(3),
                marginStart: responsiveWidth(2),
                marginTop: responsiveHeight(2),
              }}
              resizeMode="contain"
            />

            <View
              style={{
                borderBottomColor: Colors.SEARCH_BEHIND,
                borderBottomWidth: 1,
                marginTop: responsiveHeight(1.5),
                flex: 1,
                marginEnd: responsiveWidth(8),
                marginStart: responsiveWidth(2),
              }}>
              <TouchableOpacity
                onPress={() => {
                  const destination = 'startingPoint';
                  navigation.navigate('StartingPoint', {destination});
                }}>
                <Text numberOfLines={2} ellipsizeMode="tail">
                  {isUpdateState
                    ? saveData.startingPoint
                    : locationValue.name.toString() || 'Choose your starting point.'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Image
              source={Images.PIN_ICON}
              style={{
                height: responsiveHeight(3),
                width: responsiveWidth(3),
                marginStart: responsiveWidth(2),
                marginTop: responsiveHeight(2),
              }}
              resizeMode="contain"
            />

            <View
              style={{
                borderBottomColor: Colors.SEARCH_BEHIND,
                borderBottomWidth: 1,
                marginTop: responsiveHeight(1.5),
                flex: 1,
                marginEnd: responsiveWidth(8),
                marginStart: responsiveWidth(2),
              }}>
              <TouchableOpacity
                onPress={() => {
                  const destination = 'destinationPoint';
                  navigation.navigate('StartingPoint', {destination});
                }}>
                <Text numberOfLines={2} ellipsizeMode="tail">
                  {isUpdateState
                    ? saveData.destinationPoint
                    : destinationValue.name.toString() || 'Choose your destination.'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Image
              source={Images.RIDE_TIME_ICON}
              style={{
                height: responsiveHeight(3),
                width: responsiveWidth(3),
                marginStart: responsiveWidth(2),
                marginTop: responsiveHeight(1.5),
              }}
              resizeMode="contain"
            />

            <View
              style={{
                borderBottomColor: Colors.SEARCH_BEHIND,
                borderBottomWidth: 1,
                marginTop: responsiveHeight(1.5),
                flex: 1,
                marginEnd: responsiveWidth(8),
                marginStart: responsiveWidth(2),
              }}>
              <TouchableOpacity onPress={() => setOpenCalendar(true)}>
                <Text>{isUpdateState ? saveData.date : bookingTime}</Text>
              </TouchableOpacity>

              {openCalendar ? (
                <ConfimationModal
                  modalConfirmationisible={openCalendar}
                  setModalConfirmationVisible={setOpenCalendar}
                  setBookingDate={setBookingDate}
                  setBookingTime={setBookingTime}
                />
              ) : null}
            </View>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Image
              source={
                activeSearch ? Images.NUMBER_OF_SEAT_ICON : Images.RIDE_VEHICLE
              }
              style={{
                height: responsiveHeight(3),
                width: responsiveWidth(3),
                marginStart: responsiveWidth(2),
                marginTop: responsiveHeight(2),
              }}
              resizeMode="contain"
            />

            <View
              style={{
                borderBottomColor: Colors.SEARCH_BEHIND,
                borderBottomWidth: 1,
                marginTop: responsiveHeight(0.5),
                flex: 1,
                marginEnd: responsiveWidth(8),
                marginStart: responsiveWidth(2),
              }}>
              {activeSearch ? (
                <TextInput
                  value={isUpdateState ? saveData.seats : number_people2}
                  onChangeText={txt => {
                    setNumberPeople2(txt);
                  }}
                  placeholder={'Number of seats'}
                  style={{paddingVertical: 8}}
                />
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    setShowVehicleModal(true);
                    console.log(showVehicleModal);
                  }}
                  style={{marginTop: responsiveHeight(1.5)}}>
                  <Text>Select your vehicle</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Image
              source={Images.NOTE_ICON}
              style={{
                height: responsiveHeight(3),
                width: responsiveWidth(3),
                marginStart: responsiveWidth(2),
                marginTop: responsiveHeight(2),
              }}
              resizeMode="contain"
            />

            <View
              style={{
                borderBottomColor: Colors.SEARCH_BEHIND,
                borderBottomWidth: 1,
                marginTop: responsiveHeight(0.5),
                flex: 1,
                marginEnd: responsiveWidth(8),
                marginStart: responsiveWidth(2),
              }}>
              <TextInput
                value={isUpdateState ? saveData.note : specialInstruction}
                onChangeText={txt => {
                  setSpecialInstruction(txt);
                }}
                placeholder={'Special instructions [ex:pet,loggers]'}
                style={{paddingVertical: 8}}
              />
            </View>
          </View>

          <CustomButton
            title={isUpdateState ? 'Update' : activeSearch ? 'Find' : 'Offer'}
            customWidth={responsiveWidth(70)}
            customHeight={responsiveHeight(6.3)}
            backgroundColor={
              isUpdateState
                ? Colors.PRIMARY_COLOR
                : isAllFilled()
                ? Colors.PRIMARY_COLOR
                : '#e1e1e1'
            }
            onPress={handleSubmit}
            margintop={responsiveHeight(3)}
          />
        </View>
      </View>

      {showConirmModal && (
        <UserStateConfirmationModal
          visibleModal={showConirmModal}
          setVisibleModal={setShowConfirmModal}
        />
      )}
      {showVehicleModal && (
        <VehicleSelectedModal
          showVehicle={showVehicleModal}
          setShowVehicle={setShowVehicleModal}
        />
      )}
    </ScrollView>
  );
};

export default HomeAnimatableCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    color: '#000',
    fontSize: responsiveFontSize(10),
    marginBottom: responsiveHeight(30),
  },
  cardContainer: {
    width: '90%',
    flex: 1,
    marginTop: 10,
    marginStart: 10,
    marginEnd: 10,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  card: {
    backgroundColor: '#fff',
    width: responsiveWidth(90),
    height: responsiveHeight(53),
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 25,
    borderRadius: 25,
    resizeMode: 'cover',
    padding: 15,
    marginStart: responsiveWidth(5),
    marginEnd: responsiveWidth(5),
    alignSelf: 'center',
    borderColor: Colors.PRIMARY_COLOR,
    borderWidth: 1.5,
  },
  cardImage: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    borderRadius: 20,
  },
  cardTitle: {
    position: 'absolute',
    bottom: 0,
    margin: 10,
    color: '#fff',
  },
  buttons: {
    margin: 20,
  },
  infoText: {
    height: 28,
    justifyContent: 'center',
    display: 'flex',
    zIndex: -100,
  },
  lineView: {
    width: '100%',
    borderColor: Colors.GRAY_DEFAULT_COLOR,
    borderWidth: 0.5,
    marginVertical: responsiveHeight(10),
  },
  timeDistance: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: responsiveHeight(5),
  },
  btnContainer: {
    marginTop: responsiveHeight(20),
    position: 'absolute',
    bottom: responsiveHeight(0),
    width: '100%',
    paddingHorizontal: responsiveWidth(10),
  },

  modalText: {
    marginVertical: responsiveHeight(15),
    textAlign: 'center',
    fontSize: 15,
    color: Colors.GRAY_DEFAULT_COLOR,
  },
});
