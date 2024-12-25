import { Github, Instagram, Linkedin, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/dsc-rit',
    color: 'hover:text-white',
  },
  {
    name: 'Instagram',
    icon: Instagram,
    href: 'https://www.instagram.com/dsc.rit/',
    color: 'hover:text-pink-500',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://www.linkedin.com/company/dsc-rit',
    color: 'hover:text-blue-500',
  },
  {
    name: 'Facebook',
    icon: Facebook,
    href: 'https://www.facebook.com/people/DSC-Msrit/100064716580500/',
    color: 'hover:text-blue-600',
  },
];

export const SocialLinksBar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="fixed left-8 bottom-0 hidden lg:flex flex-col items-center gap-6 after:h-[90px] after:w-px after:bg-gradient-to-b after:from-dsc-orange-500/50 after:to-transparent"
    >
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-gray-400 transition-colors duration-200 ${link.color}`}
        >
          <link.icon className="h-5 w-5" />
        </a>
      ))}
    </motion.div>
  );
};

export const SocialLinksList = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`flex justify-center space-x-6 ${className}`}>
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-gray-400 transition-colors duration-200 ${link.color}`}
        >
          <link.icon className="h-6 w-6" />
        </a>
      ))}
    </div>
  );
};