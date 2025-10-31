import { useQuery } from '@tanstack/react-query';
import { useRoute, Link } from 'wouter';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { AnimatedSection } from '@/components/AnimatedSection';
import { ArrowLeft, TrendingUp, CheckCircle2 } from 'lucide-react';
import type { CaseStudy } from '@shared/schema';

export default function CaseStudyDetail() {
  const [, params] = useRoute('/case-studies/:slug');

  const { data: caseStudy, isLoading } = useQuery<CaseStudy>({
    queryKey: ['/api/case-studies', params?.slug],
    enabled: !!params?.slug,
  });

  const formatDate = (date: string | Date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen pt-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <Skeleton className="h-12 w-3/4 mb-6" />
          <Skeleton className="h-6 w-1/2 mb-12" />
          <Skeleton className="h-96 w-full mb-8" />
          <div className="space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </div>
      </div>
    );
  }

  if (!caseStudy) {
    return (
      <div className="min-h-screen pt-32 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4" data-testid="text-case-study-not-found">Case study not found</h1>
          <Link href="/case-studies">
            <Button variant="default" className="gap-2" data-testid="button-case-study-not-found-back">
              <ArrowLeft size={20} /> Back to Case Studies
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <AnimatedSection>
            <Link href="/case-studies">
              <Button variant="ghost" className="gap-2 mb-8" data-testid="button-back-to-case-studies">
                <ArrowLeft size={20} /> Back to Case Studies
              </Button>
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="secondary" className="mb-4" data-testid="badge-case-study-category">
                  {caseStudy.category}
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight" data-testid="text-case-study-title">
                  {caseStudy.title}
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  {caseStudy.description}
                </p>
                <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                  <div>
                    <span className="font-semibold text-foreground">Client:</span>{' '}
                    {caseStudy.client}
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">Industry:</span>{' '}
                    {caseStudy.industry}
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">Completed:</span>{' '}
                    {formatDate(caseStudy.completedAt)}
                  </div>
                </div>
              </div>

              <div className="aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5">
                {caseStudy.coverImage ? (
                  <img
                    src={caseStudy.coverImage}
                    alt={caseStudy.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <TrendingUp size={64} className="text-primary/40" />
                  </div>
                )}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Key Metrics */}
      {caseStudy.metrics && caseStudy.metrics.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
            <AnimatedSection delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Key Results
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {caseStudy.metrics.map((metric, index) => (
                  <Card key={index} className="text-center" data-testid={`metric-card-${index}`}>
                    <CardContent className="p-8">
                      <div className="text-4xl md:text-5xl font-bold text-primary font-mono mb-2">
                        {metric}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Challenge */}
      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
          <AnimatedSection delay={0.2}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The Challenge</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {caseStudy.challenge}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
          <AnimatedSection delay={0.3}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Solution</h2>
            <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
              {caseStudy.solution}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Results */}
      {caseStudy.results && caseStudy.results.length > 0 && (
        <section className="py-16 md:py-24 bg-card">
          <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
            <AnimatedSection delay={0.4}>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Impact & Results</h2>
              <div className="space-y-4">
                {caseStudy.results.map((result, index) => (
                  <div key={index} className="flex items-start gap-4" data-testid={`result-${index}`}>
                    <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
                    <p className="text-lg text-muted-foreground">{result}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Tags */}
      {caseStudy.tags && caseStudy.tags.length > 0 && (
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
            <AnimatedSection delay={0.5}>
              <h3 className="text-xl font-semibold mb-4">Technologies & Services</h3>
              <div className="flex flex-wrap gap-2">
                {caseStudy.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready for Similar Results?
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with proven strategies and cutting-edge solutions.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="default" className="gap-2 text-base px-8 py-6" data-testid="button-case-study-cta">
                Start Your Project
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
