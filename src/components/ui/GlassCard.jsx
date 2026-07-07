import { motion } from 'framer-motion';

const GlassCard = ({ children, className = '', hover = true, ...props }) => {
  const baseClasses =
    'bg-[rgba(15,23,42,0.6)] backdrop-blur-xl border border-[rgba(148,163,184,0.1)] rounded-2xl';

  if (!hover) {
    return (
      <div className={`${baseClasses} ${className}`} {...props}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={`${baseClasses} ${className}`}
      whileHover={{
        y: -4,
        boxShadow: '0 0 30px rgba(34, 211, 238, 0.15), 0 0 60px rgba(34, 211, 238, 0.05)',
      }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
