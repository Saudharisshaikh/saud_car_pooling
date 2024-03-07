import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Colors from '../../constant/Colors';
import Images from '../../constant/Images';

export default function ChatListItem({isGroup}: any) {
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  const [menuVisible, setMenuVisible] = useState(false);
  return (
    <View>
      <View
        style={{
          width: responsiveWidth(90),
          height: responsiveHeight(10),
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
        <View style={{flexDirection: 'row'}}>
          <Image
            style={styles.profileImage}
            source={isGroup ? Images.GROUPS_ICON : Images.AVTAR_IMAGE}
            resizeMode="contain"
          />

          <Text
            style={{
              marginTop: responsiveHeight(-1),
              marginStart: responsiveWidth(-5),
              fontSize: responsiveScreenFontSize(6),
              fontWeight: 'bold',
              color: '#51DF34',
            }}>
            .
          </Text>

          <Text
            style={{
              marginStart: responsiveWidth(3.8),
              color: Colors.BLACK_COLOR,
              fontWeight: '700',
              fontSize: responsiveFontSize(2.2),
            }}>
              {isGroup ? 'Kimmy Natada' : 'Kate Samuels'}
            
          </Text>

          <TouchableOpacity
            style={{flexDirection: 'row', marginStart: responsiveWidth(25)}}
            onPress={toggleMenu}>
            <Image
              source={Images.SEARCH_MENU_ICON}
              style={{
                height: responsiveHeight(6),
                width: responsiveWidth(6),
                alignSelf: 'flex-end',
              }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{flexDirection: 'row'}}>
        <Text
          style={{
            marginTop: responsiveHeight(-6),
            marginStart: responsiveWidth(24),
          }}>
          {isGroup ? '200 members .' : 'Online'}
        </Text>
        
        {isGroup && (
          <Text
            style={{
              marginTop: responsiveHeight(-6),
              marginStart: responsiveWidth(5),
              color: '#67e7e5',
            }}>
            4 active
          </Text>
        )}
        
      </View>

      {menuVisible && (
        <View
          style={{
            position: 'absolute',
            right: 13,
            top: 5,
            height: responsiveHeight(7.5),
            width: responsiveWidth(25),
            backgroundColor: Colors.WHITE_COLOR,
            elevation: 5,
            justifyContent: 'center',
            borderRadius: responsiveHeight(1),
          }}>
          <TouchableOpacity
            onPress={() => {
              setMenuVisible(false);
            }}>
            <Text
              style={{
                marginStart: responsiveWidth(3),
                color: Colors.BLACK_COLOR,
              }}>
              Call
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{marginTop: responsiveHeight(1)}}
            onPress={() => setMenuVisible(false)}>
            <Text
              style={{
                marginStart: responsiveWidth(3),
                color: Colors.ACCENT_COLOR,
              }}>
              Remove
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  profileImage: {
    width: 60,
    height: 60,
    marginTop: responsiveHeight(-1.7),
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
