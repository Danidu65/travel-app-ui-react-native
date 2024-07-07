import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const SignUpScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);

    navigation.navigate('DashBoard');
  };

  const goToLogin = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.baseText}>SignUp React <Text style={styles.innerText}>Native...!</Text></Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={text => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton} onPress={goToLogin}>
        <Text style={styles.loginButtonText}>Back to Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  baseText: {
    marginLeft: 0,
    marginTop: 0,
    marginVertical: 100,
    fontSize: 30,
    fontWeight: 'bold',
  },
  innerText: {
    textAlign: 'center',
    color: '#3DC7F3',
  },
  input: {
    width: '100%',
    height: 50,
    padding: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  button: {
    width: '50%',
    height: 50,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  loginButton: {
    width: '50%',
    height: 50,
    backgroundColor: '#0066cc',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default SignUpScreen;
