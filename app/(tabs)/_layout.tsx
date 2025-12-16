import { Tabs } from 'expo-router';
import React from 'react';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { HapticTab } from '@/components/haptic-tab';
import { Ionicons } from '@expo/vector-icons'; 

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (

    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Ödənişlərim",
          tabBarIcon: ({ color }) => <Ionicons name="card" size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="statistics"
        options={{
          title: "Statistika",
          tabBarIcon: ({ color }) => <Ionicons name="stats-chart" size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="economy"
        options={{
          title: "Qənaət",
          tabBarIcon: ({ color }) => <Ionicons name="wallet" size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profil",
          tabBarIcon: ({ color }) => <Ionicons name="person" size={28} color={color} />,
        }}
      />
    </Tabs>
  );
}
