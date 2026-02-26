export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  attendees: number;
  status: 'upcoming' | 'live' | 'past';
  image?: string;
}