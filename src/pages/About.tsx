import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Rocket, Users } from "lucide-react";

export const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15,
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

  const achievements = [
    { icon: Code, label: "50+ Projects", description: "Delivered across industries" },
    { icon: Users, label: "20+ Clients", description: "Satisfied worldwide" },
    { icon: Rocket, label: "3+ Years", description: "Professional experience" },
    { icon: Palette, label: "100%", description: "Passion driven" },
  ];

  const skills = [
    "React.js", "TypeScript", "Node.js", "Next.js", "Python", "AWS",
    "PostgreSQL", "MongoDB", "Docker", "GraphQL", "Tailwind CSS", "Framer Motion"
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate developer with a love for creating exceptional digital experiences
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Personal Info */}
          <motion.div variants={itemVariants}>
            <Card className="glass p-8 hover-lift">
              <h3 className="text-2xl font-semibold mb-6 text-glow-primary">
                My Story
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a passionate full-stack developer with over 3 years of experience 
                  building web applications that make a difference. My journey started 
                  with curiosity about how things work on the web, and it evolved into 
                  a love for creating beautiful, functional digital experiences.
                </p>
                <p>
                  I specialize in modern web technologies like React, TypeScript, and 
                  Node.js, but I'm always eager to learn new tools and frameworks that 
                  can help me build better solutions.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, 
                  contributing to open source projects, or sharing knowledge with the 
                  developer community.
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Right Column - Achievements */}
          <motion.div variants={itemVariants}>
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="group"
                >
                  <Card className="glass p-6 text-center hover-lift group-hover:glow-primary">
                    <achievement.icon className="h-12 w-12 mx-auto mb-4 text-primary group-hover:text-primary-glow transition-colors" />
                    <h4 className="text-xl font-semibold mb-2 text-glow-primary">
                      {achievement.label}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {achievement.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div variants={itemVariants}>
          <Card className="glass p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center text-glow-secondary">
              Technologies & Skills
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <Badge 
                    variant="secondary" 
                    className="px-4 py-2 text-sm font-medium glass hover:glow-accent transition-all duration-300"
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
};