import { Link, router } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import Button from '../../../components/Button';


export default function SignUp() {
    const [signemail, setEmail] = useState('');
    const [signpassword, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.sign}>Sign-Up</Text>
            <View style={styles.inputField}>
                <TextInput
                    style={styles.input}
                    placeholder='Email'
                    value={signemail}
                    onChangeText={setEmail}

                />

                <TextInput
                    style={styles.input}
                    placeholder='Password'
                    value={signpassword}
                    onChangeText={setPassword}
                    secureTextEntry

                />

            </View>

            <Button label={'Sign-Up'} onPress={() => {
                if (signemail === '' || signpassword === '') {
                    alert("All fields are required.");
                }

                else {
                    router.push({
                        pathname: '/auth/login',
                        params: { Email: signemail, Password: signpassword },
                    });

                }
            }} />

            <Link style={styles.link} href='/auth/login'>Go back</Link>

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