import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Dimensions, Text } from 'react-native';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';

const MapScreen = ({ museums, navigation, theme }) => {
  const mapView = useRef(null);
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    // Create markers from the museums data
    const museumMarkers = museums.map((museum) => ({
      key: museum.title,
      coordinate: {
        latitude: museum.latitude,
        longitude: museum.longitude,
      },
      title: museum.title,
      description: museum.description,
    }));

    setMarkers(museumMarkers);
  }, [museums]);

  const handleShowOnList = (title) => {
    // Navigate to the list screen with the selected museum's title
    navigation.navigate('List', { museum: { title } });
  };

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 51.9194,
          longitude: 4.4792,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
        ref={mapView}
        showsUserLocation={true}
        showsMyLocationButton={true}
        showsCompass={true}
        showsTraffic={true}
        userInterfaceStyle={theme}
        style={styles.map}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.key}
            coordinate={marker.coordinate}
            title={marker.title}
            description={marker.description}
            // onPress={() => handleShowOnList(marker.title)}
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
    height: Dimensions.get('window').height
  },
});

export default MapScreen;
