import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AuthProvider } from './src/context';
import Routes from './src/routes/index.routes';

export default function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}