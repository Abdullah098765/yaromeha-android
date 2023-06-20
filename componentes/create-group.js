import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// import { getAuth } from 'firebase/auth';
// import AppContext from './AppContext';

const GroupCreationForm = () => {
    //   const auth = getAuth();

    const [isFormVisible, setIsFormVisible] = useState(false);
    //   const [groupData, setGroupData] = useState({
    //     groupName: '',
    //     groupDescription: '',
    //     ownerId: '',
    //     members: []
    //   });
    //   const { showModel, setShowModel } = useContext(AppContext);

    const handleOpenForm = () => {
        setIsFormVisible(true);
    };

    //   const handleSubmit = async () => {
    //     if (groupData.ownerId === '') {
    //       setShowModel(true);
    //       return;
    //     }

    //     setIsFormVisible(false);

    //     try {
    //       const response = await fetch('https://yaromeha-server-production.up.railway.app/create-group', {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(groupData)
    //       });

    //       if (response.ok) {
    //         const data = await response.json();
    //         console.log(data.message, data.group);
    //         // Open the group room using React Native navigation
    //         // You can use a navigation library like React Navigation
    //         // and navigate to the desired screen passing the groupId as a parameter
    //       } else {
    //         const error = await response.json();
    //         console.log(error.error);
    //       }
    //     } catch (error) {
    //       console.error('Error:', error);
    //     }
    //   };

    return (
        <View style={styles.groupCreation}>
            {!isFormVisible && (
                <TouchableOpacity style={styles.openFormButton} onPress={handleOpenForm}>
                    <Text style={styles.openFormButtonText}>Create a Group</Text>
                </TouchableOpacity>
            )}

            {isFormVisible && (
                <View style={styles.groupForm}>
                    <Text style={styles.label}>Group Name:</Text>
                    <TextInput
                        style={styles.input}
                        // onChangeText={value => setGroupData({ ...groupData, groupName: value })}
                        placeholder="Enter group name"
                    />

                    <Text style={styles.label}>Group Description:</Text>
                    <TextInput
                        style={styles.input}
                        // onChangeText={value => setGroupData({ ...groupData, groupDescription: value })}
                        placeholder="Enter group descriptions"
                        multiline
                    />

                    <TouchableOpacity style={styles.createGroupButton}
                        //   onPress={handleSubmit}
                    >
                        <Text style={styles.createGroupButtonText}>Create Group</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.cancelButton}
                        onPress={() => {
                            setIsFormVisible(!isFormVisible);
                        }}
                    >
                        <Text style={styles.cancelButtonText}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    groupCreation: {
        marginTop: 90,
        // flex: -6,
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        backgroundColor: '#075e54',
        paddingLeft: 20,
        paddingRight: 20,
        paddingVertical: 10,
        // position:'relative'
    },
    openFormButton: {
        padding: 12,
        borderRadius: 5,
        backgroundColor: '#fff',
        alignItems: 'center',

    },
    openFormButtonText: {
        color: '#075e54',
        fontSize: 16
    },
    groupForm: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        marginVertical: 20
    },
    label: {
        fontSize: 16,
        marginBottom: 10
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20
    },
    createGroupButton: {
        backgroundColor: '#075e54',
        borderRadius: 5,
        padding: 10,
        alignItems: 'center'
    },
    createGroupButtonText: {
        color: '#fff',
        fontSize: 16
    },
    cancelButton: {
        marginTop: 10,
        alignItems: 'center'
    },
    cancelButtonText: {
        color: '#075e54',
        fontSize: 16
    }
});

export default GroupCreationForm;
