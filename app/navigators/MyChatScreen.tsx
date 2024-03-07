import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Images from '../constant/Images';
import Colors from '../constant/Colors';
import {useNavigation} from '@react-navigation/native';
import ChatListItem from '../components/AllListItem/ChatListItem';

export default function MyChatScreen() {
  const navigation: any = useNavigation();
  const [contact, setContact] = useState(true);
  const [group, setGroup] = useState(false);

  const toggleBackground = () => {
    console.log('hello');
    setContact(!contact);
    setGroup(!group);

   
  };

  const renderItem = ({item}: any) => (
    <ChatListItem isGroup={group}/>
  );

  const cardArray = [
    {
      id: '1',
      location: 'Home',
      locationAddress: 'Bukhari Apartments block b Khyaban.',
      searchIcon: Images.LOCATION_SEARCH_ICON,
    },
    {
      id: '2',
      location: 'Office',
      locationAddress: 'Latifabad no 7 David Bekham Lane Hyderabad.',
      searchIcon: Images.LOCATION_SEARCH_ICON,
    },
  ];

  return (
    <View style={{backgroundColor: Colors.WHITE_COLOR, flex: 1}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'row', marginTop: responsiveHeight(2)}}>
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

          <Text
            style={{
              marginTop: responsiveHeight(1),
              color: Colors.BLACK_COLOR,
              fontSize: responsiveFontSize(2.2),
              fontWeight: 'bold',
              justifyContent: 'center',
              alignItems: 'center',
              marginStart: responsiveWidth(5),
            }}>
            Chat
          </Text>
        </View>

        <View>
          <Image
            source={Images.SEARCH_RIDE_ICON}
            style={{
              width: 45,
              height: 45,
              marginTop: responsiveHeight(1.8),
              marginEnd: responsiveWidth(3),
            }}
            resizeMode="contain"
          />
        </View>
      </View>

      <View
        style={{
          borderBottomWidth: 1,
          borderColor: Colors.SEARCH_BEHIND,
          marginVertical: responsiveHeight(0),
          marginStart: responsiveWidth(-4),
          marginEnd: responsiveWidth(-4),
          elevation: 7,
        }}
      />

      <View style={{flexDirection: 'column', marginTop: responsiveHeight(5)}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginStart: responsiveWidth(2),
          }}>
          <TouchableOpacity onPress={toggleBackground}>
            <View
              style={{
                width: responsiveWidth(42),
                height: responsiveHeight(4),
                borderRadius: responsiveHeight(2),
                backgroundColor: contact
                  ? Colors.CHIPS_BACK_COLOR
                  : Colors.WHITE_COLOR,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={contact ? Images.PHONE_ICON : Images.PHONE_ICON}
                style={{
                  height: responsiveHeight(4.5),
                  width: responsiveWidth(4.5),
                }}
                resizeMode="contain"
              />
              <Text
                style={{
                  marginStart: responsiveWidth(1),
                  alignSelf: 'center',
                  color: contact ? Colors.PRIMARY_COLOR : Colors.BLACK_COLOR,
                }}>
                Contact
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={toggleBackground}>
            <View
              style={{
                width: responsiveWidth(42),
                height: responsiveHeight(4),
                borderRadius: responsiveHeight(2),
                flexDirection: 'row',
                backgroundColor: group
                  ? Colors.CHIPS_BACK_COLOR
                  : Colors.WHITE_COLOR,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={group ? Images.GROUPS_ICON : Images.GROUPS_ICON}
                style={{
                  height: responsiveHeight(4.5),
                  width: responsiveWidth(4.5),
                  marginStart: responsiveWidth(3),
                }}
                resizeMode="contain"
              />
              <Text
                style={{
                  marginStart: responsiveWidth(1),
                  alignSelf: 'center',
                  color: group ? Colors.PRIMARY_COLOR : Colors.BLACK_COLOR,
                }}>
                Group
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{alignItems: 'center', marginTop: responsiveHeight(2)}}>
        <FlatList
          data={cardArray}
          renderItem={renderItem}
          keyExtractor={(item, index) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profileImage: {
    width: 60,
    height: 60,
    marginTop: responsiveHeight(0),
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
