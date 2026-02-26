import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Icon from '@expo/vector-icons/MaterialIcons';

type RootStackParamList = {
  Dashboard: undefined;
  EventDetail: { event: any };
  CreateEvent: undefined;
};

type NavigationProp = StackNavigationProp<RootStackParamList>;

export default function EventDetailScreen() {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute();
  const { event } = route.params as { event: any };
  const isLive = event?.status === 'live';

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Icon name="arrow-back" size={24} color="#1F2937" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Event Details</Text>
        <TouchableOpacity style={styles.editBtn}>
          <Icon name="edit" size={24} color="#4F46E5" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Status Banner */}
        <View style={[
  styles.statusBanner,
  { backgroundColor: isLive ? '#22C55E' : '#3B82F6' }
]}>
  <Text style={styles.statusText}>
    {isLive ? '🔴 LIVE NOW' : '📅 UPCOMING'}
  </Text>
</View>

        {/* Event Info Card */}
        <View style={styles.infoCard}>
          <Text style={styles.title}>{event.title}</Text>
          
          <View style={styles.infoRow}>
            <Icon name="calendar-today" size={20} color="#6B7280" />
            <Text style={styles.infoText}>{event.date}</Text>
          </View>

          <View style={styles.infoRow}>
            <Icon name="location-on" size={20} color="#6B7280" />
            <Text style={styles.infoText}>{event.location}</Text>
          </View>

          <View style={styles.infoRow}>
            <Icon name="people" size={20} color="#6B7280" />
            <Text style={styles.infoText}>{event.attendees} attendees</Text>
          </View>
        </View>

        {/* Quick Actions */}
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.actionsGrid}>
          <TouchableOpacity style={styles.actionItem}>
            <View style={[styles.actionIcon, { backgroundColor: '#4F46E520' }]}>
              <Icon name="qr-code-scanner" size={24} color="#4F46E5" />
            </View>
            <Text style={styles.actionLabel}>Check-ins</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionItem}>
            <View style={[styles.actionIcon, { backgroundColor: '#22C55E20' }]}>
              <Icon name="people" size={24} color="#22C55E" />
            </View>
            <Text style={styles.actionLabel}>Attendees</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionItem}>
            <View style={[styles.actionIcon, { backgroundColor: '#F59E0B20' }]}>
              <Icon name="receipt" size={24} color="#F59E0B" />
            </View>
            <Text style={styles.actionLabel}>Budget</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionItem}>
            <View style={[styles.actionIcon, { backgroundColor: '#EC489920' }]}>
              <Icon name="business" size={24} color="#EC4899" />
            </View>
            <Text style={styles.actionLabel}>Vendors</Text>
          </TouchableOpacity>
        </View>

        {/* Description */}
        <View style={styles.descriptionCard}>
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.descriptionText}>
            This is a sample event description. In a real app, this would contain detailed information about the event, schedule, speakers, and other relevant details.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  backBtn: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
  },
  editBtn: {
    padding: 8,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  statusBanner: {
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  statusText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
  },
  infoCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 12,
  },
  infoText: {
    fontSize: 16,
    color: '#4B5563',
    flex: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 16,
  },
  actionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 24,
  },
  actionItem: {
    width: '23%',
    alignItems: 'center',
  },
  actionIcon: {
    width: 56,
    height: 56,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  actionLabel: {
    fontSize: 12,
    color: '#4B5563',
    textAlign: 'center',
  },
  descriptionCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    marginBottom: 30,
  },
  descriptionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 12,
  },
  descriptionText: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
  },
});