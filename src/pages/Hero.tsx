import { motion } from "framer-motion";
import { ParticlesBackground } from "@/components/ui/ParticlesBackground";
import { Scene3D } from "@/components/ui/Scene3D";
import { Button } from "@/components/ui/button";
import { ChevronDown, Download, Mail } from "lucide-react";

export const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <ParticlesBackground id="hero-particles" />
      
      {/* 3D Scene Background */}
      <div className="absolute inset-0 opacity-30">
        <Scene3D />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/50 to-background/90" />
      
      {/* Main Content */}
      <motion.div
        className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <motion.div variants={itemVariants} className="mb-8">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold font-inter">
              <span className="text-glow-primary">Creative</span>
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Developer
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div variants={itemVariants} className="mb-8">
            <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-light">
              Crafting digital experiences with
              <span className="text-accent text-glow-accent mx-2">passion</span>
              and
              <span className="text-secondary text-glow-secondary mx-2">precision</span>
            </p>
          </motion.div>

          {/* Description */}
          <motion.div variants={itemVariants} className="mb-12">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Full-stack developer specializing in React, Node.js, and modern web technologies.
              Transforming ideas into beautiful, functional digital solutions.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="group relative overflow-hidden bg-primary hover:bg-primary-glow glow-primary transition-all duration-500 transform hover:scale-105"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="group glass hover:glow-secondary transition-all duration-500 transform hover:scale-105"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-muted-foreground cursor-pointer hover:text-primary transition-colors"
          >
            <ChevronDown className="h-8 w-8" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};