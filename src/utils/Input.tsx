import React, { View, Text, TextInput, StyleSheet } from 'react-native'

interface props {
    label: string
}

const Input = ({label}: props) => {
    return (
        <View style={styles.container}>
            <Text>{label}</Text>
            <TextInput style={styles.input}></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 80,
        width: '100%',
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'space-between'
    },

    input: {
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: '#DBEAFE',
        height: '60%',
        backgroundColor: '#F6F6F8',
        borderRadius: 5,
        fontSize: 19
    },

    label: {
        fontFamily: 'Inter',
        fontSize: 14,
        color: '#4E4B59'
    }
})

export default Input