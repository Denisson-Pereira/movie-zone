import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { BgInitialContainer } from '../containers/bgInitialContainer';

export default function Initial() {
  return (
    <BgInitialContainer>
        <Text>initial</Text>
    </BgInitialContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
