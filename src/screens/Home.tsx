import { NavBar } from "../components/Nav/NavBar"
import { HomeBody } from "../components/Home/HomeBody"
import { ScrollView } from "react-native"

export const Home = ({navigation}) => {

    return (
        <>
            <NavBar navigation={navigation} />
            <HomeBody />
        </>
    )
}