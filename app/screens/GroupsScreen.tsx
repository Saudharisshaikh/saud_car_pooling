import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import Images from '../constant/Images';
import GroupListItem from '../components/AllListItem/GroupListItem';

export default function GroupsScreen() {
 
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
      <GroupListItem 
      
      />
    </View>
  );

  return (
    <View style={{flex: 1}}>
       <View style={{alignItems: 'center',}}>
     <FlatList
           data={cardArray}
          renderItem={renderItem}
          keyExtractor={(item, index) => item.id}
        />
        </View>
    </View>
  )
}