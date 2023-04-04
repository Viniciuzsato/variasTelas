import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useNavigation} from '@react-navigation/native';

function AboutScreen() {
    const navigation = useNavigation();

    const handleBackButton = () => {
        navigation.goBack();
    }

    return(
        <View style={styles.container}>
            <Text>Sobre</Text>
            <Button title="Voltar" onPress={handleBackButton} />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default AboutScreen;