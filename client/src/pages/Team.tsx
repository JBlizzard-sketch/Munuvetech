import { AnimatedSection } from '@/components/AnimatedSection';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Linkedin, Mail } from 'lucide-react';

const teamMembers = [
  {
    id: 1,
    name: 'Joe Makali Munuve',
    role: 'CEO & Founder',
    department: 'Leadership',
    bio: 'Visionary leader with 7+ years of experience in digital transformation and business systems. Passionate about leveraging technology to solve complex business challenges and driving innovation across Africa.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&q=80&auto=format&fit=crop&crop=faces',
    linkedin: '#',
    email: 'joeshady69@gmail.com',
    expertise: ['Strategy', 'Digital Transformation', 'Leadership']
  },
  {
    id: 2,
    name: 'Sarah Chen',
    role: 'Chief Technology Officer',
    department: 'Engineering',
    bio: 'Full-stack architect specializing in scalable cloud solutions and modern web technologies. Leads our technical innovation initiatives.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&q=80&auto=format&fit=crop&crop=faces',
    linkedin: '#',
    email: 'sarah.chen@munuvetech.com',
    expertise: ['Cloud Architecture', 'Full-Stack Development', 'DevOps']
  },
  {
    id: 3,
    name: 'Michael Ochieng',
    role: 'Lead Developer',
    department: 'Engineering',
    bio: 'Expert in React, TypeScript, and modern frontend frameworks. Crafts exceptional user experiences with clean, maintainable code.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&q=80&auto=format&fit=crop&crop=faces',
    linkedin: '#',
    email: 'michael@munuvetech.com',
    expertise: ['React', 'TypeScript', 'UI/UX']
  },
  {
    id: 4,
    name: 'Amina Hassan',
    role: 'UX/UI Designer',
    department: 'Design',
    bio: 'Award-winning designer who transforms complex workflows into intuitive, beautiful interfaces that users love.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&q=80&auto=format&fit=crop&crop=faces',
    linkedin: '#',
    email: 'amina@munuvetech.com',
    expertise: ['User Research', 'Interface Design', 'Design Systems']
  },
  {
    id: 5,
    name: 'David Kimani',
    role: 'Senior Backend Engineer',
    department: 'Engineering',
    bio: 'Specializes in building robust APIs and microservices. Expert in database optimization and system architecture.',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&q=80&auto=format&fit=crop&crop=faces',
    linkedin: '#',
    email: 'david@munuvetech.com',
    expertise: ['Node.js', 'PostgreSQL', 'System Design']
  },
  {
    id: 6,
    name: 'Grace Wanjiru',
    role: 'Data Scientist',
    department: 'Analytics',
    bio: 'Turns data into actionable insights. Builds predictive models and analytics dashboards that drive business decisions.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&q=80&auto=format&fit=crop&crop=faces',
    linkedin: '#',
    email: 'grace@munuvetech.com',
    expertise: ['Machine Learning', 'Data Visualization', 'Analytics']
  },
];

const departments = ['All', 'Leadership', 'Engineering', 'Design', 'Analytics'];

export default function Team() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Meet Our{' '}
                <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                  Team
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                A diverse group of talented professionals dedicated to delivering exceptional digital solutions.
                We combine technical expertise with creative innovation to transform your business.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <AnimatedSection key={member.id} delay={index * 0.1}>
                <Card className="overflow-hidden hover-elevate h-full" data-testid={`card-team-member-${member.id}`}>
                  <CardContent className="p-0">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6">
                      <Badge className="mb-3" data-testid={`badge-department-${member.id}`}>
                        {member.department}
                      </Badge>
                      <h3 className="text-xl font-bold mb-1" data-testid={`text-name-${member.id}`}>
                        {member.name}
                      </h3>
                      <p className="text-primary font-medium mb-4" data-testid={`text-role-${member.id}`}>
                        {member.role}
                      </p>
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                        {member.bio}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {member.expertise.map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        <a
                          href={`mailto:${member.email}`}
                          className="p-2 rounded-full hover:bg-primary/10 transition-colors"
                          aria-label={`Email ${member.name}`}
                          data-testid={`link-email-${member.id}`}
                        >
                          <Mail className="w-4 h-4 text-primary" />
                        </a>
                        <a
                          href={member.linkedin}
                          className="p-2 rounded-full hover:bg-primary/10 transition-colors"
                          aria-label={`${member.name}'s LinkedIn`}
                          data-testid={`link-linkedin-${member.id}`}
                        >
                          <Linkedin className="w-4 h-4 text-primary" />
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-background to-primary/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Want to Join Our Team?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We're always looking for talented individuals who are passionate about technology
                and innovation. Check out our open positions.
              </p>
              <Link href="/careers">
                <Button size="lg" className="text-lg px-8 py-6" data-testid="button-view-careers">
                  View Open Positions
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
