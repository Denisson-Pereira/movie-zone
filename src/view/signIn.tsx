import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native';
import { TitleCustoms } from '../customs/titleCustoms';
import { colors } from '../colors';
import { FontAwesome } from "@expo/vector-icons";

export default function SignIn() {
  return (
    <View style={styles.container}>
      <TitleCustoms
        title1='Movie'
        title2='zone'
        size={35}
        weight='700'
      />
      <View style={styles.containerTxt}>
        <Text style={styles.back}>Welcome Back!</Text>
        <View style={styles.containerTxt2}>
          <Text style={styles.txt}>Please sign in to your acconut to</Text>
          <Text style={styles.txt}>continue</Text>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.input}>
          <TextInput 
            placeholder='Email / Phone Number' 
            placeholderTextColor={colors.grey}
            style={{ fontSize: 18 }}
          />
        </View>
        <View style={styles.input}>
          <TextInput 
            placeholder='Password'
            placeholderTextColor={colors.grey}
            style={{ fontSize: 18 }}
          />
          <FontAwesome name="eye-slash" size={20} color={colors.grey} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 90
  },
  back: {
    color: colors.white,
    fontSize: 28,
    fontWeight: '600'
  },
  containerTxt: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30
  },
  containerTxt2: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    color: colors.white,
    fontSize: 15,
    letterSpacing: 1,
    fontWeight: '300'
  },
  input: {
    backgroundColor: colors.inputs,
    width: 380,
    height: 60,
    borderRadius: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  inputContainer: {
    gap: 20
  }
});
