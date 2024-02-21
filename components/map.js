import React, { useEffect } from 'react';
import { StyleSheet, View, Dimensions, } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function Map({ location, markers, route } ) {
  //create map reference
  const mapView = React.createRef();

  return (
    <View style={styles.container}>
      <MapView style={styles.map}> 
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});