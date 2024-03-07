import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Images from '../constant/Images';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import TripDetailListItem from '../components/AllListItem/TripDetailListItem';
import { useNavigation } from '@react-navigation/native';
import FeedbackListItem from '../components/AllListItem/FeedbackListItem';

export default function FeedbackScreen() {
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
          <FeedbackListItem 
           onClick={() => {
            const destination = 'FeedbackScreen';
            navigation.replace('RouteRider',{destination})
           }}
          />
        </View>
      );
    

  return (
    <View>
      
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


