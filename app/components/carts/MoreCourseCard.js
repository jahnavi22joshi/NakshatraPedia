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
        backgroundColor: "#FFFFFF", // cleaner card look
        borderRadius: 18,
        padding: 12,
        marginBottom: 14,

        borderWidth: 1,
        borderColor: "#002B3B", // your accent color

        // elevation (Android)
        elevation: 5,
    },

    mcimage: {
        width: 80, // 🔽 slightly smaller
        height: 80,
        borderRadius: 10,
    },

    mccontent: {
        flex: 1,
        marginLeft: 10,
        justifyContent: "center",
    },

    mctitle: {
        fontSize: 15, // 🔽 slightly tighter
        fontWeight: "700",
        color: "#000",
        marginBottom: 4,
    },

    metaRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 2, // 🔽 reduced spacing
    },

    metaText: {
        marginLeft: 4,
        marginRight: 8,
        fontSize: 12,
        color: '#555',
    },

    priceRow: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 4, // 🔽 reduced spacing
    },

    price: {
        fontSize: 16, // 🔽 smaller but cleaner
        fontWeight: 'bold',
        marginRight: 6,
    },

    oldPrice: {
        fontSize: 12,
        color: '#888',
        textDecorationLine: 'line-through',
    },
});