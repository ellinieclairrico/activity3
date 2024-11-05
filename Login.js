import React, { useState } from 'react';
import { StyleSheet, View, Alert, KeyboardAvoidingView, Platform, ScrollView, Image } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === '' || password === '') {
      Alert.alert('Error', 'Please fill in both fields');
    } else {
      Alert.alert('Success', `Logged in as ${username}`);
    
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.formContainer}>
          {/* Logo Image */}
          <Image
            source={require('../assets/download.png')} 
            style={styles.logo}
          />
          
          <Text style={styles.title}>Login</Text>

          <TextInput
            label="Username"
            value={username}
            onChangeText={setUsername}
            style={styles.input}
            mode="outlined"
            theme={{ colors: { primary: '#800000' } }}
          />
          
          <TextInput
            label="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.input}
            mode="outlined"
            theme={{ colors: { primary: '#800000' } }}
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
    backgroundColor: '#f4f4f4',
    justifyContent: 'center',
    padding: 16,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 24,
  },
  formContainer: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    paddingHorizontal: 16,
    paddingVertical: 32,
    position: 'relative', 
  },
  logo: {
    width: 80,
    height: 80, 
    position: 'absolute',
    top: 16, 
    left: 16, 
  },
  title: {
    fontSize: 32,
    marginBottom: 24,
    textAlign: 'center',
    color: '#800000',
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    marginBottom: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  button: {
    marginTop: 16,
    backgroundColor: '#800000',
    width: '100%',
    paddingVertical: 12,
    borderRadius: 8,
  },
});

export default Login;
