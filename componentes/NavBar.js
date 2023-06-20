import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Navbar = ({ signOutFunc, user }) => {
    const toggleDropdown = () => {
        // Implement the logic for toggling the dropdown menu
    };

    return (
        <View style={styles.container}>

            <View style={styles.navbar}>
                <Text style={styles.title}>Yaromeha App</Text>
                {true ? (
                    <TouchableOpacity onPress={toggleDropdown}>
                        <Image
                            source={{ uri: 'https://lh3.googleusercontent.com/ogw/AOLn63Et_giTNzo73Vwnt8M627pb8Ww897MUyHPsMFTlHA=s32-c-mo' }}
                            style={styles.profileImage}
                            resizeMode="cover"
                        />
                    </TouchableOpacity>
                ) : (
                    <Text style={styles.login}>SignIn</Text>
                )}
            </View>
            {false && (
                <View style={styles.dropdownMenu}>
                    <TouchableOpacity style={styles.menuItem}>
                        <FontAwesome name="user" style={styles.dropdownIcon} />
                        <Text style={styles.menuText}>Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem}>
                        <FontAwesome name="cog" style={styles.dropdownIcon} />
                        <Text style={styles.menuText}>Settings</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem} onPress={signOutFunc}>
                        <FontAwesome name="sign-out" style={styles.dropdownIcon} />
                        <Text style={styles.menuText}>Logout</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#053f38',
        paddingTop: 30,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(22, 172, 159, 0.5)',
        shadowOffset: { width: 0, height: 0 },
        shadowColor: 'rgba(150, 150, 150, 0.192)',
        shadowOpacity: 1,
        shadowRadius: 3000,
        paddingHorizontal: 20,
         position: 'absolute', top: 0, left: 0, right: 0
    },
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        
    },
    title: {
        fontFamily: 'Roboto',
        fontSize: 20,
        color: 'white',
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    login: {
        color: '#fff',
        fontSize: 16,
    },
    dropdownMenu: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        borderRadius: 8,
        padding: 10,
        marginTop: 10,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8,
    },
    dropdownIcon: {
        fontSize: 16,
        color: 'white',
        marginRight: 8,
    },
    menuText: {
        color: 'white',
        fontSize: 16,
    },
});

export default Navbar;
