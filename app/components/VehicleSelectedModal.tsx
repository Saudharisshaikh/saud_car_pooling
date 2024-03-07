import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Images from '../constant/Images';
import Colors from '../constant/Colors';
import {color} from 'react-native-reanimated';
import HighlightButton from './Buttons/HighlightButton';
import CustomButton from './Buttons/CommonButton';
import CheckBox from '@react-native-community/checkbox';

export default function VehicleSelectedModal({
  showVehicle,
  setShowVehicle,
}: any) {
  const [activeSearch, setActiveSearch] = useState(true);
  const [activeRide, setActiveRide] = useState(false);
  const [fuel, setFuel] = useState('');
  const [seatOffer, setSeatOffer] = useState('');
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [activeCar, setActiveCar] = useState(true);
  const [activeBike, setActiveBike] = useState(false);

  const toggleBackground = () => {
    console.log('hello');
    setActiveBike(!activeBike);
    setActiveCar(!activeCar);
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showVehicle}
      onRequestClose={() => {
        setShowVehicle(false);
      }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.63)',
        }}>
        <View
          style={{
            width: responsiveWidth(85),
            height: responsiveHeight(56),
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
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginStart: responsiveWidth(2),
            }}>
            <TouchableOpacity onPress={toggleBackground}>
              <View
                style={{
                  width: responsiveWidth(35),
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
                    color: activeCar
                      ? Colors.PRIMARY_COLOR
                      : Colors.BLACK_COLOR,
                  }}>
                  Car
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={toggleBackground}>
              <View
                style={{
                  width: responsiveWidth(35),
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
                    color: activeBike
                      ? Colors.PRIMARY_COLOR
                      : Colors.BLACK_COLOR,
                  }}>
                  Motorbike
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'row',

              height: responsiveHeight(10),
              marginTop: responsiveHeight(2),
            }}>
            <View style={{flex: 0.5, flexDirection: 'column'}}>
              <Text style={{fontSize: responsiveFontSize(1.5)}}>{activeCar?'Body Type':'Bike Type'}</Text>

              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{marginTop: responsiveHeight(0.7)}}>
                  HatchBack
                </Text>

                <Image
                  source={Images.DROP_DOWN_ICON}
                  resizeMode="contain"
                  style={{
                    height: responsiveHeight(5),
                    width: responsiveWidth(5),
                    marginEnd: responsiveWidth(5),
                  }}
                />
              </View>
              <View
                style={{
                  borderBottomColor: Colors.SEARCH_BEHIND,
                  borderBottomWidth: 1,
                  marginEnd: responsiveWidth(5),
                }}
              />
            </View>

            <View style={{flex: 0.5, flexDirection: 'column'}}>
              <Text style={{fontSize: responsiveFontSize(1.5)}}>
                License Plate
              </Text>
              <TextInput
                style={{marginTop: responsiveHeight(-2)}}
                placeholder={'1256E5'}
                onChangeText={txt => {
                  setSeatOffer(txt);
                }}
              />
              <View
                style={{
                  borderBottomColor: Colors.SEARCH_BEHIND,
                  borderBottomWidth: 1,

                  marginEnd: responsiveWidth(5),
                }}
              />
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',

              height: responsiveHeight(10),
            }}>
            <View style={{flex: 0.5, flexDirection: 'column'}}>
              <Text style={{fontSize: responsiveFontSize(1.5)}}>
                Seat Offering
              </Text>
              <TextInput
                style={{marginTop: responsiveHeight(-2)}}
                placeholder={'Number of seats'}
                onChangeText={txt => {
                  setSeatOffer(txt);
                }}
              />
              <View
                style={{
                  borderBottomColor: Colors.SEARCH_BEHIND,
                  borderBottomWidth: 1,

                  marginEnd: responsiveWidth(5),
                }}
              />
            </View>

            <View style={{flex: 0.5, flexDirection: 'column'}}>
              <Text style={{fontSize: responsiveFontSize(1.5)}}>
                Seat Offering
              </Text>
              <TextInput
                style={{marginTop: responsiveHeight(-2)}}
                placeholder={'Number of seats'}
                onChangeText={txt => {
                  setSeatOffer(txt);
                }}
              />
              <View
                style={{
                  borderBottomColor: Colors.SEARCH_BEHIND,
                  borderBottomWidth: 1,

                  marginEnd: responsiveWidth(5),
                }}
              />
            </View>
          </View>

          <View
            style={{flexDirection: 'column', marginTop: responsiveHeight(-1)}}>
            <Text style={{fontSize: responsiveFontSize(1.5)}}>Model/Brand</Text>
            <TextInput
              style={{marginTop: responsiveHeight(-2)}}
              placeholder={'Honda Civic'}
              onChangeText={txt => {
                setSeatOffer(txt);
              }}
            />
            <View
              style={{
                borderBottomColor: Colors.SEARCH_BEHIND,
                borderBottomWidth: 1,

                marginEnd: responsiveWidth(5),
              }}
            />
          </View>

           {activeCar?( <View
            style={{flexDirection: 'column', marginTop: responsiveHeight(2)}}>
            <Text style={{fontSize: responsiveFontSize(1.5)}}>Features</Text>
            <TextInput
              style={{marginTop: responsiveHeight(-2)}}
              placeholder={'Honda Civic'}
              onChangeText={txt => {
                setSeatOffer(txt);
              }}
            />
            <View
              style={{
                borderBottomColor: Colors.SEARCH_BEHIND,
                borderBottomWidth: 1,
                marginEnd: responsiveWidth(5),
              }}
            />
          </View>):(  <View>
            <View style={{flexDirection: 'row',marginTop:responsiveHeight(2)}}>
              <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={newValue => setToggleCheckBox(newValue)}
              />

              <Text
                style={{
                  marginTop: responsiveHeight(0.7),
                  color: Colors.BLACK_COLOR,
                }}>
                Requried Pillion to bring their helmet.
              </Text>
            </View>
            <Text style={{marginStart: responsiveWidth(9)}}>
              Uncheck if you brought extra helmet.
            </Text>
          </View>)}
         

        

          <View style={{flexDirection: 'row', marginTop: responsiveHeight(4)}}>
            <HighlightButton
              title={'Cancel'}
              onPress={() => {
                console.log('Cancel Bike');
                setShowVehicle(false);
              }}
              backgroundColor={Colors.PRIMARY_COLOR}
            />

            <CustomButton
              title="Select"
              onPress={() => {
                console.log('Select successfully');
                setShowVehicle(false);
              }}
              customHeight={responsiveHeight(5.7)}
              customWidth={responsiveWidth(37)}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}
