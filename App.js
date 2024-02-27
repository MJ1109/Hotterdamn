import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import ListScreen from './components/ListScreen';
import MapScreen from './components/MapScreen';
import SavedScreen from './components/SavedScreen';
import SettingsScreen from './components/SettingsScreen';

import { fetchMuseums } from './components/api'; 

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  const [museums, setMuseums] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const museumsData = await fetchMuseums();
      setMuseums(museumsData);
    };

    fetchData();
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="List"
          options={{ title: 'List of Museums' }}
        >
          {(props) => <ListScreen {...props} museums={museums} />}
        </Tab.Screen>

        <Tab.Screen
          name="Map"
          options={{ title: 'Map' }}
        >
        {(props) => <MapScreen {...props} museums={museums} />}
        </Tab.Screen>

        <Tab.Screen name="Saved" component={SavedScreen} />
        <Tab.Screen name="settings" component={SettingsScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
