import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {GOOGLE_MAP_KEY} from '../utils/MapKey';
import Geocoder from 'react-native-geocoding';
import {useSelector, useDispatch} from 'react-redux';
import CustomButton from '../components/Buttons/CommonButton';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';
import {useRoute, RouteProp} from '@react-navigation/native';
import {setLocation} from '../redux/reducers/LocationReducer';
import {setDestinationLocation} from '../redux/reducers/DestinationLocationSlicer';


Geocoder.init(GOOGLE_MAP_KEY);
export default function MapSelectionScreen() {
  let locationValue = {
    latitude: null,
    longitude: null,
    name: '',
  };

  let destinationValue = {
    latitude: null,
    longitude: null,
    name: '',
  };

  const navigation: any = useNavigation();
  const dispatch = useDispatch();
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


  interface RouteParams {
    startingPointRoute: string;
    // Add any other parameters if needed
  }

  type MapSelectionScreenRouteProp = RouteProp<
    {MapSelection: RouteParams},
    'MapSelection'
  >;
  const route = useRoute<MapSelectionScreenRouteProp>();
  const startingRoute: string = route.params?.startingPointRoute;

  const [state, setState] = useState({
    pickupCords: {
      latitude: 24.7568,
      longitude: 67.0951,
      latitudeDelta: 0.1178,
      longitudeDelta: 0.0556,
    },
    droplocationCords: {
      latitude: 24.8746,
      longitude: 67.0395,
      latitudeDelta: 0.1178,
      longitudeDelta: 0.0556,
    },
    selectedLocation: null, // New state to hold the selected location coordinates
  });

  const mapRef = useRef<any>();
  const key = GOOGLE_MAP_KEY;

  const {pickupCords, droplocationCords, selectedLocation} = state;

  const handleSelectLocation = () => {
    navigation.navigate('HomeDrawer');
  };

  const handleMarkerDrag = async (coordinate: any) => {
    const location = await Geocoder.from(
      coordinate.latitude,
      coordinate.longitude,
    );

    console.log(location.results[0].formatted_address);
    if (startingRoute == 'startingPoint') {
      dispatch(
        setLocation({
          latitude: coordinate.latitude,
          longitude: coordinate.longitude,
          name: location.results[0].formatted_address,
        }),
      );
    } else {
      dispatch(
        setDestinationLocation({
          latitude: coordinate.latitude,
          longitude: coordinate.longitude,
          name: location.results[0].formatted_address,
        }),
      );
    }
    const newSelectedLocation = {
      latitude: coordinate.latitude,
      longitude: coordinate.longitude,
      name: location.results[0].formatted_address,
    };
    setState(
      (prevState: {
        pickupCords: {
          latitude: number;
          longitude: number;
          latitudeDelta: number;
          longitudeDelta: number;
        };
        droplocationCords: {
          latitude: number;
          longitude: number;
          latitudeDelta: number;
          longitudeDelta: number;
        };
        selectedLocation: any; // You can adjust the type of selectedLocation accordingly
      }) =>
        ({
          ...prevState,
          selectedLocation: newSelectedLocation,
        } as {
          pickupCords: {
            latitude: number;
            longitude: number;
            latitudeDelta: number;
            longitudeDelta: number;
          };
          droplocationCords: {
            latitude: number;
            longitude: number;
            latitudeDelta: number;
            longitudeDelta: number;
          };
          selectedLocation: any; // You can adjust the type of selectedLocation accordingly
        }),
    );
  };

  return (
    <View style={{flex: 1}}>
      <MapView
        ref={mapRef}
        initialRegion={pickupCords}
        style={StyleSheet.absoluteFill}>
        <Marker
          draggable
          coordinate={pickupCords}
          onDragEnd={e => handleMarkerDrag(e.nativeEvent.coordinate)} // Handle marker drag to select location
        />
        <Marker
          draggable
          coordinate={droplocationCords}
          onDragEnd={e => handleMarkerDrag(e.nativeEvent.coordinate)} // Handle marker drag to select location
        />
        {selectedLocation && ( // Display marker for selected location if exists
          <Marker coordinate={selectedLocation} pinColor="blue" />
        )}
      </MapView>
      {selectedLocation && ( // Display selected location coordinates in text if exists
        <View style={styles.selectedLocationContainer}>
          <Text style={styles.selectedLocationText}>
            Selected Location: {JSON.stringify(selectedLocation)}
          </Text>

          <CustomButton
            title={'Select'}
            customWidth={responsiveWidth(70)}
            customHeight={responsiveHeight(6.3)}
            onPress={handleSelectLocation}
            margintop={responsiveHeight(3)}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  selectedLocationContainer: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 8,
  },
  selectedLocationText: {
    fontSize: 16,
  },
});
