import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { ScrollView, StyleSheet } from 'react-native';
import React from 'react';

export default function SavingsScreen() {
  return (
    <ScrollView style={styles.container}>
      <ThemedText type="title" style={styles.title}>
        Qənaət Tövsiyələri
      </ThemedText>

      <ThemedView style={styles.savingsContainer}>
        <ThemedText>• Su istifadəni azaltmaqla 10 AZN qənaət edə bilərsiniz.</ThemedText>
        <ThemedText>• İşıq lampalarını LED-lərlə əvəz edin.</ThemedText>
        <ThemedText>• Qaz istifadəsini optimallaşdırın.</ThemedText>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20,  paddingTop: 60, },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  savingsContainer: { gap: 8 },
});
