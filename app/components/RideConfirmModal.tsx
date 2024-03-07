import {View, Text, Modal, StyleSheet, Image} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Colors from '../constant/Colors';
import Images from '../constant/Images';
import CustomButton from './Buttons/CommonButton';
import MatchingPessengerListItem from './AllListItem/MatchingPessengerListItem';

export default function RideConfirmModal({showVisible, setShowVisible,onMyClick,isHighlight,highlightButtonText}: any) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showVisible}
      onRequestClose={() => {
        setShowVisible(false);
      }}>
      <View
        style={{
          flex: 1,
          position: 'absolute',
          justifyContent: 'center',
          alignSelf: 'center',
          bottom: responsiveHeight(5),
        }}>

          <MatchingPessengerListItem   isHighlight={isHighlight} highlightButtonText={highlightButtonText} buttonText={isHighlight? "Accept": "Request"} onClick={() => {
            onMyClick()
            
            setShowVisible(false) 
            }}/>
        {/* <View
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
              justifyContent: 'space-between',
            }}>
            <View
              style={{flexDirection: 'row', marginStart: responsiveWidth(2)}}>
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
                source={Images.B_CHAT}
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
                94%
              </Text>
            </View>

            <View style={{flexDirection: 'row', marginEnd: responsiveWidth(2)}}>
              <Image
                source={Images.MONEY}
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
            <Text style={{marginStart: responsiveWidth(2)}}>Time</Text>
            <Text style={{marginStart: responsiveWidth(5.5)}}>Ontime</Text>
            <Text style={{marginEnd: responsiveWidth(2)}}>Points</Text>
          </View>

          <View
            style={{
              justifyContent: 'flex-end',
              flexDirection: 'row',
              marginTop: responsiveHeight(3),
              width: responsiveWidth(80),
            }}>
            <CustomButton
              title="Select"
              onPress={() => {
                console.log('Select successfully');
                setShowVisible(false);
              }}
              customHeight={responsiveHeight(5.7)}
              customWidth={responsiveWidth(37)}
            />
          </View>
        </View> */}
      </View>
    </Modal>
  );
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
});
