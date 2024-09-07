import { Modal, View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Feather from '@expo/vector-icons/Feather';

type PropsType = {
    trigger: boolean,
    setTrigger: Function
}


export const NavContainer = ({trigger, setTrigger}: PropsType) => {
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
        }
    })

    return (
        <Modal
        visible={trigger}
        transparent={true}
        animationType="fade"
        >
            <View style={styles.container}>
                <View style={styles.navigation}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => setTrigger(false)} style={styles.navButton}>
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
                </View>
            </View>
        </Modal>
    )
}