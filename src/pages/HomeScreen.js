import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useNavigation} from '@react-navigation/native';

function HomeScreen() {
    const navigation = useNavigation();

    const handleSobreClick = () => {
        navigation.navigate('About')
    }

    return(
        <View style={styles.container}>
            <Text>Tela HOME</Text>
            <Button title="Ir para a tela Sobre" onPress={handleSobreClick}/>
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

export default HomeScreen;