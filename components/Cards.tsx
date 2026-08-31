import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type Props = {
    label: string;
    children?: React.ReactNode;
    update?: () => void;
    remove? : () => void;
}

export default function Cards({ label, children, update, remove }: Props) {
    return (
        <View style={styles.card}>
            <Text style={styles.text}>{label}</Text>
            {children}
            <View style={styles.btnContainer}>
                <Pressable
                    style={styles.editBtn}
                    onPress={update}
                >
                    <Text style={styles.btnLabel}>Edit</Text>
                </Pressable>

                <Pressable
                    style={styles.delBtn}
                    onPress={remove}
                >
                    <Text style={styles.btnLabel}>Delete</Text>
                </Pressable>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#03c1f5',
        width: 170,
        height: 250,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        padding: 10,

    },

    text: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
    },

    editBtn: {
        backgroundColor: '#1c18a7',
        width: 50,
        padding: 5,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: "#080808",
        textAlign: 'center',
    },

    delBtn: {
        backgroundColor: '#dc1313',
        width: 60,
        padding: 5,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: "#080808",
        textAlign: 'center',
    },

    

    btnLabel: {
        color: '#fff',
        textAlign: 'center',
    },

    btnContainer: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 10,
    }
})
