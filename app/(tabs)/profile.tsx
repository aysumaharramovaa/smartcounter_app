import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { ScrollView, StyleSheet } from "react-native";
import React from "react";

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      <ThemedText type="title" style={styles.title}>
        Profil
      </ThemedText>

      <ThemedView style={styles.profileContainer}>
        <ThemedText>Ad, Soyad: Aysu Maharramova</ThemedText>
        <ThemedText>Abunəlik Kodu: 1237654 </ThemedText>
        <ThemedText>Üzvlük: Premium </ThemedText>
        <ThemedText>Qeydiyyat Tarixi: 16/11/2025</ThemedText>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20,  paddingTop: 60, },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  profileContainer: { gap: 8 },
});
