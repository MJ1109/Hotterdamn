import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, Button, StyleSheet } from 'react-native';

const SettingsScreen = ({theme, setTheme}) => {
  const [oppositeTheme, setOppositeTheme] = useState(theme === 'dark' ? 'light' : 'dark')

  useEffect(() => {
    setOppositeTheme(theme === 'dark' ? 'light' : 'dark')
  }, [theme])

  function toggleTheme(currentTheme){
    setTheme(oppositeTheme)
  }

  return (
    <View style={styles.container}>
      <Button
        title={'change theme to ' + oppositeTheme}
        onPress={ () => toggleTheme(theme)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SettingsScreen;
