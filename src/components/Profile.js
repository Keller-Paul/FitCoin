import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Profile() {
    return (
        <View style={styles.container}>
            <Text>Username: JohnDoe</Text>
            <Text>Total Challenges Participated: 5</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    }
});
