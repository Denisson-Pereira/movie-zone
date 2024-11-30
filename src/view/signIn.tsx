import { StyleSheet, Text, TextInput, View } from 'react-native';
import { TitleCustoms } from '../customs/titleCustoms';
import { colors } from '../colors';
import { Entypo } from "@expo/vector-icons";
import { useState } from 'react';

export default function SignIn() {
  const [passwordType, setPasswordType] = useState<boolean>(true);

  const seePassword = () => {
    if (passwordType) {
      setPasswordType(false);
    } else {
      setPasswordType(true);
    }
  }


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
            secureTextEntry={passwordType}
          />
          <Entypo 
            name={passwordType ? 'eye-with-line' : 'eye'} 
            color={colors.grey} 
            onPress={seePassword}
            size={20} 
          />
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
