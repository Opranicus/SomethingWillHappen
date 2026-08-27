import { StyleSheet, Text, TextInput, View } from 'react-native';

type Props = {
    label: string;
    value: string;
    onChange: (text: string) => void;
}

export default function Input({label, value, onChange} : Props){
    return(
        <View style={styles.container}>
            <Text style={styles.inputLabel}>{label}:</Text>
            <TextInput
                style={styles.input} 
                value={value}
                onChangeText={onChange}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    },

    inputLabel: {
        fontSize: 22,
        color: "#fff",
        fontWeight: 'bold',
    },

    input: {
        width: '100%',
        padding: 10,
        color: '#03c1f5'
    }
})