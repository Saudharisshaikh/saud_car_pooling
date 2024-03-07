import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Images from '../constant/Images';
import { useNavigation } from '@react-navigation/native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Colors from '../constant/Colors';
import CustomButton from '../components/Buttons/CommonButton';
import FeedbackModal from '../components/AllListItem/FeedbackModal';

export default function CheckoutScreen() {

    const [showVisible,setShowVisible] = useState(false)
      
      const navigation: any = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: Colors.WHITE_COLOR }}>
      <View style={{ flexDirection: 'row', justifyContent:'space-between',marginTop:responsiveHeight(2), elevation: 10,shadowColor:'#fcfcfc',shadowOpacity:0.5}}>
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
        <Text style={{marginTop:responsiveHeight(1),color:Colors.BLACK_COLOR,fontSize:responsiveFontSize(2.2),fontWeight:'bold'}}>Checkout Details</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Feedback')}>
          <Image 
          resizeMode='contain'
          source={Images.START_POINT} 
          style={{ width: 40, height: 40,marginRight:responsiveWidth(5)}} />
        </TouchableOpacity>
        </View>
        <View style={{borderBottomWidth:1,borderColor:Colors.SEARCH_BEHIND,marginVertical:responsiveHeight(1.5),
        marginStart:responsiveWidth(-4),
          marginEnd:responsiveWidth(-4),elevation:10}}>

         </View>


         <View
          style={{
            width: responsiveWidth(100),
            height: responsiveHeight(30),
            backgroundColor: 'white',
           
            marginStart: responsiveWidth(2),
            marginEnd: responsiveWidth(2),
            padding: 15,
            shadowColor: '#000',
            
          }}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={styles.profileImage}
                source={Images.AVTAR_IMAGE}
                resizeMode="contain"
              />
            </View>
            <View style={{flexDirection: 'column'}}>
              <View
                style={{flexDirection: 'row', marginStart: responsiveWidth(3)}}>
                <Text
                  style={{
                    fontSize: responsiveFontSize(2.5),
                    color: Colors.BLACK_COLOR,
                    fontWeight: 'bold',
                  }}>
                  Bernade Alvarado
                </Text>
                <Image
                  source={Images.KING_ICON}
                  style={{
                    height: responsiveHeight(5),
                    width: responsiveWidth(5),
                    marginTop: responsiveHeight(-1),
                    marginStart: responsiveWidth(1),
                  }}
                  resizeMode="contain"
                />
              </View>
              <View
                style={{flexDirection: 'row', marginStart: responsiveWidth(3)}}>
                <Image
                  source={Images.STAR_ICON}
                  resizeMode="contain"
                  style={{
                    height: responsiveHeight(4),
                    width: responsiveWidth(4),
                    marginTop: responsiveHeight(-0.8),
                  }}
                />
                <Text
                  style={{
                    marginStart: responsiveWidth(1),
                    color: Colors.BLACK_COLOR,
                    fontWeight: 'bold',
                  }}>
                  4.8
                </Text>
                <Text style={{marginStart: responsiveWidth(1)}}>(293)</Text>
                <Image
                  source={Images.CAR_RIDE}
                  style={{
                    height: responsiveHeight(4),
                    width: responsiveWidth(4),
                    marginTop: responsiveHeight(-0.5),
                    marginStart: responsiveWidth(2),
                    tintColor: Colors.PRIMARY_COLOR,
                  }}
                  resizeMode="contain"
                />
              </View>
            </View>
          </View>

         <View style={{marginTop:responsiveHeight(2), flexDirection: 'row',}}>
            

            <Image
              source={Images.STARTNG_POINT_ICON}
              style={{
                height: responsiveHeight(3),
                width: responsiveWidth(3),
                marginStart: responsiveWidth(3),
                marginTop:responsiveHeight(-1)
              }}
              resizeMode="contain"
            />

            <Text
            style={{
              marginTop: responsiveHeight(-1),
              marginStart:responsiveHeight(1),
              width: responsiveWidth(72),
              overflow: 'hidden',
            }}
            numberOfLines={1}
            ellipsizeMode="tail">
            Bukhari Apartments block b Khyaban sector 2
          </Text>
         </View>

         <Image
              source={Images.three_dots_icon}
              style={{
                height: responsiveHeight(1.2),
                width: responsiveWidth(1.2),
                marginStart: responsiveWidth(4),
               
              }}
              resizeMode="contain"
            />

         <View style={{marginTop:responsiveHeight(1), flexDirection: 'row',}}>
           

            <Image
              source={Images.PIN_ICON}
              style={{
                height: responsiveHeight(3.4),
                width: responsiveWidth(3.4),
                marginStart: responsiveWidth(3),
                marginTop:responsiveHeight(-1)
              }}
              resizeMode="contain"
            />

            <Text
            style={{
              marginTop: responsiveHeight(-0.7),
              marginStart:responsiveHeight(1),
              width: responsiveWidth(72),
              overflow: 'hidden',
            }}
            numberOfLines={1}
            ellipsizeMode="tail">
            Pasposh nagar American quater federal b area sector 8
          </Text>
         </View>

          <View
            style={{
              flexDirection: 'row',
              marginTop: responsiveHeight(1.5),
              justifyContent: 'space-around',
            }}>
            <View
              style={{flexDirection: 'row',}}>
              <Image
                source={Images.Clock}
                style={{
                  height: responsiveHeight(4.5),
                  width: responsiveWidth(4.5),
                  tintColor:Colors.PRIMARY_COLOR
                }}
                resizeMode="contain"
              />
              <Text
                style={{
                  marginStart: responsiveWidth(1),
                  color: Colors.BLACK_COLOR,
                  marginTop: responsiveHeight(0.5),
                  fontWeight: 'bold',
                  fontSize: responsiveFontSize(2.3),
                }}>
                16:28
              </Text>
            </View>

            <View style={{flexDirection: 'row'}}>
              <Image
                source={Images.FUEL_ICON}
                style={{
                  height: responsiveHeight(4.5),
                  width: responsiveWidth(4.5),
                  marginTop:responsiveHeight(-0.5),
                  
                }}
                resizeMode="contain"
              />
              <Text
                style={{
                  marginStart: responsiveWidth(1),
                  color: Colors.BLACK_COLOR,
                  marginTop: responsiveHeight(0.5),
                  fontWeight: 'bold',
                  fontSize: responsiveFontSize(2.3),
                }}>
                05.0pts/Km
              </Text>
            </View>

            <View style={{flexDirection: 'row', marginEnd: responsiveWidth(2),}}>
              <Image
                source={Images.MONEY}
                style={{
                  height: responsiveHeight(5),
                  width: responsiveWidth(5),
                  marginTop:responsiveHeight(-0.5),
                  marginStart: responsiveWidth(-2),
                }}
                resizeMode="contain"
              />
              <Text
                style={{
                  marginStart: responsiveWidth(1),
                  color: Colors.BLACK_COLOR,
                  marginTop: responsiveHeight(0.5),
                  fontWeight: 'bold',
                  fontSize: responsiveFontSize(2.3),
                }}>
                56
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginTop: responsiveHeight(-0.5),
              justifyContent: 'space-between',
            }}>
            <Text style={{marginStart: responsiveWidth(11.5)}}>Time</Text>
            <Text style={{marginStart: responsiveWidth(0)}}>Fuel Points</Text>
            <Text style={{marginEnd: responsiveWidth(2)}}>Points</Text>
          </View>

         
        </View>

        <View
          style={{
            width: responsiveWidth(100),
            height: responsiveHeight(25),
            backgroundColor: 'white',
            borderRadius:22,
            position: 'absolute',
            bottom:responsiveHeight(0),
            marginBottom:responsiveHeight(-10),
            padding: 15,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            elevation: 10,
          }}>
         
         <View style={{alignItems:'center',marginTop:responsiveHeight(2)}}>
         <CustomButton
            title={'Rate Your Rider'}
            onPress={() => {
              console.log('Select successfully');
              setShowVisible(true);
              
            }}
            customHeight={responsiveHeight(6)}
            customWidth={responsiveWidth(90)}
          />  
         </View>
         
         
        </View>

       

       {showVisible && (
           <FeedbackModal 
            showVisible={showVisible}
            setShowVisible={setShowVisible}
           />
       )}
      



    </View>
  )
}

const styles = StyleSheet.create({
    profileImage: {
      width: 50,
      height: 50,
      borderRadius: 75,
      borderColor: Colors.PRIMARY_COLOR,
      borderWidth: 2,
      marginStart: responsiveWidth(1),
    },

     highlighTrue:{
      justifyContent:'space-between',
      flexDirection: 'row',
      marginTop: responsiveHeight(3),
      width: responsiveWidth(80),
     },
     highlighFalse:{
      justifyContent:'flex-end',
      flexDirection: 'row',
      marginTop: responsiveHeight(3),
      width: responsiveWidth(80),
     }
  });