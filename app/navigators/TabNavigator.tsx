import * as React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import TabsComponent from './TabsComponent';
import Colors from '../constant/Colors';
import Images from '../constant/Images';
import {useNavigation} from '@react-navigation/native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';



export default function TabNavigator() {
  const navigation:any = useNavigation();
  return (
    <View style={{ flex: 1,backgroundColor:Colors.WHITE_COLOR }}>
      <View style={{ flexDirection: 'row', justifyContent:'space-between',marginTop:responsiveHeight(2)}}>
      <TouchableOpacity 
      style={{marginLeft:responsiveWidth(5)}}
      onPress={() => navigation.goBack()}>
          <Image
            resizeMode='contain'
            source={Images.BACK_ICON}
            style={{
              width: responsiveWidth(5),
              height: responsiveHeight(5),
            }}
          />
        </TouchableOpacity>
        <Text style={{marginTop:responsiveHeight(1),color:Colors.BLACK_COLOR,fontSize:responsiveFontSize(2.2),fontWeight:'bold'}}>Matching Pessenger</Text>
        <TouchableOpacity>
          <Image 
          resizeMode='contain'
          source={Images.matching_search_icon} 
          style={{ width: 40, height: 40,marginRight:responsiveWidth(5)}} />
        </TouchableOpacity>
        </View>
      <TabsComponent />
    </View>
  );
}
