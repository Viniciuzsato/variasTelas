import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useNavigation, useRoute} from '@react-navigation/native';

function AboutScreen() {
    const navigation = useNavigation();
    const route = useRoute();

    const name = route.params?.name ?? 'Visitante'

    const handleBackButton = () => {
        navigation.goBack();
    }

    return(
        <View style={styles.container}>
            <Text>Tela de sobre: {name}</Text>
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