
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      title: "Freelancer",
      company: "Ahmedabad",
      role: "Software Developer (NodeJS + ReactJS + NextJS + NestJS)",
      period: "Feb 2023 - Present",
      projects: [
        {
          name: "Mehuna.in",
          status: "Under Testing",
          techStack: ["React", "Node.js", "TypeScript", "MySQL", "TypeORM", "RabbitMQ", "Redis", "PM2"],
          description: "Customer grievance support tool for banking users with dynamic email generation and payment integration."
        },
        {
          name: "WinPro (Dummy Name)",
          status: "Under Development", 
          techStack: ["React", "Node.js", "gRPC", "Microservices", "TypeScript", "MySQL", "TypeORM", "RabbitMQ", "Redis", "PM2"],
          description: "Internal gRPC services for microservices communication with separate databases per account."
        }
      ]
    },
    {
      title: "AcquireIO",
      company: "Ahmedabad",
      role: "Software Developer (NodeJS + ReactJS)",
      period: "February 2018 - August 2022",
      projects: [
        {
          name: "Acquire.io V2",
          status: "Live Product",
          techStack: ["React", "Node.js", "TypeScript", "Socket.io", "MySQL", "MongoDB", "TypeORM", "RabbitMQ", "PM2", "Consul"],
          description: "Dynamic Knowledge Base module with Salesforce integration and CI/CD deployments."
        },
        {
          name: "Acquire Help Center",
          status: "Live Product",
          techStack: ["EJS", "Node.js", "Custom Themes", "CNAME Configuration"],
          description: "Fully dynamic help center with custom branding and Live Chat integration."
        }
      ]
    },
    {
      title: "Green Moments",
      company: "Ahmedabad", 
      role: "Web Developer (WordPress + HTML)",
      period: "February 2017 - January 2018",
      projects: [
        {
          name: "WordPress Development",
          status: "Multiple Projects",
          techStack: ["PHP", "WordPress", "JavaScript", "MySQL", "HTML", "jQuery", "Bootstrap", "CSS", "SCSS"],
          description: "Converted static HTML templates to dynamic WordPress themes with custom plugins."
        }
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            5+ years of building scalable applications and delivering end-to-end solutions
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-12 relative">
              {index < experiences.length - 1 && (
                <div className="absolute left-6 top-24 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-500 z-0"></div>
              )}
              
              <Card className="hover:shadow-xl transition-all duration-300 relative z-10">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{exp.title}</h3>
                      <p className="text-lg text-blue-600 font-semibold">{exp.company}</p>
                      <p className="text-gray-600">{exp.role}</p>
                    </div>
                    <Badge variant="outline" className="text-sm font-medium px-3 py-1">
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-6">
                    {exp.projects.map((project, projectIndex) => (
                      <div key={projectIndex} className="border-l-4 border-blue-200 pl-4">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="text-lg font-semibold text-gray-900">{project.name}</h4>
                          <Badge 
                            variant={project.status === "Live Product" ? "default" : "secondary"}
                            className="text-xs"
                          >
                            {project.status}
                          </Badge>
                        </div>
                        <p className="text-gray-600 mb-3">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech) => (
                            <span 
                              key={tech}
                              className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
