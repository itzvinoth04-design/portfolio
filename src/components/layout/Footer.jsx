import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import { personalInfo } from '../../data/portfolio';

const socialLinks = [
  { href: personalInfo.social.github, Icon: FiGithub, label: 'GitHub' },
  { href: personalInfo.social.linkedin, Icon: FiLinkedin, label: 'LinkedIn' },
  { href: personalInfo.social.leetcode, Icon: SiLeetcode, label: 'LeetCode' },
  { href: personalInfo.social.email, Icon: FiMail, label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="relative py-12 border-t border-[rgba(148,163,184,0.06)]">
      {/* Gradient top border accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[rgba(34,211,238,0.3)] to-transparent" />

      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-[#94A3B8]">
            Designed & Developed by{' '}
            <span className="text-white font-medium">{personalInfo.name}</span>
          </p>

          <div className="flex items-center gap-4">
            {socialLinks.map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={label}
                className="p-2 text-[#94A3B8] hover:text-[#22D3EE] transition-colors duration-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          <p className="text-xs text-[rgba(148,163,184,0.5)]">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
