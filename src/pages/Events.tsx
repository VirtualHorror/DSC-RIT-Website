import { PageHeader } from '../components/ui/PageHeader';
import { EventCard } from '../components/events/EventCard';
import { Event } from '../types';

const events: Event[] = [
  {
    id: '1',
    title: 'Web Development Workshop',
    description: 'Learn modern web development with React and TypeScript. Build real-world applications with industry best practices.',
    date: 'March 15, 2025',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
    type: 'workshop',
    status: 'upcoming',
  },
  // Add more events as needed
];

export default function Events() {
  const upcomingEvents = events.filter(event => event.status === 'upcoming');
  const pastEvents = events.filter(event => event.status === 'past');

  return (
    <div>
      <PageHeader
        title="Events"
        description="Join our workshops, hackathons, and tech talks to enhance your skills and connect with fellow developers."
      />
      
      <div className="mx-auto max-w-7xl px-6 py-8 sm:py-12 lg:px-8">
        {upcomingEvents.length > 0 && (
          <>
            <h2 className="text-2xl font-bold text-white mb-8">Upcoming Events</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
              {upcomingEvents.map((event, index) => (
                <EventCard key={event.id} event={event} index={index} />
              ))}
            </div>
          </>
        )}

        {pastEvents.length > 0 && (
          <>
            <h2 className="text-2xl font-bold text-white mb-8">Past Events</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {pastEvents.map((event, index) => (
                <EventCard key={event.id} event={event} index={index} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}