import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import React from 'react';
import { Dimensions, Platform, ScrollView, StyleSheet } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

export default function ExploreScreen() {

  const payments = [
  { name: 'İşıq', amount: 35, date: '2025-12-01' },
  { name: 'Su', amount: 20, date: '2025-12-05' },
  { name: 'Qaz', amount: 50, date: '2025-12-10' },
  { name: 'İşıq', amount: 30, date: '2025-12-12' },
];


  const data = {
    labels: payments.map(p => p.name),
    datasets: [{ data: payments.map(p => p.amount) }],
  };

  return (
    <ScrollView style={styles.container}>
      <ThemedText type="title" style={styles.title}>
        Statistikalar
      </ThemedText>

      {Platform.OS !== 'web' ? (
        <BarChart
          data={data}
          width={Dimensions.get('window').width - 40}
          height={220}
          fromZero
          chartConfig={{
            backgroundGradientFrom: '#f5f5f5',
            backgroundGradientTo: '#f5f5f5',
            color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0,0,0,${opacity})`,
          }}
          style={styles.chart}
        />
      ) : (
        <ThemedText style={styles.chartWarning}>Grafiklər web-də mövcud deyil.</ThemedText>
      )}

      <ThemedView style={styles.savingsContainer}>
        <ThemedText type="subtitle">Qənaət Tövsiyələri:</ThemedText>
        <ThemedText>• Su istifadəni azaltmaqla 10 AZN qənaət edə bilərsiniz.</ThemedText>
        <ThemedText>• İşıq lampalarını LED-lərlə əvəz edin.</ThemedText>
        <ThemedText>• Qaz istifadəsini optimallaşdırın.</ThemedText>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  chart: {
    borderRadius: 10,
  },
  chartWarning: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    paddingVertical: 40,
  },
  savingsContainer: {
    marginTop: 20,
    gap: 8,
  },
});
