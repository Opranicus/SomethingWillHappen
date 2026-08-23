import { Link, useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import Button from '../../../components/Button';


export default function Login() {
    const router = useRouter();
    const  [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {Email, Password} = useLocalSearchParams();
    
    return (
        
        <View style={styles.container}>
            <Text style={styles.text}>Login</Text>
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
  
            </View>

            <Button label={'Login'}  onPress={()=> {

                if( email === Email && password === Password ){
                    alert('Success logging in!');
                    router.push('/pages/homepage');
                }

                else if (email !== Email) {
                    alert('Wrong email');
                }

                else if(password !== Password){
                    alert('Wrong password.');
                }

                else if (email !== Email && password !== Password){
                    alert('Incorrect input.');
                }
                else{
                    alert('All fields are required.');
                }
                
            }} />

            <View style={styles.link}>
                <Text style={styles.textAcc}>Dont have an account? </Text>
                <Link style={styles.href} href="/pages/sign-in">Sign-Up</Link>
            </View>
            
            <Link href={'/'} style={styles.href}>Go back</Link>
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

    textAcc: {
        color: '#fff',
        fontSize: 18,
    },

    href: {
        color: '#1008b1',
        fontSize: 18,
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

    link:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
        margin: 20,
    }
})