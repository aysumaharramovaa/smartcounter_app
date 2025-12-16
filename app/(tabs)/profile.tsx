import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      <ThemedText type="title" style={styles.title}>
        Profil
      </ThemedText>

      <View style={styles.profileContainer}>
        <View style={styles.infoBox}>
          <ThemedText style={styles.label}>Ad, Soyad:</ThemedText>
          <ThemedText style={styles.value}>Aysu Maharramova</ThemedText>
        </View>

        <View style={styles.infoBox}>
          <ThemedText style={styles.label}>Abunəlik Kodu:</ThemedText>
          <ThemedText style={styles.value}>1237654</ThemedText>
        </View>

        <View style={styles.infoBox}>
          <ThemedText style={styles.label}>Üzvlük:</ThemedText>
          <ThemedText style={styles.value}>Premium</ThemedText>
        </View>

        <View style={styles.infoBox}>
          <ThemedText style={styles.label}>Qeydiyyat Tarixi:</ThemedText>
          <ThemedText style={styles.value}>16/11/2025</ThemedText>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 60,
    backgroundColor: '#f5f5f5', 
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 30,
    color: 'black',
    textAlign: 'center',
    textShadowColor: 'rgba(0,0,0,0.1)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  profileContainer: {
    gap: 15,
  },
  infoBox: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 5,
  },
  label: {
    fontSize: 14,
    color: '#777',
    marginBottom: 4,
  },
  value: {
    fontSize: 16,
    color: '#004d40',
    fontWeight: '500',
  },
});