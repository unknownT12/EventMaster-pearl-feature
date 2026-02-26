import { View, Text, FlatList, StyleSheet } from "react-native";
import { attendeeService } from "../services/attendeeService";

export default function GuestDatabaseScreen() {
  const attendees = attendeeService.getAll();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Guest Database</Text>

      <FlatList
        data={attendees}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.fullName}</Text>
            <Text>{item.email}</Text>
            <Text>Ticket: {item.ticketType}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
  },
  name: { fontWeight: "bold", fontSize: 16 },
});