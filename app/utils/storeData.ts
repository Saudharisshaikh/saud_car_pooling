import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeAllData = async ({ key, value }: { key: string; value: any }) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
    console.log('Data stored successfully!');
  } catch (error) {
    console.log('Error storing data:', error);
  }
};

export const retrieveAllData = async ({ key }: { key: string }) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null && value !== undefined) {
      console.log('Retrieved data:', value);
      return JSON.parse(value);
    } else {
      console.log('No data found for key:', key);
      return null;
    }
  } catch (error) {
    console.log('Error retrieving data:', error);
    return null;
  }
};
