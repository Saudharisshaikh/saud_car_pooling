import {
  View,
  Text,
  Modal,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import CustomButton from './Buttons/CommonButton';

import Images from '../constant/Images';
import Colors from '../constant/Colors';
import React, {useState, useCallback, useEffect} from 'react';
import {Bubble, GiftedChat, Send} from 'react-native-gifted-chat';
import chatSocket from '../utils/chatSocket'
import { logProfileData } from 'react-native-calendars/src/Profiler';

export default function ChatModal({showVisible, setShowVisible}: any) {
  const [messages, setMessages]: any = useState([]);

  useEffect(() => {
   
    chatSocket.initializeSocket();
    
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

 
  useEffect(() => {
    chatSocket.on('receive_message', (data: any) => {
        console.log('message received: ', data);
        setMessages((previousMessages: any) =>
            GiftedChat.append(previousMessages, data),
        );
    });
}, []);
  const onSend = useCallback((messages: any = []) => {
    // console.log('messages', messages[0])
    // chatSocket.emit('send_message', messages[0]);
    setMessages((previousMessages: any) =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  const renderSendButton=(props: any)=>{
    return(
      <Send {...props}>
        <View>
          <Image source={Images.send_icon} 
          style={{width:responsiveHeight(4),height:responsiveHeight(4)}} />
        </View>
      </Send>
    )
    
  }

   const renderBubble = (props: any) => {
    return(
      <Bubble
      {...props}
      wrapperStyle={{
        right: {
          backgroundColor: Colors.PRIMARY_COLOR,
        },
       }}
       textStyle={{right: {color: 'white'}}}
      />
    )
     
   }

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
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
        }}>
        <View
          style={{
            width: responsiveWidth(85),
            height: responsiveHeight(60),
            backgroundColor: 'white',
            borderRadius: 20,
            marginStart: responsiveWidth(2),
            marginEnd: responsiveWidth(2),
            padding: 15,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            elevation: 5,
          }}>
          <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={styles.profileImage}
                source={Images.AVTAR_IMAGE}
                resizeMode="contain"
              />

              <View
                style={{
                  flexDirection: 'column',
                  marginStart: responsiveWidth(3),
                }}>
                <Text
                  style={{fontSize: responsiveFontSize(2), fontWeight: 'bold'}}>
                  
                  Bernad
                </Text>
                <Text
                  style={{
                    fontSize: responsiveFontSize(1.5),
                    marginStart: responsiveWidth(1),
                  }}>
                  Active Now
                </Text>
              </View>
            </View>

            <TouchableOpacity onPress={() => setShowVisible(false)}>
              <Image
                source={Images.CROSS_ICON}
                style={{
                  height: responsiveHeight(6),
                  width: responsiveWidth(6),
                  marginTop: responsiveHeight(-1),
                }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderBottomColor: Colors.CHIPS_BACK_COLOR,
              borderBottomWidth: 1,
              flexDirection: 'row',
              marginVertical: responsiveHeight(2),
            }}></View>
         
          <GiftedChat
            messages={messages}
            onSend={messages => onSend(messages)}
            user={{
              _id: 1,
            }}
            renderBubble={renderBubble}
            renderSend={renderSendButton}
          />
         
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 75,
    borderColor: Colors.PRIMARY_COLOR,
    borderWidth: 2,
    marginStart: responsiveWidth(1),
  },
});
