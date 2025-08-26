import xIcon from "@assets/imgi_1_x-icon-white-logo-x-app-editable-transparent-background-premium-social-media-de_1756110415058.png";
import linkedinIcon from "@assets/Linkedin-Logo-PNG-Picture_1756110417256.png";
import websiteIcon from "@assets/website-Icon_1756111196211.png";

export interface SocialLink {
  type: 'x' | 'linkedin' | 'website';
  url: string;
}

export interface BoardMemberData {
  name: string;
  image: string;
  role: string;
  roleColor: 'coral' | 'gray';
  description: string;
  socialLinks: SocialLink[];
}

interface BoardMemberProps {
  member: BoardMemberData;
}

const socialIcons = {
  x: xIcon,
  linkedin: linkedinIcon,
  website: websiteIcon,
};

const socialLabels = {
  x: 'X (Twitter)',
  linkedin: 'LinkedIn',
  website: 'Website',
};

export default function BoardMember({ member }: BoardMemberProps) {
  const roleColorClass = member.roleColor === 'coral' ? 'text-specter-coral' : 'text-gray-400';

  return (
    <div className="flex flex-col items-center text-center p-4 bg-specter-dark rounded-lg shadow-inner border border-gray-700">
      <img 
        src={member.image} 
        alt={member.name} 
        className="rounded-full w-20 h-20 mb-2 object-cover"
      />
      <h3 className="text-lg font-semibold text-white">{member.name}</h3>
      <p className={`text-sm ${roleColorClass}`}>{member.role}</p>
      <p className="text-xs text-gray-400 mt-1">{member.description}</p>
      <div className="flex justify-center space-x-3 mt-3">
        {member.socialLinks.map((link, index) => (
          <a 
            key={index}
            href={link.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:opacity-80 transition-opacity"
          >
            <img 
              src={socialIcons[link.type]} 
              alt={socialLabels[link.type]} 
              className="w-5 h-5" 
            />
          </a>
        ))}
      </div>
    </div>
  );
}
