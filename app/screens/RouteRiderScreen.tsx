import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Pressable,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Images from '../constant/Images';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import Colors from '../constant/Colors';
import HomeAnimatableCard from '../components/HomeAnimatableCard';
import UserStateConfirmationModal from '../components/Texts/UserStateConfirmationModal';
import {useSelector, useDispatch} from 'react-redux';
import RideConfirmModal from '../components/RideConfirmModal';
import RideRequestedModal from '../components/RideRequestedModal';
import ChatModal from '../components/ChatModal';
import MapView, { Marker } from 'react-native-maps';
import { GOOGLE_MAP_KEY } from '../utils/MapKey';
import MapViewDirections from 'react-native-maps-directions';
import { useRoute,RouteProp } from '@react-navigation/native';
import PessengerPendingModal from '../components/PessengerPendingModal';

export default function RouteRiderScreen() {
  const navigation: any = useNavigation();
  const [editRouteMenu, setEditRouteMenu] = useState(false);
  const [editUserState, setEditUserState] = useState(false);
  const [showConirmModal, setShowConfirmModal] = useState(false);
  const [NoRideView, setNoRideView] = useState(true);
  const [rideConfirmModal, setRideConfirmModal] = useState(false);
  const[pessengerPending,setPessengerPending]=useState(false)
  const [rideRequestedModal, setRideRequestedModal] = useState(false);
  const[chatModalVisible,setChatModalVisible]=useState(false);
  const[endRideModal,setEndRideModal] = useState(false)
  const[confirmEndRideModal,setConfirmEndModal] = useState(false)
  const[readyRideModal,setReadyRideModal] = useState(false)
  const[newRequestModal,setNewRequestModal] = useState(false)
  const[checkoutModal,setCheckoutModal] = useState(false)

  interface RouteParams {
    destination: string;
    // Add any other parameters if needed
  }

  type RouteRiderRouteProp = RouteProp<{ RouteRider: RouteParams }, 'RouteRider'>;
  const route = useRoute<RouteRiderRouteProp>();
  const routeRider: string = route.params?.destination
  console.log('route map', routeRider);
  const [pessengerRouteModal, setPessengerRouteModal] = useState(true);
  let locationValue = {
    latitude: null,
    longitude: null,
    name: '',
  };

  console.log('pess = ',pessengerRouteModal)

  let destinationValue = {
    latitude: null,
    longitude: null,
    name: '',
  };

  


 useEffect(() => {
  console.log('effect = ',routeRider)
  setPessengerRouteModal(routeRider === 'pessengerScreen' ? true : false)
  setNoRideView(routeRider === 'pessengerScreen' ? false : true)
  setReadyRideModal(routeRider === 'FeedbackScreen' ? true : false)
  setNewRequestModal(routeRider === 'NewRequestScreen' ? true : false)

 }, [])

  locationValue = useSelector((state: any) => state.location);
  console.log(
    locationValue.latitude,
    locationValue.longitude,
    locationValue.name,
  );

  destinationValue = useSelector((state: any) => state.destinationLocation);
  console.log(
    destinationValue.latitude,
    destinationValue.longitude,
    destinationValue.name,
  );

  const [state, setState] = useState({
    pickupCords: {
      latitude: locationValue.latitude ||0.0,
      longitude: locationValue.longitude ||0.0,
      latitudeDelta: 0.1178,
      longitudeDelta: 0.0556,
    },
    droplocationCords: {
      latitude: destinationValue.latitude ||0.0,
      longitude: destinationValue.longitude ||0.0,
      latitudeDelta: 0.1178,
      longitudeDelta: 0.0556,
    },
    selectedLocation: null, // New state to hold the selected location coordinates
  });

  const mapRef = useRef<any>();
  const key = GOOGLE_MAP_KEY;

  const { pickupCords, droplocationCords, selectedLocation } = state;


  const [formData, setFormData] = useState({
    startingPoint: '',
    destinationPoint: '',
    date: '',
    seats: '',
    note: '',
  });

  const travelDetails = useSelector((state: any) => state.travel.travelDetails);
  console.log('rider screen',travelDetails.seats);
  console.log({travelDetails});

  const toggleMenu = () => {
    setEditRouteMenu(false);
  };

  const handleEditRide = () => {
    // Implement logic for editing an item
    // For example, you can pass the item details to a modal or perform an action.
    console.log('Edit ride');
    setEditRouteMenu(false); // Close the menu after handling the action (edit/remove)
    setEditUserState(true);
  };

  const handleCancelRide = () => {
    console.log('Cancel ride button pressed');
    setEditRouteMenu(false);
    setEditUserState(false);
    setNoRideView(false);
    setRideRequestedModal(true);
  };

  const handleShareRidePath = () => {
    // Implement logic for removing an item
    // For example, you can confirm the deletion or directly remove the item.
    console.log('share ride path');
    setEditRouteMenu(false); // Close the menu after handling the action (edit/remove)
    setEditUserState(false);
    setNoRideView(false);
    setRideConfirmModal(true);
  };

  const handleUserState = () => {
    console.log('user state');
    setShowConfirmModal(true);
  };



  const handleNoRide = () => {
    console.log('user state');
    navigation.replace('TabNavigator');
  };

  return (
    <View style={{flex: 1, backgroundColor: Colors.WHITE_COLOR}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: responsiveHeight(2),
          marginStart: responsiveWidth(4),
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={Images.BACK_ICON}
            style={{
              width: responsiveWidth(3.5),
              height: responsiveHeight(3.5),
            }}
          />
        </TouchableOpacity>

        <Text
          style={{
            flex: 1,
            textAlign: 'center',
            fontWeight: '500',
            fontSize: responsiveFontSize(2.5),
            color: Colors.BLACK_COLOR,
          }}>
            {routeRider == 'pessengerScreen' ? 'Pessenger Route' :'Rider Route'}
          
        </Text>

        <View
          style={{
            flexDirection: 'row',
            marginLeft: 'auto',
            marginEnd: responsiveWidth(3),
          }}>
          <TouchableOpacity
            onPress={() => setChatModalVisible(true)}
            style={{marginEnd: responsiveWidth(3)}}>
            <Image
              source={Images.RIDE_CHAT_ICON}
              style={{height: responsiveHeight(12), width: responsiveWidth(11)}}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setEditRouteMenu(true)}>
            <Image
              source={Images.EDIT_RIDE_ICON}
              style={{height: responsiveHeight(12), width: responsiveWidth(11)}}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          height: responsiveHeight(15),
          width: responsiveWidth(100),
          backgroundColor: Colors.PRIMARY_COLOR,
        }}>
        <View
          style={{flexDirection: 'row', marginHorizontal: responsiveWidth(5)}}>
          <Image
            source={Images.STARTNG_POINT_ICON}
            style={{height: responsiveHeight(5), width: responsiveWidth(5)}}
            resizeMode="contain"
          />
          <Text
            style={{
              width: responsiveWidth(80),
              marginTop: responsiveHeight(1),
              marginStart: responsiveWidth(0.5),
              color: Colors.WHITE_COLOR,
              overflow: 'hidden',
            }}
            numberOfLines={1}
            ellipsizeMode="tail">
            Patreeka Wintersia Sector 77, Noida Uttar Pardesh
          </Text>
        </View>

        <View
          style={{flexDirection: 'row', marginHorizontal: responsiveWidth(5)}}>
          <Image
            source={Images.PIN_ICON}
            style={{
              height: responsiveHeight(5),
              width: responsiveWidth(5),
              marginTop: responsiveHeight(-1.2),
            }}
            resizeMode="contain"
          />
          <Text
            style={{
              width: responsiveWidth(80),

              marginStart: responsiveWidth(0.5),
              color: Colors.WHITE_COLOR,
              overflow: 'hidden',
            }}
            numberOfLines={1}
            ellipsizeMode="tail">
            Patreeka Wintersia Sector 77, Noida Uttar Pardesh
          </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View
            style={{
              flexDirection: 'row',
              borderColor: Colors.WHITE_COLOR,
              height: responsiveHeight(4.2),
              width: responsiveWidth(26),
              borderRadius: responsiveWidth(5),
              borderWidth: 1,
              marginStart: responsiveWidth(4),
            }}>
            <Image
              source={Images.MONEY_WHITE_ICON}
              style={{
                height: responsiveHeight(4.5),
                width: responsiveWidth(4.5),
                marginStart: responsiveWidth(3),
                marginTop: responsiveHeight(-0.3),
              }}
              resizeMode="contain"
            />
            <Text
              style={{
                color: Colors.WHITE_COLOR,
                fontSize: responsiveFontSize(1.5),
                marginTop: responsiveHeight(0.8),
                marginStart: responsiveWidth(1),
              }}>
              56 points
            </Text>
          </View>

          <View style={{flexDirection: 'row', marginEnd: responsiveWidth(4)}}>
            <Image
              source={Images.TRAVEL_ICON}
              style={{
                height: responsiveHeight(3.6),
                width: responsiveWidth(3.6),
                resizeMode: 'contain',
                marginTop: responsiveHeight(0.5),
              }}
            />
            <Text
              style={{
                marginTop: responsiveHeight(1.3),
                color: Colors.WHITE_COLOR,
                marginStart: responsiveWidth(2),
              }}>
              10MTs
            </Text>
            <Image
              source={Images.PATH_ICON}
              style={{
                height: responsiveHeight(1.5),
                width: responsiveWidth(1.5),
                resizeMode: 'contain',
                marginStart: responsiveWidth(3),
                marginTop: responsiveHeight(2),
              }}
            />

            <Image
              source={Images.CAR_RIDE}
              style={{
                height: responsiveHeight(5),
                tintColor: Colors.WHITE_COLOR,
                width: responsiveWidth(5),
                marginStart: responsiveWidth(2),
              }}
              resizeMode="contain"
            />
            <Text
              style={{
                marginTop: responsiveHeight(1.3),
                color: Colors.WHITE_COLOR,
                marginStart: responsiveWidth(1),
              }}>
              8MTs
            </Text>
          </View>
        </View>
      </View>


      <View style={{width:responsiveWidth(90),height:responsiveHeight(200)}}>

      <MapView
        ref={mapRef}
        initialRegion={pickupCords}
        style={{width:responsiveWidth(90),height:responsiveHeight(70),
          marginHorizontal:responsiveWidth(5),
          marginVertical:responsiveHeight(1)}}
       >
        <Marker 
        coordinate={
          pickupCords
        }
        />
        <Marker
         coordinate={droplocationCords}
        />


        <MapViewDirections
          origin={pickupCords}
          destination={droplocationCords}
          apikey={GOOGLE_MAP_KEY}
          strokeWidth={3}
          strokeColor="red"
          optimizeWaypoints={true}
          onReady={result=>{
            mapRef.current.fitToCoordinates(result.coordinates, {
              edgePadding: {
                top: 30,
                right: 300,
                bottom: 30,
                left: 100
              }
            })
          }}
        />
        
      </MapView>
      </View>

      {NoRideView && (
        <View
          style={{
            flexDirection: 'row',
            bottom: responsiveHeight(2),
            height: responsiveHeight(10),
            width: responsiveWidth(90),
            backgroundColor: Colors.WHITE_COLOR,
            elevation: 5,
            alignSelf: 'center',
            position: 'absolute',
            borderRadius: responsiveHeight(2.3),
          }}>
          <Image
            resizeMode="contain"
            source={Images.CAR_RIDE}
            style={{
              height: responsiveHeight(6),
              width: responsiveWidth(6),
              justifyContent: 'center',
              alignSelf: 'center',
              marginStart: responsiveWidth(4),
            }}
          />

          <View
            style={{flexDirection: 'column', marginStart: responsiveWidth(5)}}>
           
           
            <Text
              style={{
                marginTop: responsiveHeight(1.5),
              }}>
              No redars available at the moment.
            </Text>

            

            <TouchableOpacity
            onPress={handleNoRide}
            >
            <Text
              style={{
                marginTop: responsiveHeight(0.8),
                color: Colors.PRIMARY_COLOR,
                fontSize: responsiveFontSize(2.1),
              }}>
              Request by contact
            </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}


      

      {editRouteMenu && (
        <View
          style={{
            position: 'absolute',
            right: 13,
            top: responsiveHeight(4),
            height: responsiveHeight(12),
            width: responsiveWidth(35),
            backgroundColor: Colors.WHITE_COLOR,
            elevation: 5,
            justifyContent: 'center',
            borderRadius: responsiveHeight(1),
          }}>
          <TouchableOpacity onPress={handleEditRide}>
            <Text
              style={{
                marginStart: responsiveWidth(3),
                color: Colors.BLACK_COLOR,
              }}>
              Edit Ride
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{marginTop: responsiveHeight(1)}}
            onPress={handleShareRidePath}>
            <Text
              style={{
                marginStart: responsiveWidth(3),
                color: Colors.BLACK_COLOR,
              }}>
              Share ride path
            </Text>
          </TouchableOpacity>
          <Pressable
            style={{marginTop: responsiveHeight(1)}}
            onPress={handleCancelRide}>
            <Text
              style={{
                marginStart: responsiveWidth(3),
                color: Colors.ACCENT_COLOR,
              }}>
              Cancel Ride
            </Text>
          </Pressable>
        </View>
      )}

      {showConirmModal && (
        <UserStateConfirmationModal
          visibleModal={showConirmModal}
          setVisibleModal={setShowConfirmModal}
        />
      )}
      {rideConfirmModal && (
        <RideConfirmModal
          onMyClick={()=>{console.log('without pessenger...')}}
          showVisible={rideConfirmModal}
          setShowVisible={setRideConfirmModal}
        />
      )}

       {pessengerRouteModal && (
        <RideConfirmModal
          onMyClick={()=>{setRideRequestedModal(true)}}
          showVisible={pessengerRouteModal}
          setShowVisible={setPessengerRouteModal}
        />
      )}

        {newRequestModal && (
        <RideConfirmModal
          onMyClick={()=>{setCheckoutModal(true)}}
          showVisible={newRequestModal}
          setShowVisible={setNewRequestModal}
          isHighlight={true}
          highlightButtonText={'Decline'}
        />
      )}

      {rideRequestedModal && (
        <RideRequestedModal
          onClick={()=>{setPessengerPending(true)}}
          title={'Accected'}
          buttonText={'Start'}
          time={'Starts in 10 minutes'}
          showVisible={rideRequestedModal}
          setShowVisible={setRideRequestedModal}
        />
      )}


      {endRideModal && (
        <RideRequestedModal
          onClick={()=>{setConfirmEndModal(true)}}
          title={'Accected'}
          buttonText={'End'}
          time={'Starts in 10 minutes'}
          showVisible={endRideModal}
          setShowVisible={setEndRideModal}
          isEndRide={true}
        />
      )}


{checkoutModal && (
        <RideRequestedModal
          onClick={()=>{navigation.navigate('Checkout')}}
          title={'Ride in Progress'}
          buttonText={'Checkout'}
          time={' 10 minutes'}
          showVisible={checkoutModal}
          setShowVisible={setCheckoutModal}
          isEndRide={true}
        />
      )}

       {readyRideModal && (
        <RideRequestedModal
          onClick={()=>{navigation.navigate('TabNavigator')}}
          title={'Ready'}
          buttonText={'Start Ride'}
          time={'Today 16:28 PM'}
          showVisible={readyRideModal}
          setShowVisible={setReadyRideModal}
          isEndRide={false}
         
        />
      )}



      {pessengerPending && (
        <PessengerPendingModal
         title={'Pessenger Pending'}
         message={'The pessenger are considering you invitation. If you start the ride right now. Your invitation will be canceled automatically.'}
        showVisible={pessengerPending}
        setShowVisible={setPessengerPending}
        positiveBtn={'Start Anyway'}
        negativeBtn={'Keep waiting'}
        isPending={true}
        onClick = {() => {
          setEndRideModal(true)
        }}
        />
      )}

      {confirmEndRideModal && (
        <PessengerPendingModal
        title={'End Confirmation'}
        message={'GPS showing you have not arrived your drop point yet. Are you sure you want to end the ride right now?'}
       showVisible={confirmEndRideModal}
       setShowVisible={setConfirmEndModal}
       positiveBtn={'Yes'}
       negativeBtn={'No'}
       isPending={false}
       onClick = {() => {
        console.log('End now call...')
        navigation.navigate('TripDetail')
       }}
       />
      )}

      {chatModalVisible && (
        <ChatModal
          showVisible={chatModalVisible}
          setShowVisible={setChatModalVisible}
        />
      )}

      {editUserState && (
         <View style={{position:'absolute',bottom:12}}>
          <HomeAnimatableCard saveData={travelDetails} isUpdateState={true} />
         </View>
        
      )}
    </View>
  );
}
