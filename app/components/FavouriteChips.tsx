import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Colors from '../constant/Colors';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

export default function FavouriteChips({ chipText }: any) {
  const chipWidth = chipText.length * 3; // Adjust the multiplier (10) as needed for appropriate width

  return (
    <TouchableOpacity
      style={{
        backgroundColor: Colors.CHIPS_BACK_COLOR,
        marginHorizontal:responsiveWidth(1),
        borderRadius: responsiveHeight(5),
        height:responsiveHeight(4),
        marginTop:responsiveHeight(1),
        width: responsiveWidth(chipWidth), // Set the width based on text length
        // Add horizontal padding for better appearance
        justifyContent: 'center', // Align text in the center horizontally
        alignItems: 'center', // Align text in the center vertically
      }}>
      <Text>{chipText}</Text>
    </TouchableOpacity>
  );
}
