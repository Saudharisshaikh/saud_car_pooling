import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Colors from '../../constant/Colors';
import Images from '../../constant/Images';
import HighlightButton from '../Buttons/HighlightButton';
import CustomButton from '../Buttons/CommonButton';

const NewRequestListItem = ({onClick,buttonText,highlightButtonText,isHighlight}: any) => {
  return (
    <View style={{flex:1}}>
         <View
          style={{
            width: responsiveWidth(85),
            height: responsiveHeight(36),
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

          <Text
            style={{
              marginTop: responsiveHeight(1.5),
              width: responsiveWidth(70),
              overflow: 'hidden',
            }}
            numberOfLines={1}
            ellipsizeMode="tail">
            House no:29 Block D unit no:2 Latifabad Hyderabad
          </Text>
          <Text
            style={{
              width: responsiveWidth(70), // Set the width to full
              overflow: 'hidden', // Hide overflow content
              marginTop: responsiveHeight(0.5),
            }}
            numberOfLines={1}
            ellipsizeMode="tail">
            House no:29 Block D unit no:2 Latifabad Hyderabad
          </Text>

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
            <Text style={{marginStart: responsiveWidth(11)}}>Pick up</Text>
            <Text style={{marginStart: responsiveWidth(-2)}}>Drop</Text>
            <Text style={{marginEnd: responsiveWidth(1)}}>Points</Text>
          </View>






          <View
            style={{flexDirection:'row',marginTop:responsiveHeight(3)}}>

              <View style={{flexDirection:'row',marginStart:responsiveWidth(3)}}>
              {isHighlight&&(
              <HighlightButton
              customWidth={responsiveWidth(22)}

              title={ 'Route'}
              onPress={() => {
                console.log('Cancel Bike');
                onClick();
              }}
              backgroundColor={Colors.PRIMARY_COLOR}
              customHeight={responsiveHeight(5)}
            />
            )}
            </View>
              
              <View style={{flexDirection:'row',marginLeft:responsiveWidth(3)}}>
              <HighlightButton
              customWidth={responsiveWidth(22)}
              title={ 'Decline'}
              onPress={() => {
                console.log('Decline');
                onClick();
              }}
              backgroundColor={Colors.ACCENT_COLOR}
              customHeight={responsiveHeight(5)}
            />
            </View>

            <View style={{flexDirection:'row',marginLeft:responsiveWidth(-2)}}>
            <CustomButton
              title={'Accept'}
              onPress={() => {
                console.log('Select successfully');
                onClick();
                
              }}
              customHeight={responsiveHeight(5)}
              customWidth={responsiveWidth(22)}
            />
            </View>
          </View>
        </View>
      
    </View>
  )
}

export default NewRequestListItem


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