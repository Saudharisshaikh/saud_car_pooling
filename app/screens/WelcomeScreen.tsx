import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import Images from '../constant/Images';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import { loadString, saveString } from '../utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { retrieveAllData } from '../utils/storeData';

export default function WelcomeScreen() {
  const navigation: any = useNavigation();
  
  useEffect(() => {
    
   const isOnBoarding = retrieveAllData({key: 'onBoarding'});
   const isLogin = retrieveAllData({key: 'onLogin'});
   const timer = setTimeout(async () => {
      if(await isOnBoarding == 'false' || await isOnBoarding == undefined || await isOnBoarding == null){
        navigation.replace('OnBoarding');
      }
      else{
       if(await isLogin == 'false' || await isLogin == undefined || await isLogin == null){
        console.log('smallIf',isLogin)
        navigation.replace('Login');
      }
      else{
        console.log('else')
        navigation.replace('DrawerNavigator',isLogin);
      }

      
      
    }}, 2000); // Change 3000 to the desired duration in milliseconds

    return () => clearTimeout(timer);
  }, []);
  return (
    <View
      style={{
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        flex: 1,
      }}>
      <Image
        resizeMode="contain"
        source={Images.LoginBackground}
        style={{width: responsiveWidth(70),
             height: responsiveHeight(70)}}
      />
    </View>
  );
}


