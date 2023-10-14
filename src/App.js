import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Challenge from './components/Challenge';
import Rewards from './components/Rewards';
import Profile from './components/Profile';

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>FitCoin Challenges</Text>
            <Challenge />
            <Rewards />
            <Profile />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 20,
    }
});
