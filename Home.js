import React, { useLayoutEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const Home = ({ navigation }) => {
    // Hide the default header
    useLayoutEffect(() => {
        navigation.setOptions({ headerShown: false });
    }, [navigation]);

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Image source={require("../assets/QuizTime.jpg")} style={styles.image} />
                <Text style={styles.title}>Quiz App</Text>
                <Text style={styles.subtitle}>Test your knowledge!</Text>
                <TouchableOpacity
                    style={styles.button}
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate("Quiz")}
                >
                    <Text style={styles.buttonText}>START QUIZ</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5E6E8", 
    },
    card: {
        backgroundColor: "#FFF",
        padding: 25,
        borderRadius: 15,
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 10,
        elevation: 5, 
    },
    image: {
        width: 180,
        height: 180,
        marginBottom: 15,
        borderRadius: 10,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 18,
        color: "#666",
        marginBottom: 25,
    },
    button: {
        backgroundColor: "#871F78",
        paddingVertical: 14,
        paddingHorizontal: 30,
        borderRadius: 10,
        shadowColor: "#871F78",
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 5,
        elevation: 5,
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
});

export default Home;
