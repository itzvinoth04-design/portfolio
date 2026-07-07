import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  SiPython, SiOpenjdk, SiJavascript, SiC,
  SiHtml5, SiReact, SiTailwindcss,
  SiNodedotjs, SiExpress,
  SiSqlite, SiMysql,
  SiGit, SiGithub, SiVscodium, SiPostman,
  SiFigma
} from 'react-icons/si';
import { FaCss3Alt } from 'react-icons/fa';
import SectionHeader from '../ui/SectionHeader';
import GlassCard from '../ui/GlassCard';

// Map icon name strings → actual components
const iconMap = {
  SiPython, SiOpenjdk, SiJavascript, SiC,
  SiHtml5, FaCss3Alt, SiReact, SiTailwindcss,
  SiNodedotjs, SiExpress,
  SiSqlite, SiMysql,
  SiGit, SiGithub, SiVscodium, SiPostman,
  SiFigma,
};

const categoryColors = {
  languages: '#F59E0B',
  frontend: '#3B82F6',
  backend: '#10B981',
  database: '#8B5CF6',
  tools: '#EF4444',
  design: '#EC4899',
};

const categoryLabels = {
  languages: 'Languages',
  frontend: 'Frontend',
  backend: 'Backend',
  database: 'Database',
  tools: 'Tools',
  design: 'Design',
};

// Orbit data — assign skills to rings
const orbitRings = [
  {
    radius: 100,
    duration: 25,
    items: [
      { name: 'Python', icon: 'SiPython', color: '#3776AB' },
      { name: 'JavaScript', icon: 'SiJavascript', color: '#F7DF1E' },
      { name: 'Java', icon: 'SiOpenjdk', color: '#ED8B00' },
      { name: 'C', icon: 'SiC', color: '#A8B9CC' },
    ],
  },
  {
    radius: 170,
    duration: 35,
    items: [
      { name: 'React', icon: 'SiReact', color: '#61DAFB' },
      { name: 'Node.js', icon: 'SiNodedotjs', color: '#339933' },
      { name: 'Express', icon: 'SiExpress', color: '#FFFFFF' },
      { name: 'Tailwind', icon: 'SiTailwindcss', color: '#06B6D4' },
      { name: 'HTML', icon: 'SiHtml5', color: '#E34F26' },
      { name: 'CSS', icon: 'FaCss3Alt', color: '#1572B6' },
    ],
  },
  {
    radius: 240,
    duration: 45,
    items: [
      { name: 'Git', icon: 'SiGit', color: '#F05032' },
      { name: 'GitHub', icon: 'SiGithub', color: '#FFFFFF' },
      { name: 'SQLite', icon: 'SiSqlite', color: '#003B57' },
      { name: 'MySQL', icon: 'SiMysql', color: '#4479A1' },
      { name: 'VS Code', icon: 'SiVscodium', color: '#007ACC' },
      { name: 'Postman', icon: 'SiPostman', color: '#FF6C37' },
      { name: 'Figma', icon: 'SiFigma', color: '#F24E1E' },
    ],
  },
];

import { skills } from '../../data/portfolio';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [pausedRing, setPausedRing] = useState(null);

  return (
    <section id="skills" className="relative pt-40 pb-32">
      <div className="section-container">
        <SectionHeader
          label="Skills"
          title="Tech Galaxy"
          subtitle="Technologies I work with, visualized as an interactive orbit system"
        />

        <div ref={ref} className="mt-20 pb-40">
          {/* ── Orbit Visualization ─────────────────── */}
          <motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={isInView ? { opacity: 1, scale: 1 } : {}}
  transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
  className="hidden md:flex justify-center items-center w-full"
>
  <div
    className="relative"
    style={{
      width: 650,
      height: 650,
    }}
  ></div>
            {/* Center core */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-[rgba(34,211,238,0.1)] border border-[rgba(34,211,238,0.2)] flex items-center justify-center z-10">
              <span className="text-[#22D3EE] text-xs font-semibold tracking-wider">STACK</span>
            </div>

            {/* Orbit rings */}
            {orbitRings.map((ring, ringIdx) => (
              <div key={ringIdx}>
                {/* Ring circle */}
                <div
                  className="orbit-ring"
                  style={{
                    width: ring.radius * 2,
                    height: ring.radius * 2,
                  }}
                />

                {/* Orbiting items */}
                {ring.items.map((item, itemIdx) => {
                  const Icon = iconMap[item.icon];
                  const angleOffset = (360 / ring.items.length) * itemIdx;
                  return (
                    <div
                      key={item.name}
                      className="absolute top-1/2 left-1/2"
                      style={{
                        width: 0,
                        height: 0,
                      }}
                    >
                      <div
                        className="orbit-item group"
                        style={{
                          '--orbit-radius': `${ring.radius}px`,
                          '--orbit-duration': `${ring.duration}s`,
                          animationDelay: `${-(ring.duration / ring.items.length) * itemIdx}s`,
                          animationPlayState: pausedRing === ringIdx ? 'paused' : 'running',
                        }}
                        onMouseEnter={() => {
                          setHoveredSkill(item.name);
                          setPausedRing(ringIdx);
                        }}
                        onMouseLeave={() => {
                          setHoveredSkill(null);
                          setPausedRing(null);
                        }}
                      >
                        <div className="w-10 h-10 glass rounded-xl flex items-center justify-center cursor-default transition-all duration-300 hover:scale-125 hover:border-[rgba(34,211,238,0.3)]">
                          {Icon && <Icon size={18} style={{ color: item.color }} />}
                        </div>
                        {/* Tooltip */}
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                          <span className="text-xs text-white bg-[#0F172A] px-2 py-1 rounded-md whitespace-nowrap border border-[rgba(148,163,184,0.1)]">
                            {item.name}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}

            {/* Hovered skill label */}
            {hoveredSkill && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[#22D3EE] font-medium"
              >
                {hoveredSkill}
              </motion.div>
            )}
          </motion.div>

          {/* ── Category Cards (visible on all screens, fallback on mobile) ── */}
          <motion.div
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-16 mb-48"
          >
            {Object.entries(skills).map(([category, items]) => (
              <motion.div key={category} variants={fadeUp}>
                <GlassCard className="p-5 h-full">
                  <div className="flex items-center gap-2 mb-4">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: categoryColors[category] }}
                    />
                    <h3 className="text-sm font-semibold text-white">
                      {categoryLabels[category]}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => {
                      const Icon = iconMap[skill.icon];
                      return (
                        <div
                          key={skill.name}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[rgba(148,163,184,0.06)] border border-[rgba(148,163,184,0.08)] text-[#94A3B8] text-xs font-medium hover:text-white hover:border-[rgba(34,211,238,0.2)] hover:bg-[rgba(34,211,238,0.05)] transition-all duration-300"
                        >
                          {Icon && <Icon size={12} />}
                          {skill.name}
                        </div>
                      );
                    })}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
          <div className="h-40"></div>
        </div>
      </div>
    </section>
  );
}
