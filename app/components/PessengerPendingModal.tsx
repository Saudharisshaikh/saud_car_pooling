import {
  View,
  Text,
  Modal,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Images from '../constant/Images';
import Colors from '../constant/Colors';

const PessengerPendingModal = ({
  showVisible,
  setShowVisible,
  isPending,
  title,
  message,
  positiveBtn,
  negativeBtn,
  onClick
}: any) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showVisible}
      onRequestClose={() => {
        setShowVisible(false);
      }}>
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <Image
            resizeMode="contain"
            source={isPending? Images.pending_request_icon:Images.end_ride_icon}
            style={{
              width: responsiveHeight(8),
              marginTop: responsiveHeight(1),
              height: responsiveHeight(8),
              alignSelf: 'center',
            }}
          />
          <Text
            style={{
              alignSelf: 'center',
              marginTop: responsiveHeight(2),
              color: Colors.BLACK_COLOR,
              fontSize: responsiveFontSize(2.3),
              fontWeight: 'bold',
            }}>
            {title}
          </Text>

          <Text
            style={{
              alignSelf: 'center',
              marginTop: responsiveHeight(1.5),
              marginHorizontal: responsiveWidth(1),
              color: Colors.BLACK_COLOR,
              textAlign: 'center',
            }}>
            {message}
          </Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginTop: responsiveHeight(6),
            }}>
            <TouchableOpacity onPress={() => setShowVisible(false)}>
              <Text style={{fontSize: responsiveFontSize(2)}}>
                {negativeBtn}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() =>{
              onClick();
              setShowVisible(false)}
            }
              >
              <Text
                style={{
                  color: Colors.PRIMARY_COLOR,
                  fontSize: responsiveFontSize(2),
                }}>
                {positiveBtn}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.30)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: responsiveWidth(90),
    height: responsiveHeight(37),
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    shadowColor: '#000',
    elevation: 5,
  },
});

export default PessengerPendingModal;
