import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const EnrollButton = ({ price = 551, oldPrice = 850, onPress = () => {} }) => {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.9} onPress={onPress}>

            {/* Center Text */}
            <Text style={styles.text}>
                Enroll Course - ₹{price}{' '}
                <Text style={styles.oldPrice}>₹{oldPrice}</Text>
            </Text>

            {/* Right Circle Arrow */}
            <View style={styles.iconCircle}>
                <MaterialIcons name="arrow-forward" size={24} color="#F9851C" />
            </View>

        </TouchableOpacity>
    );
};

export default EnrollButton;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(249, 133, 28, 0.78)", 
        // backgroundColor: "#F9851C",
        borderRadius: 40,
        paddingVertical: 16,
        paddingHorizontal: 20,
        marginHorizontal: 16,
        marginVertical: 10,

        justifyContent: "center",
        alignItems: "center",

        // shadow
        shadowColor: "#000",
        shadowOpacity: 0.18,
        shadowOffset: { width: 0, height: 6 },
        shadowRadius: 10,
        elevation: 8,
    },

    text: {
        color: "#fff",
        fontSize: 14,
        fontFamily: 'JostSemiBold'
    },

    oldPrice: {
        textDecorationLine: "line-through",
        opacity: 0.9,
        fontSize: 12,
        fontFamily: 'JostSemiBold'
    },

    iconCircle: {
        position: "absolute",
        right: 10,
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: "rgba(255,255,255,0.85)", // transparent white
        justifyContent: "center",
        alignItems: "center",
    },
});