import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Images from '../constant/Images';
import {useNavigation} from '@react-navigation/native';
import Colors from '../constant/Colors';
import CustomButton from '../components/Buttons/CommonButton';

export default function AddVehicleScreen() {
  const navigation: any = useNavigation();
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [activeCar, setActiveCar] = useState(true);
  const [activeBike, setActiveBike] = useState(false);
  const [plateNumber, setPlateNumber] = useState('');
  const [fuel, setFuel] = useState('');
  const [model, setModel] = useState('');
  const toggleBackground = () => {
    console.log('hello');
    setActiveBike(!activeBike);
    setActiveCar(!activeCar);
  };

  const [selectedItem, setSelectedItem] = useState(null);

  const data = [1, 2, 3, 4]; // Your data array

  const renderItem = ({item}: any) => (
    <TouchableOpacity
      style={[styles.item, selectedItem === item && styles.selectedItem]}
      onPress={() => setSelectedItem(item)}>
      <Text
        style={[styles.itemText, selectedItem === item && styles.selectedText]}>
        {item}
      </Text>
    </TouchableOpacity>
  );

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
            Add Vehicle
          </Text>
        </View>

        <View></View>
      </View>

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
                backgroundColor: activeCar
                  ? Colors.CHIPS_BACK_COLOR
                  : Colors.WHITE_COLOR,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={activeCar ? Images.CAR_RIDE_ACTIVE : Images.CAR_RIDE}
                style={{
                  height: responsiveHeight(4),
                  width: responsiveWidth(4),
                }}
                resizeMode="contain"
              />
              <Text
                style={{
                  marginStart: responsiveWidth(1),
                  alignSelf: 'center',
                  color: activeCar ? Colors.PRIMARY_COLOR : Colors.BLACK_COLOR,
                }}>
                Car
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
                backgroundColor: activeBike
                  ? Colors.CHIPS_BACK_COLOR
                  : Colors.WHITE_COLOR,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={
                  activeBike
                    ? Images.ACTIVE_BIKE_ICON
                    : Images.INACTIVE_BIKE_ICON
                }
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
                  color: activeBike ? Colors.PRIMARY_COLOR : Colors.BLACK_COLOR,
                }}>
                Motorbike
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <Image
        source={Images.CAROLLA_ICON}
        resizeMode="contain"
        style={{
          width: responsiveWidth(20),
          height: responsiveHeight(20),
          alignSelf: 'center',
        }}
      />

      <Text
        style={{
          alignSelf: 'center',
          marginTop: responsiveHeight(-2),
          color: Colors.PRIMARY_COLOR,
          fontSize: responsiveFontSize(2),
        }}>
        Change Pictures
      </Text>

      <View
        style={{flexDirection: 'column', marginHorizontal: responsiveWidth(3)}}>
        <Text
          style={{
            fontSize: responsiveFontSize(1.5),
            color: Colors.PRIMARY_COLOR,
            marginStart: responsiveWidth(4),
            marginTop: responsiveHeight(3),
          }}>
          Body Type
        </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginStart: responsiveWidth(4),
          }}>
          <Text style={{marginTop: responsiveHeight(1)}}>Sedan</Text>
          <Image
            source={Images.DROP_DOWN_ICON}
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
            value={plateNumber}
            style={{
              marginTop: responsiveHeight(-1.3),
              fontWeight: '500',
              width: responsiveWidth(80),
            }}
            placeholder={'Md536356'}
            onChangeText={(key: any) => {
              setPlateNumber(key);
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
          flexDirection: 'row',
          marginTop: responsiveHeight(5),
          height: responsiveHeight(10),
        }}>
        <View
          style={{flexDirection: 'column', marginStart: responsiveWidth(7)}}>
          <Text
            style={{
              fontSize: responsiveFontSize(1.5),
              color: Colors.PRIMARY_COLOR,
              marginStart: responsiveWidth(1),
            }}>
            Fuel/Km
          </Text>
          <TextInput
            value={fuel}
            style={{
              marginTop: responsiveHeight(-1),
              marginStart: responsiveWidth(0),
            }}
            placeholder={'4.0'}
            onChangeText={txt => {
              setFuel(txt);
            }}
          />
          <View
            style={{
              borderBottomColor: Colors.SEARCH_BEHIND,
              borderBottomWidth: 1,
              width: responsiveWidth(24),
              marginTop: responsiveHeight(-1),
              marginEnd: responsiveWidth(5),
            }}
          />
        </View>

        <View style={{flexDirection: 'column'}}>
          <Text
            style={{
              fontSize: responsiveFontSize(1.5),
              color: Colors.PRIMARY_COLOR,
              marginStart: responsiveWidth(2),
            }}>
            Model/Brand
          </Text>
          <TextInput
            value={model}
            style={{
              marginTop: responsiveHeight(-1),
              marginStart: responsiveWidth(1),
            }}
            placeholder={'Carolla XLS'}
            onChangeText={txt => {
              setModel(txt);
            }}
          />
          <View
            style={{
              borderBottomColor: Colors.SEARCH_BEHIND,
              borderBottomWidth: 1,
              marginTop: responsiveHeight(-1),
              marginEnd: responsiveWidth(5),
              marginStart: responsiveWidth(2),
              width: responsiveWidth(53),
            }}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'column',
          marginTop: responsiveHeight(0),
          marginStart: responsiveWidth(6),
        }}> 
        <Text style={{fontSize: responsiveFontSize(2), color: Colors.BLACK_COLOR,fontWeight:'500'}}>Seat Offering</Text>
        <FlatList
          style={{marginStart: responsiveWidth(-1)}}
          showsHorizontalScrollIndicator={true}
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.toString()}
          horizontal={true}
        />
      </View>

      <View
            style={{
              width: responsiveWidth(100),
              height: responsiveHeight(25),
              backgroundColor: 'white',
              borderRadius: 15,
              marginBottom:responsiveHeight(-10),
              marginTop: responsiveHeight(10),
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
  item: {
    width: 45,
    height: 45,
    marginTop: responsiveHeight(2),
    borderRadius: 75,
    borderColor: Colors.PRIMARY_COLOR,
    borderWidth: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: responsiveWidth(2),
    marginStart: responsiveWidth(1),
  },

  selectedItem: {
    width: 45,
    height: 45,
    marginTop: responsiveHeight(2),
    borderRadius: 75,
    backgroundColor: Colors.PRIMARY_COLOR,
    borderWidth: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginStart: responsiveWidth(1),
  },

  itemText: {
    fontSize: responsiveFontSize(2),
    color: Colors.PRIMARY_COLOR,
  },
  selectedText: {
    fontSize: responsiveFontSize(2),
    color: 'white',
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
