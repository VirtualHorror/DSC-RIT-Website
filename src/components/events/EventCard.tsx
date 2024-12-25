import { motion } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';
import { Event } from '../../types';

interface EventCardProps {
  event: Event;
  index: number;
}

export const EventCard = ({ event, index }: EventCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col overflow-hidden rounded-2xl bg-white/5 hover:bg-white/10 transition-colors"
    >
      <div className="flex-shrink-0">
        <img className="h-48 w-full object-cover" src={event.image} alt={event.title} />
      </div>
      <div className="flex flex-1 flex-col justify-between p-6">
        <div className="flex-1">
          <div className="flex items-center gap-4">
            <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium
              ${event.status === 'upcoming' ? 'bg-dsc-gold-500/20 text-dsc-gold-400' : 'bg-gray-500/20 text-gray-400'}`}
            >
              {event.status === 'upcoming' ? 'Upcoming' : 'Past'}
            </span>
            <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-dsc-orange-500/20 text-dsc-orange-400">
              {event.type}
            </span>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-white">{event.title}</h3>
            <p className="mt-3 text-base text-gray-400">{event.description}</p>
          </div>
        </div>
        <div className="mt-6 flex items-center gap-4 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{event.date}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};