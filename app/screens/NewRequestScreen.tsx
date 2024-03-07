import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Images from '../constant/Images';
import { useNavigation } from '@react-navigation/native';
import MatchingPessengerListItem from '../components/AllListItem/MatchingPessengerListItem';
import NewRequestListItem from '../components/AllListItem/NewRequestListItem';

export default function NewRequestScreen() {

  
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

    const renderItem = ({item, index}: any) => (
      <View style={{margin: 10}}>
        <NewRequestListItem  onClick={() => {
           const destination = 'NewRequestScreen';
          navigation.replace('RouteRider',{destination})}}
           buttonText={'Accept'} highlightButtonText={'Route'} isHighlight={true}/>
      </View>
    );
  
    const navigation: any = useNavigation();
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