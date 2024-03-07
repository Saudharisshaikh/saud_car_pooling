import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Colors from '../constant/Colors';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';
import Images from '../constant/Images';
import CustomButton from '../components/Buttons/CommonButton';

export default function EditProfileScreen() {
  const navigation: any = useNavigation();
  const [fullName, setFullName] = useState('');
  const [dateofBirth, setDateOfBirth] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [isDropDown, setIsDropDown] = useState(false);

  return (
    <ScrollView style={{flex: 1, backgroundColor: Colors.WHITE_COLOR}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: responsiveHeight(2),
          elevation: 10,
        }}>
        <TouchableOpacity
          style={{marginLeft: responsiveWidth(5)}}
          onPress={() => navigation.goBack()}>
          <Image
            resizeMode="contain"
            source={Images.BACK_ICON}
            style={{
              width: responsiveWidth(5),
              height: responsiveHeight(5),
            }}
          />
        </TouchableOpacity>
        <View
          style={{
            alignSelf: 'center',
            alignContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Text
            style={{
              marginTop: responsiveHeight(-1),
              color: Colors.BLACK_COLOR,
              fontSize: responsiveFontSize(2.2),
              fontWeight: 'bold',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            Edit Profile
          </Text>
        </View>

        <View></View>
      </View>

      <Image
        style={styles.profileImage}
        source={Images.AVTAR_IMAGE}
        resizeMode="contain"
      />

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: responsiveHeight(1),
        }}>
        <Text
          style={{
            alignSelf: 'center',
            justifyContent: 'center',
            fontSize: responsiveFontSize(2),
            color: Colors.PRIMARY_COLOR,
          }}>
          {' '}
          Change Avatar
        </Text>
      </View>

      <View
        style={{flexDirection: 'column', marginHorizontal: responsiveWidth(3)}}>
        <Text
          style={{
            fontSize: responsiveFontSize(1.5),
            color: Colors.PRIMARY_COLOR,
            marginStart: responsiveWidth(4),
            marginTop: responsiveHeight(3),
          }}>
          'Full Name'
        </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginStart: responsiveWidth(4),
          }}>
          <TextInput
            
            value={fullName}
            style={{marginTop: responsiveHeight(-1.3), fontWeight: '500',width:responsiveWidth(80)}}
            placeholder={'Saud'}
            onChangeText={(key: any) => {
              setFullName(key);
            }}
          />
        </View>
        <View
          style={{
            borderBottomColor: Colors.SEARCH_BEHIND,
            borderBottomWidth: 1,
            marginEnd: responsiveWidth(5),
            marginTop: responsiveHeight(-1.5),
            marginHorizontal: responsiveWidth(5),
          }}
        />
      </View>

      <View
        style={{flexDirection: 'column', marginHorizontal: responsiveWidth(3)}}>
        <Text
          style={{
            fontSize: responsiveFontSize(1.5),
            color: Colors.PRIMARY_COLOR,
            marginStart: responsiveWidth(4),
            marginTop: responsiveHeight(3),
          }}>
          'Date of Birth'
        </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginStart: responsiveWidth(4),
          }}>
          <Text style={{marginTop: responsiveHeight(1)}}>08/08/1990</Text>
          <Image
            source={Images.CALENDAR_ICON}
            resizeMode="contain"
            style={{
              marginTop: responsiveHeight(-0.5),
              height: responsiveHeight(6),
              width: responsiveWidth(6),
              marginEnd: responsiveWidth(5),
            }}
          />
        </View>
        <View
          style={{
            borderBottomColor: Colors.SEARCH_BEHIND,
            borderBottomWidth: 1,
            marginTop: responsiveHeight(0),
            marginEnd: responsiveWidth(5),
            marginHorizontal: responsiveWidth(5),
        
          }}
        />
      </View>

      <View
        style={{flexDirection: 'column', marginHorizontal: responsiveWidth(3)}}>
        <Text
          style={{
            fontSize: responsiveFontSize(1.5),
            color: Colors.PRIMARY_COLOR,
            marginStart: responsiveWidth(4),
            marginTop: responsiveHeight(3),
          }}>
          'Phone Number'
        </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginStart: responsiveWidth(4),
          }}>
          <TextInput
            value={phoneNumber}
            style={{marginTop: responsiveHeight(-1.3), fontWeight: '500',width:responsiveWidth(80)}}
            placeholder={'0857773555'}
            onChangeText={(key: any) => {
              setPhoneNumber(key);
            }}
          />
        </View>
        <View
          style={{
            borderBottomColor: Colors.SEARCH_BEHIND,
            borderBottomWidth: 1,
            marginTop: responsiveHeight(-1.5),
            marginEnd: responsiveWidth(5),
            marginHorizontal: responsiveWidth(5),
          }}
        />
      </View>

      <View
        style={{flexDirection: 'column', marginHorizontal: responsiveWidth(3)}}>
        <Text
          style={{
            fontSize: responsiveFontSize(1.5),
            color: Colors.PRIMARY_COLOR,
            marginStart: responsiveWidth(4),
            marginTop: responsiveHeight(3),
          }}>
          'Email'
        </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginStart: responsiveWidth(4),
          }}>
          <TextInput
            value={email}
            style={{marginTop: responsiveHeight(-1.3), fontWeight: '500',width:responsiveWidth(80)}}
            placeholder={'saud@me.com'}
            onChangeText={(key: any) => {
              setEmail(key);
            }}
          />
        </View>
        <View
          style={{
            borderBottomColor: Colors.SEARCH_BEHIND,
            borderBottomWidth: 1,
            marginTop: responsiveHeight(-1.5),
            marginEnd: responsiveWidth(5),
            marginHorizontal: responsiveWidth(5),
          }}
        />
      </View>

      <View
            style={{
              width: responsiveWidth(90),
              height: responsiveHeight(8),
              backgroundColor: 'white',
              borderRadius: 15,
              marginHorizontal: responsiveWidth(5),
              marginTop: responsiveHeight(4),
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              elevation: 5,
              alignItems: 'center',
              flexDirection: 'column',
            }}>

           <View style={{flexDirection: 'row', justifyContent: 'space-between',alignItems:'center',width:responsiveWidth(80)}}>

            <Text style={{alignSelf:'center',marginTop:responsiveHeight(1),color:Colors.BLACK_COLOR}}>Personal ID</Text>
            <Image source={Images.CHECKMARK_ICON} resizeMode='contain' style={{width: responsiveWidth(5), marginTop:responsiveHeight(2),
                height: responsiveHeight(5)}} />
            
            </View>      
           
           
          </View>

          <View
            style={{
              width: responsiveWidth(90),
              height: responsiveHeight(8),
              backgroundColor: 'white',
              borderRadius: 15,
              marginHorizontal: responsiveWidth(5),
              marginTop: responsiveHeight(2),
              marginBottom:responsiveHeight(3),
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              elevation: 5,
              alignItems: 'center',
              flexDirection: 'column',
            }}>

           <View style={{flexDirection: 'row', justifyContent: 'space-between',alignItems:'center',width:responsiveWidth(80)}}>

            <Text style={{alignSelf:'center',marginTop:responsiveHeight(1),color:Colors.BLACK_COLOR}}>Driver Lisence</Text>
            <Image source={Images.CHECKMARK_ICON} resizeMode='contain' style={{width: responsiveWidth(5), marginTop:responsiveHeight(2),
                height: responsiveHeight(5)}} />
            
            </View>      
           
           
          </View>




          <View
            style={{
              width: responsiveWidth(100),
              height: responsiveHeight(25),
              backgroundColor: 'white',
              borderRadius: 15,
              marginBottom:responsiveHeight(-10),
              marginTop: responsiveHeight(2),
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              elevation: 10,
              alignItems: 'center',
              flexDirection: 'column',
            }}>

           <View style={{marginTop:responsiveHeight(4)}}>
          <CustomButton
            title={'Update'}
            onPress={() => {
              console.log('Select successfully');
              navigation.navigate('AddVehicle')
              
              
            }}
            customHeight={responsiveHeight(7)}
            customWidth={responsiveWidth(90)}
          />  
          </View>   
           
           
          </View>
       


    </ScrollView>
  );
}
const styles = StyleSheet.create({
  profileImage: {
    width: 100,
    height: 100,
    marginTop: responsiveHeight(2),
    borderRadius: 75,
    borderColor: Colors.WHITE_COLOR,
    borderWidth: 8,
    alignSelf: 'center',
    marginStart: responsiveWidth(1),
  },

  highlighTrue: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: responsiveHeight(3),
    width: responsiveWidth(80),
  },
  highlighFalse: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    marginTop: responsiveHeight(3),
    width: responsiveWidth(80),
  },
});
