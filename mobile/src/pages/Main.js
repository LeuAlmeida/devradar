import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import {
  requestPermissionsAsync,
  getCurrentPositionAsync,
} from 'expo-location';

function Main({ navigation }) {
  const [currentRegion, setCurrentRegion] = useState(null);

  useEffect(() => {
    async function loadInitialPosition() {
      const { granted } = await requestPermissionsAsync();

      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true,
        });

        const { latitude, longitude } = coords;

        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.04,
          longitudeDelta: 0.04,
        });
      }
    }

    loadInitialPosition();
  }, []);

  if (!currentRegion) {
    return null;
  }

  return (
    <MapView initialRegion={currentRegion} style={styles.map}>
      <Marker coordinate={{ latitude: -23.6477446, longitude: -46.5644216 }}>
        <Image
          style={styles.avatar}
          resizeMode="cover"
          source={{
            uri: 'https://avatars2.githubusercontent.com/u/42948574?v=4',
          }}
        />

        <Callout
          onPress={() => {
            navigation.navigate('Profile', { github_username: 'LeuAlmeida' });
          }}
        >
          <View style={styles.callout}>
            <Text style={styles.devName}>Léu Almeida</Text>
            <Text style={styles.devBio}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
              accusamus voluptate harum dolore numquam aspernatur omnis
              inventore, culpa repellat facere consectetur deserunt aut velit ut
              quod molestiae pariatur qui hic!
            </Text>
            <Text style={styles.devTechs}>ReactJS, React Native, Node.js</Text>
          </View>
        </Callout>
      </Marker>
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: '#FFF',
  },
  callout: {
    width: 260,
  },
  devName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  devBio: {
    color: '#666',
    marginTop: 5,
  },
  devTechs: {
    marginTop: 5,
  },
});

export default Main;
