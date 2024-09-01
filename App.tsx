import React from 'react';
import { Text, View,PermissionsAndroid,TouchableOpacity } from 'react-native';






function App(): React.JSX.Element {

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Cool Photo App Location Permission',
          message:'Cool Photo App needs access to your location ' ,  
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the location');
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  

  return (
    <View>
      <Text>Kamal</Text>
    </View>
    
  );
}



export default App;
