import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiArrowRight, FiGithub, FiLinkedin } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import { HiOutlineChevronDown } from 'react-icons/hi';
import {
  SiReact, SiPython, SiNodedotjs, SiJavascript, SiOpencv
} from 'react-icons/si';
import profileImg from '../../assets/profile.png';
import { personalInfo, typewriterStrings } from '../../data/portfolio';

const floatingIcons = [
  { Icon: SiReact, color: '#61DAFB' },
  { Icon: SiPython, color: '#3776AB' },
  { Icon: SiNodedotjs, color: '#339933' },
  { Icon: SiJavascript, color: '#F7DF1E' },
  { Icon: SiOpencv, color: '#5C3EE8' },
];
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function Hero() {
  const typeSequence = typewriterStrings.flatMap((s) => [s, 2000]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16"
    >
      <div className="section-container w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* ── Left: Text ──────────────────────────── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            {/* Role badge */}
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#22D3EE] animate-pulse" />
              <span className="text-sm text-[#94A3B8] font-medium">
                <TypeAnimation
                  sequence={typeSequence}
                  wrapper="span"
                  speed={40}
                  repeat={Infinity}
                  className="text-[#22D3EE]"
                />
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight mb-6"
            >
              Hi, I&apos;m{' '}
              <span className="text-gradient">{personalInfo.name}</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-[#94A3B8] max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              {personalInfo.tagline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center lg:justify-start mb-6">
              <a
                href="#projects"
                onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="group inline-flex items-center gap-2 bg-[#22D3EE] text-[#020617] font-semibold px-5 py-3.5 rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:scale-[1.02] active:scale-[0.98]"
              >
                View Projects
                <FiArrowRight className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
  href="/VINOTH_RESUME.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="group inline-flex items-center gap-2 border border-[rgba(148,163,184,0.2)] text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-300 hover:border-[#22D3EE] hover:bg-[rgba(34,211,238,0.08)] hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] hover:scale-[1.02] active:scale-[0.98]"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-0.5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 4v10m0 0l-4-4m4 4l4-4M4 20h16"
    />
  </svg>

  <span>Resume</span>
</a>
            </motion.div>

            {/* Social row */}
            <motion.div
  variants={fadeUp}
  className="flex gap-4 justify-center lg:justify-start mt-10"
>
              {[
                { href: personalInfo.social.github, Icon: FiGithub, label: 'GitHub' },
                { href: personalInfo.social.linkedin, Icon: FiLinkedin, label: 'LinkedIn' },
                { href: personalInfo.social.leetcode, Icon: SiLeetcode, label: 'LeetCode' },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="
w-14
h-14
rounded-2xl
glass
flex
items-center
justify-center
border
border-cyan-400/10
text-[#94A3B8]
hover:text-[#22D3EE]
hover:border-cyan-400/40
hover:bg-cyan-400/5
hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]
hover:-translate-y-1
transition-all
duration-300
"
                >
                  <Icon size={20} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: Visual ───────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Glowing ring */}
              <div
                className="absolute -inset-4 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, #22D3EE, #8B5CF6, #3B82F6, #22D3EE)',
                  animation: 'glow-ring 6s linear infinite',
                  filter: 'blur(2px)',
                  opacity: 0.6,
                }}
              />
              <div className="absolute -inset-4 rounded-full bg-[#020617] opacity-40" />

              {/* Profile image */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-[rgba(148,163,184,0.15)]">
                <img
                  src={profileImg}
                  alt="Vinoth S"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>

              
{/* Floating Tech Orbit */}
<motion.div
  className="absolute inset-0"
  animate={{ rotate: 360 }}
  transition={{
    duration: 30,
    repeat: Infinity,
    ease: "linear",
  }}
>
  {floatingIcons.map(({ Icon, color }, index) => {
    const angle = index * 72;
    const radius = 145;

    return (
      <div
        key={index}
        className="absolute top-1/2 left-1/2"
        style={{
          transform: `
            translate(-50%, -50%)
            rotate(${angle}deg)
            translate(${radius}px)
            rotate(-${angle}deg)
          `,
        }}
      >
        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          whileHover={{ scale: 1.15 }}
          className="w-16 h-16 rounded-2xl glass border border-cyan-400/20 shadow-[0_0_20px_rgba(34,211,238,0.2)] flex items-center justify-center"
        >
          <Icon size={30} style={{ color }} />
        </motion.div>
      </div>
    );
  })}
</motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-[#94A3B8] tracking-widest uppercase">Scroll</span>
          <HiOutlineChevronDown
            size={20}
            className="text-[#22D3EE]"
            style={{ animation: 'scroll-indicator 2s ease-in-out infinite' }}
          />
        </motion.div>
        <div className="h-40"></div>
      </div>
    </section>
  );
}
