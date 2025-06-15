
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('skills');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Backend",
      skills: [
        { name: "Node.js (Express)", level: 90 },
        { name: "NestJS", level: 85 },
        { name: "gRPC", level: 80 },
        { name: "PHP", level: 75 }
      ],
      color: "from-green-400 to-blue-500",
      bgColor: "bg-green-50"
    },
    {
      title: "Frontend", 
      skills: [
        { name: "React.js", level: 95 },
        { name: "Redux", level: 85 },
        { name: "Next.js", level: 80 },
        { name: "TypeScript", level: 90 }
      ],
      color: "from-blue-400 to-purple-500",
      bgColor: "bg-blue-50"
    },
    {
      title: "Languages",
      skills: [
        { name: "JavaScript (ES6+)", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "PHP", level: 75 }
      ],
      color: "from-purple-400 to-pink-500",
      bgColor: "bg-purple-50"
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "MongoDB", level: 80 }
      ],
      color: "from-orange-400 to-red-500",
      bgColor: "bg-orange-50"
    },
    {
      title: "API & Protocols",
      skills: [
        { name: "REST APIs", level: 95 },
        { name: "gRPC", level: 80 },
        { name: "WebSocket", level: 85 }
      ],
      color: "from-teal-400 to-green-500",
      bgColor: "bg-teal-50"
    },
    {
      title: "DevOps/Tools",
      skills: [
        { name: "PM2", level: 85 },
        { name: "Redis", level: 80 },
        { name: "Git", level: 90 },
        { name: "CI/CD", level: 75 }
      ],
      color: "from-indigo-400 to-blue-500",
      bgColor: "bg-indigo-50"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit for building scalable, modern web applications
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 bg-white group overflow-hidden"
              style={{ 
                animationDelay: `${index * 150}ms`,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                opacity: isVisible ? 1 : 0,
                transition: `all 0.6s ease-out ${index * 150}ms`
              }}
            >
              <CardContent className="p-6 relative">
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${category.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-white font-bold text-xl">{category.title.charAt(0)}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">{category.title}</h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                        <span className="text-xs text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{ 
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${(index * 150) + (skillIndex * 100)}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
