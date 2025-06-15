
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Summary from "@/components/Summary";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import GithubAnalytics from "@/components/GitHubAnalytics";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Summary />
      <Skills />
      <Projects />
      <GithubAnalytics />
      <Experience />
      <Education />
      <Contact />
    </div>
  );
};

export default Index;
