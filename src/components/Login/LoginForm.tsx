import React, { Pressable } from "react-native";
import {View, StyleSheet, Linking, Text, Button } from "react-native";
import Input from "../../utils/Input";

interface Link {
    label: string,
    url: string
}

const Link = ({label, url}: Link) => {
    const handlePress = async () => {
        await Linking.openURL(url);
    }

    return (
        <Text style={styles.forgetPassword} onPress={handlePress}>{label}</Text>)
}

const Submit = () => {
    const handleSubmit = async () => {
        console.log('falta implementar')
    }

    return (
        <Pressable style={styles.submit} onPress={handleSubmit}>
            <Text style={styles.submitText}>Login</Text>
        </Pressable>
    )
}

const Footer = () => {
    return (
        <View style={styles.footerContainer}>
            <Text style={{fontFamily: 'Inter'}}>Ainda não possui uma conta?</Text>
            <Link label={'Cadastre-se'} url={'www.google.com'}/>
        </View>
    )
}


const LoginForm = () => {
    return (
        <View style={styles.container}>
            <Input label="E-mail ou celular" />
            <Input label="Senha" />
            <Link label={'Esqueci minha senha'} url={'www.google.com'}/>
            <Submit />
            <Footer />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '70%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'column'
    },

    forgetPassword: {
        fontWeight: 'bold',
            color: '#2563EB',
    },

    submit: {
        width: '100%',
        height: 50,
        backgroundColor: '#3B82F6',
        borderRadius: 4,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold'

    },
    submitText: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: 'Inter',
        lineHeight: 20

    },

    footerContainer: {
        marginTop: 50,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default LoginForm