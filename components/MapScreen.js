// import React, { useState, useEffect, useRef } from 'react';
// import { StyleSheet, View, Dimensions, Text, TouchableOpacity } from 'react-native';
// import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';

// const MapScreen = ({ museums, route, navigation, theme }) => {
//   const { params } = route;
//   const selectedMuseum = params?.museum || null;
//   const zoomToMuseum = params?.zoomToMuseum || false;
//   const mapView = useRef(null);
//   const [markers, setMarkers] = useState([]);

//   useEffect(() => {
//     // Create markers from the museums data
//     const museumMarkers = museums.map((museum) => ({
//       key: museum.title,
//       coordinate: {
//         latitude: museum.latitude,
//         longitude: museum.longitude,
//       },
//       title: museum.title,
//       description: museum.description,
//     }));

//     setMarkers(museumMarkers);
//   }, [museums]);

//   useEffect(() => {
//     // Focus on the selected museum when the component mounts
//     if (mapView.current && selectedMuseum) {
//       mapView.current.fitToCoordinates(
//         [
//           {
//             latitude: selectedMuseum.latitude,
//             longitude: selectedMuseum.longitude,
//           },
//         ],
//         {
//           edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
//           animated: true,
//         }
//       );
//     }
//   }, [selectedMuseum]);

//   const handleShowOnList = (museum) => {
//     // Navigate to the list screen and pass the selected museum
//     navigation.navigate('List', { museum });
//   };

//   const truncateDescription = (description) => {
//     // Truncate the description to 8 words
//     return description.split(' ').slice(0, 8).join(' ');
//   };

//   return (
//     <View style={styles.container}>
//       <MapView
//         provider={PROVIDER_GOOGLE}
//         initialRegion={
//           zoomToMuseum
//             ? {
//                 latitude: selectedMuseum.latitude,
//                 longitude: selectedMuseum.longitude,
//                 latitudeDelta: 0.02,
//                 longitudeDelta: 0.02,
//               }
//             : {
//                 latitude: 51.9194,
//                 longitude: 4.4792,
//                 latitudeDelta: 0.1,
//                 longitudeDelta: 0.1,
//               }
//         }
//         ref={mapView}
//         showsUserLocation={true}
//         showsMyLocationButton={true}
//         showsCompass={true}
//         showsTraffic={true}
//         userInterfaceStyle={theme}
//         style={styles.map}
//       >
//         {markers.map((marker) => (
//           <Marker
//             key={marker.key}
//             coordinate={marker.coordinate}
//             title={marker.title}
//             description={marker.description}
//           >
//             <Callout>
//               <View>
//                 <Text>{truncateDescription(marker.description)}</Text>
//                 <TouchableOpacity onPress={() => handleShowOnList(marker)}>
//                   <Text>Show on List</Text>
//                 </TouchableOpacity>
//               </View>
//             </Callout>
//           </Marker>
//         ))}
//       </MapView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   map: {
//     width: Dimensions.get('window').width,
//     height: Dimensions.get('window').height
//   },
// });

// export default MapScreen;

// import React, { useState, useEffect, useRef } from 'react';
// import { StyleSheet, View, Dimensions, Text, TouchableOpacity } from 'react-native';
// import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';

// const MapScreen = ({ museums, route, navigation, theme }) => {
//   const { params } = route;
//   const selectedMuseum = params?.museum || null;
//   const zoomToMuseum = params?.zoomToMuseum || false;
//   const mapView = useRef(null);
//   const [markers, setMarkers] = useState([]);

//   useEffect(() => {
//     // Create markers from the museums data
//     const museumMarkers = museums.map((museum) => ({
//       key: museum.title,
//       coordinate: {
//         latitude: museum.latitude,
//         longitude: museum.longitude,
//       },
//       title: museum.title,
//       description: museum.description,
//     }));

//     setMarkers(museumMarkers);
//   }, [museums]);

//   useEffect(() => {
//     // Focus on the selected museum when the component mounts
//     if (mapView.current && selectedMuseum) {
//       mapView.current.fitToCoordinates(
//         [
//           {
//             latitude: selectedMuseum.latitude,
//             longitude: selectedMuseum.longitude,
//           },
//         ],
//         {
//           edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
//           animated: true,
//         }
//       );
//     }
//   }, [selectedMuseum]);

//   const handleShowOnList = (museum) => {
//     // Navigate to the list screen and pass the selected museum
//     navigation.navigate('List', { museum: museum });
//   };

//   const truncateDescription = (description) => {
//     // Truncate the description to 8 words
//     return description.split(' ').slice(0, 8).join(' ');
//   };

//   return (
//     <View style={styles.container}>
//       <MapView
//         provider={PROVIDER_GOOGLE}
//         initialRegion={
//           zoomToMuseum
//             ? {
//                 latitude: selectedMuseum.latitude,
//                 longitude: selectedMuseum.longitude,
//                 latitudeDelta: 0.02,
//                 longitudeDelta: 0.02,
//               }
//             : {
//                 latitude: 51.9194,
//                 longitude: 4.4792,
//                 latitudeDelta: 0.1,
//                 longitudeDelta: 0.1,
//               }
//         }
//         ref={mapView}
//         showsUserLocation={true}
//         showsMyLocationButton={true}
//         showsCompass={true}
//         showsTraffic={true}
//         userInterfaceStyle={theme}
//         style={styles.map}
//       >
//         {markers.map((marker) => (
//           <Marker
//             key={marker.key}
//             coordinate={marker.coordinate}
//             title={marker.title}
//             description={marker.description}
//           >
//             <Callout>
//               <View>
//                 <Text>{truncateDescription(marker.description)}</Text>
//                 <TouchableOpacity onPress={() => handleShowOnList(marker)}>
//                   <Text style={styles.button}>Show on List</Text>
//                 </TouchableOpacity>
//               </View>
//             </Callout>
//           </Marker>
//         ))}
//       </MapView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   map: {
//     width: Dimensions.get('window').width,
//     height: Dimensions.get('window').height
//   },
//   button: {
//     color: 'blue', // Set button text color to blue
//     marginTop: 5, // Adjust button spacing
//   },
// });

// export default MapScreen;

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
