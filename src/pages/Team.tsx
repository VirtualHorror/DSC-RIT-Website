import { PageHeader } from '../components/ui/PageHeader';
import { TeamMemberCard } from '../components/team/TeamMemberCard';
import { TeamMember } from '../types';

const teamMembers: TeamMember[] = [
  {
    name: 'John Doe',
    role: 'Club Lead',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    socials: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
  },
  // Add more team members
];

export default function Team() {
  return (
    <div>
      <PageHeader
        title="Our Team"
        description="Meet the passionate individuals behind DSC RIT who work tirelessly to create amazing learning experiences."
      />
      
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}