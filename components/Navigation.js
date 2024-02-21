// Navigation.js

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListScreen from './ListScreen';
import MapScreen from './MapScreen';
import SettingsScreen from './SettingsScreen';
import SavedScreen from './SavedScreen';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="List" component={ListScreen} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Saved" component={SavedScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default Navigation;
