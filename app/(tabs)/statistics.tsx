import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import React, { useState } from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import { BarChart } from "react-native-chart-kit";

export default function ExploreScreen() {
  const [selectedTab, setSelectedTab] = useState<"monthly" | "yearly">(
    "monthly"
  );

  const payments = [
    { name: "İşıq", amount: 35, date: "2025-11-01" },
    { name: "Su", amount: 20, date: "2025-11-05" },
    { name: "Qaz", amount: 50, date: "2025-11-10" },
    { name: "İşıq", amount: 30, date: "2025-12-01" },
    { name: "Su", amount: 25, date: "2025-12-05" },
    { name: "Qaz", amount: 40, date: "2025-12-10" },
    { name: "İşıq", amount: 40, date: "2025-10-01" },
    { name: "Su", amount: 15, date: "2025-10-05" },
    { name: "Qaz", amount: 45, date: "2025-10-10" },
  ];

  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  const months = [
    "Yanvar",
    "Fevral",
    "Mart",
    "Aprel",
    "May",
    "İyun",
    "İyul",
    "Avqust",
    "Sentyabr",
    "Oktyabr",
    "Noyabr",
    "Dekabr",
  ];

  // Son 3 ay
  const lastMonths3 = Array.from({ length: 3 }, (_, i) => {
    const month = (currentMonth - i + 12) % 12;
    const year = month > currentMonth ? currentYear - 1 : currentYear;
    return `${months[month]} ${year}`;
  }).reverse();

  // Son 12 ay
  const lastMonths12 = Array.from({ length: 12 }, (_, i) => {
    const month = (currentMonth - i + 12) % 12;
    const year = month > currentMonth ? currentYear - 1 : currentYear;
    return `${months[month]} ${year}`;
  }).reverse();

  const chartConfig = {
    backgroundGradientFrom: "#f5f5f5",
    backgroundGradientTo: "#f5f5f5",
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
    labelColor: () => "#000",
    barPercentage: 0.6,
  };

  const getDataForService = (service: string, monthArray: string[]) => ({
    labels: monthArray,
    datasets: [
      {
        data: monthArray.map((month) =>
          payments
            .filter(
              (p) =>
                p.name === service &&
                `${months[new Date(p.date).getMonth()]} ${new Date(
                  p.date
                ).getFullYear()}` === month
            )
            .reduce((a, b) => a + b.amount, 0)
        ),
      },
    ],
  });

  const renderCharts = (monthArray: string[]) =>
    ["İşıq", "Su", "Qaz"].map((service) => {
      const data = getDataForService(service, monthArray);
      const chartWidth =
        selectedTab === "yearly"
          ? Dimensions.get("window").width - 24 + 30 * (monthArray.length - 12) 
          : Dimensions.get("window").width - 24; 

      return (
        <View key={service} style={styles.chartContainer}>
          <ThemedText style={styles.chartTitle}>{service}</ThemedText>
          <BarChart
            data={data}
            width={chartWidth}
            height={250}
            fromZero
            chartConfig={chartConfig}
            style={[
              styles.chart,
              selectedTab === "yearly" && { marginLeft: -15},
            ]}
            verticalLabelRotation={monthArray.length > 3 ? 90 : 0}
          />
        </View>
      );
    });

  return (
    <ScrollView style={styles.container}>
      {/* Tab Selector */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedTab === "monthly" && styles.tabButtonActive,
          ]}
          onPress={() => setSelectedTab("monthly")}
        >
          <ThemedText
            style={
              selectedTab === "monthly" ? styles.tabTextActive : styles.tabText
            }
          >
            Aylıq
          </ThemedText>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedTab === "yearly" && styles.tabButtonActive,
          ]}
          onPress={() => setSelectedTab("yearly")}
        >
          <ThemedText
            style={
              selectedTab === "yearly" ? styles.tabTextActive : styles.tabText
            }
          >
            İllik
          </ThemedText>
        </TouchableOpacity>
      </View>

      {/* Charts */}
      {selectedTab === "monthly"
        ? renderCharts(lastMonths3)
        : renderCharts(lastMonths12)}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    backgroundColor: "#f5f5f5",
  },
  tabContainer: {
    flexDirection: "row",
    
    marginBottom: 20,
    justifyContent: "center",
  },
  tabButton: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#ccc",
  },
  tabButtonActive: { borderBottomColor: "#007AFF" },
  tabText: { fontSize: 16, color: "#555" },
  tabTextActive: { fontSize: 16, color: "#007AFF", fontWeight: "bold" },
  chartContainer: {marginBottom: 30 },
  chart: { borderRadius: 12, marginLeft: 0 },
  chartTitle: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
});
