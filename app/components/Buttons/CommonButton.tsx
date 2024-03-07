import React from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Colors from '../../constant/Colors';

const CustomButton = ({
  title,
  onPress,
  customWidth,
  customHeight,
  backgroundColor,
  margintop,
  marginstart,
  marginend,
}: any) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={{
          marginTop: margintop || 0,
          marginStart: marginstart || responsiveWidth(5),
          marginEnd: marginend || responsiveWidth(5),
          width: customWidth || responsiveWidth(90),
          height: customHeight || responsiveHeight(7.5),
          justifyContent: 'center',
          backgroundColor: backgroundColor || Colors.PRIMARY_COLOR,
          borderRadius: 30,
          alignItems: 'center',
          elevation: 10,
          shadowColor: Colors.PRIMARY_COLOR,
          shadowOpacity: 0.5,
        }}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {},

  buttonContainer: {
    width: responsiveWidth(90),
    height: responsiveHeight(7.5),
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: Colors.PRIMARY_COLOR,
    borderRadius: 30,
    marginTop: 30,
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.WHITE_COLOR,
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default CustomButton;
