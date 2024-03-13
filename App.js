import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
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
  const [location, setLocation] = useState([]);
  const [theme, setTheme] = useState('dark')

  //when page loads, check if permission for location
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      
      setLocation(location);
      fetchData();
    })();
  }, []);

  const fetchData = async () => {
    const museumsData = await fetchMuseums();
    setMuseums(museumsData);
  };

  return (
    <NavigationContainer theme={theme=== 'dark' ? DarkTheme : DefaultTheme}>
      <Tab.Navigator>
        <Tab.Screen
          name="List"
          options={{ title: 'List of Museums' }}
        >
          {(props) => <ListScreen {...props} museums={museums} theme={theme} />}
        </Tab.Screen>

        <Tab.Screen
          name="Map"
          options={{ title: 'Map' }}
        >
        {(props) => <MapScreen {...props} museums={museums} location={location} thene={theme}/>}
        </Tab.Screen>

        <Tab.Screen name="Saved" options={{title: 'Saved'}}>
          {(props) => <SavedScreen {...props} theme={theme}/>}
        </Tab.Screen>
        <Tab.Screen name="settings"  options={{ title: 'Settings' }} >
          {(props) => <SettingsScreen {...props} theme={theme} setTheme={setTheme} ></SettingsScreen>}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
