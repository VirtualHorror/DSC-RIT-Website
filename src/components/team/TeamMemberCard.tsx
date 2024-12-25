import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { TeamMember } from '../../types';

interface TeamMemberCardProps {
  member: TeamMember;
  index: number;
}

export const TeamMemberCard = ({ member, index }: TeamMemberCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl bg-white/5 p-6 hover:bg-white/10 transition-colors"
    >
      <div className="aspect-[3/4] overflow-hidden rounded-lg">
        <img
          src={member.image}
          alt={member.name}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-white">{member.name}</h3>
        <p className="text-sm text-gray-400">{member.role}</p>
      </div>
      <div className="mt-4 flex gap-4">
        {member.socials.github && (
          <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <Github className="h-5 w-5" />
          </a>
        )}
        {member.socials.linkedin && (
          <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500">
            <Linkedin className="h-5 w-5" />
          </a>
        )}
        {member.socials.twitter && (
          <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400">
            <Twitter className="h-5 w-5" />
          </a>
        )}
      </div>
    </motion.div>
  );
};