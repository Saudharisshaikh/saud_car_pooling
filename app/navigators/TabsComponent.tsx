import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import GroupsScreen from '../screens/GroupsScreen';
import PessengersScreen from '../screens/PessengersScreen';
import FavouriteScreen from '../screens/FavouriteScreen';
import ContactsScreen from '../screens/ContactsScreen';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import Colors from '../constant/Colors';
import NewRequestScreen from '../screens/NewRequestScreen';
import { Text, View } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export default function TabsComponent() {
    return (
        <Tab.Navigator
    screenOptions={{
      tabBarLabelStyle: { fontSize: 12 }, // Adjust the font size as needed
      tabBarStyle: {
        width: responsiveWidth(100), // Adjust the width of each tab as needed
         // Adjust the horizontal padding between tabs
      }, // Adjust the width of each tab as needed
      tabBarIndicatorStyle: {
        backgroundColor: Colors.PRIMARY_COLOR, // Adjust the color of the indicator
        height: 2, // Adjust the height of the indicator
      },
      tabBarScrollEnabled: true, // Enable scrolling for long tab names
    }}
    >
      <Tab.Screen name='NewRequest'component={NewRequestScreen}/>
      <Tab.Screen name="Pessengers" component={PessengersScreen} />
      <Tab.Screen name="Favourite" component={FavouriteScreen} />
      <Tab.Screen name="Group" component={GroupsScreen} />
      <Tab.Screen name='Contacts' component={ContactsScreen} />
    </Tab.Navigator>
      );
}
