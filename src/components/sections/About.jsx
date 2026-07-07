import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiMapPin, FiCalendar, FiAward } from 'react-icons/fi';
import { HiOutlineAcademicCap } from 'react-icons/hi';
import SectionHeader from '../ui/SectionHeader';
import AnimatedCounter from '../ui/AnimatedCounter';
import GlassCard from '../ui/GlassCard';
import { personalInfo, education, stats, achievements } from '../../data/portfolio';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-32">
      <div className="section-container">
        <SectionHeader
          label="About Me"
          title="Passionate About Building"
          subtitle="Turning ideas into elegant, functional software"
        />

        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mt-20 grid lg:grid-cols-[1.4fr_0.8fr] gap-24 items-start"
        >
          {/* ── Left column: Bio + Stats ────────────── */}
          <div className="lg:col-span-3 space-y-10">
            {/* Bio paragraphs */}
            <motion.div variants={fadeUp} className="space-y-5">
              {personalInfo.bio.map((paragraph, i) => (
                <p key={i} className="text-[#94A3B8] text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </motion.div>

            {/* Stats grid */}
            <motion.div variants={fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <GlassCard key={stat.label} className="p-5 text-center">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} label={stat.label} />
                </GlassCard>
              ))}
            </motion.div>
          </div>

          {/* ── Right column: Education + Achievements ── */}
          <div className="lg:col-span-2 space-y-8">
            {/* Education card */}
            <motion.div variants={fadeUp}>
              <GlassCard className="p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[rgba(34,211,238,0.1)] flex items-center justify-center">
                    <HiOutlineAcademicCap size={20} className="text-[#22D3EE]" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Education</h3>
                </div>

                <div className="relative pl-6 border-l border-[rgba(148,163,184,0.15)]">
                  {/* Timeline node */}
                  <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] rounded-full bg-[#22D3EE] shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
                  
                  <h4 className="font-semibold text-white text-base">{education.degree}</h4>
                  <p className="text-[#22D3EE] text-sm mt-1">{education.institution}</p>
                  
                  <div className="flex flex-wrap gap-4 mt-3 text-sm text-[#94A3B8]">
                    <span className="flex items-center gap-1.5">
                      <FiCalendar size={14} />
                      {education.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FiMapPin size={14} />
                      Chennai, India
                    </span>
                  </div>
                  
                  <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(34,211,238,0.08)] border border-[rgba(34,211,238,0.15)]">
                    <span className="text-[#22D3EE] text-sm font-medium">CGPA: {education.cgpa}</span>
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            {/* Achievements */}
            <motion.div variants={fadeUp}>
              <GlassCard className="p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[rgba(34,211,238,0.1)] flex items-center justify-center">
                    <FiAward size={20} className="text-[#22D3EE]" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Achievements</h3>
                </div>

                <ul className="space-y-3">
                  {achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + i * 0.08, duration: 0.4 }}
                      className="flex items-start gap-3 text-[#94A3B8] text-sm"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#22D3EE] shrink-0" />
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          </div>
        </motion.div>
        <div className="h-40"></div>
      </div>
    </section>
  );
}
