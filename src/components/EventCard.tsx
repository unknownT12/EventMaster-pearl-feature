import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Event } from '../types';

interface Props {
  event: Event;
  onPress: () => void;
}

export const EventCard = ({ event, onPress }: Props) => {
  const getStatusColor = () => {
    switch (event.status) {
      case 'live': return '#22C55E';
      case 'upcoming': return '#3B82F6';
      case 'past': return '#6B7280';
    }
  };

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={[styles.statusDot, { backgroundColor: getStatusColor() }]} />
      <View style={styles.content}>
        <Text style={styles.title}>{event.title}</Text>
        <Text style={styles.detail}>📅 {event.date}</Text>
        <Text style={styles.detail}>📍 {event.location}</Text>
        <Text style={styles.detail}>👥 {event.attendees} attendees</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statusDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 12,
    marginTop: 4,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    color: '#1F2937',
  },
  detail: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 4,
  },
});