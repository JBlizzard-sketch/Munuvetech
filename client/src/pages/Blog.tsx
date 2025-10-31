import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Skeleton } from '@/components/ui/skeleton';
import { Link } from 'wouter';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import type { BlogPost } from '@shared/schema';

export default function Blog() {
  const [selectedTag, setSelectedTag] = useState<string>('all');

  const { data: blogPosts, isLoading } = useQuery<BlogPost[]>({
    queryKey: ['/api/blog'],
  });

  const allTags = blogPosts
    ? ['all', ...new Set(blogPosts.flatMap((post) => post.tags))]
    : ['all'];

  const filteredPosts = blogPosts?.filter(
    (post) => selectedTag === 'all' || post.tags.includes(selectedTag)
  );

  const formatDate = (date: string | Date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4" data-testid="badge-blog-hero">
              Blog & Insights
            </Badge>
            <h1 className="text-4xl font-bold mb-4">
              Ideas, Insights, and
              <br />
              <span className="text-primary">Industry Trends</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Stay informed with the latest in digital innovation, automation, and technology strategy.
            </p>
          </div>
        </div>
      </section>

      {/* Tag Filter */}
      <section className="py-4 bg-card border-y">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {allTags.map((tag) => (
              <Button
                key={tag}
                variant={selectedTag === tag ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedTag(tag)}
                className="whitespace-nowrap capitalize"
                data-testid={`filter-tag-${tag}`}
              >
                {tag}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
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
          ) : filteredPosts && filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <AnimatedSection key={post.id} delay={index * 0.05}>
                  <Link href={`/blog/${post.slug}`}>
                    <Card className="h-full group hover-elevate transition-all duration-300 hover:-translate-y-2 cursor-pointer" data-testid={`card-blog-post-${index}`}>
                      <CardHeader>
                        <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-md mb-4 overflow-hidden">
                          {post.coverImage ? (
                            <img
                              src={post.coverImage}
                              alt={post.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-primary/40 text-6xl font-bold">
                              {post.title.charAt(0)}
                            </div>
                          )}
                        </div>
                        <Badge variant="secondary" className="mb-2 w-fit">
                          {post.category}
                        </Badge>
                        <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {post.excerpt}
                        </p>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            <span>{formatDate(post.publishedAt)}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock size={14} />
                            <span>{post.readTime} min read</span>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {post.tags.slice(0, 3).map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground">
                No blog posts found for this tag.
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
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="default" className="gap-2 text-base px-8 py-6" data-testid="button-blog-cta">
                Contact Us <ArrowRight size={20} />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
