import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Colors from '../../constant/Colors';
import Images from '../../constant/Images';

export default function TripDetailListItem({onClick,buttonText,highlightButtonText,isHighlight}: any) {
  return (
    <View style={{flex:1}}>
         <View
          style={{
            width: responsiveWidth(85),
            height: responsiveHeight(30),
            backgroundColor: 'white',
            borderRadius: 20,
            marginStart: responsiveWidth(2),
            marginEnd: responsiveWidth(2),
            padding: 15,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            elevation: 5,
          }}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={styles.profileImage}
                source={Images.AVTAR_IMAGE}
                resizeMode="contain"
              />
            </View>
            <View style={{flexDirection: 'column'}}>
              <View
                style={{flexDirection: 'row', marginStart: responsiveWidth(3)}}>
                <Text
                  style={{
                    fontSize: responsiveFontSize(2.5),
                    color: Colors.BLACK_COLOR,
                    fontWeight: 'bold',
                  }}>
                  Bernade Alvarado
                </Text>
                <Image
                  source={Images.KING_ICON}
                  style={{
                    height: responsiveHeight(5),
                    width: responsiveWidth(5),
                    marginTop: responsiveHeight(-1),
                    marginStart: responsiveWidth(1),
                  }}
                  resizeMode="contain"
                />
              </View>
              <View
                style={{flexDirection: 'row', marginStart: responsiveWidth(3)}}>
                <Image
                  source={Images.STAR_ICON}
                  resizeMode="contain"
                  style={{
                    height: responsiveHeight(4),
                    width: responsiveWidth(4),
                    marginTop: responsiveHeight(-0.8),
                  }}
                />
                <Text
                  style={{
                    marginStart: responsiveWidth(1),
                    color: Colors.BLACK_COLOR,
                    fontWeight: 'bold',
                  }}>
                  4.8
                </Text>
                <Text style={{marginStart: responsiveWidth(1)}}>(293)</Text>
                <Image
                  source={Images.CAR_RIDE}
                  style={{
                    height: responsiveHeight(4),
                    width: responsiveWidth(4),
                    marginTop: responsiveHeight(-0.5),
                    marginStart: responsiveWidth(2),
                    tintColor: Colors.PRIMARY_COLOR,
                  }}
                  resizeMode="contain"
                />
              </View>
            </View>
          </View>

         <View style={{marginTop:responsiveHeight(2), flexDirection: 'row',}}>
            <Text style={{marginStart: responsiveWidth(2.5),fontSize:responsiveFontSize(2)}}> 8.7</Text>

            <Image
              source={Images.STARTNG_POINT_ICON}
              style={{
                height: responsiveHeight(3),
                width: responsiveWidth(3),
                marginStart: responsiveWidth(9),
                marginTop:responsiveHeight(-1)
              }}
              resizeMode="contain"
            />

            <Text
            style={{
              marginTop: responsiveHeight(-1),
              marginStart:responsiveHeight(1),
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

         <View style={{marginTop:responsiveHeight(1), flexDirection: 'row',}}>
            <Text style={{marginStart: responsiveWidth(2.5),fontSize:responsiveFontSize(2),marginTop:responsiveHeight(-1.5)}}> Km</Text>

            <Image
              source={Images.PIN_ICON}
              style={{
                height: responsiveHeight(3.4),
                width: responsiveWidth(3.4),
                marginStart: responsiveWidth(9),
                marginTop:responsiveHeight(-1)
              }}
              resizeMode="contain"
            />

            <Text
            style={{
              marginTop: responsiveHeight(-0.7),
              marginStart:responsiveHeight(1),
              width: responsiveWidth(52),
              overflow: 'hidden',
            }}
            numberOfLines={1}
            ellipsizeMode="tail">
            Pasposh nagar American quater federal b area sector 8
          </Text>
         </View>

          <View
            style={{
              flexDirection: 'row',
              marginTop: responsiveHeight(1.5),
              justifyContent: 'space-around',
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
            }}>
            <Text style={{marginStart: responsiveWidth(11)}}>Pickup</Text>
            <Text style={{marginStart: responsiveWidth(-1)}}>Drop</Text>
            <Text style={{marginEnd: responsiveWidth(1.8)}}>Points</Text>
          </View>

         
        </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
    profileImage: {
      width: 50,
      height: 50,
      borderRadius: 75,
      borderColor: Colors.PRIMARY_COLOR,
      borderWidth: 2,
      marginStart: responsiveWidth(1),
    },

     highlighTrue:{
      justifyContent:'space-between',
      flexDirection: 'row',
      marginTop: responsiveHeight(3),
      width: responsiveWidth(80),
     },
     highlighFalse:{
      justifyContent:'flex-end',
      flexDirection: 'row',
      marginTop: responsiveHeight(3),
      width: responsiveWidth(80),
     }
  });