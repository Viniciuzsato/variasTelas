import React from "react";
import { StyleSheet, Text, View } from "react-native";

function TabConfigScreen() {
    return(
        <View style={styles.container}>
            <Text>Tab CONFIG!!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default TabConfigScreen;