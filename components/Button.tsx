import { Pressable, StyleSheet, Text, View } from 'react-native';

type Props = {
    label: string;
    onPress?: () => void;
};

export default function Button({label, onPress} : Props) {
    return(
        <View>
            <Pressable style={styles.btn} onPress={onPress}>
                <Text style={styles.btnLabel}>{label}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    btn: {
       
        backgroundColor: '#03c1f5',
        paddingHorizontal: 40,
        paddingVertical: 10,
        borderRadius: 10,
    },

    btnLabel: {
        fontSize: 24,
        fontWeight: 'bold',
    }
})
