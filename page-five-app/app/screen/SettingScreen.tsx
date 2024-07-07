// SettingsScreen.js

import { colors } from '@/constants/Colors';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SettingsScreen = ({ navigation }) => {
  const handleProfileSettings = () => {
    alert('Do you want to change ProfileSettings');
  };

  const handleNotificationSettings = () => {
    alert('Do you want to change NotificationSettings');
  };

  const handleLogout = () => {
    navigation.navigate('Home');
  };

  const handleBackToDashboard = () => {
    navigation.goBack(); // Navigate back to the previous screen (which is assumed to be the dashboard)
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.settingItem} onPress={handleProfileSettings}>
        <Text style={styles.settingText}>Profile Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingItem} onPress={handleNotificationSettings}>
        <Text style={styles.settingText}>Notification Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Log Out</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.backButton} onPress={handleBackToDashboard}>
        <Text style={styles.backButtonText}>Back to Dashboard</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  settingItem: {
    width: '100%',
    height: 50,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginVertical: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  settingText: {
    fontSize: 18,
  },
  logoutButton: {
    width: '50%',
    height: 50,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 5,
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  backButton: {
    width: '50%',
    height: 50,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 5,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default SettingsScreen;
