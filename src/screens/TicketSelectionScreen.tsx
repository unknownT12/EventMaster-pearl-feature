import { View, FlatList } from "react-native";
import TicketCard from "../components/TicketCard";
import { ticketService } from "../services/ticketService";

export default function TicketSelectionScreen({ navigation }: any) {
  const tickets = ticketService.getAll();

  return (
    <View style={{ padding: 20 }}>
      <FlatList
        data={tickets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TicketCard
            ticket={item}
            onSelect={() =>
              navigation.navigate("Register", { ticket: item.name })
            }
          />
        )}
      />
    </View>
  );
}