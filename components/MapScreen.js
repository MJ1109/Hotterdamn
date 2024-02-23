import React, { useEffect } from 'react';
import { StyleSheet, View, Dimensions, } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapScreen = ({ museums }) => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 51.9194,
          longitude: 4.4792,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      >
        {museums.map((museum) => (
          <Marker
            key={museum.title}
            coordinate={{
              latitude: museum.latitude,
              longitude: museum.longitude,
            }}
            title={museum.title}
            description={museum.description}
          />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default MapScreen;