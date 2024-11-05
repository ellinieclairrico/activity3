// components/PasswordRecovery.js

import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text, Alert, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { Button as PaperButton, useTheme } from 'react-native-paper'; 

const PasswordRecovery = () => {
  const [email, setEmail] = useState('');
  const { colors } = useTheme(); 
  const handleRecovery = () => {
    if (!email) {
      Alert.alert('Error', 'Please enter your email');
    } else {
      Alert.alert('Success', `Recovery email sent to ${email}`);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Password Recovery</Text>

          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            placeholderTextColor="#888"
            mode="outlined"
            theme={{
              colors: {
                primary: '#800000', 
              },
            }}
          />
          
          <PaperButton 
            mode="contained" 
            onPress={handleRecovery} 
            style={styles.button}
          >
            Send Recovery Email
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

export default PasswordRecovery;
