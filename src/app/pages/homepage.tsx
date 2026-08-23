import { StyleSheet, Text, View } from 'react-native';
import Button from '../../../components/Button';

export default function Homepage() {
    return (
        <View style={styles.container}>

            <View style={styles.profileHolder}>
                
            </View>

            <Button label={'Choose a photo'}  /> 

            <View style={styles.cardContainer}>
                <Text style={styles.bio}>BIO</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#080808',
        flex: 1,
        alignItems: 'center',
    },

    profileHolder: {
        width: 330,
        height: 300,
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: '50%',
        marginTop: 30,
        marginBottom: 15,
    },

    bio: {
        color: '#fff',
        fontSize: 24,
        textAlign: 'center',
        paddingVertical: 10
    },

    cardContainer: {
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 10,
        width: '90%',
        height: '50%',
        margin: 30,

    }
})