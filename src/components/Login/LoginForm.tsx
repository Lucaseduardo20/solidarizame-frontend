import React, { Pressable } from "react-native";
import { useEffect, useState } from "react";
import {View, StyleSheet, Linking, Text, Button } from "react-native";
import axios from "axios";
import Input from "../../utils/Input";
import baseURL from "../../../services/api";

interface Link {
    label: string,
    url: string
}

const login = async (credentials) => {
    console.log(credentials);
    try {
        // const response = await axios.post(baseURL, credentials)
    } catch (err) {
        console.log(err)
    }
}

const Link = ({label, url}: Link) => {
    const handlePress = async () => {
        await Linking.openURL(url);
    }

    return (
        <Text style={styles.forgetPassword} onPress={handlePress}>{label}</Text>)
}

const Submit = (credentials) => {
    const handleSubmit = async () => {
        await login(credentials)
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
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [credentials, setCredentials] = useState({})

    useEffect(() => {
        setCredentials({
            email: email,
            password: password
        })
    }, [])

    return (
        <View style={styles.container}>
            <Input type="text" label="E-mail ou celular" state={email} setState={setEmail} />
            <Input type="password" label="Senha" state={password} setState={setPassword}/>
            <Link label={'Esqueci minha senha'} url={'www.google.com'}/>
            <Submit credentials={credentials}/>
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