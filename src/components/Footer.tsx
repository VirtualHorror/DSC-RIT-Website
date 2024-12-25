import { Github, Instagram, Linkedin, Facebook, MessageCircle } from 'lucide-react';

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

const Footer = () => {
  return (
    <footer className="bg-dsc-dark border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-gray-400 transition-colors duration-200 ${link.hoverColor}`}
            >
              <link.icon className="h-6 w-6" />
            </a>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-400">
            Made with ❤️ by Nabhanyu
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;