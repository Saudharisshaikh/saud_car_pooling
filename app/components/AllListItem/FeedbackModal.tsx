import { View, Text, Modal } from 'react-native'
import React from 'react'
import FeedbackListItem from './FeedbackListItem';
import { responsiveHeight } from 'react-native-responsive-dimensions';

export default function FeedbackModal({showVisible, setShowVisible}:any) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      
      visible={showVisible}
      onRequestClose={() => {
        setShowVisible(false);
      }}>
      <View
        style={{
          flex: 1,
          position: 'absolute',
          justifyContent: 'center',
          alignSelf: 'center',
          backgroundColor: 'rgba(0,0,0,0.30)',
          bottom: responsiveHeight(5),
        }}>
      <FeedbackListItem 
           onClick={() => {
            setShowVisible(false);
           }}
          />
    </View>
    </Modal>)
}