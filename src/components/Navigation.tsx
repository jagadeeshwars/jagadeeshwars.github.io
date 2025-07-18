import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export const Navigation = ({ currentPage, onPageChange }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent cursor-pointer"
              onClick={() => onPageChange("hero")}
              whileHover={{ scale: 1.05 }}
            >
              Portfolio
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => onPageChange(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    currentPage === item.id 
                      ? "text-primary text-glow-primary" 
                      : "text-muted-foreground"
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {item.label}
                </motion.button>
              ))}
              <Button 
                size="sm" 
                className="glow-primary hover:scale-105 transition-transform"
                onClick={() => onPageChange("contact")}
              >
                Hire Me
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMenu}
                className="glass"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={{ 
          opacity: isOpen ? 1 : 0, 
          x: isOpen ? "0%" : "100%" 
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-16 right-0 bottom-0 w-80 glass backdrop-blur-xl border-l border-white/10 z-40 md:hidden"
      >
        <div className="flex flex-col p-6 space-y-6">
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => {
                onPageChange(item.id);
                setIsOpen(false);
              }}
              className={`text-left text-lg font-medium transition-colors hover:text-primary p-4 rounded-lg glass ${
                currentPage === item.id 
                  ? "text-primary text-glow-primary glow-primary" 
                  : "text-muted-foreground"
              }`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ 
                opacity: isOpen ? 1 : 0,
                x: isOpen ? 0 : 20
              }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ x: 10 }}
            >
              {item.label}
            </motion.button>
          ))}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ 
              opacity: isOpen ? 1 : 0,
              x: isOpen ? 0 : 20
            }}
            transition={{ delay: navItems.length * 0.1 }}
          >
            <Button 
              className="w-full glow-primary" 
              onClick={() => {
                onPageChange("contact");
                setIsOpen(false);
              }}
            >
              Hire Me
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};