import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';
import Images from '../constant/Images';
import Colors from '../constant/Colors';

export default function MyRideScreen() {
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
        height: responsiveHeight(30),
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 15,
        marginVertical: responsiveHeight(1.5),
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        elevation: 5,
      }}>
      <View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <Text
              style={{
                color: Colors.BLACK_COLOR,
                marginStart: responsiveWidth(2),
              }}>
              Today, 16:39 . Ready
            </Text>
          </View>

          <View>
            <Text
              style={{
                color: Colors.PRIMARY_COLOR,
                marginTop: responsiveHeight(-2),
                fontWeight: '500',
                fontSize: responsiveFontSize(3),
              }}>
              ...
            </Text>
          </View>
        </View>

        <View style={{marginTop: responsiveHeight(2), flexDirection: 'row'}}>
          <Text
            style={{
              marginStart: responsiveWidth(2.5),
              fontSize: responsiveFontSize(2),
            }}>
            {' '}
            8.7
          </Text>

          <Image
            source={Images.STARTNG_POINT_ICON}
            style={{
              height: responsiveHeight(3),
              width: responsiveWidth(3),
              marginStart: responsiveWidth(9),
              marginTop: responsiveHeight(-1),
            }}
            resizeMode="contain"
          />

          <Text
            style={{
              marginTop: responsiveHeight(-1),
              marginStart: responsiveHeight(1),
              width: responsiveWidth(52),
              overflow: 'hidden',
            }}
            numberOfLines={1}
            ellipsizeMode="tail">
            Bukhari Apartments block b Khyaban sector 2
          </Text>
        </View>

        <Image
          source={Images.three_dots_icon}
          style={{
            height: responsiveHeight(1.2),
            width: responsiveWidth(1.2),
            marginStart: responsiveWidth(19.5),
          }}
          resizeMode="contain"
        />

        <View style={{marginTop: responsiveHeight(1), flexDirection: 'row'}}>
          <Text
            style={{
              marginStart: responsiveWidth(2.5),
              fontSize: responsiveFontSize(2),
              marginTop: responsiveHeight(-1.5),
            }}>
            {' '}
            Km
          </Text>

          <Image
            source={Images.PIN_ICON}
            style={{
              height: responsiveHeight(3.4),
              width: responsiveWidth(3.4),
              marginStart: responsiveWidth(9),
              marginTop: responsiveHeight(-1),
            }}
            resizeMode="contain"
          />

          <Text
            style={{
              marginTop: responsiveHeight(-0.7),
              marginStart: responsiveHeight(1),
              width: responsiveWidth(52),
              overflow: 'hidden',
            }}
            numberOfLines={1}
            ellipsizeMode="tail">
            Pasposh nagar American quater federal b area sector 8
          </Text>
        </View>
      </View>

      <View style={{flexDirection: 'row', marginTop: responsiveHeight(1)}}>
        <Image
          style={styles.profileImage}
          source={Images.AVTAR_IMAGE}
          resizeMode="contain"
        />

        <Image
          style={styles.profileImage}
          source={Images.AVTAR_IMAGE}
          resizeMode="contain"
        />
      </View>


      <View style={{flexDirection: 'row',}}>
        <Text style={{marginStart: responsiveWidth(4)}}>Ken</Text>

        <Text style={{marginStart: responsiveWidth(11)}}>Abert</Text>
      </View>

      
    </View>
  );

  return (
    <View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'row', marginTop: responsiveHeight(2)}}>
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

          <Text
            style={{
              marginTop: responsiveHeight(1),
              color: Colors.BLACK_COLOR,
              fontSize: responsiveFontSize(2.2),
              fontWeight: 'bold',
              justifyContent: 'center',
              alignItems: 'center',
              marginStart: responsiveWidth(5),
            }}>
            My Ride
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginEnd: responsiveWidth(5),
            marginTop: responsiveHeight(-1),
          }}>
          <TouchableOpacity
            onPress={() => console.log('ff')}
            style={{marginEnd: responsiveWidth(3)}}>
            <Image
              source={Images.NOTIFICATION_HOME}
              style={{height: responsiveHeight(12), width: responsiveWidth(11)}}
              resizeMode="contain"
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => console.log('ff')}
            style={{marginEnd: responsiveWidth(3)}}>
            <Image
              source={Images.RIDE_CHAT_ICON}
              style={{height: responsiveHeight(12), width: responsiveWidth(11)}}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('ffdff')}>
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
          borderBottomWidth: 1,
          borderColor: Colors.SEARCH_BEHIND,
          marginVertical: responsiveHeight(0),
          marginStart: responsiveWidth(-4),
          marginEnd: responsiveWidth(-4),
          elevation: 7,
        }}
      />

      <View style={{alignItems: 'center'}}>
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
  );
}

const styles = StyleSheet.create({
  profileImage: {
    width: 60,
    height: 60,

    borderRadius: 75,
    borderColor: Colors.WHITE_COLOR,
    borderWidth: 8,
    alignSelf: 'center',
    marginStart: responsiveWidth(1),
  },

  highlighTrue: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: responsiveHeight(3),
    width: responsiveWidth(80),
  },
  highlighFalse: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    marginTop: responsiveHeight(3),
    width: responsiveWidth(80),
  },
});
