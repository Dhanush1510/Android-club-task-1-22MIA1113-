import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const MyForm = () => {
  // State variables to hold form data
  const [name, setName] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [department, setDepartment] = useState('Btech');
  const [courseType, setCourseType] = useState('FFCS');

  // Function to handle form submission
  const handleSubmit = () => {
    // Here you can handle form submission, like sending data to a server
    console.log('Submitted:', { name, registrationNumber, department, courseType });
  };

  return (
    <LinearGradient
      colors={['#24C6DC', '#514A9D']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.container}
    >
      {/* Name input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={text => setName(text)}
        />
      </View>

      {/* Registration number input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Registration Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your registration number"
          value={registrationNumber}
          onChangeText={text => setRegistrationNumber(text)}
        />
      </View>

      {/* Department dropdown */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Department</Text>
        <Picker
          style={styles.input}
          selectedValue={department}
          onValueChange={(itemValue, itemIndex) => setDepartment(itemValue)}
        >
          <Picker.Item label="Btech" value="Btech" />
          <Picker.Item label="Mtech" value="Mtech" />
          <Picker.Item label="Mtech(Int)" value="Mtech(Int)" />
          <Picker.Item label="BBA" value="BBA" />
          <Picker.Item label="Law" value="Law" />
        </Picker>
      </View>

      {/* Course type dropdown */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Course Type</Text>
        <Picker
          style={styles.input}
          selectedValue={courseType}
          onValueChange={(itemValue, itemIndex) => setCourseType(itemValue)}
        >
          <Picker.Item label="FFCS" value="FFCS" />
          <Picker.Item label="Non-FFCS" value="Non-FFCS" />
        </Picker>
      </View>

      {/* Submit button */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  input: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
    color: 'white',
    backgroundColor: 'transparent',
  },
  submitButton: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  submitText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MyForm;
