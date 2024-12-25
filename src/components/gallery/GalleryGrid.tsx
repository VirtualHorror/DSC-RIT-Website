import { motion } from 'framer-motion';
import { GalleryImage } from '../../types';

interface GalleryGridProps {
  images: GalleryImage[];
}

export const GalleryGrid = ({ images }: GalleryGridProps) => {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {images.map((image, index) => (
        <motion.div
          key={image.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group relative overflow-hidden rounded-2xl bg-white/5"
        >
          <img
            src={image.url}
            alt={image.title}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
            <div className="absolute bottom-0 p-6">
              <h3 className="text-lg font-semibold text-white">{image.title}</h3>
              <p className="mt-2 text-sm text-gray-300">{image.event}</p>
              <p className="mt-1 text-sm text-gray-400">{image.date}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};