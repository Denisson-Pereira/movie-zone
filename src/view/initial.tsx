import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BgInitialContainer } from '../containers/bgInitialContainer';
import { colors } from '../colors';
import { useNavigate } from '../hooks/useNavigate';
import { TitleCustoms } from '../customs/titleCustoms';
import { BtnCustoms } from '../customs/btnCustoms';

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
            <BtnCustoms 
                text='Watch Movies'
                route='signIn'
            />
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
});
