import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Linking, ScrollView } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { NavBar } from '../components/Nav/NavBar';

const Ongs = (props) => {
  const [donateValue, setDonateValue] = useState('');

  const openGoogleMaps = () => {
    const url = 'https://www.google.com/maps/search/?api=1&query=Rua+Rio+Branco+1234,Centro';
    Linking.openURL(url);
  };

  return (
    <>
        <NavBar />
        <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
        <TouchableOpacity onPress={() => props.navigation.reset({
                    routes: [{ name: 'Home' }]
                })}>
                    <MaterialIcons name="arrow-back" size={30} color="#3B82F6" />
                </TouchableOpacity>
        </View>
        <View style={styles.donationSection}>
            <Text style={styles.title}>ONG Nove De Julho</Text>
            <Text style={styles.subTitle}>Retira doações e aceita no local</Text>
            <Text style={styles.address}>Rua Rio Branco 1234, Centro</Text>
            <Text style={styles.hours}>das 08:00 às 19:00</Text>
            <Text style={styles.phone}>+55 11 1234-4321</Text>

            <TouchableOpacity style={styles.mapButton} onPress={openGoogleMaps}>
            <Text style={styles.mapButtonText}>Ver no Google Maps</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    rowGap: 100,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  donationSection: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  address: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  hours: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  phone: {
    fontSize: 14,
    color: '#333',
    marginBottom: 20,
  },
  mapButton: {
    backgroundColor: '#1E90FF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  mapButtonText: {
    color: '#FFF',
    fontSize: 14,
  },
  donateSection: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
  },
  inputLabel: {
    fontSize: 14,
    marginBottom: 10,
  },
  input: {
    height: 50,
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  donateButton: {
    backgroundColor: '#1E90FF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  donateButtonText: {
    color: '#FFF',
    fontSize: 16,
  },
  header: {
    width: '100%',
    height: 40,
  }
});

export default Ongs;
