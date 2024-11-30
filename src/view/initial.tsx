import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BgInitialContainer } from '../containers/bgInitialContainer';
import { colors } from '../colors';
import { useNavigate } from '../hooks/useNavigate';
import { TitleCustoms } from '../customs/titleCustoms';

export default function Initial() {
    const { navigate } = useNavigate();

  return (
    <BgInitialContainer>
        <View style={styles.container}>
            <TitleCustoms  
                title1='Movie'
                title2='zone'
                size={40}
                weight='700'

            />
            <View>
                <Text style={styles.description}>Your number one movie destination.</Text>
            </View>
            <View style={styles.viewContainer}>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => navigate('signIn')}
                >
                    <Text style={styles.txtBtn}>Watch Movies</Text>
                </TouchableOpacity>
            </View>
        </View>
    </BgInitialContainer>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 40,
        backgroundColor: '#00000075'
    },
    description: {
        color: colors.white,
        fontSize: 15,
        letterSpacing: 1
    },
    viewContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
        backgroundColor: colors.red,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10
    },
    txtBtn: {
        color: colors.white,
        fontSize: 17,
        fontWeight: '300'
    }
});
