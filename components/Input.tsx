import { StyleSheet, TextInput, View } from 'react-native';

type Props = {
    inputTitle: string;
    value: string;
    onChange: (text: string) => void;
    onChangeTitle: (text: string) => void;
}

export default function Input({inputTitle, value, onChange, onChangeTitle} : Props){
    return(
        <View style={styles.container}>
            <TextInput 
                style={styles.inputHeader}
                value={inputTitle}
                placeholder={'Header'}
                onChangeText={onChangeTitle}
               
            />
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
        padding: 10,
    },

    inputHeader: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        width: '100%',
        padding: 10,
    },

    input: {
        width: '100%',
        padding: 10,
        color: '#03c1f5'
    }
})