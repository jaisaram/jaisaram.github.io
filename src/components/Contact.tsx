import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to bring your next project to life? I'm available for freelance opportunities and full-time positions.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15 transition-all duration-300">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto">
                    <Mail className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold">Email</h3>
                  <p className="text-gray-300">Let's discuss your project</p>
                  <Button 
                    asChild
                    className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <a target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&to=dev.jaisaram@gmail.com&su=Hello%20Jaisa%20Ram%20Jangid&body=Hi%20Jaisa%2C%0A%0AI%20hope%20you%20are%20doing%20well.">Send Email</a>
                  </Button>
                </div>
                
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto">
                    <Linkedin className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold">LinkedIn</h3>
                  <p className="text-gray-300">Connect professionally</p>
                  <Button 
                    asChild
                    className="bg-white/10 hover:bg-white/20 text-white border border-white/30 hover:border-white/50 backdrop-blur-sm transition-all duration-300"
                  >
                    <a href="https://www.linkedin.com/in/jaisaramjangid/" target="_blank" rel="noopener noreferrer">
                      View Profile
                    </a>
                  </Button>
                </div>
                
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto">
                    <Github className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold">GitHub</h3>
                  <p className="text-gray-300">Explore my code</p>
                  <Button 
                    asChild
                    className="bg-white/10 hover:bg-white/20 text-white border border-white/30 hover:border-white/50 backdrop-blur-sm transition-all duration-300"
                  >
                    <a href="https://github.com/jaisaram" target="_blank" rel="noopener noreferrer">
                      View Repositories
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="text-center mt-12">
            <p className="text-gray-400">
              Based in Ahmedabad • Available for remote opportunities worldwide
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
