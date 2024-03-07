import {View, Text, Modal, Image, StyleSheet} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Images from '../constant/Images';

import CustomButton from './Buttons/CommonButton';
import Colors from '../constant/Colors';
import HighlightButton from './Buttons/HighlightButton';

export default function RideRequestedModal({showVisible, setShowVisible,title,time,buttonText,onClick,isEndRide}: any) {
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
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: responsiveFontSize(2), fontWeight: '500'}}>
            {title || 'Ride Requested'}  
            </Text>

            <Text
              style={{
                color: Colors.PRIMARY_COLOR,
                marginTop: responsiveHeight(0.5),
              }}>
             {time || 'Today, 16:28PM'} 
            </Text>
          </View>

          <View
            style={{
              borderBottomColor: Colors.GRAY_DEFAULT_COLOR,
              borderBottomWidth: 2,
              flexDirection: 'row',
              marginVertical: responsiveHeight(2),
            }}></View>

          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={styles.profileImage}
                source={Images.AVTAR_IMAGE}
                resizeMode="contain"
              />
              <Image
                source={Images.WHEEL_ICON}
                style={{
                  height: responsiveHeight(4),
                  width: responsiveWidth(4),
                  marginTop: responsiveHeight(1),
                  marginStart: responsiveWidth(3),
                  marginEnd: responsiveWidth(2),
                }}
                resizeMode="contain"
              />
              <Image
                style={styles.profileImage}
                source={Images.AVTAR_IMAGE}
                resizeMode="contain"
              />
            </View>

            <Image
              source={Images.SEARCH_RIDE_ICON}
              style={{
                height: responsiveHeight(12),
                width: responsiveWidth(12),
                marginTop: responsiveHeight(-3),
              }}
              resizeMode="contain"
            />
          </View>


          {
            isEndRide
             ? <View style={{flexDirection: 'row', justifyContent:'center',marginTop:responsiveHeight(4)}}>
             <CustomButton
                  title={buttonText || 'Check in'}
                  onPress={() => {
                    console.log('Select successfully');
                    onClick();
                    setShowVisible(false);
                  }}
                  customHeight={responsiveHeight(5.7)}
                  customWidth={responsiveWidth(70)}
                  backgroundColor={Colors.ACCENT_COLOR}
                />
             </View>
          :   <View style={{flexDirection: 'row', marginTop: responsiveHeight(4)}}>
          <HighlightButton
            title={'Cancel'}
            onPress={() => {
              console.log('Cancel Bike');
              setShowVisible(false);
            }}
            backgroundColor={Colors.PRIMARY_COLOR}
          />

          <CustomButton
            title={buttonText || 'Check in'}
            onPress={() => {
              console.log('Select successfully');
              onClick();
              setShowVisible(false);
            }}
            customHeight={responsiveHeight(5.7)}
            customWidth={responsiveWidth(37)}
            backgroundColor={isEndRide?Colors.SEARCH_BEHIND:Colors.PRIMARY_COLOR}
          />
        </View> 
          }

        
         
         

          {/*  */}
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 75,
    borderColor: Colors.PRIMARY_COLOR,
    borderWidth: 2,
    marginStart: responsiveWidth(1),
  },
});
