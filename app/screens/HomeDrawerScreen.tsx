import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import Colors from '../constant/Colors';
import HomeAnimatableCard from '../components/HomeAnimatableCard';
import Images from '../constant/Images';
import {DrawerActions, useNavigation} from '@react-navigation/native';

import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

export default function HomeDrawerScreen() {
  const navigation: any = useNavigation();
  
  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };


  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={Colors.WHITE_COLOR}
        barStyle={'dark-content'}
      />

      <ImageBackground
        source={Images.HOME_MAP}
        style={{
          flex: 1,
          backgroundColor: Colors.PRIMARY_COLOR,
        }}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={openDrawer}
            style={{
              marginLeft: responsiveWidth(5),
              marginTop: responsiveHeight(3),
            }}>
            <Image
              source={Images.MENU_ICON}
              style={{
                height: responsiveHeight(7),
                width: responsiveWidth(15),
                resizeMode: 'contain', // Ensure the image fits within the defined dimensions
              }}
            />
          </TouchableOpacity>

          <View style={styles.rightIcons}>
            <TouchableOpacity
              onPress={openDrawer}
              style={{
                justifyContent: 'flex-end',
                alignSelf: 'flex-end',
                marginLeft: responsiveWidth(5),
                marginTop: responsiveHeight(3),
              }}>
              <Image
                source={Images.CHATS_ICON}
                style={{
                  height: responsiveHeight(7),
                  width: responsiveWidth(15),
                  resizeMode: 'contain', // Ensure the image fits within the defined dimensions
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={openDrawer}
              style={{
                marginLeft: responsiveWidth(5),
                marginTop: responsiveHeight(3),
              }}>
              <Image
                source={Images.NOTIFICATION_HOME}
                style={{
                  height: responsiveHeight(7),
                  width: responsiveWidth(15),
                  resizeMode: 'contain', // Ensure the image fits within the defined dimensions
                }}
              />
            </TouchableOpacity>
          </View>
        </View>

        <HomeAnimatableCard isUpdateState={false}/>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PRIMARY_COLOR,
  },

  rightIcons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginEnd: responsiveWidth(5),
  },
});
