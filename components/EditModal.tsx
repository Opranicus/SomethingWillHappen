import { useState } from 'react';
import { Pressable, Modal as RNModal, StyleSheet, Text, TextInput, View } from 'react-native';

type inputData = {
    id: number;
    value: string;
    title: string;
}

type CardData = {
    id: string;
    title: string;
    cards: inputData[];
};

type Props = {
    isVisible: boolean;
    onClose?: () => void;
    card: CardData | null;
}

export default function EditModal({ isVisible, onClose, card }: Props) {

    const [inputs, setInputs] = useState<inputData[]>([]);

    return (
        <RNModal
            animationType='fade'
            transparent={true}
            visible={isVisible}
        >
            <View style={styles.container}>
                <View style={styles.content}>
                    <View style={styles.button}>
                        <Pressable
                            style={styles.closeBtn}
                            onPress={onClose}
                        >
                            <Text style={{ color: '#fff', textAlign: 'center' }}>Close</Text>
                        </Pressable>
                    </View>
                    <Text style={styles.title}>Title: {card?.title}</Text>
                    {card?.cards.map((input) => (
                        <View key={input.id}>
                            <Text>
                                {input.title}
                            </Text>

                            <TextInput
                                value={input.value}
                            />
                        </View>
                    ))}
                </View>
            </View>
        </RNModal>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    content: {
        backgroundColor: '#080808',
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 10,
        width: 350,
        height: 450,
        padding: 10,
    },

    closeBtn: {
        width: '20%',
        backgroundColor: '#f70909',
        padding: 10,
        borderRadius: 10,
    },

    button: {
        alignItems: 'flex-end',

    },

    title: {
        color: '#fff',
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold',
    }

})