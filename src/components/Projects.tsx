
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      name: "Mehuna",
      description: "Customer grievance support tool for banking users with dynamic email generation and payment integration.",
      status: "Under Testing",
      techStack: ["React", "Node.js", "TypeScript", "MySQL", "TypeORM", "RabbitMQ", "Redis", "PM2"],
      features: [
        "Dynamic Page Builder – Create custom pages with editable meta title, description, and keywords (SEO ready)",
        "Queue Management with BullMQ + Redis for handling background jobs and async processing",
        "Cron Jobs – Automated scheduling for emails, alerts, and cleanup tasks",
        "Integrated Payment Gateway – Enables premium features and secure payments",
        "Subscriptions, Promo Codes Logics Flow Build",
        "Advanced Email System:",
        "    Dynamic templates with custom variables",
        "    Broadcast to all users",
        "    SMTP configuration and OTP support",
        "Send Emails Using Gmail API – Send emails on the user’s behalf with OAuth2 authentication (safe, secure, and verified by Google)",
        "Manual Multi-language Support – Easily add and manage translations for all content",
        "Support Query System – Save and manage queries submitted via the contact form",
        "Custom Fields and Variables – Flexible data capture and dynamic email/form integration",
        "Theme Settings – Customize UI themes and styles",
        "Profile & System Configurations – Full control over user settings, SMTP, OTP, and more"
      ],
      category: "Freelance Project",
      year: "Dec 2024-Present",
      highlight: true
    },
    {
      name: "Enterprise-Grade Banking SaaS Platform",
      note: "(Unreleased – Strategic Hold)",
      description: "End-to-end multi-tenant SaaS banking platform with dynamic domain routing, gRPC-based microservices, queue processing, secure onboarding, and DevOps automation.",
      status: "Under Development",
      techStack: [
        "React.js", "Redux", "Node.js", "TypeScript", "Express", "gRPC",
        "Microservices", "MySQL", "TypeORM", "RabbitMQ", "BullMQ", "Redis",
        "AJV", "PM2", "Linux", "OpenSSL", "MUI", "Zoop API", "SSE"
      ],
      features: [
        "Multi-panel RBAC: Admin, Super Admin, Account User, Sub-User",
        "Internal gRPC services for microservices communication",
        "Separate MySQL database per account with dynamic pooling",
        "Dynamic subdomain and custom domain mapping per account",
        "Email sending via SMTP/Gmail API and OTP-based login",
        "Queue and cron jobs via RabbitMQ + Redis + BullMQ",
        "Secure KYC, agreement signing, onboarding flows via Zoop API",
        "Advance payout, RTGS, and TDS logic based on PAN/Aadhar",
        "Real-time updates using Server-Sent Events (SSE)",
        "API Gateway with HTTP Proxy Middleware routing",
        "Secure server setup with CSURF, rate-limiting, IP blocking, logging",
        "Auto-deploy with GitHub Actions and PM2 process management",
        "HTTPS on all domains using OpenSSL"
      ],
      category: "Freelance Project",
      year: "2023–Present"
    },
    {
      name: "Acquire.io V2",
      description: "Dynamic Knowledge Base module with Salesforce integration and CI/CD deployments.",
      status: "Live Product",
      techStack: ["React", "Node.js", "TypeScript", "Socket.io", "MySQL", "MongoDB", "TypeORM", "RabbitMQ", "PM2", "Consul"],
      features: [
        "Dynamic Knowledge Base with article management",
        "Salesforce (Lightning, Classic, Apex) CRM sync",
        "Custom domains and SEO features",
        "CI/CD-based deployments"
      ],
      category: "AcquireIO",
      year: "2018-2022",
      link: "https://app.acquire.io/login"
    },
    {
      name: "Acquire Help Center",
      description: "Fully dynamic help center with custom branding and Live Chat integration.",
      status: "Live Product",
      techStack: ["EJS", "Node.js", "Custom Themes", "CNAME Configuration"],
      features: [
        "Dynamic help center UI with EJS templating",
        "Custom branding per client via CNAME",
        "Live Chat article suggestions from Knowledge Base"
      ],
      category: "AcquireIO",
      year: "2018-2022"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live Product":
        return "bg-green-100 text-green-800 border-green-200";
      case "Under Testing":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Under Development":
        return "bg-blue-100 text-blue-800 border-blue-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A showcase of key projects demonstrating full-stack development expertise
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={project.name}
              className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white relative overflow-hidden ${project.highlight ? 'ring-2 ring-blue-500/20' : ''
                }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {project.highlight && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="flex items-center gap-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    <Star className="w-3 h-3" />
                    Featured
                  </div>
                </div>
              )}

              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

              <CardHeader className="pb-4">
                <div className="flex items-start justify-between flex-wrap gap-3 mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{project.name}</h3>
                      {project.link && (
                        <Button
                          asChild
                          variant="ghost"
                          size="sm"
                          className="h-auto p-1 text-blue-600 hover:text-blue-800 hover:bg-blue-50"
                        >
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink size={16} />
                          </a>
                        </Button>
                      )}
                    </div>
                    <p className="text-sm text-gray-500 mb-2">{project.category} • {project.year}</p>
                    <p className="text-sm text-gray-500 mb-2">{project.note}</p>
                  </div>
                  <Badge className={`${getStatusColor(project.status)} border`}>
                    {project.status}
                  </Badge>
                </div>
                <p className="text-gray-600 leading-relaxed">{project.description}</p>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded text-xs font-medium border border-blue-100 hover:border-blue-200 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
          >
            <a href="https://github.com/jaisaram" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
