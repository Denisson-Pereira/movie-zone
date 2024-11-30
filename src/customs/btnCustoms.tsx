import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigate } from "../hooks/useNavigate";
import { colors } from "../colors";

export const BtnCustoms = ({ text, route }: { text: string, route: string }) => {
    const { navigate } = useNavigate();

    return (
        <View style={styles.viewContainer}>
            <TouchableOpacity
                style={styles.btn}
                onPress={() => navigate(route)}
            >
                <Text style={styles.txtBtn}>{text}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
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