import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Dimensions, TouchableOpacity, Text } from 'react-native';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';

const MapScreen = ({ museums, route, navigation, theme }) => {
  const { params } = route;
  const selectedMuseum = params?.museum || null;
  const zoomToMuseum = params?.zoomToMuseum || false;
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

  useEffect(() => {
    // Focus on the selected museum when the component mounts
    if (mapView.current && selectedMuseum) {
      mapView.current.fitToCoordinates(
        [
          {
            latitude: selectedMuseum.latitude,
            longitude: selectedMuseum.longitude,
          },
        ],
        {
          edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
          animated: true,
        }
      );
    }
  }, [selectedMuseum]);

  const handleShowOnList = (museum) => {
    // Navigate to the list screen and pass the selected museum
    navigation.navigate('List', { museum });
  };

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        // style={styles.map}
        initialRegion={
          zoomToMuseum
            ? {
                latitude: selectedMuseum.latitude,
                longitude: selectedMuseum.longitude,
                latitudeDelta: 0.02,
                longitudeDelta: 0.02,
              }
            : {
                latitude: 51.9194,
                longitude: 4.4792,
                latitudeDelta: 0.1,
                longitudeDelta: 0.1,
              }
        }
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
          >
            <Callout>
              <View>
                <TouchableOpacity onPress={() => handleShowOnList(marker)}>
                  <Text>Show on List</Text>
                </TouchableOpacity>
              </View>
            </Callout>
          </Marker>
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
