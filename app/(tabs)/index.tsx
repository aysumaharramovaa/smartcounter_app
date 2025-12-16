import { StyleSheet, View, Text, ScrollView } from "react-native";

export default function HomeScreen() {
  const payments = [
    { name: "İşıq", amount: 35, lastPaid: "2025-12-01" },
    { name: "Su", amount: 20, lastPaid: "2025-12-03" },
    { name: "Qaz", amount: 50, lastPaid: "2025-12-05" },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.sectionTitle}>Ödənişlərim</Text>

      {payments.map((item, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.cardTitle}>{item.name}</Text>
          <Text style={styles.cardAmount}>{item.amount} AZN</Text>
          <Text style={styles.cardDate}>Son ödəniş: {item.lastPaid}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 45,
    paddingTop: 60,
    backgroundColor: "#F5F7FA",
  },
  sectionTitle: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 15,
  },
  card: {
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 12,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  cardAmount: {
    fontSize: 16,
    marginTop: 4,
  },
  cardDate: {
    fontSize: 14,
    marginTop: 2,
    color: "#666",
  },
});
