import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapScreen = ({ museums, route }) => {
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

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
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
      >
        {markers.map((marker) => (
          <Marker
            key={marker.key}
            coordinate={marker.coordinate}
            title={marker.title}
            description={marker.description}
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
