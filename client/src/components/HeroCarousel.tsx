import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export interface CarouselSlide {
  id: number;
  type: 'service' | 'case-study' | 'kpi';
  title: string;
  subtitle: string;
  description: string;
  metric?: string;
  metricLabel?: string;
  imageUrl: string;
  ctaText?: string;
  ctaLink?: string;
}

interface HeroCarouselProps {
  slides: CarouselSlide[];
  autoplayDuration?: number;
}

export function HeroCarousel({ slides, autoplayDuration = 5000 }: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    setProgress(0);
  }, [slides.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setProgress(0);
  };

  useEffect(() => {
    if (isPaused) return;

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          goToNext();
          return 0;
        }
        return prev + (100 / (autoplayDuration / 50));
      });
    }, 50);

    return () => clearInterval(progressInterval);
  }, [isPaused, autoplayDuration, goToNext]);

  const currentSlide = slides[currentIndex];

  return (
    <div
      className="relative w-full h-[85vh] overflow-hidden bg-background"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      data-testid="hero-carousel"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide.id}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          {/* Background Image with Parallax */}
          <motion.div
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: 'linear' }}
            className="absolute inset-0"
          >
            <img
              src={currentSlide.imageUrl}
              alt={currentSlide.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {/* Minimal vignette overlay for text clarity without obscuring images */}
            <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-transparent" />
          </motion.div>

          {/* Content */}
          <div className="relative h-full max-w-7xl mx-auto px-6 md:px-8 lg:px-12 flex items-center">
            <div className="max-w-3xl">
              {/* Type Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
                  {currentSlide.type === 'service' && '🚀 Our Services'}
                  {currentSlide.type === 'case-study' && '💼 Case Study'}
                  {currentSlide.type === 'kpi' && '📊 Impact Metrics'}
                </span>
              </motion.div>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-primary font-semibold text-lg md:text-xl mb-4"
                data-testid="carousel-subtitle"
              >
                {currentSlide.subtitle}
              </motion.p>

              {/* Title with Staggered Reveal */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight"
                data-testid="carousel-title"
              >
                {currentSlide.title}
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl"
                data-testid="carousel-description"
              >
                {currentSlide.description}
              </motion.p>

              {/* Metric Display (for KPI slides) */}
              {currentSlide.metric && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="inline-block bg-primary/10 backdrop-blur-sm border border-primary/30 rounded-lg px-8 py-6 mb-8"
                >
                  <div className="text-5xl md:text-6xl font-bold text-primary mb-2 font-mono">
                    {currentSlide.metric}
                  </div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">
                    {currentSlide.metricLabel}
                  </div>
                </motion.div>
              )}

              {/* CTA Button */}
              {currentSlide.ctaText && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                >
                  <Button
                    size="lg"
                    className="text-lg px-8 py-6"
                    data-testid="carousel-cta"
                  >
                    {currentSlide.ctaText}
                  </Button>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 flex justify-between">
          <button
            onClick={goToPrevious}
            className="p-3 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-background hover-elevate transition-all"
            aria-label="Previous slide"
            data-testid="carousel-prev"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={goToNext}
            className="p-3 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-background hover-elevate transition-all"
            aria-label="Next slide"
            data-testid="carousel-next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-12 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="flex gap-3 justify-center md:justify-start">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className="group relative"
                aria-label={`Go to slide ${index + 1}`}
                data-testid={`carousel-indicator-${index}`}
              >
                <div className="w-12 md:w-16 h-1 bg-muted-foreground/30 rounded-full overflow-hidden">
                  {index === currentIndex && (
                    <motion.div
                      className="h-full bg-primary"
                      initial={{ width: '0%' }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.05, ease: 'linear' }}
                    />
                  )}
                  {index < currentIndex && (
                    <div className="h-full bg-primary w-full" />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Pause Indicator */}
      {isPaused && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-8 right-8 px-4 py-2 bg-background/80 backdrop-blur-sm border border-border rounded-full text-sm text-muted-foreground"
        >
          Paused
        </motion.div>
      )}
    </div>
  );
}
