import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Image } from 'expo-image';

interface CardProps {
    title: string;
    description: string;
    price: number;
    image: string;
}

const Card = (props: CardProps) => {
    return (
        <View style={styles.card}>
            <Image source={{ uri: props.image }} style={styles.image} />

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
    }, 

    image: {
        width: 10, 
        height: 10,
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