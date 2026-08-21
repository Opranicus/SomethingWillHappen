import { Link, useRouter } from 'expo-router';
import { useState } from 'react';
import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';


export default function Login() {
    const router = useRouter();
    const  [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [display, handleDisplay] = useState('');
    
    
    
    return (
        <View style={styles.container}>
            <Text style={styles.text}>This is the Login page</Text>
            <View style={styles.textFieldsContainer}>
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

                <Text style={styles.display} >
                    Hello, {display}
                </Text>

                
            </View>

            <Pressable style={styles.button} onPress={()=> {

                if( email === '' ){
                    alert("Please put something in the email field.");
                }
                else{
                    handleDisplay(email);
                }
                
            }}>
                <Text style={styles.buttonText}>Login</Text>
            </Pressable>

            <View style={styles.link}>
                <Text>Dont have an account? </Text>
                <Link href="/pages/sign-in">Sign-Up</Link>
            </View>
            
            <Button color='#0ae1f4' title="Go back" onPress={() => router.push('/')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#080808'
    },

    text: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },

    textFieldsContainer: {
        gap: 40,
        width: '60%',
        margin: 50,
    },

    input: {
        backgroundColor: '#fff',
        padding: 12,
        borderRadius: 10,
        color: '#160f0fa3'
    },

    button: {
        paddingHorizontal: 50,
        marginBottom: 20,
        backgroundColor: '#03c1f5',
        padding: 10,
        borderRadius: 10,

    },

    buttonText:{
        color: '#358194',
        fontSize: 24,
    },

    display: {
        color: '#fff',
        fontSize: 24,
    },

    link:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
    }
})