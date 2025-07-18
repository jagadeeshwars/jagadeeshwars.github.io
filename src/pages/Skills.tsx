import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Database, 
  Cloud, 
  Palette, 
  Smartphone, 
  Globe,
  Server,
  Monitor,
  Zap,
  Shield
} from "lucide-react";

export const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
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

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Monitor,
      color: "primary",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Framer Motion", level: 80 },
      ]
    },
    {
      title: "Backend Development",
      icon: Server,
      color: "secondary",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Python", level: 82 },
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 78 },
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "accent",
      skills: [
        { name: "AWS", level: 75 },
        { name: "Docker", level: 70 },
        { name: "CI/CD", level: 72 },
        { name: "Vercel", level: 90 },
      ]
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      color: "primary",
      skills: [
        { name: "React Native", level: 80 },
        { name: "Flutter", level: 65 },
        { name: "iOS/Android", level: 70 },
        { name: "Progressive Web Apps", level: 85 },
      ]
    }
  ];

  const technologies = [
    { name: "React", icon: Code, category: "Frontend" },
    { name: "Node.js", icon: Server, category: "Backend" },
    { name: "PostgreSQL", icon: Database, category: "Database" },
    { name: "AWS", icon: Cloud, category: "Cloud" },
    { name: "TypeScript", icon: Code, category: "Language" },
    { name: "Python", icon: Code, category: "Language" },
    { name: "Docker", icon: Shield, category: "DevOps" },
    { name: "GraphQL", icon: Zap, category: "API" },
    { name: "MongoDB", icon: Database, category: "Database" },
    { name: "Next.js", icon: Globe, category: "Framework" },
    { name: "Tailwind", icon: Palette, category: "Styling" },
    { name: "Framer Motion", icon: Zap, category: "Animation" },
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="group"
            >
              <Card className="glass p-8 hover-lift group-hover:glow-primary">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-lg bg-${category.color}/20`}>
                    <category.icon className={`h-8 w-8 text-${category.color}`} />
                  </div>
                  <h3 className={`text-2xl font-semibold text-glow-${category.color}`}>
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (index * 0.2) + (skillIndex * 0.1) }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ delay: (index * 0.2) + (skillIndex * 0.1) + 0.5, duration: 1 }}
                      >
                        <Progress 
                          value={skill.level} 
                          className="h-2 glass"
                        />
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Technology Stack */}
        <motion.div variants={itemVariants}>
          <Card className="glass p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center text-glow-accent">
              Technology Stack
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="group"
                >
                  <div className="flex flex-col items-center p-4 rounded-lg glass hover:glow-secondary transition-all duration-300">
                    <tech.icon className="h-8 w-8 text-primary group-hover:text-primary-glow transition-colors mb-3" />
                    <span className="text-sm font-medium text-center">{tech.name}</span>
                    <Badge 
                      variant="secondary" 
                      className="mt-2 text-xs glass"
                    >
                      {tech.category}
                    </Badge>
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Experience Summary */}
        <motion.div variants={itemVariants} className="mt-16">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { number: "3+", label: "Years Experience", color: "primary" },
              { number: "50+", label: "Projects Completed", color: "secondary" },
              { number: "20+", label: "Technologies Mastered", color: "accent" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="text-center group"
              >
                <Card className="glass p-8 hover-lift group-hover:glow-primary">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.2, type: "spring", stiffness: 200 }}
                    className={`text-4xl font-bold text-glow-${stat.color} mb-2`}
                  >
                    {stat.number}
                  </motion.div>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};