import {View, Text, TouchableOpacity, Image, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';
import Images from '../constant/Images';
import Colors from '../constant/Colors';
import SearchListItem from '../components/AllListItem/SearchListItem';
import TodaySearchListItem from '../components/AllListItem/TodaySearchListItem';

export default function ProfileScreen() {
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
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: responsiveHeight(2),
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
            Profile
          </Text>
        </View>
        <View></View>
      </View>

      <View
        style={{
          width: responsiveWidth(100),
          height: responsiveHeight(100),
          backgroundColor: 'white',
          borderRadius: 30,

          padding: 15,
          marginBottom: responsiveHeight(7),
          marginTop: responsiveHeight(6),
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          elevation: 5,
        }}>
        <View style={{elevation: 15, shadowColor: Colors.PRIMARY_COLOR}}>
          <View style={{}}>
            <Image
              style={styles.profileImage}
              source={Images.AVTAR_IMAGE}
              resizeMode="contain"
            />
            <TouchableOpacity
              style={{
                justifyContent: 'flex-end',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Image
                source={Images.EDIT_PROFILE_ICON}
                style={{
                  width: responsiveWidth(8),
                  marginEnd: responsiveWidth(2),
                  marginTop: responsiveHeight(-7),
                  height: responsiveHeight(8),
                  marginStart: responsiveWidth(1),
                }}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: responsiveFontSize(2.4),
                color: Colors.BLACK_COLOR,
                alignSelf: 'center',
                fontWeight: 'bold',
                marginTop: responsiveHeight(2),
              }}>
              Kimmy Natasa
            </Text>

            <Text
              style={{
                alignSelf: 'center',
                marginTop: responsiveHeight(0.5),
                color: Colors.PRIMARY_COLOR,
              }}>
              Verified Profile
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: responsiveHeight(3),
            }}>
            <Text
              style={{
                color: Colors.BLACK_COLOR,
                fontWeight: 'bold',
                fontSize: responsiveFontSize(2.3),
              }}>
              1,260
            </Text>
            <Text
              style={{
                color: Colors.BLACK_COLOR,
                fontWeight: 'bold',
                fontSize: responsiveFontSize(2.3),
              }}>
              404
            </Text>
            <Text
              style={{
                color: Colors.BLACK_COLOR,
                fontWeight: 'bold',
                fontSize: responsiveFontSize(2.3),
              }}>
              846
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: responsiveHeight(0.6),
            }}>
            <Text style={{marginStart: responsiveWidth(3)}}>total ride</Text>
            <Text style={{marginStart: responsiveWidth(10)}}>as rider</Text>
            <Text style={{marginStart: responsiveWidth(3)}}>as pessenger</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginTop: responsiveHeight(2),
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={Images.STAR_ICON}
                style={{
                  width: responsiveWidth(6.5),
                  height: responsiveHeight(6.5),
                }}
                resizeMode="contain"
              />
              <Text
                style={{
                  color: Colors.BLACK_COLOR,
                  fontWeight: 'bold',
                  fontSize: responsiveFontSize(2.6),
                  marginTop: responsiveHeight(1.2),
                  marginStart: responsiveWidth(1),
                }}>
                4.8
              </Text>
            </View>

            <View style={{flexDirection: 'row'}}>
              <Image
                source={Images.ON_TIME_ICON}
                style={{
                  width: responsiveWidth(5),
                  height: responsiveHeight(5),
                  marginTop: responsiveHeight(0.7),
                }}
                resizeMode="contain"
              />
              <Text
                style={{
                  color: Colors.BLACK_COLOR,
                  fontWeight: 'bold',
                  marginStart: responsiveWidth(2.3),
                  fontSize: responsiveFontSize(2.6),
                  marginTop: responsiveHeight(1),
                }}>
                95%
              </Text>
            </View>
          </View>

          <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
            <Text style={{marginStart:responsiveWidth(5),marginTop:responsiveHeight(-1.5)}}>(296)</Text> 
            <Text style={{marginStart:responsiveWidth(5),marginTop:responsiveHeight(-1.5)}}>OnTime</Text> 

          </View>
          
 
         <View style={{flexDirection:'row',justifyContent:'space-between'}}> 
          <View
            style={{
              width: responsiveWidth(29),
              height: responsiveHeight(15),
              backgroundColor: 'white',
              borderRadius: 15,
              padding: 15,
              marginStart: responsiveWidth(-1),
              marginBottom: responsiveHeight(7),
              marginTop: responsiveHeight(6),
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              elevation: 5,
              alignItems: 'center',
              flexDirection: 'column',
            }}>
            <Image
              source={Images.CAROLLA_ICON}
              style={{
                width: responsiveWidth(15),
                height: responsiveHeight(15),
                marginTop: responsiveHeight(-5),
              }}
              resizeMode="contain"
            />
            <Text style={{marginTop: responsiveHeight(-5),color:Colors.BLACK_COLOR}}>
                Loyoata i12
            </Text>
            <Text style={{marginTop: responsiveHeight(1),}}>
             MD253536
            </Text>
          </View>
          <View
            style={{
              width: responsiveWidth(29),
              height: responsiveHeight(15),
              backgroundColor: 'white',
              borderRadius: 15,
              padding: 15,
              marginStart: responsiveWidth(3),
             
              marginBottom: responsiveHeight(7),
              marginTop: responsiveHeight(6),
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              elevation: 5,
              alignItems: 'center',
              flexDirection: 'column',
            }}>
            <Image
              source={Images.SWIFT_ICON}
              style={{
                width: responsiveWidth(15),
                height: responsiveHeight(15),
                marginTop: responsiveHeight(-5),
              }}
              resizeMode="contain"
            />
            <Text style={{marginTop: responsiveHeight(-5),color:Colors.BLACK_COLOR}}>
                Blue Swift
            </Text>
            <Text style={{marginTop: responsiveHeight(1),}}>
             045775735
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('EditProfile')}
            style={{
              width: responsiveWidth(29),
              height: responsiveHeight(15),
              backgroundColor: 'white',
              borderRadius: 15,
              padding: 15,
              marginStart: responsiveWidth(3),
              marginBottom: responsiveHeight(7),
              marginTop: responsiveHeight(6),
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              elevation: 5,
              alignItems: 'center',
              flexDirection: 'column',
            }}>
            <Image
              source={Images.ADD_BUTTON_ICON}
              style={{
                width: responsiveWidth(15),
                height: responsiveHeight(15),
                marginTop: responsiveHeight(-2),
              }}
              resizeMode="contain"
            />
            
          </TouchableOpacity>

          
          </View>

          <View style={{marginStart:responsiveWidth(-5)}}>

         
          <FlatList
          data={cardArray}
          renderItem={renderItem}
          keyExtractor={(item, index) => item.id}
        />
         </View>


        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  profileImage: {
    width: 90,
    height: 90,
    marginTop: responsiveHeight(-7),
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
