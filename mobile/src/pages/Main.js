import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  TextInput,
  Platform,
  TouchableOpacity,
} from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import {
  requestPermissionsAsync,
  getCurrentPositionAsync,
} from 'expo-location';
import { MaterialIcons } from '@expo/vector-icons';

import api from '../services/api';
import { connect, disconnect, subscribeToNewDevs } from '../services/socket';

function Main({ navigation }) {
  const [devs, setDevs] = useState([]);
  const [currentRegion, setCurrentRegion] = useState(null);
  const [techs, setTechs] = useState('');

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

  useEffect(() => {
    subscribeToNewDevs(dev => setDevs([...devs, dev]));
  }, [devs]);

  function setupWebsocket() {
    disconnect();

    const { latitude, longitude } = currentRegion;

    connect(latitude, longitude, techs);
  }

  async function loadDevs() {
    const { latitude, longitude } = currentRegion;

    const response = await api.get('/search', {
      params: {
        latitude,
        longitude,
        techs: techs.toLowerCase(),
      },
    });

    setDevs(response.data.devs);
    setupWebsocket();
  }

  function handleRegionChanged(region) {
    setCurrentRegion(region);
  }

  if (!currentRegion) {
    return (
      <>
        <View style={styles.disabledLocation}>
          <Text style={styles.disabledLocationText}>
            Para utilizar esta aplicação, você precisa habilitar o GPS do seu
            dispositivo. Caso já esteja ativo, por favor aguarde.
          </Text>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate('LocationHelp', {
                help_url:
                  Platform.OS === 'ios'
                    ? 'https://support.apple.com/pt-br/HT207092'
                    : 'https://support.google.com/accounts/answer/3467281?hl=pt-BR',
              })
            }
            style={styles.disabledLocationButton}
          >
            <Text style={styles.disabledLocationButtonText}>
              Ativar manualmente
            </Text>
          </TouchableOpacity>
        </View>

        <Image
          source={{
            uri:
              'http://1dois.com.br/devradar/static/media/background.09b2b12b.png',
          }}
          style={{
            zIndex: -5,
            position: 'absolute',
            width: '100%',
            height: '100%',
          }}
        />
      </>
    );
  }

  return (
    <>
      <MapView
        onRegionChangeComplete={handleRegionChanged}
        initialRegion={currentRegion}
        style={styles.map}
      >
        {devs.map(dev => (
          <Marker
            key={dev._id}
            coordinate={{
              longitude: dev.location.coordinates[0],
              latitude: dev.location.coordinates[1],
            }}
          >
            <Image
              style={styles.avatar}
              resizeMode="cover"
              source={{
                uri: dev.avatar_url,
              }}
            />

            <Callout
              onPress={() => {
                navigation.navigate('Profile', {
                  github_username: dev.github_username,
                });
              }}
            >
              <View style={styles.callout}>
                <Text style={styles.devName}>{dev.name}</Text>
                <Text style={styles.devBio}>{dev.bio}</Text>
                <Text style={styles.devTechs}>{dev.techs.join(', ')}</Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>

      <View style={styles.searchForm}>
        <TextInput
          returnKeyType="done"
          onKeyPress={loadDevs}
          style={styles.searchInput}
          placeholder="Buscar devs por techs..."
          placeholderTextColor="#FFF"
          autoCapitalize="words"
          autoCorrect={false}
          value={techs}
          onChangeText={setTechs}
        />

        <TouchableOpacity onPress={loadDevs} style={styles.loadButton}>
          <MaterialIcons name="my-location" size={20} color="#FFF" />
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },

  avatar: {
    width: 54,
    height: 54,
    borderRadius: 27,
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
    textTransform: 'capitalize',
  },

  searchForm: {
    position: 'absolute',
    top: 20,
    left: 20,
    right: 20,
    zIndex: 5,
    flexDirection: 'row',
  },

  searchInput: {
    flex: 1,
    height: 50,
    backgroundColor: '#115b94',
    color: '#fff',
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 16,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    elevation: 2,
  },

  loadButton: {
    width: 50,
    height: 50,
    backgroundColor: '#115b94',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
  },

  disabledLocation: {
    flex: 1,
    zIndex: 5,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    paddingHorizontal: '10%',
  },

  disabledLocationText: {
    alignSelf: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontSize: 16,
  },

  disabledLocationButton: {
    marginTop: 20,
    backgroundColor: '#4FBDEF',
    borderRadius: 25,
    width: '100%',
    padding: 10,
    maxWidth: 250,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

  disabledLocationButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    letterSpacing: 1.2,
    textTransform: 'uppercase',
  },
});

export default Main;
