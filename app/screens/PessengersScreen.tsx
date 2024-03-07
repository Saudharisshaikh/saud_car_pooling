import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Images from '../constant/Images';
import MatchingPessengerListItem from '../components/AllListItem/MatchingPessengerListItem';
import { useNavigation } from '@react-navigation/core';

export default function PessengersScreen() {
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
    {
      id: '3',
      location: 'Home',
      locationAddress: 'Bukhari Apartments block b Khyaban.',
      searchIcon: Images.LOCATION_SEARCH_ICON,
    },
    {
      id: '4',
      location: 'Office',
      locationAddress: 'Latifabad no 7 David Bekham Lane Hyderabad.',
      searchIcon: Images.LOCATION_SEARCH_ICON,
    },
    
  ];

  const navigation: any = useNavigation();

  const renderItem = ({item, index}: any) => (
    <View style={{margin: 10}}>
      <MatchingPessengerListItem  onClick={() => {
         const destination = 'pessengerScreen';
        navigation.replace('RouteRider',{destination})}}
         buttonText={'Invite'} highlightButtonText={'Route'} isHighlight={true}/>
    </View>
  );

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
     
      <View style={{alignItems: 'center'}}>
     <FlatList
          
          data={cardArray}
          renderItem={renderItem}
          keyExtractor={(item, index) => item.id}
        />
        </View>
    </View>
  )
}