import { motion } from 'framer-motion';

const variants = {
  primary:
    'bg-[#22D3EE] text-[#020617] font-semibold hover:bg-[#06B6D4]',
  secondary:
    'bg-transparent border border-[rgba(148,163,184,0.2)] text-white hover:border-[rgba(148,163,184,0.4)]',
};

const GlowButton = ({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  ...props
}) => {
  const baseClasses = `rounded-full px-8 py-3 inline-flex items-center justify-center gap-2 transition-colors cursor-pointer ${variants[variant] || variants.primary} ${className}`;

  const motionProps = {
    whileHover: {
      scale: 1.02,
      ...(variant === 'primary' && {
        boxShadow: '0 0 30px rgba(34, 211, 238, 0.4)',
      }),
    },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.2, ease: 'easeOut' },
  };

  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses}
        {...motionProps}
        {...props}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={baseClasses}
      {...motionProps}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default GlowButton;
