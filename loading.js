import React from 'react';
import { View, StyleSheet, Text, ActivityIndicator } from 'react-native';

const LoadingSpinner = () => {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator
        style={styles.loadingSpinner}
        size="large"
        color="rgba(22, 172, 159, 0.5)"
      />
      <Text style={styles.loadingText}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingSpinner: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 7,
    borderColor: 'rgba(22, 172, 159, 0.5)',
  },
  loadingText: {
    marginTop: 16,
    fontSize: 18,
    color: '#ffffff',
  },
});

export default LoadingSpinner;
