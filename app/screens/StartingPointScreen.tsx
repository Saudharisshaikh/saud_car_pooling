import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';

import Images from '../constant/Images';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Colors from '../constant/Colors';
import SearchListItem from '../components/AllListItem/SearchListItem';
import TodaySearchListItem from '../components/AllListItem/TodaySearchListItem';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useRoute,RouteProp } from '@react-navigation/native';

const StartingPointScreen = () => {
  const navigation: any = useNavigation();
  const [searchText, setSearchText] = useState('');
  

  interface RouteParams {
    destination: string;
    // Add any other parameters if needed
  }
  
  type StartingPointScreenRouteProp = RouteProp<{ StartingPoint: RouteParams }, 'StartingPoint'>;
  const route = useRoute<StartingPointScreenRouteProp>();
  const startingPointRoute: string = route.params?.destination
  console.log('route map', startingPointRoute);
  const cardArray = [
    {
      id: '1',
      location: 'Home',
      locationAddress: 'Bukhari Apartments block b Khyaban.',
      searchIcon: Images.LOCATION_SEARCH_ICON,
    },
    {
      id: '2',
      location: 'Office',
      locationAddress: 'Latifabad no 7 David Bekham Lane Hyderabad.',
      searchIcon: Images.LOCATION_SEARCH_ICON,
    },
  ];

  const cardArray2 = [
    {
      id: '1',
      location: 'Home',
      locationAddress: 'Bukhari Apartments block b Khyaban.',
      searchIcon: Images.TODAY_SEARCH_ICON,
    },
    {
      id: '2',
      location: 'Office',
      locationAddress: 'Latifabad no 7 David Bekham Lane Hyderabad.',
      searchIcon: Images.TODAY_SEARCH_ICON,
    },
  ];

  const cardArray3 = [
    {
      id: '1',
      location: 'Home',
      locationAddress: 'Bukhari Apartments block b Khyaban.',
      searchIcon: Images.TODAY_SEARCH_ICON,
    },
  ];

  const handleMapSelection = () => {
    navigation.navigate('MapSelection',{startingPointRoute})
  }

  const renderItem = ({item, index}: any) => (
    <View style={{margin: 10}}>
      <SearchListItem item={item} />
    </View>
  );

  const renderTodayItem = ({item, index}: any) => (
    <View style={{margin: 10}}>
      <TodaySearchListItem item={item} />
    </View>
  );

  const handleNavigation = () => {
    const destination = 'startingScreen';
    navigation.navigate('RouteRider', {destination: destination});
  }

  return (
    <View style={{flex: 1}}>
      <ScrollView style={{flex: 1, backgroundColor: Colors.WHITE_COLOR}}>
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
            Start Point
          </Text>

          <TouchableOpacity
           onPress={handleMapSelection}
            style={{marginLeft: 'auto', marginEnd: responsiveWidth(3)}}>
            <Image
              source={Images.START_POINT}
              style={{height: responsiveHeight(10), width: responsiveWidth(10)}}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            alignSelf: 'center',

            flexDirection: 'row',
            borderColor: Colors.SEARCHBAR_COLOR,
            height: responsiveHeight(7),
            width: responsiveWidth(90),
            borderRadius: 10,
            borderWidth: 1,
            marginTop: responsiveHeight(2),
          }}>
          <Image
            source={Images.SEARCH_RIDE}
            style={{
              height: responsiveHeight(6),
              width: responsiveWidth(6),
              resizeMode: 'contain',
              justifyContent: 'center',
              marginStart: responsiveWidth(3),
            }}
          />

          <TextInput
            value={searchText}
            onChangeText={text => {
              setSearchText(text);
            }}
            placeholder={'Enter your start point.'}
            style={{justifyContent: 'center', width: responsiveWidth(75)}}
          />
        </View>

        {/* <View>
        <GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: 'AIzaSyBPxLIgyWnb3b-9WpcdFs0rxH_fQGbXlsM',
        language: 'en',
      }}
    />
        </View> */}

        <FlatList
          data={cardArray}
          renderItem={renderItem}
          keyExtractor={(item, index) => item.id}
        />
        
        <Text
          style={{
            marginStart: responsiveWidth(4),
            fontWeight: '500',
            fontSize: responsiveFontSize(2),
            color: Colors.BLACK_COLOR,
          }}>
          Today
        </Text>
        
        <FlatList
          data={cardArray2}
          renderItem={renderTodayItem}
          keyExtractor={(item, index) => item.id}
        />

        <Text
          style={{
            marginStart: responsiveWidth(4),
            fontWeight: '500',
            fontSize: responsiveFontSize(2),
            color: Colors.BLACK_COLOR,
          }}>
          Lastweek
        </Text>

        <FlatList
          data={cardArray3}
          renderItem={renderTodayItem}
          keyExtractor={(item, index) => item.id}
        />
      </ScrollView>
      <View
        style={{
          flexDirection: 'row',
          bottom: responsiveHeight(2),
          height: responsiveHeight(7),
          width: responsiveWidth(90),
          backgroundColor: Colors.WHITE_COLOR,
          elevation: 5,
          alignSelf: 'center',
          borderRadius: responsiveHeight(2),
        }}>
        <Image
          resizeMode="contain"
          source={Images.PINSKY_ICON}
          style={{
            height: responsiveHeight(6),
            width: responsiveWidth(6),
            justifyContent: 'center',
            marginStart: responsiveWidth(2),
          }}
        />
        <Text
          style={{
            justifyContent: 'center',
            alignSelf: 'center',
            marginStart: responsiveWidth(2),
          }}>
          Rajpur khader remove
        </Text>
        <TouchableOpacity
           onPress={handleNavigation}         
          style={{
            position: 'absolute',
            right: responsiveWidth(3),
            alignSelf: 'center',
          }}>
          <Text style={{color: Colors.PRIMARY_COLOR}}>Undo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default StartingPointScreen;
