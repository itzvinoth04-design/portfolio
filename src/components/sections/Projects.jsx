import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import SectionHeader from '../ui/SectionHeader';
import GlassCard from '../ui/GlassCard';
import { projects } from '../../data/portfolio';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
};

/* ─── Fullscreen Gallery Modal ──────────────────── */
function ImageGallery({ images, initialIndex, onClose }) {
  const [current, setCurrent] = useState(initialIndex);

  const goNext = useCallback(() => {
    setCurrent((c) => (c + 1) % images.length);
  }, [images.length]);

  const goPrev = useCallback(() => {
    setCurrent((c) => (c - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose, goNext, goPrev]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center gallery-overlay"
      style={{ backgroundColor: 'rgba(2,6,23,0.92)', backdropFilter: 'blur(20px)' }}
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-3 rounded-full glass text-white hover:text-[#22D3EE] transition-colors z-10"
        aria-label="Close gallery"
      >
        <FiX size={24} />
      </button>

      {/* Navigation */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-6 p-3 rounded-full glass text-white hover:text-[#22D3EE] transition-colors z-10"
            aria-label="Previous image"
          >
            <FiChevronLeft size={24} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-6 p-3 rounded-full glass text-white hover:text-[#22D3EE] transition-colors z-10"
            aria-label="Next image"
          >
            <FiChevronRight size={24} />
          </button>
        </>
      )}

      {/* Image */}
      <motion.img
        key={current}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        src={images[current]}
        alt="Project screenshot"
        className="max-w-[90vw] max-h-[85vh] object-contain rounded-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />

      {/* Dots */}
      {images.length > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current
                  ? 'bg-[#22D3EE] w-6'
                  : 'bg-[rgba(148,163,184,0.3)]'
              }`}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
}

/* ─── Project Card ──────────────────────────────── */
function ProjectCard({ project, index, onImageClick }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={fadeUp}
      className={`grid lg:grid-cols-2 gap-12 items-center ${
        !isEven ? 'lg:direction-rtl' : ''
      }`}
    >
      {/* Image */}
      <motion.div
        className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
          !isEven ? 'lg:order-2' : ''
        }`}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        onClick={() => onImageClick([project.image], 0)}
      >
        <div className="relative overflow-hidden rounded-2xl border border-[rgba(148,163,184,0.08)]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full aspect-[16/10] object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(2,6,23,0.6)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
            <span className="text-white text-sm font-medium flex items-center gap-2">
              <FiExternalLink size={16} />
              View Full Size
            </span>
          </div>
        </div>
      </motion.div>

      {/* Details */}
      <div className={`space-y-6 ${!isEven ? 'lg:order-1 lg:text-right' : ''}`}>
        <div>
          <span className="text-[#22D3EE] text-sm font-mono font-medium">
            Project {String(index + 1).padStart(2, '0')}
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-white mt-2">
            {project.title}
          </h3>
        </div>

        <p className="text-[#94A3B8] leading-relaxed">
          {project.description}
        </p>

        {/* Highlights */}
        <ul className={`space-y-2 ${!isEven ? 'lg:ml-auto' : ''}`}>
          {project.highlights.map((h, i) => (
            <li
              key={i}
              className={`flex items-start gap-2 text-sm text-[#94A3B8] ${
                !isEven ? 'lg:flex-row-reverse lg:text-right' : ''
              }`}
            >
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#22D3EE] shrink-0" />
              {h}
            </li>
          ))}
        </ul>

        {/* Tech stack */}
        <div className={`flex flex-wrap gap-2 ${!isEven ? 'lg:justify-end' : ''}`}>
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 rounded-full text-xs font-medium bg-[rgba(34,211,238,0.08)] text-[#22D3EE] border border-[rgba(34,211,238,0.15)]"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className={`flex gap-3 ${!isEven ? 'lg:justify-end' : ''}`}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[rgba(148,163,184,0.15)] text-white text-sm font-medium hover:border-[rgba(34,211,238,0.4)] hover:bg-[rgba(34,211,238,0.05)] transition-all duration-300"
          >
            <FiGithub size={16} />
            Source Code
          </a>
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#22D3EE] text-[#020617] text-sm font-semibold hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all duration-300"
            >
              <FiExternalLink size={16} />
              Live Demo
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[rgba(148,163,184,0.08)] text-[#94A3B8] text-sm font-medium cursor-default">
              Coming Soon
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Projects Section ──────────────────────────── */
export default function Projects() {
  const [galleryData, setGalleryData] = useState(null);

  return (
    <section id="projects" className="relative mt-40 py-32">
      <div className="section-container">
        <SectionHeader
          label="Projects"
          title="Featured Work"
          subtitle="Real-world applications I've designed and built"
        />

        <div className="mt-20 space-y-32">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onImageClick={(images, idx) => setGalleryData({ images, idx })}
            />
          ))}
        </div>
      </div>

      {/* Gallery modal */}
      <AnimatePresence>
        {galleryData && (
          <ImageGallery
            images={galleryData.images}
            initialIndex={galleryData.idx}
            onClose={() => setGalleryData(null)}
          />
        )}
      </AnimatePresence>
      <div className="h-40"></div>
    </section>
  );
}
