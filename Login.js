// components/Login.js

import React, { useState } from 'react';
import { StyleSheet, View, Alert, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === '' || password === '') {
      Alert.alert('Error', 'Please fill in both fields');
    } else {
      Alert.alert('Success', `Logged in as ${username}`);
      // Here you would typically handle the login, e.g., call an API
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Login</Text>

          <TextInput
            label="Username"
            value={username}
            onChangeText={setUsername}
            style={styles.input}
            mode="outlined"
            theme={{ colors: { primary: '#800000' } }} // Maroon color for the input border
          />
          
          <TextInput
            label="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.input}
            mode="outlined"
            theme={{ colors: { primary: '#800000' } }} // Maroon color for the input border
          />

          <Button mode="contained" onPress={handleLogin} style={styles.button}>
            Login
          </Button>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4', // Light gray background for the container
    justifyContent: 'center',  // Centers the content vertically
    padding: 16,
  },
  scrollContainer: {
    flexGrow: 1, // Allows ScrollView to grow and fill the space
    justifyContent: 'center', // Centers the content inside the ScrollView
    alignItems: 'center', // Centers the form horizontally
    paddingTop: 24,  // Optional padding for top of the screen
  },
  formContainer: {
    width: '100%',
    maxWidth: 400, // Max width for the form on large screens
    backgroundColor: '#fff', // White background for the form
    borderRadius: 8, // Rounded corners for the form
    elevation: 4, // Shadow for the form container (Android)
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    paddingHorizontal: 16, // Horizontal padding for the form
    paddingVertical: 32,  // Vertical padding for the form
  },
  title: {
    fontSize: 32,
    marginBottom: 24,
    textAlign: 'center',
    color: '#800000', // Maroon color
    fontFamily: 'Helvetica', // Helvetica font
    fontWeight: 'bold', // Bold title for emphasis
  },
  input: {
    width: '100%',
    marginBottom: 16,
    borderRadius: 8, // Rounded corners for the input fields
    backgroundColor: '#fff', // Input background color
  },
  button: {
    marginTop: 16,
    backgroundColor: '#800000', // Maroon button color
    width: '100%', // Button takes full width
    paddingVertical: 12, // Padding for a more clickable button
    borderRadius: 8, // Rounded corners for the button
  },
});

export default Login;
