import * as React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

export default function HomeScreen2({navigation}){
    setTimeout(() => navigation.navigate("Home3"), 2000);
    return(
        <View>
            <Image style={styles.img} source={require("../assets/images/home_screens/img2.jpg")}/>
            <View style={styles.top_view}>
                <Image source={require("../assets/images/home_screens/logo.png")}/>
                <Text style={styles.text}>Keep your eyes on your baby</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    img: {
        width: "100%",
        height: "100%"
    },
    top_view: {
        flex: 1,
        width: "100%",
        height: "100%",
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "rgba(68,64,137,0.5)"
    },
    text: {
        width: "80%",
        textAlign: 'center',
        color: "white",
        fontSize: 25
    }
});