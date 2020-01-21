import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});

function Main() {
  useEffect(() => {
    async function loadInitialPosition() {}
  }, []);

  return <MapView style={styles.map} />;
}

export default Main;
