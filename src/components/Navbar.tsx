import { useState } from 'react';
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

const navigation = [
  { name: 'Home', path: '/' },
  { name: 'Events', path: '/events' },
  { name: 'Team', path: '/team' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Alumni', path: '/alumni' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
              <span className="ml-2 text-white font-semibold text-lg">
                DSC RIT
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>

          {/* Social Links - Desktop */}
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

        {/* Mobile Navigation Menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;