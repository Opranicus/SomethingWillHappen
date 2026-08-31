import { Pressable, Modal as RNModal, StyleSheet, Text, View } from 'react-native';

type Props = {
    isVisible: boolean;
    onClose?: () => void;
    children: React.ReactNode;
}

export default function EditModal({ isVisible, onClose, children }: Props) {
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

                    {children}
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
        
    }

})