import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Image} from 'expo-image';

interface CardProps {
    title: string;
    description: string;
    price: number;
    image: string[]; //por ser uma lista de url
}

const Card = (props: CardProps) => {
    return (
        <View style={styles.card}>
           < Image source={{ uri: props.image[0] }} style={styles.image} />

            <View>
                <Text style={styles.title}>{props.title}</Text>

                <Text style={styles.description}>{props.description}</Text>

                <Text style={styles.price}>${props.price.toFixed(2)}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#d3c8c8',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        margin: 10,
        width: 320,
        height: 320
    }, 

    image: {
        width: 100, 
        height: 100,
    },

    title: {
        fontSize: 14,
        fontWeight: 'bold',
    },

    description: {
        fontSize: 12,
    },

    price: {
        fontSize: 14,
        fontWeight: 'bold',
    },
})

export default Card;