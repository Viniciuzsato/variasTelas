import React, { useState} from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useNavigation} from '@react-navigation/native';
import { TextInput } from "react-native-gesture-handler";

function HomeScreen() {
    const navigation = useNavigation();

    const [name, setName] = useState('');

    const handleSendButton = () => {
        navigation.navigate('About', {name})
    }

    return(
        <View style={styles.container}>
            <Text>Digite seu nome:</Text>
            <TextInput 
                style={styles.input}
                value={name}
                onChangeText={t=>setName(t)}
            />

            <Button title="Enviar" onPress={handleSendButton}/>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width:250,
        padding:10,
        fontSize:15,
        backgroundColor: '#DDD'
    }
});

export default HomeScreen;