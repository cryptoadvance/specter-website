import xIcon from "@assets/imgi_1_x-icon-white-logo-x-app-editable-transparent-background-premium-social-media-de_1756110415058.png";
import linkedinIcon from "@assets/Linkedin-Logo-PNG-Picture_1756110417256.png";
import websiteIcon from "@assets/website-Icon_1756111196211.png";
import nostrIcon from "@assets/Nostr_logo_weiß.png";

export interface SocialLink {
  type: 'x' | 'linkedin' | 'website' | 'nostr' | 'github';
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
  nostr: nostrIcon,
};

const socialLabels = {
  x: 'X (Twitter)',
  linkedin: 'LinkedIn',
  website: 'Website',
  nostr: 'Nostr',
  github: 'GitHub',
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
            {link.type === 'github' ? (
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
                role="img"
                aria-label={socialLabels.github}
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            ) : (
              <img
                src={socialIcons[link.type]}
                alt={socialLabels[link.type]}
                className="w-5 h-5"
              />
            )}
          </a>
        ))}
      </div>
    </div>
  );
}
