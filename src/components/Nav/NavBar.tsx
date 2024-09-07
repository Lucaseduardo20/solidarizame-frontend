import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native"
import SolidarizameLogo from "../../icons/SolidarizameLogo"
import Feather from '@expo/vector-icons/Feather';
import { NavContainer } from "./NavContainer";
import { useState } from "react";

export const NavBar = () => {
    const [navOpen, setNavOpen] = useState(false);

    const navbar = StyleSheet.create({
        container: {
            width: '100%',
            height: ' 13%',
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            paddingHorizontal: 20
        },
        title: {
            fontFamily: 'Inter',
            fontSize: 16,
            fontWeight: 'bold',
            lineHeight: 32,
            color: '#232325'
        },
        button: {
            width: 27,
            height: 16
        }
    })

    return (
        <>
            <View style={navbar.container}>

                <SolidarizameLogo width={49} height={29} />
                <Text style={navbar.title}>Solidarizame</Text>
                <TouchableOpacity onPress={() => setNavOpen(!navOpen)}>
                    <Feather name="menu" size={35} color="#7A7786" />
                </TouchableOpacity>
            </View>
            <NavContainer trigger={navOpen} setTrigger={setNavOpen} />
        </>
    )
}