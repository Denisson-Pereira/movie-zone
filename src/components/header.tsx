import { StyleSheet, Text, View } from "react-native";
import { TitleCustoms } from "../customs/titleCustoms";
import { Feather } from "@expo/vector-icons"
import { colors } from "../colors";

export const Header = () => {
    return (
        <View style={styles.container}>
            <TitleCustoms
                title1="Movie"
                title2="zone"
                weight="700"
                size={30}
            />
            <View style={styles.icon}>
                <Feather name="bell" color={colors.ice} size={25} />
            </View>
        </View>
    );
} 

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});