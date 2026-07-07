import { useRef, useEffect } from 'react';
import {
  useInView,
  useMotionValue,
  useTransform,
  animate,
  motion,
} from 'framer-motion';

const AnimatedCounter = ({ target, label, suffix = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  const motionVal = useMotionValue(0);
  const rounded = useTransform(motionVal, (v) =>
    Math.round(v).toLocaleString()
  );

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(motionVal, target, {
      duration: 2,
      ease: 'easeOut',
    });

    return () => controls.stop();
  }, [isInView, target, motionVal]);

  return (
    <div ref={ref} className="text-center">
      <div className="flex items-baseline justify-center gap-0.5">
        <motion.span className="text-4xl md:text-5xl font-bold text-white">
          {rounded}
        </motion.span>
        {suffix && (
          <span className="text-2xl md:text-3xl font-bold text-[#22D3EE]">
            {suffix}
          </span>
        )}
      </div>
      {label && (
        <p className="text-[#94A3B8] text-sm mt-2 uppercase tracking-wider">
          {label}
        </p>
      )}
    </div>
  );
};

export default AnimatedCounter;
