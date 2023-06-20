import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
// import { AppContext } from '../AppContext'; // Import your AppContext if necessary

const Card = ({ group }) => {
    //   let { showModel, setShowModel } = useContext(AppContext);
    // console.log(group);
    return (
        <View style={styles.cardContainer}>
            <View style={styles.cardDescriptionAndTitle}>
                <Text style={styles.cardTitle}>{group.groupName}</Text>
                <Text style={styles.cardDescription}>{group.groupDescription}</Text>
            </View>
            <View
                style={{
                    borderBottomColor: 'rgba(22, 172, 159, 0.5)',
                    borderBottomWidth: 1,
                    marginVertical: 20,
                }}

            ></View>
            <View style={styles.members}>
                <View style={styles.memberList}>



                    {group && group.members.map((member, index) => (
                        <Image
key={index}
                            source={{ uri: member.photoURL }}
                            style={styles.profilePicture}
                            resizeMode="cover"
                        />
                    ))}
                </View>
            </View>
            <TouchableOpacity
                style={styles.cardButton}
                onPress={() => {
                    if (localStorage.getItem("uid") === null) {
                        setShowModel(true);
                    } else {
                        console.log("Group joined");
                        // Use appropriate navigation or redirection logic here
                    }
                }}
            >
                <Text style={styles.buttonText}>Join Group</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#053f38',
        // borderRadius: 10,
        padding: 20,
        marginBottom: 20,
        // display: 'flex',
        // flexDirection: 'column',
        // alignItems: 'center'

        // Add any additional styles you need
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10,
        // Add any additional styles you need
    },
    cardDescription: {
        fontSize: 16,
        marginBottom: 10,
        color: '#fff'

        // Add any additional styles you need
    },
    cardDescriptionAndTitle: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

    },

    memberList: {
        flexDirection: 'row',
        alignItems: 'center',

        marginBottom: 10,
        // Add any additional styles you need
    },
    members: {
        flexDirection: 'column',
        alignItems: 'center',

        marginBottom: 10,
        // Add any additional styles you need
    },
    profilePicture: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
        // Add any additional styles you need
    },
    cardButton: {
        backgroundColor: '#fff',
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center',

        // Add any additional styles you need
    },
    buttonText: {
        color: '#075e54',
        fontSize: 16,
        fontWeight: 'bold',
        // Add any additional styles you need
    },
});

export default Card;
