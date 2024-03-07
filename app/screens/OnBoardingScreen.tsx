import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { OnboardFlow } from 'react-native-onboard';
import Images from '../constant/Images';
import {useNavigation} from '@react-navigation/native';
import { loadString, saveString } from '../utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { storeAllData } from '../utils/storeData';
Image

export default function OnBoardingScreen() {
  const navigation: any = useNavigation();

const splash = loadString('splash')
console.log(splash)

  return (
    <OnboardFlow
    pages={[
      {
        title: 'Request Ride',
        subtitle: 'Request a ride get picked up \n near by community driver.',
        imageUri: Image.resolveAssetSource(Images.ONBOARDING_PAGE_THREE).uri
      },
      {
        title: 'Confirm Your Ride',
        subtitle: 'Huge drivers network helps you, find comfortable safe and cheap ride.',
        imageUri: Image.resolveAssetSource(Images.ONBOARDING_PAGETWO).uri
      },
      {
        title: 'Track Your Ride',
        subtitle: 'Request a ride get picked up \n near by community driver.',
        imageUri: Image.resolveAssetSource(Images.ONBOARDING_PAGEONE).uri
      },
    ]}
    type={'fullscreen'}
    autoPlay={true}
    onDone={()=> {
      storeAllData({key: 'onBoarding', value: true});   
      navigation.replace('Login')}}
  />
);
  
}