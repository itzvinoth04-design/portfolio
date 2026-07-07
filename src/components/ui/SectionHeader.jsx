import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
});

const SectionHeader = ({ label, title, subtitle }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <div
  ref={ref}
  className="flex flex-col items-center text-center mb-16"
>
      {label && (
        <motion.p
          className="uppercase tracking-[0.2em] text-[#22D3EE] text-sm font-medium mb-4"
          {...fadeUp(0)}
          animate={isInView ? fadeUp(0).animate : fadeUp(0).initial}
        >
          {label}
        </motion.p>
      )}

      <motion.h2
        className="text-4xl md:text-5xl font-bold text-white mb-6"
        {...fadeUp(0.1)}
        animate={isInView ? fadeUp(0.1).animate : fadeUp(0.1).initial}
      >
        {title}
      </motion.h2>

      {subtitle && (
  <motion.p
    className="mt-2 max-w-3xl mx-auto text-center text-lg md:text-xl text-[#94A3B8] leading-relaxed"
    {...fadeUp(0.2)}
    animate={isInView ? fadeUp(0.2).animate : fadeUp(0.2).initial}
  >
    {subtitle}
  </motion.p>
)}
    </div>
  );
};

export default SectionHeader;
