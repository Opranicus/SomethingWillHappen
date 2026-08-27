import { Pressable, Modal as RNModal, StyleSheet, Text, TextInput, View } from 'react-native';


type Props = {
    isVisible: boolean;
    cardTitle: string;
    setCardTitle: (text: string) => void;
    onPress?: () => void;
    onClose?: () => void;
    children: React.ReactNode;
}

export default function Modal({ isVisible,cardTitle,setCardTitle,onPress, onClose, children }: Props) {
    return (
        <RNModal
            animationType='fade'
            transparent={true}
            visible={isVisible}
        >

            <View style={styles.container}>
                <View style={styles.contents}>
                    <View style={styles.buttons}>
                        <Pressable
                            style={styles.add}
                            onPress={onPress}
                        >
                            <Text style={styles.closeText}>Add an input</Text>

                        </Pressable>

                        <Pressable
                            style={styles.create}
                            onPress={onPress}
                        >
                            <Text style={styles.closeText}>Create Card</Text>

                        </Pressable>

                        <Pressable
                            onPress={onClose}
                            style={styles.close}
                        >

                            <Text style={styles.closeText}>Close</Text>
                        </Pressable>
                    </View>

                    <View style={styles.mainContent}>
                        <Text style={styles.cardText}>Create A Card</Text>
                        <TextInput
                            style={styles.cardInput}
                            placeholder={'Enter Card Title:'}
                            value={cardTitle}
                            onChangeText={setCardTitle}
                        />

                        
                        {children}
                    </View>

                </View>
            </View>

        </RNModal>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    contents: {
        width: 350,
        height: 400,
        backgroundColor: '#080808',
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 10,
    },

    close: {
        backgroundColor: '#ff0000',
        padding: 10,
        borderRadius: 10,

    },

    add: {
        backgroundColor: '#2fff00',
        padding: 10,
        borderRadius: 10,
    },

    buttons: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        gap: 10,
     
    },

    closeText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },

    mainContent: {
        marginTop: 30,
        alignItems: 'center',
    },

    cardText:{
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    create: {
        backgroundColor: '#219407',
        padding: 10,
        borderRadius: 10,
    },

    cardInput: {
        width: '65%',
        padding: 10,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#03c1f5',
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 10,
    }


})