import React from "react";
import { Dimensions, ImageBackground, StatusBar, StyleSheet } from "react-native";

interface Props {
    children: React.ReactNode;
}

export const BgInitialContainer: React.FC<Props> = ({ children }) => {
    return (
        <ImageBackground
            style={styles.bg}
            source={require('../assets/images/bgInitial.png')}
        >
            <StatusBar barStyle="light-content" />
            {children}
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    bg: {
        height: Dimensions.get("window").height,
        overflow: 'hidden',
        paddingTop: 50,
        paddingHorizontal: 15
    },
});