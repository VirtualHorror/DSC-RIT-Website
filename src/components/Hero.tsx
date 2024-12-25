import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-dsc-dark">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dsc-gold-500/20 via-dsc-dark to-dsc-dark animate-gradient-xy"></div>

      {/* Content */}
      <div className="relative pt-32 pb-16 sm:pt-40 sm:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl font-bold tracking-tight text-white sm:text-6xl"
            >
              Developer Student Club
              <span className="block text-dsc-gold-400">RIT Bangalore</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 text-lg leading-8 text-gray-300"
            >
              Empowering students with technical skills and fostering innovation through workshops, 
              hackathons, and collaborative projects. Join our community of passionate developers!
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-10 flex items-center justify-center gap-x-6"
            >
              <Link
                to="/events"
                className="group relative inline-flex items-center gap-x-2 rounded-full px-8 py-3.5 text-sm font-semibold text-white focus:outline-none focus:ring-2 focus:ring-dsc-gold-400/50 focus:ring-offset-2 focus:ring-offset-dsc-dark"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-dsc-gold-500 to-dsc-orange-500 rounded-full"></span>
                <span className="relative">Upcoming Events</span>
                <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              
              <a
                href="https://chat.whatsapp.com/Eu6GjTChtMs7dwsdhX9pvl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold leading-6 text-white hover:text-dsc-gold-400"
              >
                Join our Community <span aria-hidden="true">→</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mx-auto max-w-7xl px-6 lg:px-8 pb-24"
      >
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="flex flex-col rounded-3xl bg-white/5 px-8 py-10 backdrop-blur-lg border border-white/10 hover:border-dsc-gold-500/50 transition-colors"
            >
              <feature.icon className="h-8 w-8 text-dsc-gold-400" />
              <h3 className="mt-4 text-xl font-semibold text-white">{feature.name}</h3>
              <p className="mt-4 text-gray-400 flex-grow">{feature.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const features = [
  {
    name: 'Technical Workshops',
    description: 'Learn cutting-edge technologies through hands-on workshops led by industry experts and experienced developers.',
    icon: (props: any) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
        />
      </svg>
    ),
  },
  {
    name: 'Hackathons',
    description: 'Participate in exciting hackathons where you can showcase your skills, win prizes, and network with fellow developers.',
    icon: (props: any) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
        />
      </svg>
    ),
  },
  {
    name: 'Community',
    description: 'Join a vibrant community of developers, designers, and tech enthusiasts who share your passion for technology.',
    icon: (props: any) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
        />
      </svg>
    ),
  },
];

export default Hero;