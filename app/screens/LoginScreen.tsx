import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Colors from '../constant/Colors';
import Images from '../constant/Images';

import {useNavigation} from '@react-navigation/native';
import CustomButton from '../components/Buttons/CommonButton';
import CustomTextInput from '../components/TextInput';
import {Checkbox} from 'react-native-paper';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {logInSchema} from '../validations';
import apiResponseGenerator from '../service/apiGenerator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {saveString} from '../utils/storage';
import store from '../redux/store';
import {storeAllData} from '../utils/storeData';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [showEmailError, setShowEmailError] = useState(false);
  const [password, setPassword] = useState('');
  const [showPasswordError, setShowPasswordError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigation: any = useNavigation();
  const [myCheck, setCheck] = useState(false);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(logInSchema),
  });

  const HandleLoginIn = async (data: any) => {
    const payload = {
      userName: data.email,
      password: data.password,
      clientId: 'je261a23rghpqdlsrhh3el3ic',
    };
    console.log('handleSubmit runs');
    try {
      setLoading(true);
      const response = await apiResponseGenerator({
        method: 'post',
        url: '/posts',
       // body: payload,
      });
      if (response) {
        setLoading(false);
        console.log('response', response);
        const newUser = {
        //   id: response.data.userId, // Change to userId
        // title: response.data.title,
        // body: response.data.body,
        };

        
        // console.log(newUser);
        
        storeAllData({key: 'onLogin', value: 'true'});

        
        // await AsyncStorage.setItem('authToken', response?.data?.token);
        await navigation.navigate('DrawerNavigator');
        //await navigation.navigate('BottomBar');
      }
    } catch (error: any) {
      setLoading(false);
      console.warn(error + '');
      
    }
    finally {
      setLoading(false); // Set loading to false after API call completes
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: Colors.WHITE_COLOR}}>
      {loading ? (
        <View
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
          }}>
          <ActivityIndicator size="large" color={Colors.PRIMARY_COLOR} />
        </View>
      ):(
      <View>

      
      <Image
        source={Images.LoginBackground}
        resizeMode="contain"
        style={{
          width: responsiveWidth(40),
          height: responsiveHeight(40),
          marginTop: responsiveHeight(-5),
          justifyContent: 'center',
          alignSelf: 'center',
        }}
      />

      <Text
        style={{
          color: Colors.DARK_PRIMARY,
          fontSize: 15,
          fontWeight: '500',
          alignSelf: 'center',
          marginTop: -responsiveHeight(11),
        }}>
        POOLERO
      </Text>

      <Text
        style={{
          fontSize: responsiveFontSize(4.5),
          fontWeight: '600',
          marginStart: responsiveWidth(4),
          marginTop: responsiveHeight(2),
          color: Colors.BLACK_COLOR,
        }}>
        Welcome Back!
      </Text>

      <View style={{flexDirection: 'row'}}>
        <Text style={{marginStart: responsiveWidth(5)}}>
          Don't have an account?
        </Text>

        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text
            style={{
              marginStart: responsiveWidth(3),
              color: Colors.PRIMARY_COLOR,
              fontWeight: '500',
            }}>
            Sign up now!
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{marginTop: responsiveHeight(4)}}>
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => {
            return (
              <CustomTextInput
                placeholder={'Enter your email'}
                onChangeText={onChange}
                value={value}
                icon={Images.EMAIL_LOGIN}
                errorMessage={errors.email?.message}
              />
            );
          }}
          name="email"
        />

        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => {
            return (
              <CustomTextInput
                placeholder={'Enter your password'}
                onChangeText={onChange}
                value={value}
                icon={Images.PASSWORD_LOGIN}
                isPassword={true}
                errorMessage={errors.password?.message}
              />
            );
          }}
          name="password"
        />
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-between',marginTop:responsiveHeight(2)}}>
        {/* <Checkbox
          status={myCheck ? 'checked' : 'unchecked'}
          onPress={() => {
            setCheck(!myCheck);
          }}
        /> */}
        <TouchableOpacity onPress={() => navigation.navigate('RecoveryEmail')}>
          <Text style={{marginEnd: responsiveWidth(6),marginStart:responsiveWidth(6), fontWeight: 'bold'}}>
            Forget Password?
          </Text>
        </TouchableOpacity>
      </View>

      <CustomButton
        title="Login"
        onPress={handleSubmit(HandleLoginIn)}
        margintop={responsiveHeight(3)}
      />
      <View style={{marginTop: responsiveHeight(2), alignItems: 'center'}}>
        <Text style={{fontWeight: '600', fontSize: responsiveFontSize(2)}}>
          - - - - - - - OR - - - - - - -
        </Text>
      </View>

      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        }}>
        <TouchableOpacity onPress={() => console.log('Google')}>
          <Image
            source={Images.GOOGLE}
            resizeMode="contain"
            style={{
              width: responsiveWidth(10),
              height: responsiveHeight(10),
              marginEnd: responsiveWidth(3),
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => console.log('Facebook')}>
          <Image
            source={Images.FACEBOOK}
            style={{
              width: responsiveWidth(10),
              resizeMode: 'contain',
              height: responsiveHeight(10),
              marginStart: responsiveWidth(3),
              marginEnd: responsiveWidth(3),
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => console.log('Twitter')}>
          <Image
            resizeMode="contain"
            source={Images.TWITTER}
            style={{
              width: responsiveWidth(10),
              height: responsiveHeight(10),
              marginStart: responsiveWidth(3),
              marginEnd: responsiveWidth(1),
            }}
          />
        </TouchableOpacity>
      </View>

      </View>
      )}
    </View>
  );
}
