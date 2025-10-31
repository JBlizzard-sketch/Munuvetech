import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Briefcase, MapPin, Clock, CheckCircle2 } from "lucide-react";

const openPositions = [
  {
    id: 1,
    title: "Senior Full-Stack Developer",
    department: "Engineering",
    location: "Nairobi, Kenya",
    type: "Full-time",
    level: "Senior",
    description: "We are looking for an experienced full-stack developer to build scalable web applications using React, Node.js, and cloud technologies.",
    responsibilities: [
      "Design and implement robust web applications",
      "Collaborate with cross-functional teams",
      "Write clean, maintainable code",
      "Mentor junior developers"
    ],
    requirements: [
      "5+ years of full-stack development experience",
      "Strong proficiency in React and Node.js",
      "Experience with PostgreSQL and cloud platforms",
      "Excellent problem-solving skills"
    ]
  },
  {
    id: 2,
    title: "UI/UX Designer",
    department: "Design",
    location: "Nairobi, Kenya",
    type: "Full-time",
    level: "Mid-level",
    description: "Join our design team to create beautiful, intuitive interfaces that delight users and solve complex problems.",
    responsibilities: [
      "Create wireframes, prototypes, and high-fidelity designs",
      "Conduct user research and usability testing",
      "Collaborate with developers to implement designs",
      "Maintain and evolve our design system"
    ],
    requirements: [
      "3+ years of UI/UX design experience",
      "Proficiency in Figma and design tools",
      "Strong portfolio demonstrating design process",
      "Understanding of frontend development"
    ]
  },
  {
    id: 3,
    title: "Data Engineer",
    department: "Analytics",
    location: "Remote",
    type: "Full-time",
    level: "Senior",
    description: "Build and maintain data pipelines and infrastructure to support our analytics and machine learning initiatives.",
    responsibilities: [
      "Design and implement ETL pipelines",
      "Optimize database performance",
      "Build data warehousing solutions",
      "Collaborate with data scientists"
    ],
    requirements: [
      "4+ years of data engineering experience",
      "Strong SQL and Python skills",
      "Experience with data warehousing (Snowflake, BigQuery)",
      "Knowledge of data pipeline tools (Airflow, dbt)"
    ]
  },
  {
    id: 4,
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Nairobi, Kenya",
    type: "Full-time",
    level: "Mid-level",
    description: "Help us build and maintain robust CI/CD pipelines and cloud infrastructure for our growing platform.",
    responsibilities: [
      "Manage cloud infrastructure (AWS/Azure/GCP)",
      "Implement CI/CD pipelines",
      "Monitor system performance and reliability",
      "Automate deployment processes"
    ],
    requirements: [
      "3+ years of DevOps experience",
      "Strong knowledge of containerization (Docker, Kubernetes)",
      "Experience with Infrastructure as Code (Terraform)",
      "Scripting skills (Bash, Python)"
    ]
  },
  {
    id: 5,
    title: "Product Manager",
    department: "Product",
    location: "Nairobi, Kenya",
    type: "Full-time",
    level: "Mid-level",
    description: "Drive product strategy and execution for our digital solutions, working closely with clients and internal teams.",
    responsibilities: [
      "Define product vision and roadmap",
      "Gather and prioritize requirements",
      "Work with design and engineering teams",
      "Analyze metrics and user feedback"
    ],
    requirements: [
      "3+ years of product management experience",
      "Strong analytical and communication skills",
      "Experience with agile methodologies",
      "Technical background preferred"
    ]
  },
  {
    id: 6,
    title: "Junior Frontend Developer",
    department: "Engineering",
    location: "Nairobi, Kenya",
    type: "Full-time",
    level: "Junior",
    description: "Start your career building modern web applications with React and TypeScript in a supportive team environment.",
    responsibilities: [
      "Build responsive user interfaces",
      "Write clean, tested code",
      "Learn from senior developers",
      "Participate in code reviews"
    ],
    requirements: [
      "1+ years of frontend development experience",
      "Knowledge of React and JavaScript/TypeScript",
      "Understanding of HTML, CSS, and responsive design",
      "Eagerness to learn and grow"
    ]
  }
];

const benefits = [
  "Competitive salary and equity",
  "Health insurance coverage",
  "Flexible working hours",
  "Remote work options",
  "Professional development budget",
  "Latest tech equipment",
  "Team building events",
  "Collaborative work environment"
];

export default function Careers() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Join{" "}
                <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                  Munuve Tech
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Build your career with us. We are looking for passionate individuals who want to make
                an impact through technology and innovation.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Work With Us</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We offer more than just a job – we provide opportunities for growth, learning, and making a real difference.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={benefit} delay={index * 0.1}>
                <Card className="hover-elevate">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <p className="text-sm font-medium">{benefit}</p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Open Positions</h2>
              <p className="text-lg text-muted-foreground">
                Explore opportunities to grow your career with Munuve Tech
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <AnimatedSection key={position.id} delay={index * 0.1}>
                <Card className="hover-elevate" data-testid={`card-position-${position.id}`}>
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-2" data-testid={`text-job-title-${position.id}`}>
                          {position.title}
                        </CardTitle>
                        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Briefcase className="w-4 h-4" />
                            <span>{position.department}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{position.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{position.type}</span>
                          </div>
                        </div>
                      </div>
                      <Badge className="self-start">{position.level}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {position.description}
                    </p>

                    <div>
                      <h4 className="font-semibold mb-3">Key Responsibilities</h4>
                      <ul className="space-y-2">
                        {position.responsibilities.map((resp) => (
                          <li key={resp} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Requirements</h4>
                      <ul className="space-y-2">
                        {position.requirements.map((req) => (
                          <li key={req} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4">
                      <Button 
                        size="lg" 
                        className="w-full md:w-auto"
                        data-testid={`button-apply-${position.id}`}
                      >
                        Apply for This Position
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Application Process
              </h2>
              <p className="text-lg text-muted-foreground mb-12">
                Our hiring process is designed to be transparent and respectful of your time.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
                {[
                  { step: "1", title: "Apply", description: "Submit your application and resume" },
                  { step: "2", title: "Screen", description: "Initial phone or video call" },
                  { step: "3", title: "Interview", description: "Technical and cultural fit assessment" },
                  { step: "4", title: "Offer", description: "Receive and review your offer" }
                ].map((item) => (
                  <div key={item.step} className="text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-bold text-primary mx-auto mb-4">
                      {item.step}
                    </div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
