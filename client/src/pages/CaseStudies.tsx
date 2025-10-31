import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Skeleton } from '@/components/ui/skeleton';
import { Link } from 'wouter';
import { ArrowRight, TrendingUp } from 'lucide-react';
import type { CaseStudy } from '@shared/schema';

export default function CaseStudies() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const { data: caseStudies, isLoading } = useQuery<CaseStudy[]>({
    queryKey: ['/api/case-studies'],
  });

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Systems' },
    { id: 'automation', label: 'Automation' },
    { id: 'analytics', label: 'Analytics' },
    { id: 'mobile', label: 'Mobile' },
  ];

  const filteredStudies = caseStudies?.filter(
    (study) => selectedCategory === 'all' || study.category.toLowerCase() === selectedCategory
  );

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4" data-testid="badge-case-studies-hero">
              Case Studies
            </Badge>
            <h1 className="text-4xl font-bold mb-4">
              Real Projects,
              <br />
              <span className="text-primary">Measurable Results</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore how we've helped businesses transform their operations and achieve exceptional outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-4 bg-card border-y">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-3 overflow-x-auto">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.id)}
                className="whitespace-nowrap"
                data-testid={`filter-${category.id}`}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <Card key={i}>
                  <CardHeader>
                    <Skeleton className="h-48 w-full mb-4 rounded-md" />
                    <Skeleton className="h-6 w-3/4 mb-2" />
                    <Skeleton className="h-4 w-1/2" />
                  </CardHeader>
                  <CardContent>
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-5/6" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : filteredStudies && filteredStudies.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredStudies.map((study, index) => (
                <AnimatedSection key={study.id} delay={index * 0.05}>
                  <Link href={`/case-studies/${study.slug}`}>
                    <Card className="h-full group hover-elevate transition-all duration-300 hover:-translate-y-2 cursor-pointer" data-testid={`card-case-study-${index}`}>
                      <CardHeader>
                        <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-md mb-4 overflow-hidden relative">
                          {study.coverImage ? (
                            <img
                              src={study.coverImage}
                              alt={study.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <TrendingUp size={48} className="text-primary/40" />
                            </div>
                          )}
                          <div className="absolute top-3 right-3">
                            <Badge variant="secondary">{study.category}</Badge>
                          </div>
                        </div>
                        <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                          {study.title}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground mb-2">{study.client}</p>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {study.description}
                        </p>
                      </CardHeader>
                      <CardContent>
                        {study.metrics && study.metrics.length > 0 && (
                          <div className="space-y-2">
                            {study.metrics.slice(0, 2).map((metric, i) => (
                              <div key={i} className="flex items-center gap-2">
                                <ArrowRight size={16} className="text-primary" />
                                <span className="text-sm font-mono font-semibold text-primary">
                                  {metric}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground">
                No case studies found for this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-card">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Your Success Story Starts Here
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              Ready to achieve similar results for your business?
            </p>
            <Link href="/contact">
              <Button size="lg" variant="default" className="gap-2 text-base px-8 py-6" data-testid="button-case-studies-cta">
                Start Your Project <ArrowRight size={20} />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
