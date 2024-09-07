import { Modal, View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

type PropsType = {
    trigger: boolean,
    setTrigger: Function,
    navigation: any
}


export const NavContainer = (props: PropsType) => {
    const styles = StyleSheet.create({
        container : {
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            alignItems: 'flex-end'
        },
        navigation: {
            width: '60%',
            height: '100%',
            backgroundColor: 'white',
            justifyContent: 'space-between',
            paddingVertical: 70
        },
        header: {
            width: '100%',
            height: '30%',
            justifyContent: 'space-between',
            paddingVertical: 10,
            alignItems: 'flex-end'
        },
        navButton: {
            marginRight: 20
        },
        navList: {
            height: '90%',
            width: '100%',
            justifyContent: 'space-evenly',
            alignItems: 'center'

        },
        navItem: {
            backgroundColor: '#EFF6FF',
            height: 27,
            width: '80%',
            borderRadius: 8,
            paddingHorizontal: 10,
            justifyContent: 'center'
        },
        logoutContainer: {
            width: '100%',
            height: 'auto',
            alignItems: 'flex-end',
            paddingHorizontal: 10
        }
    })

    const handleLogout = () => {
        props.navigation.navigate('Home')
        props.setTrigger(!props.trigger)
    }

    return (
        <Modal
        visible={props.trigger}
        transparent={true}
        animationType="fade"
        >
            <View style={styles.container}>
                <View style={styles.navigation}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => props.setTrigger(false)} style={styles.navButton}>
                            <Feather name="menu" size={35} color="#7A7786" />
                        </TouchableOpacity>
                        <View style={styles.navList}>
                            <TouchableOpacity style={styles.navItem}>
                                <Text>Home</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.navItem}>
                                <Text>Minhas doações</Text>
                            </TouchableOpacity>
                            
                            <TouchableOpacity style={styles.navItem}>
                                <Text>Meus dados</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.navItem}>
                                <Text>Configurações</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.logoutContainer}>
                        <TouchableOpacity onPress={() => handleLogout()}>
                            <MaterialIcons name="logout" size={30} color="#3B82F6" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}