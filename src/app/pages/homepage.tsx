import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import Button from '../../../components/Button';
import Cards from '../../../components/Cards';
import ImageDisplay from '../../../components/ImageDisplay';
import Input from '../../../components/Input';
import Modal from '../../../components/Modal';


export default function Homepage() {
    const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [cardTitle, setCardTitle] = useState('');

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

    const [inputs, setInputs] = useState<inputData[]>([]);
    const [cards, setCards] = useState<CardData[]>([])

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: 'images',
            quality: 1,

        });

        if (!result.canceled) {
            setSelectedImage(result.assets[0].uri);
        }
        else {
            alert("You did not pick an image.");
        }
    }

    const addInputComponent = () => {
        setInputs(prev => [...prev,
        {
            id: Date.now(),
            title: '',
            value: '',
        }
        ]);
    };

    const addNewCard = () => {
        const newCard = {
            id: Date.now().toString(),
            title: `${cardTitle}`,
            cards: inputs,
        };

        setCards(cards => [...cards, newCard]);
    }

    return (
        <ScrollView style={styles.scroll}>
            <View style={styles.container}>

                <View style={styles.profileHolder}>
                    <ImageDisplay selectedImage={selectedImage} />
                </View>

                <View style={styles.buttons}>
                    <Button label={'Choose a photo'} onPress={pickImage} />
                    <Button label={'Add a card'} onPress={() => setModalVisible(true)} />
                </View>

                <Modal
                    isVisible={modalVisible}
                    onClose={() => setModalVisible(false)}
                    cardTitle={cardTitle}
                    setCardTitle={setCardTitle}
                    addInput={addInputComponent}
                    addCard={addNewCard}
                >

                    {inputs.map((input) => (
                        <Input
                            key={input.id}
                            inputTitle={input.title}
                            value={input.value}

                            onChangeTitle={(text) => {
                                setInputs(prev => prev.map(item =>
                                    item.id === input.id ? { ...item, title: text }
                                        : item
                                ))
                            }}

                            onChange={(text) => {
                                setInputs(prev => prev.map(item =>
                                    item.id === input.id ? { ...item, value: text }
                                        : item
                                ))
                            }}
                        />
                    ))}

                </Modal>

                <View style={styles.cardContainer}>
                    <Text style={styles.bio}>BIO</Text>

                    {cards.map((card) => (
                        <View key={card.id} style={styles.cards}>
                            <Cards label={card.title}>
                                {card.cards.map((input) => (
                                    <Text key={input.id}>
                                        {input.title}: {input.value}
                                    </Text>
                                ))} 
                            </Cards>
                        </View>
                    ))}

                </View>

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#080808',
        flex: 1,
        alignItems: 'center',
    },

    buttons: {
        gap: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    profileHolder: {
        width: 330,
        height: 300,
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: '50%',
        marginTop: 30,
        marginBottom: 15,
    },

    bio: {
        color: '#fff',
        fontSize: 24,
        textAlign: 'center',
        paddingVertical: 10
    },

    cardContainer: {
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 10,
        width: '90%',
        height: '100%',
        margin: 30,
        padding: 10,
    },

    scroll: {
        backgroundColor: '#080808',

    },

    cards: {
        flex: 1,
        gap: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginTop: 20,
    }
})