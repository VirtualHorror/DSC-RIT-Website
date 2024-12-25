import { PageHeader } from '../components/ui/PageHeader';
import { TeamMemberCard } from '../components/team/TeamMemberCard';
import { TeamMember } from '../types';

const alumni: TeamMember[] = [
  {
    name: 'Jane Smith',
    role: 'Former Club Lead (2022-2023)',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    socials: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
    },
  },
  // Add more alumni
];

export default function Alumni() {
  return (
    <div>
      <PageHeader
        title="Alumni"
        description="Meet our distinguished alumni who have contributed to the growth and success of DSC RIT."
      />
      
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {alumni.map((member, index) => (
            <TeamMemberCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}