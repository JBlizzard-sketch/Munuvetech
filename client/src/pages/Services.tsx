import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Link } from 'wouter';
import { 
  Zap, Cpu, BarChart, TrendingUp, Code, Workflow, 
  Database, Cloud, Shield, Smartphone, ArrowRight 
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Code,
      title: 'Custom Web Development',
      category: 'Web Systems',
      description: 'Scalable, high-performance web applications tailored to your business needs.',
      outcomes: [
        'Increased user engagement',
        'Reduced load times',
        'Enhanced scalability',
        'Better conversion rates',
      ],
    },
    {
      icon: Workflow,
      title: 'Process Automation',
      category: 'Automation',
      description: 'Streamline repetitive tasks and workflows to boost efficiency and reduce errors.',
      outcomes: [
        'Up to 60% time savings',
        'Reduced operational costs',
        'Fewer human errors',
        'Improved team productivity',
      ],
    },
    {
      icon: BarChart,
      title: 'Business Analytics',
      category: 'Analytics',
      description: 'Data-driven insights through custom dashboards and real-time reporting systems.',
      outcomes: [
        'Better decision making',
        'Identified cost savings',
        'Revenue optimization',
        'Performance tracking',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Digital Transformation',
      category: 'Growth',
      description: 'Strategic consulting to modernize your tech stack and optimize digital workflows.',
      outcomes: [
        'Modernized infrastructure',
        'Competitive advantage',
        'Faster time-to-market',
        'Enhanced agility',
      ],
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      category: 'Infrastructure',
      description: 'Cloud migration and optimization for improved reliability and cost efficiency.',
      outcomes: [
        'Reduced infrastructure costs',
        '99.9% uptime',
        'Improved scalability',
        'Enhanced security',
      ],
    },
    {
      icon: Database,
      title: 'Data Engineering',
      category: 'Data',
      description: 'Build robust data pipelines and warehouses for advanced analytics and AI.',
      outcomes: [
        'Unified data sources',
        'Real-time processing',
        'Improved data quality',
        'Faster insights',
      ],
    },
    {
      icon: Smartphone,
      title: 'Mobile Applications',
      category: 'Mobile',
      description: 'Native and cross-platform mobile apps that deliver exceptional user experiences.',
      outcomes: [
        'Broader market reach',
        'Higher engagement',
        'Seamless UX',
        'Offline capabilities',
      ],
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      category: 'Security',
      description: 'Comprehensive security audits and compliance solutions to protect your business.',
      outcomes: [
        'Reduced security risks',
        'Regulatory compliance',
        'Data protection',
        'Peace of mind',
      ],
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We analyze your business needs, challenges, and goals to create a tailored strategy.',
    },
    {
      step: '02',
      title: 'Design',
      description: 'Our team designs solutions with your users and business objectives in mind.',
    },
    {
      step: '03',
      title: 'Develop',
      description: 'We build with cutting-edge technologies and best practices for quality and performance.',
    },
    {
      step: '04',
      title: 'Deploy',
      description: 'Seamless deployment with thorough testing and ongoing support for success.',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 px-4 py-2" data-testid="badge-services-hero">
              Our Services
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Solutions Built for
              <br />
              <span className="text-primary">Measurable Outcomes</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              From web development to automation and analytics, we deliver technology solutions that drive real business results.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.05}>
                <Card className="h-full hover-elevate transition-all duration-300 hover:-translate-y-1" data-testid={`card-service-${index}`}>
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <service.icon className="text-primary" size={24} />
                      </div>
                      <Badge variant="secondary">{service.category}</Badge>
                    </div>
                    <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-foreground mb-3">Key Outcomes:</p>
                      <ul className="space-y-2">
                        {service.outcomes.map((outcome, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <ArrowRight size={16} className="text-primary flex-shrink-0 mt-0.5" />
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Our Proven Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A structured approach that ensures quality and results at every step.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <AnimatedSection key={item.step} delay={index * 0.1}>
                <div className="text-center" data-testid={`process-step-${index}`}>
                  <div className="text-5xl font-bold text-primary/20 font-mono mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
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
              Let's Build Something Great
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              Ready to transform your business with cutting-edge digital solutions?
            </p>
            <Link href="/contact">
              <Button size="lg" variant="default" className="gap-2 text-base px-8 py-6" data-testid="button-services-cta">
                Start Your Project <ArrowRight size={20} />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
