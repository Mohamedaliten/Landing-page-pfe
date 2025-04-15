"use client";

import { AlertTriangle, TreePine, Map, Zap } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const router = useRouter();
  
  const handleGetStarted = () => {
    router.push('/sign-in');
  };
  
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
      {/* Background gradient and overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523712999610-f77fbcfc3843')] bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-transparent"></div>
      
      {/* Animated fire particles (decorative) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute animate-float opacity-80"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${6 + Math.random() * 6}s`
            }}
          >
            <div 
              className="w-2 h-2 bg-wildfire-orange rounded-full"
              style={{
                boxShadow: '0 0 10px 2px rgba(246, 146, 30, 0.5)'
              }}
            ></div>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12 pt-12">
          <div className="inline-flex items-center justify-center p-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 animate-pulse-slow">
            <AlertTriangle className="h-6 w-6 text-wildfire-yellow mr-2" />
            <span className="text-white font-medium">Advanced Wildfire Detection</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
            Predict and Detect <span className="text-gradient-fire">Forest Fires</span> Before They Spread
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Our AI-powered early warning system detects wildfires up to 24 hours before conventional methods, helping save forests, wildlife, and communities.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-wildfire-red hover:bg-wildfire-orange text-white px-8 py-6 text-lg rounded-full hover-lift"
              onClick={handleGetStarted}
            >
              Get Started
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20 px-8 py-6 text-lg rounded-full">
              See How It Works
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center hover-scale">
            <div className="w-12 h-12 bg-wildfire-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="h-6 w-6 text-wildfire-red" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-1">95%</h3>
            <p className="text-white/80">Early Detection Rate</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center hover-scale">
            <div className="w-12 h-12 bg-wildfire-forest/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <TreePine className="h-6 w-6 text-wildfire-forest-light" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-1">1.5M+</h3>
            <p className="text-white/80">Acres Protected</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center hover-scale">
            <div className="w-12 h-12 bg-wildfire-yellow/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="h-6 w-6 text-wildfire-yellow" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-1">24h</h3>
            <p className="text-white/80">Earlier Warnings</p>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,96C960,107,1056,117,1152,117.3C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;