import React from "react";
import { StyleSheet, Text, View } from "react-native";

function TabHomeScreen() {
    return(
        <View style={styles.container}>
            <Text>Tab HOME!!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default TabHomeScreen;