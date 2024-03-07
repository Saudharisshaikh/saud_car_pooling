import {View, Text, Modal, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Colors from '../../constant/Colors';

export default function UserStateConfirmationModal({
  visibleModal,
  setVisibleModal,
}: any) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visibleModal}
      onRequestClose={() => {
        setVisibleModal(false);
      }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.63)',
        }}>
        <View
          style={{
            width: responsiveWidth(85),
            height: responsiveHeight(20),
            backgroundColor: 'white',
            borderRadius: responsiveHeight(3),
            padding: 15,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            elevation: 5,
          }}>
          <Text
            style={{
              justifyContent: 'center',
              alignSelf: 'center',
              fontSize: responsiveFontSize(2.2),
              fontWeight: 'bold',
              color: Colors.BLACK_COLOR,
            }}>
            State Change
          </Text>
          <Text style={styles.container}>
            You are going to change your state to{' '}
            <Text style={styles.offerRide}>Offer Ride</Text>. Are you sure?
          </Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginTop: responsiveHeight(3),
            }}>
            <TouchableOpacity onPress={() => setVisibleModal(false)}>
              <Text
                style={{
                  color: Colors.BLACK_COLOR,
                  fontSize: responsiveFontSize(2),
                }}>
                No
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setVisibleModal(false)}>
              <Text
                style={{
                  color: Colors.PRIMARY_COLOR,
                  fontSize: responsiveFontSize(2),
                }}>
                Yes
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: responsiveHeight(1),
    color: 'black', // Default color for the text
  },
  offerRide: {
    color: Colors.PRIMARY_COLOR, // Color for the "Offer Ride" text
    // Add any other styles for "Offer Ride" text here if needed
  },
});
