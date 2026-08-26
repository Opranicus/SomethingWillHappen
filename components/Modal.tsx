import { Pressable, Modal as RNModal, StyleSheet, Text, View } from 'react-native';


type Props = {
    isVisible: boolean;
    onClose?: () => void;
    children: React.ReactNode;
}

export default function Modal({ isVisible, onClose, children }: Props) {
    return (
        <RNModal
            animationType='fade'
            transparent={true}
            visible={isVisible}
        >

            <View style={styles.container}>
                <View style={styles.contents}>
                    <Pressable 
                        onPress={onClose}
                        style={styles.close}
                    >

                        <Text style={styles.closeText}>Close</Text>
                    </Pressable>
                    <Text style={{ color: '#fff' }}>Create A Card</Text>
                    {children}
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
    
        alignItems: 'center',
        justifyContent: 'center',
    },

    close: {
        backgroundColor: '#ff0000',
        padding: 10,
        borderRadius: 10,

    },

    closeText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    }


})