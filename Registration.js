import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text, Alert, ScrollView, KeyboardAvoidingView, Platform, Image } from 'react-native';
import { Button as PaperButton, useTheme } from 'react-native-paper';

const Registration = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { colors } = useTheme(); 

  const handleRegister = () => {
    if (!username || !email || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields');
    } else if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
    } else {
      Alert.alert('Success', `Registered as ${username}`);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.formContainer}>
          {/* Download Icon */}
          <Image
            source={require('../assets/download.png')} 
            style={styles.downloadIcon}
          />

          <Text style={styles.title}>Create an Account</Text>

          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
            mode="outlined"
            theme={{
              colors: {
                primary: '#800000',
              },
            }}
          />
          
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            mode="outlined"
            theme={{
              colors: {
                primary: '#800000', 
              },
            }}
          />
          
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            mode="outlined"
            theme={{
              colors: {
                primary: '#800000', 
              },
            }}
          />
          
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            mode="outlined"
            theme={{
              colors: {
                primary: '#800000', 
              },
            }}
          />
          
          <PaperButton 
            mode="contained" 
            onPress={handleRegister} 
            style={styles.button}
          >
            Register
          </PaperButton>
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
  },
  formContainer: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 24,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    position: 'relative', 
  },
  downloadIcon: {
    width: 40, 
    height: 40, 
    position: 'absolute',
    top: 16, 
    right: 16, 
  },
  title: {
    fontSize: 32,
    fontFamily: 'Helvetica',
    color: '#800000',
    textAlign: 'center',
    marginBottom: 24,
  },
  input: {
    width: '100%',
    height: 45,
    marginBottom: 16,
    fontFamily: 'Helvetica',
    fontSize: 16,
  },
  button: {
    marginTop: 16,
    backgroundColor: '#800000',
    width: '100%',
    paddingVertical: 12,
    borderRadius: 8,
  },
});

export default Registration;
