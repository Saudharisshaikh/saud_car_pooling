import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Images from '../constant/Images';
import MatchingPessengerListItem from '../components/AllListItem/MatchingPessengerListItem';
import { useNavigation } from '@react-navigation/native';
import TripDetailListItem from '../components/AllListItem/TripDetailListItem';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Colors from '../constant/Colors';

export default function TripDetailScreen() {
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
          <TripDetailListItem  onClick={() => {
             const destination = 'pessengerScreen';
            navigation.replace('RouteRider',{destination})}} buttonText={'Invite'} highlightButtonText={'Route'} isHighlight={true}/>
        </View>
      );
    

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
     
     <View style={{ flexDirection: 'row', justifyContent:'space-between',marginTop:responsiveHeight(2), elevation: 10}}>
      <TouchableOpacity 
      style={{marginLeft:responsiveWidth(5)}}
      onPress={() => navigation.goBack()}>
          <Image
            resizeMode='contain'
            source={Images.BACK_ICON}
            style={{
              width: responsiveWidth(5),
              height: responsiveHeight(5),
            }}
          />
        </TouchableOpacity>
        <Text style={{marginTop:responsiveHeight(1),color:Colors.BLACK_COLOR,fontSize:responsiveFontSize(2.2),fontWeight:'bold'}}>Matching Pessenger</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Feedback')}>
          <Image 
          resizeMode='contain'
          source={Images.START_POINT} 
          style={{ width: 40, height: 40,marginRight:responsiveWidth(5)}} />
        </TouchableOpacity>
        </View>


        <View
            style={{
              flexDirection: 'row',
              marginTop: responsiveHeight(10),
              justifyContent: 'space-evenly',
              
            
            }}>
            <View
              style={{flexDirection: 'row',}}>
              <Image
                source={Images.Clock}
                style={{
                  height: responsiveHeight(4.5),
                  width: responsiveWidth(4.5),
                }}
                resizeMode="contain"
              />
              <Text
                style={{
                  marginStart: responsiveWidth(1),
                  color: Colors.BLACK_COLOR,
                  marginTop: responsiveHeight(0.5),
                  fontWeight: 'bold',
                  fontSize: responsiveFontSize(2.3),
                }}>
                16:28
              </Text>
            </View>

            <View style={{flexDirection: 'row'}}>
              <Image
                source={Images.PINK_CLOCK_ICON}
                style={{
                  height: responsiveHeight(5),
                  width: responsiveWidth(5),
                  marginTop:responsiveHeight(-0.5)
                }}
                resizeMode="contain"
              />
              <Text
                style={{
                  marginStart: responsiveWidth(1),
                  color: Colors.BLACK_COLOR,
                  marginTop: responsiveHeight(0.5),
                  fontWeight: 'bold',
                  fontSize: responsiveFontSize(2.3),
                }}>
                05:30
              </Text>
            </View>

            <View style={{flexDirection: 'row', marginEnd: responsiveWidth(2),}}>
              <Image
                source={Images.MONEY}
                style={{
                  height: responsiveHeight(5),
                  width: responsiveWidth(5),
                  marginTop:responsiveHeight(-0.5),
                  marginStart: responsiveWidth(-2),
                }}
                resizeMode="contain"
              />
              <Text
                style={{
                  marginStart: responsiveWidth(1),
                  color: Colors.BLACK_COLOR,
                  marginTop: responsiveHeight(0.5),
                  fontWeight: 'bold',
                  fontSize: responsiveFontSize(2.3),
                }}>
                56
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginTop: responsiveHeight(-0.5),
              justifyContent: 'space-between',
              marginBottom: responsiveHeight(2),
            }}>
            <Text style={{marginStart: responsiveWidth(19)}}>Time</Text>
            <Text style={{marginStart: responsiveWidth(5)}}>Points</Text>
            <Text style={{marginEnd: responsiveWidth(1.8)}}>Fuel Points</Text>
          </View>

      <View style={{alignItems: 'center',marginBottom:responsiveHeight(30)}}>
     <FlatList
          
          data={cardArray}
          renderItem={renderItem}
          keyExtractor={(item, index) => item.id}
        />
        </View>
    </View>
  )
}

