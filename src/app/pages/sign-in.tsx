import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';


export default function () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [display, handleDisplay] = useState('');

    return (
        <View style={styles.container}>
            <Text>Sign-Up</Text>
            <View style={styles.inputField}>
                <TextInput
                    style={styles.input}
                    placeholder='Email'

                />

                <TextInput
                    style={styles.input}
                    placeholder='Password'

                />



            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    inputField: {
        width: '60%',
        gap: 10,
        margin: 50,
    },

    input: {
        padding: 12,
    }
})