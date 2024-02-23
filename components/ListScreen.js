// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import axios from 'axios';
// import { useNavigation } from '@react-navigation/native';

// const ListScreen = () => {
//   const [museums, setMuseums] = useState([]);
//   const navigation = useNavigation();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://stud.hosted.hr.nl/0987568/api/data.json');
//         setMuseums(response.data.museums);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleShowOnMap = (latitude, longitude) => {
//     // Navigate to MapScreen and pass coordinates
//     navigation.navigate('Map', { latitude, longitude });
//   };

//   const handleSaveMuseum = async (museum) => {
//     try {
//       // Retrieve existing saved museums from AsyncStorage
//       const savedMuseumsJSON = await AsyncStorage.getItem('savedMuseums');
//       const savedMuseums = savedMuseumsJSON ? JSON.parse(savedMuseumsJSON) : [];

//       // Add the current museum to the saved museums
//       savedMuseums.push(museum);

//       // Save the updated list of museums back to AsyncStorage
//       await AsyncStorage.setItem('savedMuseums', JSON.stringify(savedMuseums));

//       console.log('Museum saved:', museum);
//     } catch (error) {
//       console.error('Error saving museum:', error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>List Screen</Text>

//       {/* List of musea */}
//       <FlatList
//         data={museums}
//         keyExtractor={(item) => item.title}
//         renderItem={({ item }) => (
//           <View style={styles.card}>
//             <Text style={styles.title}>{item.title}</Text>
//             <Text style={styles.description}>{item.description}</Text>

//             {/* Button to send coords of musuem to Map */}
//             <View style={styles.buttonContainer}>
//               <TouchableOpacity
//                 style={[styles.button, { backgroundColor: '#3498db' }]}
//                 onPress={() => handleShowOnMap(item.latitude, item.longitude)}>
//                 <Text style={styles.buttonText}>Show on Map</Text>
//               </TouchableOpacity>

//               {/* save museum */}
//               <TouchableOpacity
//                 style={[styles.button, { backgroundColor: '#27ae60' }]}
//                 onPress={() => handleSaveMuseum(item)}>
//                 <Text style={styles.buttonText}>Save Museum</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//     backgroundColor: '#f0f0f0', // Background color of the container
//   },
//   heading: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   card: {
//     backgroundColor: 'white',
//     borderRadius: 7,
//     padding: 10,
//     marginBottom: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 2.84,
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   description: {
//     fontSize: 14,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 10,
//   },
//   button: {
//     flex: 1,
//     marginHorizontal: 5,
//     padding: 10,
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: 'white',
//     textAlign: 'center',
//   },
// });

// export default ListScreen;

// // import React from 'react';
// // import { View, Text, FlatList, StyleSheet } from 'react-native';

// // const ListScreen = ({ route }) => {
// //   const { museums } = route.params;

// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.heading}>List Screen</Text>

// //       {/* List of musea */}
// //       <FlatList
// //         data={museums}
// //         keyExtractor={(item) => item.title}
// //         renderItem={({ item }) => (
// //           <View style={styles.card}>
// //             <Text style={styles.title}>{item.title}</Text>
// //             <Text style={styles.description}>{item.description}</Text>
// //           </View>
// //         )}
// //       />
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     padding: 10,
// //     backgroundColor: '#f0f0f0', // Background color of the container
// //   },
// //   heading: {
// //     fontSize: 20,
// //     fontWeight: 'bold',
// //     marginBottom: 10,
// //   },
// //   card: {
// //     backgroundColor: 'white',
// //     borderRadius: 7,
// //     padding: 10,
// //     marginBottom: 10,
// //     shadowColor: '#000',
// //     shadowOffset: { width: 0, height: 2 },
// //     shadowOpacity: 0.25,
// //     shadowRadius: 2.84,
// //   },
// //   title: {
// //     fontSize: 16,
// //     fontWeight: 'bold',
// //   },
// //   description: {
// //     fontSize: 14,
// //   },
// // });

// // export default ListScreen;

// ListScreen.js
// import React from 'react';
// import { View, Text, FlatList, StyleSheet } from 'react-native';

// const ListScreen = ({ route }) => {
//   const { museums } = route.params;

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>List Screen</Text>

//       {/* List of Museums */}
//       <FlatList
//         data={museums}
//         keyExtractor={(item) => item.title}
//         renderItem={({ item }) => (
//           <View style={styles.card}>
//             <Text style={styles.title}>{item.title}</Text>
//             <Text style={styles.description}>{item.description}</Text>
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//     backgroundColor: '#f0f0f0',
//   },
//   heading: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   card: {
//     backgroundColor: 'white',
//     borderRadius: 7,
//     padding: 10,
//     marginBottom: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 2.84,
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   description: {
//     fontSize: 14,
//   },
// });

// export default ListScreen;

import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const ListScreen = ({ museums }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>List Screen</Text>

      {/* List of Museums */}
      <FlatList
        data={museums}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 7,
    padding: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 2.84,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
  },
});

export default ListScreen;
