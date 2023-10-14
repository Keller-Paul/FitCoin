import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Rewards() {
    return (
        <View style={styles.container}>
            <Text>Rewards earned: 100 FitCoins</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginBottom: 20,
    }
});
