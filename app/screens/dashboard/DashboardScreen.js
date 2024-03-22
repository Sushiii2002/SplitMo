import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import COLORS from '../../constants/colors';

const DashboardScreen = () => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  
    const toggleDropdown = () => {
      setIsDropdownVisible(!isDropdownVisible);
    };
  
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.heading}>Dashboard</Text>
          <TouchableOpacity onPress={toggleDropdown}>
            <Ionicons name="menu" size={24} color="#E7B10A" />
          </TouchableOpacity>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.balance}>Current balance: $1000</Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={[styles.button]}>
              <Text style={styles.buttonIcon}>💰</Text>
              <Text style={styles.buttonText}>Split Money</Text>
            </TouchableOpacity>
  
            <TouchableOpacity style={[styles.button]}>
              <Text style={styles.buttonIcon}>⚙️</Text>
              <Text style={styles.buttonText}>Settings</Text>
            </TouchableOpacity>
  
            <TouchableOpacity style={[styles.button]}>
              <Text style={styles.buttonIcon}>📭</Text>
              <Text style={styles.buttonText}>Request Funds</Text>
            </TouchableOpacity>
  
            <TouchableOpacity style={[styles.button,]}>
              <Text style={styles.buttonIcon}>❓</Text>
              <Text style={styles.buttonText}>Help Center</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Modal visible={isDropdownVisible} animationType="slide">
          <View style={styles.dropdownContainer}>
            <TouchableOpacity onPress={toggleDropdown} style={styles.dropdownItem}>
              <Text style={styles.dropdownItemText}>Option 1</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleDropdown} style={styles.dropdownItem}>
              <Text style={styles.dropdownItemText}>Option 2</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleDropdown} style={styles.dropdownItem}>
              <Text style={styles.dropdownItemText}>Option 3</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 40,
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#E7B10A',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  balance: {
    fontSize: 25,
    fontWeight: 'bold',
    lineHeight: 26,
    textAlign: 'center',
    color: '#E7B10A',
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: COLORS.white,
    borderBlockColor: COLORS.primary,
    borderRightColor: COLORS.primary,   
    borderLeftColor: COLORS.primary,       
    borderWidth: 5, 
    borderRadius: 15,
    padding: 10,
    margin: 4,
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 150,
  },
  buttonIcon: {
    fontSize: 24,
    color: '#FFFFFF',
    marginBottom: 5,
  },
  buttonText: {
    fontSize: 16,
    color: COLORS.primary,
    textAlign: 'center',
  },
});

export default DashboardScreen;