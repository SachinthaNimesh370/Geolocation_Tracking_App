import React from 'react';
import { Text, View,PermissionsAndroid,TouchableOpacity, Alert, Linking } from 'react-native';
import Geolocation from '@react-native-community/geolocation';






function App(): React.JSX.Element {

  const Permission = async () => {
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

  const [currentLocation,setCurrentLocation]=useState(null)

  const getCurrentLocation =()=>{
    Geolocation.getCurrentPosition(
      position=>{ const {latitude,longitude}=position.coords;
      setCurrentLocation({latitude,longitude})
      console.log(latitude,longitude)
    },
    error => Alert.alert('Error',error.message),
    {enableHighAccuracy:true,timeout:15000,maximumAge:10000}   
    )
  }

  

  const openMaps=()=>{
    const{latitude,longitude}= currentLocation
    if(latitude&&longitude){
      const url =`https://www.google.com/map/search/?api=1$query=${latitude},${longitude}`
      Linking.openURL(url)
    }
    else{
      Alert.alert('location not available')
    }

  }
  

  return (
    <View>
      <Text>Kamal</Text>
    </View>
    
  );
}



export default App;
function useState(arg0: null): [any, any] {
  throw new Error('Function not implemented.');
}

