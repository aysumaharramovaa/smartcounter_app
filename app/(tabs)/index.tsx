import { Image, Platform, StyleSheet, View, Text } from 'react-native';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { HelloWave } from '@/components/hello-wave';

export default function HomeScreen() {
  const payments = [
    { name: 'İşıq', amount: 35, lastPaid: '2025-12-01' },
    { name: 'Su', amount: 20, lastPaid: '2025-12-03' },
    { name: 'Qaz', amount: 50, lastPaid: '2025-12-05' },
  ];

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }
    >
      {/* Welcome hissəsi */}
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>

      {/* Ödənişlərim hissəsi */}
      <View style={styles.paymentContainer}>
        <Text style={styles.sectionTitle}>Ödənişlərim</Text>
        {payments.map((item, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.cardTitle}>{item.name}</Text>
            <Text style={styles.cardAmount}>{item.amount} AZN</Text>
            <Text style={styles.cardDate}>Son ödəniş: {item.lastPaid}</Text>
          </View>
        ))}
      </View>

      {/* Step hissələri */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({ ios: 'cmd + d', android: 'cmd + m', web: 'F12' })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 15,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  paymentContainer: { padding: 20 },
  sectionTitle: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  card: { padding: 15, backgroundColor: '#fff', borderRadius: 8, marginBottom: 10 },
  cardTitle: { fontSize: 18, fontWeight: 'bold' },
  cardAmount: { fontSize: 16, marginTop: 4 },
  cardDate: { fontSize: 14, marginTop: 2, color: '#555' },
  stepContainer: { gap: 8, marginBottom: 8 },
});
