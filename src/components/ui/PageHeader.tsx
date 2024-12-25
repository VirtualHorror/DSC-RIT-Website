import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  description: string;
}

export const PageHeader = ({ title, description }: PageHeaderProps) => {
  return (
    <div className="relative py-16 sm:py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-dsc-gold-500/20 via-dsc-dark to-dsc-dark animate-gradient-xy"></div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">{title}</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">{description}</p>
        </motion.div>
      </div>
    </div>
  );
};