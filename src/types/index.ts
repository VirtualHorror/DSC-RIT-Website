export interface TeamMember {
  name: string;
  role: string;
  image: string;
  socials: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  image: string;
  type: 'workshop' | 'hackathon' | 'meetup';
  status: 'upcoming' | 'past';
}

export interface GalleryImage {
  id: string;
  url: string;
  title: string;
  event: string;
  date: string;
}