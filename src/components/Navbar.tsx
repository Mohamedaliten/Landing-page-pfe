
import { useState, useEffect } from 'react';
import { Menu, X, AlertTriangle } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <AlertTriangle className="h-8 w-8 mr-2 text-wildfire-red" />
          <span className="text-2xl font-bold text-gradient-fire">FireMesh</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-red-500 hover:text-primary font-medium transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-white hover:text-primary font-medium transition-colors">
            How It Works
          </a>
          <a href="#benefits" className="text-white hover:text-primary font-medium transition-colors">
            Benefits
          </a>
          <a href="#testimonials" className="text-white hover:text-primary font-medium transition-colors">
            Success Stories
          </a>
          <Button variant="default" className="bg-primary text-white hover:bg-wildfire-red hover-lift">
            Get Started
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-6 transition-transform transform origin-top">
          <nav className="flex flex-col space-y-4">
            <a href="#features" className="text-foreground hover:text-primary font-medium py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Features
            </a>
            <a href="#how-it-works" className="text-foreground hover:text-primary font-medium py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>
              How It Works
            </a>
            <a href="#benefits" className="text-foreground hover:text-primary font-medium py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Benefits
            </a>
            <a href="#testimonials" className="text-foreground hover:text-primary font-medium py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Success Stories
            </a>
            <Button variant="default" className="bg-primary text-white hover:bg-wildfire-red w-full" onClick={() => setIsMenuOpen(false)}>
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
