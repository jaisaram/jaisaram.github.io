
const Summary = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Professional Summary</h2>
          
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 shadow-lg">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              Over <span className="font-bold text-blue-600">5 years of experience</span> in software development, 
              working with modern JavaScript technologies including React.js, Next.js, Node.js, NestJS, PHP, 
              and gRPC-based microservices.
            </p>
            
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              Skilled in <span className="font-semibold">REST and gRPC API development</span>, microfrontend architecture, 
              third-party integrations (Salesforce, Facebook, Zendesk), and real-time applications using Socket.io.
            </p>
            
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              Proven expertise in <span className="font-semibold">end-to-end product development</span>: 
              from design, implementation, testing to deployment.
            </p>
            
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Adept at working in <span className="font-semibold">agile, product-based environments</span> and 
              collaborating in cross-functional teams with strong problem-solving ability, attention to detail, 
              and a team-first mindset.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Summary;
