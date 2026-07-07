import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";

import SectionHeader from "../ui/SectionHeader";
import GlassCard from "../ui/GlassCard";
import { personalInfo } from "../../data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const socialCards = [
  {
    label: "Email",
    href: `mailto:${personalInfo.email}`,
    Icon: FiMail,
    value: personalInfo.email,
  },
  {
    label: "Phone",
    href: `tel:${personalInfo.phone}`,
    Icon: FiPhone,
    value: personalInfo.phone,
  },
  {
    label: "LinkedIn",
    href: personalInfo.social.linkedin,
    Icon: FiLinkedin,
    value: "Vinoth S",
  },
  {
    label: "GitHub",
    href: personalInfo.social.github,
    Icon: FiGithub,
    value: "@itzvinoth04",
  },
  {
    label: "Location",
    href: "#",
    Icon: FiMapPin,
    value: "Chennai, Tamil Nadu, India",
  },
];

export default function Contact() {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section id="contact" className="relative py-32">
      <div className="section-container">
        <SectionHeader
          label="Contact"
          title="Let's Connect"
          subtitle="Feel free to reach out through any of the platforms below."
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="mt-16 max-w-3xl mx-auto grid gap-5"
        >
          {socialCards.map(({ label, href, Icon, value }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              variants={fadeUp}
            >
              <GlassCard className="p-6 flex items-center gap-5 hover:border-cyan-400/30 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-[rgba(34,211,238,0.08)] flex items-center justify-center">
                  <Icon
                    size={24}
                    className="text-[#22D3EE]"
                  />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-[#94A3B8]">
                    {label}
                  </p>

                  <p className="text-white font-medium text-lg mt-1">
                    {value}
                  </p>
                </div>
              </GlassCard>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}