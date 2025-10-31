import { useQuery } from '@tanstack/react-query';
import { useRoute, Link } from 'wouter';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { BlogPost as BlogPostType } from '@shared/schema';

export default function BlogPost() {
  const [, params] = useRoute('/blog/:slug');
  const { toast } = useToast();

  const { data: post, isLoading } = useQuery<BlogPostType>({
    queryKey: ['/api/blog', params?.slug],
    enabled: !!params?.slug,
  });

  const formatDate = (date: string | Date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const handleShare = () => {
    if (navigator.share && post) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: 'Link copied!',
        description: 'The post link has been copied to your clipboard.',
      });
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen pt-32">
        <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
          <Skeleton className="h-12 w-3/4 mb-6" />
          <Skeleton className="h-6 w-1/2 mb-12" />
          <Skeleton className="h-64 w-full mb-8" />
          <div className="space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen pt-32 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4" data-testid="text-post-not-found">Post not found</h1>
          <Link href="/blog">
            <Button variant="default" className="gap-2" data-testid="button-post-not-found-back">
              <ArrowLeft size={20} /> Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
          <AnimatedSection>
            <Link href="/blog">
              <Button variant="ghost" className="gap-2 mb-8" data-testid="button-back-to-blog">
                <ArrowLeft size={20} /> Back to Blog
              </Button>
            </Link>

            <Badge variant="secondary" className="mb-4" data-testid="badge-post-category">
              {post.category}
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" data-testid="text-post-title">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>{formatDate(post.publishedAt)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>{post.readTime} min read</span>
              </div>
              <div>
                <span>By {post.author}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              className="gap-2"
              onClick={handleShare}
              data-testid="button-share"
            >
              <Share2 size={16} /> Share
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Cover Image */}
      {post.coverImage && (
        <section className="mb-16">
          <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-12">
            <AnimatedSection delay={0.1}>
              <div className="aspect-video rounded-lg overflow-hidden">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Content */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
          <AnimatedSection delay={0.2}>
            <article className="prose prose-lg dark:prose-invert max-w-none" data-testid="article-content">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {post.content}
              </ReactMarkdown>
            </article>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
