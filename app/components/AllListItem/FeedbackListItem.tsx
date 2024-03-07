import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import CustomButton from '../Buttons/CommonButton';
import {Rating} from 'react-native-ratings';
import {color} from 'react-native-reanimated';
import Colors from '../../constant/Colors';
import Images from '../../constant/Images';
import { useNavigation } from '@react-navigation/native';

export default function FeedbackListItem({onClick}: any) {
  const [rating, setRating] = React.useState(0);

  const handleRating = (newRating: any) => {
    setRating(newRating);
    // You can perform additional actions here based on the new rating
  };

  const navigation: any = useNavigation();
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          width: responsiveWidth(85),
          height: responsiveHeight(52),
          backgroundColor: 'white',
          borderRadius: 15,
          marginStart: responsiveWidth(2),
          marginEnd: responsiveWidth(2),
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

          <View style={{elevation:15,shadowColor:Colors.PRIMARY_COLOR}}>
        <View style={{}}>
          <Image
            style={styles.profileImage}
            source={Images.AVTAR_IMAGE}
            resizeMode="contain"
          />

          <Text style={{fontSize: responsiveFontSize(2.4), color: Colors.BLACK_COLOR, alignSelf: 'center', fontWeight: 'bold',
          marginTop: responsiveHeight(1)}}>Kimmy Natasa</Text>

          <Text
           numberOfLines={2}
           ellipsizeMode="tail"
          style={{alignSelf: "center", marginTop: responsiveHeight(1)
          ,marginHorizontal:responsiveWidth(5)}}>Marathali, Karnataka,Maharshtra, India, Madiwata Housor road Silk Board,Zanida Hyderabad.
          </Text>
          
        </View>


        <View style={{marginTop:responsiveHeight(2), flexDirection: 'row',}}>
            

            <Image
              source={Images.STARTNG_POINT_ICON}
              style={{
                height: responsiveHeight(3),
                width: responsiveWidth(3),
                marginStart: responsiveWidth(3),
                marginTop:responsiveHeight(-1)
              }}
              resizeMode="contain"
            />

            <Text
            style={{
              marginTop: responsiveHeight(-1),
              marginStart:responsiveWidth(1),
              width: responsiveWidth(65),
              overflow: 'hidden',
              color:Colors.BLACK_COLOR
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
                marginStart: responsiveWidth(4),
               
              }}
              resizeMode="contain"
            />

         <View style={{marginTop:responsiveHeight(1), flexDirection: 'row',}}>
            

            <Image
              source={Images.PIN_ICON}
              style={{
                height: responsiveHeight(3.4),
                width: responsiveWidth(3.4),
                marginStart: responsiveWidth(3),
                marginTop:responsiveHeight(-1)
              }}
              resizeMode="contain"
            />

            <Text
            style={{
              marginTop: responsiveHeight(-0.7),
              marginStart:responsiveWidth(1),
              width: responsiveWidth(65),
              overflow: 'hidden',
              color:Colors.BLACK_COLOR
            }}
            numberOfLines={1}
            ellipsizeMode="tail">
            Pasposh nagar American quater federal b area sector 8
          </Text>
         </View>

         </View>
          
         <View style={{borderBottomWidth:2.5,borderColor:Colors.SEARCH_BEHIND,
         marginVertical:responsiveHeight(3),marginStart:responsiveWidth(-4),
          marginEnd:responsiveWidth(-4),elevation:10}}>

         </View>
       
        <View>
          <Text
            style={{
              fontSize: responsiveHeight(2.2),
              color: Colors.BLACK_COLOR,
              alignSelf: 'center',
            }}>
            Rate your pessenger
          </Text>

          <Rating
            type="star"
            ratingCount={5}
            startingValue={rating}
            imageSize={30}
            onFinishRating={handleRating}
            showRating
          />
        </View>

        <View style={{position: 'absolute', bottom: -14, alignSelf: 'center'}}>
          <CustomButton
            title={'Submit'}
            onPress={() => {
              onClick()
              console.log('Select successfully');
              
            }}
            customHeight={responsiveHeight(5.7)}
            customWidth={responsiveWidth(70)}
          />     
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profileImage: {
    width: 80,
    height: 80,
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
