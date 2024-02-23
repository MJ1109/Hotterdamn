import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ListScreen = ({ museums }) => {
  const navigation = useNavigation();

  const handleShowOnMap = (item) => {
    // Navigate to MapScreen and pass museum details
    navigation.navigate('Map', { museum: item });
    console.log(item);
  };

  const handleSaveMuseum = async (museum) => {
    try {
      // Retrieve existing saved museums from AsyncStorage
      const savedMuseumsJSON = await AsyncStorage.getItem('savedMuseums');
      const savedMuseums = savedMuseumsJSON ? JSON.parse(savedMuseumsJSON) : [];

      // Add the current museum to the saved museums
      savedMuseums.push(museum);

      // Save the updated list of museums back to AsyncStorage
      await AsyncStorage.setItem('savedMuseums', JSON.stringify(savedMuseums));

      console.log('Museum saved:', museum);
    } catch (error) {
      console.error('Error saving museum:', error);
    }
  };

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

            {/* Button to send coords of museum to Map */}
            <TouchableOpacity
              style={[styles.button, { backgroundColor: '#3498db' }]}
              onPress={() => handleShowOnMap(item)}>
              <Text style={styles.buttonText}>Show on Map</Text>
            </TouchableOpacity>

            {/* Save museum */}
            <TouchableOpacity
              style={[styles.button, { backgroundColor: '#27ae60' }]}
              onPress={() => handleSaveMuseum(item)}>
              <Text style={styles.buttonText}>Save Museum</Text>
            </TouchableOpacity>
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
  button: {
    marginVertical: 5,
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default ListScreen;
