import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    Platform,
    KeyboardAvoidingView,
  } from 'react-native';
  import React from 'react';
  
  import {responsiveWidth} from 'react-native-responsive-dimensions';
import Colors from '../constant/Colors';
  
  
  const KeyboardScroll = ({children, style}: any) => {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: Colors.WHITE_COLOR,
        }}>
        <KeyboardAvoidingView
        
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={[styles.contentContainer, style]}>
            {children}
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  };
  
  export default KeyboardScroll;
  
  const styles = StyleSheet.create({
    contentContainer: {
      paddingHorizontal: responsiveWidth(0),
    },
  });