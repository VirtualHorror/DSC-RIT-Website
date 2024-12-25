import { PageHeader } from '../components/ui/PageHeader';
import { GalleryGrid } from '../components/gallery/GalleryGrid';
import { GalleryImage } from '../types';

const images: GalleryImage[] = [
  {
    id: '1',
    url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
    title: 'Web Development Workshop',
    event: 'Tech Week 2024',
    date: 'March 2024',
  },
  // Add more images
];

export default function Gallery() {
  return (
    <div>
      <PageHeader
        title="Gallery"
        description="Relive the moments from our past events, workshops, and community gatherings."
      />
      
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <GalleryGrid images={images} />
      </div>
    </div>
  );
}