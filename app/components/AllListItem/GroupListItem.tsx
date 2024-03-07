import { View, Text, Image } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import Images from '../../constant/Images';
import Colors from '../../constant/Colors';
import CustomButton from '../Buttons/CommonButton';

export default function GroupListItem() {
    
  return (
    <View style={{flex:1}}>
    <View
     style={{
       width: responsiveWidth(85),
       height: responsiveHeight(20),
       backgroundColor: 'white',
       borderRadius: 25,
       marginStart: responsiveWidth(2),
       marginEnd: responsiveWidth(2),
       padding: 15,
       marginTop:responsiveHeight(2),
       shadowColor: '#000',
       shadowOffset: {
         width: 0,
         height: 2,
       },
       elevation: 10,
     }}>

        <View style={{flexDirection:'row',}}>

        <View>
            <Image 
             source={Images.GROUPS_ICON}
             resizeMode='contain'
             style={{width:responsiveWidth(15),height:responsiveHeight(15),
             marginTop:responsiveHeight(-3),
             marginStart:responsiveWidth(3)
            }}
             />
        </View>
        
        <View style={{flexDirection:'column',}}>
            <Text style={{marginTop:responsiveHeight(1),marginStart:responsiveWidth(3), color:Colors.BLACK_COLOR,
            fontSize:responsiveFontSize(2.4),fontWeight:'bold',
            }}>Rog Ket Noise Right</Text>

           <View style={{flexDirection:'row',marginStart:responsiveWidth(3),marginTop:responsiveHeight(1)}}>
            <Text style={{color:Colors.BLACK_COLOR}}>5 members</Text>
            <Text style={{color:Colors.BLACK_COLOR,marginLeft:responsiveWidth(3)}}>•</Text>
            <Text style={{color:'#0d99ff',marginLeft:responsiveWidth(3)}}>4 active</Text>
           </View>
        </View>

        </View>

        <View style={{position: 'absolute', bottom: -14, alignSelf: 'flex-end'}}>
          <CustomButton
            title={'Invite'}
            onPress={() => {
              
              console.log('Select successfully');
              
            }}
            customHeight={responsiveHeight(5.7)}
            customWidth={responsiveWidth(38)}
          />     
        </View>
     
    
   </View>

   <View>

   </View>
 
</View>
  )
}