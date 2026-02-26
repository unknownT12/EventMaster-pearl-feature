import { Event } from '../types';

export const MOCK_EVENTS: Event[] = [
  {
    id: '1',
    title: 'Tech Conference 2024',
    date: '2024-03-15',
    location: 'Convention Center, SF',
    attendees: 450,
    status: 'live',
  },
  {
    id: '2',
    title: 'Music Festival',
    date: '2024-07-20',
    location: 'Central Park, NY',
    attendees: 1200,
    status: 'upcoming',
  },
  {
    id: '3',
    title: 'Wedding Expo',
    date: '2024-09-10',
    location: 'Expo Center, LA',
    attendees: 300,
    status: 'upcoming',
  },
  {
    id: '4',
    title: 'Developer Workshop',
    date: '2024-02-01',
    location: 'Tech Hub, Austin',
    attendees: 85,
    status: 'past',
  },
];