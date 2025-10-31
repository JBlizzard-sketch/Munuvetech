import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Link } from 'wouter';
import { Quote, Star, Building2, ArrowRight } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO',
      company: 'Global Retail Corporation',
      industry: 'Retail',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80&auto=format&fit=crop&crop=faces',
      quote: 'Working with Munuve Tech transformed our e-commerce platform. Their team delivered a 127% increase in mobile conversions and reduced our page load time by 79%. The results exceeded all expectations.',
      project: 'E-Commerce Platform Modernization',
      rating: 5,
      metrics: ['+127% conversion', '1.2s load time', '$8.4M revenue lift'],
    },
    {
      name: 'Michael Anderson',
      role: 'CTO',
      company: 'Industrial Manufacturing Inc',
      industry: 'Manufacturing',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80&auto=format&fit=crop&crop=faces',
      quote: 'The automation solution from Munuve Tech revolutionized our operations. We went from 4-6 hours of manual processing to just 12 minutes, with virtually zero errors. The ROI was achieved in just 8 months.',
      project: 'Enterprise Workflow Automation',
      rating: 5,
      metrics: ['60% time saved', '0.4% error rate', '8-month ROI'],
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Chief Data Officer',
      company: 'FinTech Solutions Ltd',
      industry: 'Financial Services',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80&auto=format&fit=crop&crop=faces',
      quote: 'The real-time analytics platform Munuve Tech built for us completely changed how we make decisions. We went from waiting weeks for data to having instant insights. This has saved us $2.1M annually and reduced customer churn by 35%.',
      project: 'Real-Time Analytics Platform',
      rating: 5,
      metrics: ['Real-time insights', '$2.1M saved', '35% churn reduction'],
    },
    {
      name: 'James Kariuki',
      role: 'Founder & CEO',
      company: 'STERA Pharmacy',
      industry: 'Healthcare',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80&auto=format&fit=crop&crop=faces',
      quote: 'Munuve Tech helped us build a complete digital pharmacy platform with WhatsApp integration. Our online orders increased by 285% and we now serve customers across 47 counties. The platform is easy to use and our customers love it.',
      project: 'STERA Pharmacy Digital Platform',
      rating: 5,
      metrics: ['+285% orders', '8min processing', '47 counties served'],
    },
    {
      name: 'Tom Nyamolo',
      role: 'Managing Director',
      company: 'Motkitt Ventures',
      industry: 'Marketing & Events',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&auto=format&fit=crop&crop=faces',
      quote: 'Our new portfolio platform from Munuve Tech has been a game-changer. Inbound inquiries increased by 340% and our proposal acceptance rate jumped to 62%. The platform showcases our work beautifully and converts visitors into clients.',
      project: 'Motkitt Experiential Marketing Platform',
      rating: 5,
      metrics: ['+340% inquiries', '62% acceptance rate', '12K monthly visitors'],
    },
    {
      name: 'Grace Wambui',
      role: 'Operations Director',
      company: 'Kechita Credit',
      industry: 'Financial Services',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80&auto=format&fit=crop&crop=faces',
      quote: 'The microfinance platform Munuve Tech developed has allowed us to reach 50,000+ entrepreneurs across Kenya. Loan approval time went from days to just 2 hours, and our operational costs dropped by 58%. This is transformational for financial inclusion.',
      project: 'Kechita Credit Microfinance Platform',
      rating: 5,
      metrics: ['50K+ borrowers', 'KES 2.5B+ disbursed', '2-hour approval'],
    },
  ];

  const stats = [
    { value: '98%', label: 'Client Satisfaction' },
    { value: '150+', label: 'Projects Delivered' },
    { value: '20+', label: 'Industries Served' },
    { value: '7+', label: 'Years Experience' },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-background to-card">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 px-4 py-2" data-testid="badge-testimonials-hero">
              Client Success Stories
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Trusted by Industry Leaders
              <br />
              <span className="text-primary">Around the World</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Don't just take our word for it. See what our clients have to say about working with Munuve Tech and the results we've delivered together.
            </p>
          </AnimatedSection>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {stats.map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 0.1}>
                <div className="text-center" data-testid={`stat-${index}`}>
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={testimonial.name} delay={index * 0.1}>
                <Card className="h-full hover-elevate transition-all duration-300" data-testid={`card-testimonial-${index}`}>
                  <CardContent className="p-8">
                    {/* Quote Icon */}
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                      <Quote className="text-primary" size={24} />
                    </div>

                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="text-primary fill-primary" size={16} />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-lg leading-relaxed mb-6 italic">
                      "{testimonial.quote}"
                    </blockquote>

                    {/* Metrics */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {testimonial.metrics.map((metric) => (
                        <Badge key={metric} variant="secondary" className="font-mono text-xs">
                          {metric}
                        </Badge>
                      ))}
                    </div>

                    {/* Author */}
                    <div className="flex items-center gap-4 pt-6 border-t border-border">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="font-semibold text-foreground">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.role} at {testimonial.company}
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <Building2 size={14} className="text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">{testimonial.industry}</span>
                        </div>
                      </div>
                    </div>

                    {/* Project Link */}
                    <Link href="/case-studies">
                      <a className="inline-flex items-center gap-2 text-sm text-primary hover:underline mt-4 group">
                        View {testimonial.project}
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Link>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-card">
        <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Let's build something extraordinary together. Contact us today to discuss your project and see how we can deliver results that exceed your expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="text-lg px-8 py-6" data-testid="button-contact-cta">
                  Start Your Project
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6" data-testid="button-case-studies-cta">
                  View All Case Studies
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
