import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";

const RegisterScreen = ({ route, navigation }: any) => {
  const { selectedTicket } = route.params;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dietary, setDietary] = useState("");

  const handleSubmit = () => {
    if (!name || !email || !phone) {
      Alert.alert("Error", "Please fill all required fields");
      return;
    }

    const attendee = {
      name,
      email,
      phone,
      dietary,
      ticket: selectedTicket.name,
    };

    console.log("New Attendee:", attendee);

    Alert.alert("Success", "Registration Complete!");
    navigation.navigate("Dashboard");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Register - {selectedTicket.name}
      </Text>

      <TextInput
        placeholder="Full Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />

      <TextInput
        placeholder="Phone Number"
        value={phone}
        onChangeText={setPhone}
        style={styles.input}
      />

      <TextInput
        placeholder="Dietary Needs"
        value={dietary}
        onChangeText={setDietary}
        style={styles.input}
      />

      <Button title="Complete Registration" onPress={handleSubmit} />
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 15,
    borderRadius: 8,
  },
});