// App.js

import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import Registration from './components/Registration';
import PasswordRecovery from './components/PasswordRecovery';
import Login from './components/Login';

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <Registration />  
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
});

