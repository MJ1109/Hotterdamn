// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, StyleSheet,  } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const SavedScreen = () => {
//   const [savedMuseums, setSavedMuseums] = useState([]);

//   useEffect(() => {
//     const loadSavedMuseums = async () => {
//       try {
//         // Retrieve saved museums from AsyncStorage
//         const savedMuseumsJSON = await AsyncStorage.getItem('savedMuseums');
//         const savedMuseums = savedMuseumsJSON ? JSON.parse(savedMuseumsJSON) : [];
//         setSavedMuseums(savedMuseums);
//       } catch (error) {
//         console.error('Error loading saved museums:', error);
//       }
//     };

//     // Load saved museums on component mount
//     loadSavedMuseums();
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Saved Museums</Text>
//       {savedMuseums.length > 0 ? (
//         <FlatList
//           data={savedMuseums}
//           keyExtractor={(item) => item.title}
//           renderItem={({ item }) => (
//             <View style={styles.card}>
//               <Text style={styles.title}>{item.title}</Text>
//               <Text style={styles.description}>{item.description}</Text>
//             </View>
//           )}
//         />
//       ) : (
//         <Text>No saved museums</Text>
//       )}
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

// export default SavedScreen;

import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SavedScreen = () => {
  const [savedMuseums, setSavedMuseums] = useState([]);

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

    // Load saved museums on component mount
    loadSavedMuseums();
  }, []);

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

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Saved Museums</Text>
      {savedMuseums.length > 0 ? (
        <FlatList
          data={savedMuseums}
          keyExtractor={(item) => item.title}
          renderItem={({ item, index }) => (
            <View style={styles.card}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
              <TouchableOpacity
                style={styles.removeButton}
                onPress={() => handleRemoveMuseum(index)}>
                <Text style={styles.removeButtonText}>Remove Museum</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      ) : (
        <Text>No saved museums</Text>
      )}
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
});

export default SavedScreen;