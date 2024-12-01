import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { TitleCustoms } from '../customs/titleCustoms';
import { colors } from '../colors';
import { Entypo, EvilIcons, FontAwesome } from "@expo/vector-icons";
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
      <View style={styles.viewContainer}>
        <TouchableOpacity
          style={styles.btn}
        >
          <Text style={styles.txtBtn}>Sign In</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.orContainer}>
        <View style={styles.line}></View>
        <Text style={styles.txt}>Or sign in with</Text>
        <View style={styles.line}></View>
      </View>
      <View style={styles.iconsContainer}>
        <View>
          <TouchableOpacity style={styles.iconContainer}>
            <EvilIcons name='sc-facebook' color='black' size={35} />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.iconContainer}>
            <FontAwesome name='google' color='black' size={25} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.registerContainer}>
        <Text style={styles.txt2}>Not registered yet? </Text>
        <Text style={styles.txtRed}>Sign Up</Text>
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
    gap: 50
  },
  back: {
    color: colors.ice,
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
    color: colors.ice,
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
  },
  viewContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: colors.orange,
    paddingHorizontal: 50,
    paddingVertical: 12,
    borderRadius: 10
  },
  txtBtn: {
    color: colors.white,
    fontSize: 17,
    fontWeight: '200'
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5
  },
  line: {
    height: 1,
    backgroundColor: colors.grey,
    width: 120
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30
  },
  iconContainer: {
    backgroundColor: colors.ice,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 13,
    width: 60,
    height: 60,
  },
  registerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 50
  },
  txt2: {
    color: colors.ice,
    fontSize: 15,
    letterSpacing: 1,
    fontWeight: '500'
  },
  txtRed: {
    color: colors.red,
    fontSize: 15,
    letterSpacing: 1,
    fontWeight: '500'
  }
});
