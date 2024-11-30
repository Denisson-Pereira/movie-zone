import { StyleSheet, Text, View } from "react-native";
import { colors } from "../colors";

export const TitleCustoms = ({ title1, title2, size, weight }: { title1: string; title2: string; size: number; weight: '700' | '500' }) => {
    return (
        <View style={styles.titleContainer}>
            <Text style={{ fontSize: size, color: colors.white, fontWeight: weight }}>{title1}</Text>
            <Text style={{ fontSize: size, color: colors.red, fontWeight: weight }}>{title2}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginTop: 90
    },
});
