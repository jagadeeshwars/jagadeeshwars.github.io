import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Hero } from "./Hero";
import { About } from "./About";
import { Projects } from "./Projects";
import { Skills } from "./Skills";
import { Contact } from "./Contact";
import { ParticlesBackground } from "@/components/ui/ParticlesBackground";

const Index = () => {
  const [currentPage, setCurrentPage] = useState("hero");

  const pageVariants = {
    initial: { opacity: 0, y: 50 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -50 }
  };

  const pageTransition = {
    duration: 0.8
  };

  const renderPage = () => {
    switch (currentPage) {
      case "hero":
        return <Hero />;
      case "about":
        return <About />;
      case "projects":
        return <Projects />;
      case "skills":
        return <Skills />;
      case "contact":
        return <Contact />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Global Particles Background */}
      <ParticlesBackground id="global-particles" />
      
      {/* Navigation */}
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      
      {/* Page Content with Transitions */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
          className="relative z-10"
        >
          {renderPage()}
        </motion.div>
      </AnimatePresence>
      
      {/* Gradient Overlays for Visual Appeal */}
      <div className="fixed top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse-glow" />
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -z-10 animate-pulse-glow" style={{ animationDelay: "2s" }} />
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-accent/10 rounded-full blur-3xl -z-10 animate-pulse-glow" style={{ animationDelay: "4s" }} />
    </div>
  );
};

export default Index;
