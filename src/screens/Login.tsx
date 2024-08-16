import React, { StyleSheet } from "react-native"
import { Text, View } from "react-native"
import SolidarizameLogo from "../icons/SolidarizameLogo"
import LoginForm from "../components/Login/LoginForm"

const Login = () => {
    return (
        <View style={styles.container}>
            <SolidarizameLogo />
            <View style={{
                width: '100%'
            }}>
                <Text style={styles.h2}>Login</Text>
            </View>
            <LoginForm />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: '90%',
        display: 'flex',
        width: '80%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    h2: {
        fontSize: 24,
        color: '#3B82F6',
        fontWeight: '500',
        lineHeight: 33.75
    }
})

export default Login