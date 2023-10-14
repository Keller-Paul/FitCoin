import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Challenge() {
    return (
        <View style={styles.container}>
            <Text>30 Day Running Challenge</Text>
            <Button title="Join Challenge" onPress={() => alert('Challenge joined!')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginBottom: 20,
    }
});
