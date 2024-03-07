import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Colors from '../constant/Colors';
import HomeAnimatableCard from '../components/HomeAnimatableCard';
import Images from '../constant/Images';
import {DrawerActions, useNavigation} from '@react-navigation/native';

import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

export default function HomeScreen() {
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

         

        <HomeAnimatableCard />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PRIMARY_COLOR,
  },
});
