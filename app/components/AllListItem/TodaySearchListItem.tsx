// SearchListItem.js
import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Images from '../../constant/Images';
import Colors from '../../constant/Colors';
import FavouritePlacesModal from '../FavouritePlacesModal';

export default function TodaySearchListItem({item}: any) {
  const [menuVisible, setMenuVisible] = useState(false);
  const [visible, setVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleMarkFavourite = () => {
    // Implement logic for editing an item
    // For example, you can pass the item details to a modal or perform an action.
    console.log('Set as Favourite:', item);
    setVisible(true);
    toggleMenu(); // Close the menu after handling the action (edit/remove)
  };

  const handleRemove = () => {
    // Implement logic for removing an item
    // For example, you can confirm the deletion or directly remove the item.
    console.log('Remove item:', item);
    toggleMenu(); // Close the menu after handling the action (edit/remove)
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <Image
        resizeMode="contain"
        source={item.searchIcon}
        style={{height: responsiveHeight(6), width: responsiveWidth(13)}}
      />
      <View
        style={{
          flexDirection: 'column',
          marginStart: responsiveWidth(4),
          width: responsiveWidth(70),
        }}>
        <Text>{item.location}</Text>
        <Text>{item.locationAddress}</Text>
      </View>

      <TouchableOpacity onPress={toggleMenu}>
        <Image
          source={Images.SEARCH_MENU_ICON}
          style={{height: responsiveHeight(7), width: responsiveWidth(7)}}
          resizeMode="contain"
        />
      </TouchableOpacity>

      {menuVisible && (
        <View
          style={{
            position: 'absolute',
            right: 12,
            top: 5,
            height: responsiveHeight(7.5),
            width: responsiveWidth(35),
            backgroundColor: Colors.WHITE_COLOR,
            elevation: 5,
            justifyContent: 'center',
            borderRadius: responsiveHeight(1),
          }}>
          <TouchableOpacity onPress={handleMarkFavourite}>
            <Text
              style={{
                marginStart: responsiveWidth(3),
                color: Colors.BLACK_COLOR,
              }}>
              Set as Favourite
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{marginTop: responsiveHeight(1)}}
            onPress={handleRemove}>
            <Text
              style={{
                marginStart: responsiveWidth(3),
                color: Colors.ACCENT_COLOR,
              }}>
              Remove
            </Text>
          </TouchableOpacity>
        </View>
      )}
      {visible && (
        <FavouritePlacesModal
          modalConfirmationisible={visible}
          setModalConfirmationVisible={setVisible}
          favouriteAddress={item.locationAddress}
        />
      )}
    </View>
  );
}
