import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const MoreCourseCard = ({
    title,
    students,
    duration,
    price,
    oldPrice,
    image,
    onPress,
}) => {
    return (
        <TouchableOpacity style={styles.mccard} onPress={onPress}>
            <Image source={{ uri: image }} style={styles.mcimage} />

            <View style={styles.mccontent}>
                <Text numberOfLines={1} style={styles.mctitle}>
                    {title}
                </Text>

                <View style={styles.metaRow}>
                    <Ionicons name="school-outline" size={14} color="#333" />
                    <Text style={styles.metaText}>{students}</Text>

                    <Ionicons name="time-outline" size={14} color="#333" style={{ marginLeft: 10 }} />
                    <Text style={styles.metaText}>{duration}</Text>
                </View>

                <View style={styles.priceRow}>
                    <Text style={styles.price}>₹{price}</Text>
                    <Text style={styles.oldPrice}>₹{oldPrice}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default MoreCourseCard;

const styles = StyleSheet.create({
    mccard: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        borderRadius: 22,

        marginBottom: 80,

        paddingVertical: 14,
        paddingHorizontal: 16,
        marginVertical: 10,

        borderWidth: 0, // no border color

        // proper visible shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.12,
        shadowRadius: 8,
        elevation: 5,
    },

    mcimage: {
        width: 92,
        height: 62,
        borderRadius: 8,
        resizeMode: "cover",
    },

    mccontent: {
        flex: 1,
        marginLeft: 14,
        justifyContent: "center",
    },

    mctitle: {
        fontSize: 15,
        color: "#111",
        fontFamily: "PlayfairBold",
        marginBottom: 6,
    },

    metaRow: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 6,
    },

    metaText: {
        marginLeft: 4,
        marginRight: 10,
        fontSize: 12,
        color: "#111",
        fontFamily: "PoppinsRegular",
    },

    priceRow: {
        flexDirection: "row",
        alignItems: "center",
    },

    price: {
        fontSize: 16,
        color: "#111",
        fontFamily: "PoppinsSemiBold",
        marginRight: 6,
    },

    oldPrice: {
        fontSize: 11,
        color: "#666",
        textDecorationLine: "line-through",
        fontFamily: "PoppinsRegular",
    },
});