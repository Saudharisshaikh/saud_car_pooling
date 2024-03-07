import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { useNavigation } from '@react-navigation/native';
import Images from '../constant/Images';
import Colors from '../constant/Colors';

export default function MyVehiclesScreen() {
  const navigation: any = useNavigation();
  
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
  
    const renderItem = ({item}: any) => (
      <View
      style={{
        width: responsiveWidth(90),
        height: responsiveHeight(15),
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 15,
      
        marginVertical:responsiveHeight(1.5),
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        elevation: 5,
       
        flexDirection: 'row',
      }}>

      <View style={{ flexDirection: 'row',alignItems:'center',justifyContent:'center',width:responsiveWidth(20)}}>

      <Image
        source={Images.CAROLLA_ICON}
        style={{
          width: responsiveWidth(25),
          height: responsiveHeight(25),
          marginTop: responsiveHeight(0),
          
        }}
        resizeMode="contain"
      />
        </View>  
     
       <View style={{flexDirection:'column',marginStart:responsiveWidth(10),}}>
       <Text style={{marginTop: responsiveHeight(-1),color:Colors.BLACK_COLOR,fontSize:responsiveFontSize(2.2),fontWeight:'bold',}}
        numberOfLines={1}
      ellipsizeMode="tail">
          Sedan Loyata i123453
      </Text>
      <Text style={{marginTop: responsiveHeight(1),}}>
       MD253536
      </Text>

      <View style={{flexDirection:'row',justifyContent:'space-between',}}>
      <Text style={{marginTop: responsiveHeight(1),}}>
       Fuel/0.4 km
      </Text>
      <Text style={{marginTop: responsiveHeight(1),}}>
       4 seats
      </Text>
      </View>
       </View>
      
    </View>
    );
  
  

 

  return (
    <View  style={{ flex: 1, backgroundColor: Colors.WHITE_COLOR }}>
    
    <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: responsiveHeight(2),
          shadowColor: '#000',
          elevation: 10,
        }}>
        <TouchableOpacity
          style={{marginLeft: responsiveWidth(5)}}
          onPress={() => navigation.goBack()}>
          <Image
            resizeMode="contain"
            source={Images.BACK_ICON}
            style={{
              width: responsiveWidth(5),
              height: responsiveHeight(5),
            }}
          />
        </TouchableOpacity>
        <View
          style={{
            alignSelf: 'center',
            alignContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Text
            style={{
              marginTop: responsiveHeight(-1),
              color: Colors.BLACK_COLOR,
              fontSize: responsiveFontSize(2.2),
              fontWeight: 'bold',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            My Vehicles
          </Text>
        </View>

        <View></View>
      </View>

      <View style={{borderBottomWidth:1,borderColor:Colors.SEARCH_BEHIND,
         marginVertical:responsiveHeight(3),marginStart:responsiveWidth(-4),
          marginEnd:responsiveWidth(-4),elevation:7}}/>


         

          <View style={{alignItems: 'center',}}>
          <FlatList
          data={cardArray}
          renderItem={renderItem}
          keyExtractor={(item, index) => item.id}
        />
        </View>

        <View style={{
        width: responsiveWidth(90),
        height: responsiveHeight(15),
        marginHorizontal:responsiveWidth(5),
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical:responsiveHeight(1.5),
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        elevation: 5,
       
        flexDirection: 'row',
      }}>
        <Image source={Images.ADD_BUTTON_ICON} resizeMode='contain' style={{width:responsiveWidth(12),height:responsiveHeight(12)}}/>

        </View>

    </View>
  )
}