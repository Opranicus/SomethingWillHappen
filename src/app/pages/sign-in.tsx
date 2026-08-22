import { Link } from 'expo-router';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';


export default function () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.sign}>Sign-Up</Text>
            <View style={styles.inputField}>
                <TextInput
                    style={styles.input}
                    placeholder='Email'
                    value={email}
                    onChangeText={setEmail}

                />

                <TextInput
                    style={styles.input}
                    placeholder='Password'
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry

                />

            </View>

        <Pressable style={styles.buttonSign}>
            <Text style={styles.textSign}>Sign-In</Text>
        </Pressable>

        <Link style={styles.link} href='/pages/login'>Go back</Link>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#080808',
    },

    inputField: {
        width: '60%',
        gap: 40,
        margin: 50,
    },

    link: {
        color: '#220ce7',
        fontSize: 18,
        marginTop: 20
    },

    buttonSign: {
        backgroundColor: '#03c1f5',
        paddingHorizontal: 50,
        padding: 20,
        borderRadius: 10

    },

    textSign: {
        fontSize: 24,
        fontWeight: 'bold',
    },

    input: {
        padding: 12,
        backgroundColor: '#fff',
        borderRadius: 10,
    },

    sign: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff'
    },
})