import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { ScrollView, StyleSheet } from "react-native";
import React from "react";

export default function SavingsScreen() {
  return (
    <ScrollView style={styles.container}>
      <ThemedText type="title" style={styles.title}>
        Qənaət Tövsiyələri
      </ThemedText>

      <ThemedView style={styles.savingsContainer}>
        <ThemedView style={styles.tipBox}>
          <ThemedText style={styles.tipText}>
            Su istifadəni azaltmaqla 10 AZN qənaət edə bilərsiniz.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.tipBox}>
          <ThemedText style={styles.tipText}>
            İşıq lampalarını LED-lərlə əvəz edin.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.tipBox}>
          <ThemedText style={styles.tipText}>
            Qaz istifadəsini optimallaşdırın.
          </ThemedText>
        </ThemedView>
      </ThemedView>
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
  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 20,
    color: "#1f2937",
    textAlign: "center",
  },
  savingsContainer: {
    gap: 12,
    backgroundColor: "#f5f5f5",
  },
  tipBox: {
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  tipText: {
    fontSize: 16,
    color: "#374151",
    lineHeight: 22,
  },
});
