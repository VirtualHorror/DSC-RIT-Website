import { motion } from 'framer-motion';
import { Github, Instagram, Linkedin, Facebook, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const socialLinks = [
  {
    name: 'WhatsApp',
    href: 'https://chat.whatsapp.com/Eu6GjTChtMs7dwsdhX9pvl',
    icon: MessageCircle,
    hoverColor: 'hover:text-green-500',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/dsc-rit',
    icon: Github,
    hoverColor: 'hover:text-white',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/dsc.rit/',
    icon: Instagram,
    hoverColor: 'hover:text-pink-500',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/dsc-rit',
    icon: Linkedin,
    hoverColor: 'hover:text-blue-500',
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/people/DSC-Msrit/100064716580500/',
    icon: Facebook,
    hoverColor: 'hover:text-blue-600',
  },
];

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src="https://i.ibb.co/JpZr3yH/image.png"
                alt="DSC RIT Logo"
                className="h-8 w-auto"
              />
              <span className="ml-2 text-white font-semibold text-lg">DSC RIT</span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link to="/events" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Events
              </Link>
              <Link to="/team" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Team
              </Link>
              <Link to="/gallery" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Gallery
              </Link>
              <Link to="/alumni" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Alumni
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-400 transition-colors duration-200 ${link.hoverColor}`}
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;