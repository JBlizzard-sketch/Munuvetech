import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/AnimatedSection';
import { MetricCounter } from '@/components/MetricCounter';
import { Link } from 'wouter';
import { Target, Users, Zap, Award, ArrowRight } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'Every solution we build is designed to deliver measurable business outcomes and ROI.',
    },
    {
      icon: Zap,
      title: 'Innovation First',
      description: 'We leverage cutting-edge technologies and methodologies to stay ahead of the curve.',
    },
    {
      icon: Users,
      title: 'Client Partnership',
      description: 'Your success is our success. We work collaboratively to achieve your goals.',
    },
    {
      icon: Award,
      title: 'Excellence Standard',
      description: 'We maintain the highest standards of quality, performance, and craftsmanship.',
    },
  ];

  const metrics = [
    { end: 7, suffix: '+', label: 'Years Experience' },
    { end: 50, suffix: '+', label: 'Team Members' },
    { end: 20, suffix: '+', label: 'Industries Served' },
    { end: 150, suffix: '+', label: 'Projects Completed' },
  ];

  const timeline = [
    {
      year: '2018',
      title: 'Founded',
      description: 'Munuve Tech was established with a mission to transform businesses through intelligent digital solutions.',
    },
    {
      year: '2020',
      title: 'Expansion',
      description: 'Grew our team and expanded services to include AI-powered automation and advanced analytics.',
    },
    {
      year: '2022',
      title: 'Recognition',
      description: 'Recognized as a leading digital innovation agency with multiple industry awards.',
    },
    {
      year: '2025',
      title: 'Global Reach',
      description: 'Serving clients worldwide with a diverse portfolio spanning multiple industries.',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 px-4 py-2" data-testid="badge-about-hero">
              About Us
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Building the Future of
              <br />
              <span className="text-primary">Digital Innovation</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Munuve Tech is a digital innovation agency specializing in advanced web systems, automation, and analytics that drive measurable business results.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <AnimatedSection>
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  We empower businesses to achieve their full potential through intelligent technology solutions. By combining human expertise with advanced digital tools, we create systems that automate processes, unlock insights, and drive sustainable growth.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our approach is simple: understand your challenges, design solutions that address them, and deliver measurable outcomes that exceed expectations. We don't just build software — we build competitive advantages.
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.1}>
                <Card className="h-full hover-elevate transition-all duration-300" data-testid={`card-value-${index}`}>
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                      <value.icon className="text-primary" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-24 md:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              By the Numbers
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {metrics.map((metric, index) => (
              <AnimatedSection key={metric.label} delay={index * 0.1}>
                <MetricCounter
                  end={metric.end}
                  suffix={metric.suffix}
                  label={metric.label}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From startup to industry leader.
            </p>
          </AnimatedSection>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <AnimatedSection key={item.year} delay={index * 0.1}>
                <div className="flex gap-6 md:gap-12" data-testid={`timeline-${index}`}>
                  <div className="flex-shrink-0 w-24 md:w-32">
                    <div className="text-3xl md:text-4xl font-bold text-primary font-mono">
                      {item.year}
                    </div>
                  </div>
                  <div className="flex-1 pb-8 border-l-2 border-border pl-6 md:pl-12">
                    <h3 className="text-xl md:text-2xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-card">
        <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Let's Work Together
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              Join the businesses that trust Munuve Tech to transform their digital presence.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="default" className="gap-2 text-base px-8 py-6" data-testid="button-about-cta">
                Get In Touch <ArrowRight size={20} />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
