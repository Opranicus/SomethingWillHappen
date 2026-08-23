import { StyleSheet, Text, View } from 'react-native';

type Props = {
    label: string;
}

export default function Cards({label} : Props){
    return(
        <View style={styles.card}>
            <Text style={styles.text}>{label}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#03c1f5',
        width: 200,
        height: 250,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
    },

    text: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
    }
})
