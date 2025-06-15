
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Education (B.Ed)",
      institution: "JNVU Jodhpur",
      year: "2015"
    },
    {
      degree: "Bachelor of Arts (B.A.)",
      institution: "JNVU Jodhpur", 
      year: "2014"
    }
  ];

  const certifications = [
    {
      title: "The Complete Node.js Developer Course (3rd Edition)",
      platform: "Udemy",
      link: "Certificate Link"
    },
    {
      title: "React Fullstack with node/express, PostgreSQL and AWS",
      platform: "Udemy",
      link: "Link"
    },
    {
      title: "JavaScript Fundamentals",
      platform: "Udemy",
      link: "Link"
    },
    {
      title: "Getting Started with TypeScript // A Javascript Compiler",
      platform: "Udemy",
      link: "Certificate Link"
    }
  ];

  const awards = [
    "🏆 Employee of the Month",
    "🌟 Rising Star Award"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education & Recognition</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Continuous learning and professional development journey
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Education */}
          <Card className="hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Education</h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-4 border-blue-200 pl-4">
                    <h4 className="font-semibold text-gray-900">{edu.degree}</h4>
                    <p className="text-blue-600">{edu.institution}</p>
                    <Badge variant="outline" className="mt-1">{edu.year}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card className="hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Certifications</h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="p-3 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-1">{cert.title}</h4>
                    <p className="text-blue-600 text-sm">{cert.platform}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Awards & Languages */}
          <div className="space-y-8">
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Awards & Recognition</h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {awards.map((award, index) => (
                    <div key={index} className="flex items-center p-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg">
                      <span className="text-lg">{award}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Languages</h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Hindi</span>
                    <Badge>Native</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">English</span>
                    <Badge variant="outline">Basic</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
