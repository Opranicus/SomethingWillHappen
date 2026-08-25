import Ionicons from '@react-native-vector-icons/ionicons';
import { StyleSheet, Text, View } from 'react-native';

export default function About() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Ionicons name={'information-circle'} color={'#fff'} size={48} />
                <Text style={styles.headerText}>ABOUT</Text>
            </View>

            <View style={styles.projectContainer}>
                <Text style={styles.projectText}>PROJECT OVERVIEW</Text>
                <View style={styles.projectBorder}>
                    <Text style={styles.paragraph}>I started this project so that 
                          I can hone my skill and knowledge 
                          in using the expo framework. I also hope that 
                          I can develop something out of this by adding random stuff
                          on this project.

                    </Text>
                </View>
            </View>

            <View style={styles.developer}>
                <Text style={styles.projectText}>DEVELOPER</Text>
                <View style={styles.creds}>
                    <Text style={{fontSize: 21, color: '#fff'}}>Yours truly:</Text>
                    <Text style={{fontSize: 36, color: '#03c1f5', fontWeight: '600', marginTop: 20, textDecorationLine: 'underline'}}>Rebin Joachim L. Malayas</Text>
                    <Text style={{fontSize: 21, color: '#fff', marginTop: 10}}>aka Memers</Text>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: '#080808',
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        margin: 20,
    },

    headerText: {
        color: '#fff',
        fontSize: 42,
        fontWeight: 'bold',
    },

    projectBorder: {
        borderWidth: 1,
        borderColor: '#fff',
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    projectText: {
        color: '#03c1f5',
        fontSize: 24,
        fontWeight: '400',
    },

    projectContainer: {
        marginTop: 30,
        marginHorizontal: 30,
    },

    paragraph: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'justify',
        padding: 20,
    },

    developer: {
        marginHorizontal: 30,
        marginTop: 40,
    },

    creds: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    }
})