import {View, Text, Modal, Image, TextInput} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Colors from '../constant/Colors';
import CustomButton from './Buttons/CommonButton';
import Images from '../constant/Images';
import FavouriteChips from './FavouriteChips';

export default function FavouritePlacesModal({
  modalConfirmationisible,
  setModalConfirmationVisible,
  favouriteAddress,
}: any) {
  const [place, setPlace] = useState('');
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalConfirmationisible}
      onRequestClose={() => {
        setModalConfirmationVisible(false);
      }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.63)',
        }}>
        <View
          style={{
            width: responsiveWidth(90),
            height: responsiveHeight(50),
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
          <Text
            style={{
              color: Colors.BLACK_COLOR,
              fontSize: responsiveFontSize(2.3),
              fontWeight: '500',
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            Favourite Place
          </Text>

          <View
            style={{
              marginStart: responsiveWidth(2),
              marginEnd: responsiveWidth(2),
              marginTop: responsiveHeight(2),
              flexDirection: 'row',
            }}>
            <Image
              resizeMode="contain"
              source={Images.PINPRIMARY_ICON}
              style={{height: responsiveHeight(5), width: responsiveWidth(5)}}
            />

            <Text
              style={{
                width: responsiveWidth(70),
                marginStart: responsiveWidth(4),
                marginTop: responsiveHeight(1),
              }}>
              {favouriteAddress}
            </Text>
          </View>

          <TextInput
            value={place}
            onChangeText={txt => {
              setPlace(txt);
            }}
            placeholder={'Enter a label'}
            style={{
              paddingVertical: 8,
              marginStart: responsiveWidth(2),
              width: responsiveWidth(70),
            }}
          />

          <View
            style={{
              justifyContent: 'space-between',
              marginStart: responsiveWidth(2),
              marginEnd: responsiveWidth(2),
              flexDirection: 'row',
            }}>
            <Text
              style={{
                marginTop: responsiveHeight(2),
                color: Colors.BLACK_COLOR,
                fontSize: responsiveFontSize(2),
                fontWeight: '600',
              }}>
              Office
            </Text>

            <Image
              source={Images.RIGHT_CLICK_ICON}
              resizeMode="contain"
              style={{height: responsiveHeight(5), width: responsiveWidth(5)}}
            />
          </View>

          <View
            style={{
              borderWidth: 0.7,
              borderBottomColor: Colors.PRIMARY_COLOR,
              marginStart: responsiveWidth(2),
              marginEnd: responsiveWidth(2),
              marginTop: responsiveHeight(1),
            }}></View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: responsiveHeight(2),
              marginHorizontal: responsiveWidth(2),
              flexWrap: 'wrap',
            }}>
            <FavouriteChips chipText={'Home  '} />
            <FavouriteChips chipText={'School/University'} />
            <FavouriteChips chipText={'Office'} />
            <FavouriteChips chipText={'Gym  '} />
            <FavouriteChips chipText={'Pub  '} />
          </View>

          <CustomButton
            title="Save"
            onPress={() => {
              setModalConfirmationVisible(false);
            }}
            customHeight={responsiveHeight(6)}
            background={Colors.BLACK_COLOR}
            customWidth={responsiveWidth(80)}
            margintop={responsiveHeight(4)}
            marginstart={1}
            marginend={2}
          />
        </View>
      </View>
    </Modal>
  );
}
