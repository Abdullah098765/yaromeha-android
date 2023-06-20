import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

const ModalComponent = () => {
    const [showModel, setShowModel] = useState(false);
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={showModel}
            onRequestClose={() => setShowModel(false)}

        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.title}>Choose an Option</Text>
                    <View style={styles.options}>
                        <TouchableOpacity style={styles.option1}>
                            <Icon name="google" size={20} color="orange"  style={styles.icon} />

                            <Text style={styles.optionText} >Sign in with Google</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.option2}>
                        <MaterialCommunityIcons name="ethereum" size={24} color="orange" />

             
                           <Text style={styles.optionText}>Continue with wallet</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.closeButton} onPress={() => setShowModel(!showModel)}>
                        <Text style={styles.closeButtonText}>Close</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 20
    },
    modalContent: {
        backgroundColor: '#075e54',
        padding: 20,
        borderRadius: 10,
        width: '80%',
        alignItems: 'center',
        backgroundColor: '#053f38',
        borderWidth: 20, // Border width
        borderColor: '#075e54', // Border color
        paddingVertical: 50
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#ffffff',
    },
    options: {
        alignItems: 'center',
        marginBottom: 20,
    },
    option1: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        borderWidth: 1,
        borderColor: 'rgba(22, 172, 159, 0.5)',
        borderRadius: 8,
        paddingVertical: 20,
        paddingHorizontal: 46,
        
        color: '#ffffff',


    },
    option2: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        borderWidth: 1,
        borderColor: 'rgba(22, 172, 159, 0.5)',
        borderRadius: 8,
        paddingVertical: 20,
        paddingHorizontal: 40,
        color: '#ffffff',


    },
    optionText: {
        fontSize: 16,
        marginLeft: 10,
        color: '#ffffff',
    },
    optionIcon: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    closeButton: {
        backgroundColor: 'transparent',
        color: '#ffffff',
        borderWidth: 0,
        marginTop: 20,
    },
    closeButtonText: {
        fontSize: 16,
        color: '#ffffff',
    },
});

export default ModalComponent;
