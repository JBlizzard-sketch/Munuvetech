import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AnimatedSection } from '@/components/AnimatedSection';
import { MetricCounter } from '@/components/MetricCounter';
import { HeroCarousel, type CarouselSlide } from '@/components/HeroCarousel';
import { ArrowRight, Zap, TrendingUp, Cpu, BarChart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  const carouselSlides: CarouselSlide[] = [
    {
      id: 1,
      type: 'service',
      title: 'Custom Web Development That Scales',
      subtitle: 'Web Systems',
      description: 'Build lightning-fast, scalable web applications that delight users and drive conversions. From MVP to enterprise, we engineer digital experiences that perform.',
      imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1600&q=80&auto=format&fit=crop',
      ctaText: 'Start Your Project',
      ctaLink: '/contact',
    },
    {
      id: 2,
      type: 'case-study',
      title: 'E-Commerce Platform Modernization',
      subtitle: 'Success Story',
      description: 'Transformed a legacy e-commerce system into a modern, high-performance platform. Result: 3x faster load times and 127% increase in conversion rate.',
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80&auto=format&fit=crop',
      ctaText: 'View Case Study',
      ctaLink: '/case-studies/ecommerce-platform-modernization',
    },
    {
      id: 3,
      type: 'kpi',
      title: 'Automation Impact',
      subtitle: 'Real Results',
      description: 'Our automation solutions eliminate repetitive tasks, reduce errors, and free your team to focus on high-value work.',
      metric: '60%',
      metricLabel: 'Average Time Savings',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80&auto=format&fit=crop',
      ctaText: 'Explore Automation',
      ctaLink: '/services',
    },
    {
      id: 4,
      type: 'service',
      title: 'Data Analytics That Drive Decisions',
      subtitle: 'Business Intelligence',
      description: 'Transform raw data into actionable insights. Real-time dashboards, predictive analytics, and custom reporting that empower your team.',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80&auto=format&fit=crop',
      ctaText: 'Learn More',
      ctaLink: '/services',
    },
    {
      id: 5,
      type: 'kpi',
      title: 'Client Satisfaction',
      subtitle: 'Quality Commitment',
      description: 'Our track record speaks for itself. We deliver exceptional results that exceed expectations, every time.',
      metric: '98%',
      metricLabel: 'Client Satisfaction Rate',
      imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=80&auto=format&fit=crop',
      ctaText: 'See Testimonials',
      ctaLink: '/about',
    },
  ];
  const services = [
    {
      icon: Zap,
      title: 'Web Systems',
      description: 'Custom web applications built for performance, scalability, and user engagement.',
    },
    {
      icon: Cpu,
      title: 'Automation',
      description: 'Streamline operations and reduce costs with intelligent workflow automation.',
    },
    {
      icon: BarChart,
      title: 'Analytics',
      description: 'Data-driven insights that inform strategic decisions and optimize outcomes.',
    },
    {
      icon: TrendingUp,
      title: 'Growth Strategy',
      description: 'Digital transformation roadmaps that drive measurable business growth.',
    },
  ];

  const metrics = [
    { end: 150, suffix: '+', label: 'Projects Delivered' },
    { end: 98, suffix: '%', label: 'Client Satisfaction' },
    { end: 45, suffix: '%', label: 'Avg. Efficiency Gain' },
    { end: 24, suffix: '/7', label: 'Support Available' },
  ];

  const featuredProjects = [
    {
      title: 'E-Commerce Platform Redesign',
      client: 'Global Retail Corp',
      category: 'Web Development',
      impact: '+127% conversion rate',
    },
    {
      title: 'Automated Workflow System',
      client: 'Manufacturing Inc',
      category: 'Automation',
      impact: '60% time saved',
    },
    {
      title: 'Real-Time Analytics Dashboard',
      client: 'FinTech Solutions',
      category: 'Analytics',
      impact: '$2M cost reduction',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Carousel */}
      <HeroCarousel slides={carouselSlides} autoplayDuration={5000} />

      {/* Services Overview */}
      <section className="py-24 md:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Expertise That Drives Growth
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We deliver comprehensive solutions across web development, automation, and analytics.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.1}>
                <Card className="h-full hover-elevate transition-all duration-300 hover:-translate-y-1" data-testid={`card-service-${index}`}>
                  <CardHeader>
                    <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                      <service.icon className="text-primary" size={24} />
                    </div>
                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12" delay={0.4}>
            <Link href="/services">
              <Button variant="outline" size="lg" className="gap-2" data-testid="button-view-all-services">
                View All Services <ArrowRight size={20} />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Proven Track Record
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our results speak for themselves.
            </p>
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

      {/* Featured Projects */}
      <section className="py-24 md:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Featured Work
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real projects, measurable results.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <AnimatedSection key={project.title} delay={index * 0.1}>
                <Card className="h-full hover-elevate transition-all duration-300 hover:-translate-y-1" data-testid={`card-project-${index}`}>
                  <CardHeader>
                    <Badge variant="secondary" className="mb-2 w-fit">
                      {project.category}
                    </Badge>
                    <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{project.client}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-primary font-mono">
                      {project.impact}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12" delay={0.4}>
            <Link href="/case-studies">
              <Button variant="default" size="lg" className="gap-2" data-testid="button-view-case-studies">
                View All Case Studies <ArrowRight size={20} />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              Let's discuss how Munuve Tech can help you achieve your goals with cutting-edge digital solutions.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="default" className="gap-2 text-base px-8 py-6" data-testid="button-cta-contact">
                Schedule a Consultation <ArrowRight size={20} />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
