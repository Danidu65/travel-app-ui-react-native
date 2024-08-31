import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Picker } from '@react-native-picker/picker'; 

const countries = ['United States', 'Canada', 'United Kingdom', 'Australia'];
const genders = ['Male', 'Female', 'Other'];

const Page = () => {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@example.com');
  const [bio, setBio] = useState('Traveler and food lover');
  const [phone, setPhone] = useState('123-456-7890');
  const [country, setCountry] = useState(countries[0]);
  const [gender, setGender] = useState(genders[0]);
  const [profilePicture, setProfilePicture] = useState('https://via.placeholder.com/100');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profilePictureContainer}>
        <Image source={{ uri: profilePicture }} style={styles.profilePicture} />
        <Text style={styles.changePhotoText}>Change Photo</Text>
      </View>

      {/* <Text style={styles.title}>Profile</Text> */}

      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
        editable={true} 
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
        editable={true} 
      />
      <TextInput
        placeholder="Bio"
        value={bio}
        onChangeText={setBio}
        style={[styles.input, styles.bioInput]}
        multiline
        editable={true} 
      />
      <TextInput
        placeholder="Phone Number"
        value={phone}
        onChangeText={setPhone}
        style={styles.input}
        keyboardType="phone-pad"
        editable={true} 
      />

      <View style={styles.pickerContainer}>
        <Text style={styles.pickerLabel}>Country</Text>
        <Picker
          selectedValue={country}
          style={styles.picker}
          onValueChange={(itemValue) => setCountry(itemValue)}
          enabled={true} 
        >
          {countries.map((c, index) => (
            <Picker.Item key={index} label={c} value={c} />
          ))}
        </Picker>
      </View>

      <View style={styles.pickerContainer}>
        <Text style={styles.pickerLabel}>Gender</Text>
        <View style={styles.genderContainer}>
          {genders.map((g, index) => (
            <View
              key={index}
              style={[styles.genderOption, gender === g && styles.genderOptionSelected]}
            >
              <Text style={styles.genderText}>{g}</Text>
              {gender === g && <Text style={styles.genderSelected}>✓</Text>}
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  profilePictureContainer: {
    marginBottom: 16,
    alignItems: 'center',
  },
  profilePicture: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: '#ddd',
    backgroundColor: '#fff',
  },
  changePhotoText: {
    marginTop: 8,
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  input: {
    height: 45,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 6,
    width: '100%',
    paddingHorizontal: 12,
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  bioInput: {
    height: 120,
    textAlignVertical: 'top',
  },
  pickerContainer: {
    width: '100%',
    marginBottom: 16,
  },
  pickerLabel: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  picker: {
    height: 45,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 6,
    backgroundColor: '#fff',
  },
  genderContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  genderOption: {
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 6,
    backgroundColor: '#e9ecef',
  },
  genderOptionSelected: {
    backgroundColor: '#007BFF',
  },
  genderText: {
    fontSize: 16,
    color: '#333',
  },
  genderSelected: {
    fontSize: 18,
    color: '#fff',
    marginLeft: 8,
  },
});

export default Page;
