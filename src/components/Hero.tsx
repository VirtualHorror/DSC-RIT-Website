import { motion } from 'framer-motion';
import { ArrowRight, Mail, Code2, Rocket, Users, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    name: 'Technical Workshops',
    description: 'Learn cutting-edge technologies through hands-on workshops led by industry experts and experienced developers.',
    icon: Code2,
  },
  {
    name: 'Hackathons',
    description: 'Participate in exciting hackathons to solve real-world problems and showcase your innovative solutions.',
    icon: Rocket,
  },
  {
    name: 'Community',
    description: 'Join a vibrant community of passionate developers, share knowledge, and grow together.',
    icon: Users,
  },
  {
    name: 'Projects',
    description: 'Work on collaborative projects that make a real impact and build your portfolio.',
    icon: Trophy,
  },
];

const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-dsc-dark">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dsc-blue-400/20 via-dsc-dark to-dsc-red-400/10 animate-gradient-xy"></div>

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
              <span className="block bg-gradient-to-r from-dsc-blue-400 to-dsc-red-400 bg-clip-text text-transparent">
                Ramaiah Institute of Technology
              </span>
              <span className="block text-sm sm:text-xl mt-2 text-gray-400">Bengaluru</span>
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
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <Link
                to="/events"
                className="group relative inline-flex items-center gap-x-2 rounded-full px-8 py-3.5 text-sm font-semibold text-white focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:ring-offset-2 focus:ring-offset-dsc-dark"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-dsc-blue-400 to-dsc-red-400 rounded-full"></span>
                <span className="relative">Upcoming Events</span>
                <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              
              <a
                href="https://chat.whatsapp.com/Eu6GjTChtMs7dwsdhX9pvl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold leading-6 text-white hover:text-dsc-blue-400"
              >
                Join our Community <span aria-hidden="true">→</span>
              </a>

              <a
                href="mailto:msritdsc@gmail.com"
                className="inline-flex items-center gap-2 text-sm font-semibold leading-6 text-white hover:text-dsc-red-400"
              >
                <Mail className="h-4 w-4" />
                Contact Us
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
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={feature.name}
              className="flex flex-col rounded-3xl bg-white/5 px-8 py-10 backdrop-blur-lg border border-white/10 hover:border-dsc-blue-400/50 transition-colors"
            >
              <feature.icon className={`h-8 w-8 ${index % 2 === 0 ? 'text-dsc-blue-400' : 'text-dsc-red-400'}`} />
              <h3 className="mt-4 text-xl font-semibold text-white">{feature.name}</h3>
              <p className="mt-4 text-gray-400 flex-grow">{feature.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;