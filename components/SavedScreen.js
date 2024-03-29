// // import React, { useState, useEffect } from 'react';
// // import { View, Text, FlatList, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
// // import AsyncStorage from '@react-native-async-storage/async-storage';
// // import { useIsFocused } from '@react-navigation/native'; // Import useIsFocused hook

// // const SavedScreen = ({ theme }) => {
// //   const [savedMuseums, setSavedMuseums] = useState([]);
// //   const isFocused = useIsFocused(); // Get the focused state from useIsFocused hook

// //   useEffect(() => {
// //     const loadSavedMuseums = async () => {
// //       try {
// //         // Retrieve saved museums from AsyncStorage
// //         const savedMuseumsJSON = await AsyncStorage.getItem('savedMuseums');
// //         const savedMuseums = savedMuseumsJSON ? JSON.parse(savedMuseumsJSON) : [];
// //         setSavedMuseums(savedMuseums);
// //       } catch (error) {
// //         console.error('Error loading saved museums:', error);
// //       }
// //     };

// //     // Load saved museums on component mount and when focused
// //     if (isFocused) {
// //       loadSavedMuseums();
// //     }
// //   }, [isFocused]); // Listen to changes in isFocused state

// //   const handleRemoveMuseum = async (index) => {
// //     try {
// //       // Retrieve saved museums from AsyncStorage
// //       const savedMuseumsJSON = await AsyncStorage.getItem('savedMuseums');
// //       let savedMuseums = savedMuseumsJSON ? JSON.parse(savedMuseumsJSON) : [];

// //       // Remove the specified museum
// //       savedMuseums.splice(index, 1);

// //       // Save the updated list of museums back to AsyncStorage
// //       await AsyncStorage.setItem('savedMuseums', JSON.stringify(savedMuseums));

// //       // Update state to re-render the component
// //       setSavedMuseums(savedMuseums);
// //     } catch (error) {
// //       console.error('Error removing museum:', error);
// //     }
// //   };

// //   return (
// //     <View style={[styles.container, { backgroundColor: theme === 'dark' ? '#292928' : '#f0f0f0' }]}>
// //       <SafeAreaView>
// //         <Text style={[styles.heading, { color: theme === 'dark' ? '#fff' : '#111' }]}>Saved Museums</Text>
// //         {savedMuseums.length > 0 ? (
// //           <FlatList
// //             data={savedMuseums}
// //             keyExtractor={(item) => item.title}
// //             renderItem={({ item, index }) => (
// //               <View style={[styles.card, { backgroundColor: theme === 'dark' ? '#424241' : 'white' }]}>
// //                 <Text style={[styles.title, { color: theme === 'dark' ? '#fff' : '#111' }]}>{item.title}</Text>
// //                 <Text style={[styles.description, { color: theme === 'dark' ? '#fff' : '#111' }]}>{item.description}</Text>
// //                 <TouchableOpacity
// //                   style={styles.removeButton}
// //                   onPress={() => handleRemoveMuseum(index)}>
// //                   <Text style={styles.removeButtonText}>Remove Museum</Text>
// //                 </TouchableOpacity>
// //               </View>
// //             )}
// //           />
// //         ) : (
// //             <Text style={[{ color: theme === 'dark' ? '#fff' : '#111' }]}>No saved museums</Text>
// //           )}
// //       </SafeAreaView>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     padding: 10,
// //     backgroundColor: '#f0f0f0',
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
// //   removeButton: {
// //     backgroundColor: '#FF5858',
// //     borderRadius: 5,
// //     padding: 10,
// //     marginTop: 10,
// //   },
// //   removeButtonText: {
// //     color: 'white',
// //     textAlign: 'center',
// //   },
// // });

// // export default SavedScreen;

import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native'; // Import useIsFocused hook
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

const SavedScreen = ({ theme }) => {
  const [savedMuseums, setSavedMuseums] = useState([]);
  const isFocused = useIsFocused(); // Get the focused state from useIsFocused hook
  const navigation = useNavigation(); // Get navigation object using useNavigation hook

  useEffect(() => {
    const loadSavedMuseums = async () => {
      try {
        // Retrieve saved museums from AsyncStorage
        const savedMuseumsJSON = await AsyncStorage.getItem('savedMuseums');
        const savedMuseums = savedMuseumsJSON ? JSON.parse(savedMuseumsJSON) : [];
        setSavedMuseums(savedMuseums);
      } catch (error) {
        console.error('Error loading saved museums:', error);
      }
    };

    // Load saved museums on component mount and when focused
    if (isFocused) {
      loadSavedMuseums();
    }
  }, [isFocused]); // Listen to changes in isFocused state

  const handleRemoveMuseum = async (index) => {
    try {
      // Retrieve saved museums from AsyncStorage
      const savedMuseumsJSON = await AsyncStorage.getItem('savedMuseums');
      let savedMuseums = savedMuseumsJSON ? JSON.parse(savedMuseumsJSON) : [];

      // Remove the specified museum
      savedMuseums.splice(index, 1);

      // Save the updated list of museums back to AsyncStorage
      await AsyncStorage.setItem('savedMuseums', JSON.stringify(savedMuseums));

      // Update state to re-render the component
      setSavedMuseums(savedMuseums);
    } catch (error) {
      console.error('Error removing museum:', error);
    }
  };

  const handleShowOnMap = (museum) => {
    // Navigate to the map screen and pass the selected museum's coordinates
    navigation.navigate('Map', { museum });
  };

  return (
    <View style={[styles.container, { backgroundColor: theme === 'dark' ? '#292928' : '#f0f0f0' }]}>
      <SafeAreaView>
        <Text style={[styles.heading, { color: theme === 'dark' ? '#fff' : '#111' }]}>Saved Museums</Text>
        {savedMuseums.length > 0 ? (
          <FlatList
            data={savedMuseums}
            keyExtractor={(item) => item.title}
            renderItem={({ item, index }) => (
              <View style={[styles.card, { backgroundColor: theme === 'dark' ? '#424241' : 'white' }]}>
                <Text style={[styles.title, { color: theme === 'dark' ? '#fff' : '#111' }]}>{item.title}</Text>
                <Text style={[styles.description, { color: theme === 'dark' ? '#fff' : '#111' }]}>{item.description}</Text>
                <TouchableOpacity
                  style={styles.removeButton}
                  onPress={() => handleRemoveMuseum(index)}>
                  <Text style={styles.removeButtonText}>Remove Museum</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.showOnMapButton}
                  onPress={() => handleShowOnMap(item)}>
                  <Text style={styles.showOnMapButtonText}>Show on Map</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        ) : (
            <Text style={[{ color: theme === 'dark' ? '#fff' : '#111' }]}>No saved museums</Text>
          )}
      </SafeAreaView>
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
  removeButton: {
    backgroundColor: '#FF5858',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  removeButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  showOnMapButton: {
    backgroundColor: 'blue', // Set button background color to blue
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  showOnMapButtonText: {
    color: 'white', // Set button text color to white
    textAlign: 'center',
  },
});

export default SavedScreen;
