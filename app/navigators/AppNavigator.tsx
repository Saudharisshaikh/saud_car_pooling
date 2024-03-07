import * as React from 'react';
// import {View, Text} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Images from '../constant/Images';
import LoginScreen from '../screens/LoginScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import {StackParamList} from './types';
import SignupScreen from '../screens/SignupScreen';
import UtilsScreen from '../screens/UtilsScreen';
import RecoveryEmailScreen from '../screens/RecoveryEmailScreen';
import ChangePasswordScreen from '../screens/ChangePasswordScreen';
import OnBoardingScreen from '../screens/OnBoardingScreen';
import HomeScreen from '../screens/HomeScreen';
import DrawerNavigator from './DrawerNavigator';
import StartingPointScreen from '../screens/StartingPointScreen';
import RouteRiderScreen from '../screens/RouteRiderScreen';
import MapSelectionScreen from '../screens/MapSelectionScreen';
import TabNavigator from './TabNavigator';
import PaymentScreen from '../screens/PaymentScreen';
import GroupsScreen from '../screens/GroupsScreen';
import PessengersScreen from '../screens/PessengersScreen';
import FavouriteScreen from '../screens/FavouriteScreen';
import ContactsScreen from '../screens/ContactsScreen';
import NewRequestScreen from '../screens/NewRequestScreen';
import TripDetailScreen from '../screens/TripDetailScreen';
import FeedbackScreen from '../screens/FeedbackScreen';
import CheckoutScreen from '../screens/CheckoutScreen';
import Group from '../screens/Group';
import ProfileScreen from '../screens/ProfileScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import AddVehicleScreen from '../screens/AddVehicleScreen';

const Stack = createNativeStackNavigator<StackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        animation: 'slide_from_right',
      }}>
      <Stack.Screen
        name={'Welcome'}
        component={WelcomeScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name={'OnBoarding'}
        component={OnBoardingScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name={'Login'}
        component={LoginScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name={'Signup'}
        component={SignupScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name={'Utils'}
        component={UtilsScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name={'RecoveryEmail'}
        component={RecoveryEmailScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name={'ChangePassword'}
        component={ChangePasswordScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name={'Home'}
        component={HomeScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="StartingPoint"
        component={StartingPointScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="MapSelection"
        component={MapSelectionScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="RouteRider"
        component={RouteRiderScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Payment"
        component={PaymentScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Pessenger"
        component={PessengersScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Group"
        component={GroupsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Favourite"
        component={FavouriteScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Contacts"
        component={ContactsScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="NewRequest"
        component={NewRequestScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="TripDetail"
        component={TripDetailScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Feedback"
        component={FeedbackScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Checkout"
        component={CheckoutScreen}
        options={{headerShown: false}}
      />

       <Stack.Screen
        name="GroupNavigator"
        component={Group}
        options={{headerShown: false}}
      />
      
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
      
      <Stack.Screen
        name="EditProfile"
        component={EditProfileScreen}
        options={{headerShown: false}}
      />

       <Stack.Screen
        name="AddVehicle"
        component={AddVehicleScreen}
        options={{headerShown: false}}
      />

      


    </Stack.Navigator>
  );
};

export default StackNavigator;
