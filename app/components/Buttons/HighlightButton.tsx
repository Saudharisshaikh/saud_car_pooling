import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { Colors } from 'react-native/Libraries/NewAppScreen'

export default function HighlightButton({ title,
    onPress,
    customWidth,
    customHeight,
    backgroundColor,
    margintop,
    marginstart,
    marginend}:any) {
  return (
    <TouchableOpacity
     onPress={onPress}
    style={{
      height: customHeight || responsiveHeight(5.5),
      width: customWidth || responsiveWidth(35),
      borderRadius: responsiveWidth(5),
      borderColor: backgroundColor || Colors.PRIMARY_COLOR,
      justifyContent:'center',
      alignItems:'center',
      borderWidth:1.3,
      marginTop:margintop || 0,
      marginStart:marginstart || 0,
      marginEnd:marginend || 0
      
    }}>
      <Text style={{color: backgroundColor || Colors.PRIMARY_COLOR}}>{title}</Text>

    </TouchableOpacity>
  )
}