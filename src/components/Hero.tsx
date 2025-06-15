
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/30 via-slate-900/50 to-slate-900"></div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 pt-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8 animate-fade-in">
            <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 p-1">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                <img 
                  src="/profile-jaisa.jpg" 
                  alt="Profile" 
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent animate-fade-in">
              Jaisa Ram Jangid
            </h1>
            <div className="relative mb-4">
              <p className="text-xl md:text-2xl text-gray-300 mb-2 animate-fade-in delay-200">
                Backend / Full Stack Developer
              </p>
              <div className="flex justify-center items-center space-x-2 text-lg text-blue-400 animate-fade-in delay-300">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span>Available for opportunities</span>
              </div>
            </div>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-400">
              Over 5 years of experience crafting scalable web applications with modern JavaScript technologies, 
              microservices architecture, and end-to-end product development.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in delay-500">
            <Button 
              onClick={() => scrollToSection('projects')}
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              View My Work
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline" 
              size="lg"
              className="border-gray-400 bg-white/10 text-gray-300 hover:bg-white/10 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Get In Touch
            </Button>
            <Button 
              asChild
              variant="outline" 
              size="lg"
              className="border-blue-400 text-blue-400 hover:bg-green-500/10 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
            >
              <a href="/public/resume _jaisaram_jangid.pdf" download>
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </a>
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6 mb-12 animate-fade-in delay-600">
            <a 
              href="https://github.com/jaisaram" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-4 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:shadow-xl"
            >
              <Github className="w-6 h-6 group-hover:text-blue-400 transition-colors" />
            </a>
            <a 
              href="https://www.linkedin.com/in/jaisaramjangid/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-4 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:shadow-xl"
            >
              <Linkedin className="w-6 h-6 group-hover:text-blue-400 transition-colors" />
            </a>
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=dev.jaisaram@gmail.com&su=Hello%20Jaisa%20Ram%20Jangid&body=Hi%20Jaisa%2C%0A%0AI%20hope%20you%20are%20doing%20well."
              target="_blank"
              className="group p-4 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:shadow-xl"
            >
              <Mail className="w-6 h-6 group-hover:text-blue-400 transition-colors" />
            </a>
          </div>
          
          <div 
            onClick={() => scrollToSection('skills')}
            className="cursor-pointer animate-bounce hover:animate-none transition-all duration-300 group"
          >
            <div className="inline-block p-2 rounded-full group-hover:bg-white/10 transition-all duration-300">
              <ArrowDown className="w-8 h-8 mx-auto text-gray-400 group-hover:text-white transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
