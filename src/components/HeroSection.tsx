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
        {/* Using predefined values instead of Math.random() to avoid hydration errors */}
        {[
          {left: 52.11, top: 79.05, delay: 1.39, duration: 7.89},
          {left: 47.40, top: 7.07, delay: 2.86, duration: 7.93},
          {left: 60.73, top: 30.16, delay: 4.04, duration: 10.48},
          {left: 10.75, top: 75.37, delay: 4.60, duration: 7.09},
          {left: 88.66, top: 61.40, delay: 4.85, duration: 11.67},
          {left: 89.10, top: 93.92, delay: 0.14, duration: 7.07},
          {left: 21.98, top: 5.52, delay: 4.25, duration: 9.27},
          {left: 99.20, top: 90.03, delay: 2.28, duration: 11.22},
          {left: 89.16, top: 85.93, delay: 2.30, duration: 7.87},
          {left: 81.62, top: 24.27, delay: 2.40, duration: 8.15},
          {left: 77.14, top: 69.80, delay: 0.74, duration: 7.20},
          {left: 81.79, top: 77.92, delay: 1.30, duration: 11.34},
          {left: 88.55, top: 50.34, delay: 4.57, duration: 7.27},
          {left: 68.69, top: 75.22, delay: 3.59, duration: 8.52},
          {left: 15.71, top: 22.08, delay: 3.92, duration: 10.84},
          {left: 70.49, top: 99.81, delay: 3.44, duration: 10.92},
          {left: 83.05, top: 50.42, delay: 1.27, duration: 11.91},
          {left: 25.86, top: 36.54, delay: 4.53, duration: 11.32},
          {left: 72.18, top: 76.47, delay: 2.78, duration: 11.94},
          {left: 93.45, top: 60.38, delay: 3.68, duration: 6.42}
        ].map((particle, i) => (
          <div 
            key={i}
            className="absolute animate-float opacity-80"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`
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
              className="bg-wildfire-red hover:bg-wildfire-orange text-white px-8 py-6 text-lg rounded-full hover-lift"
              onClick={handleGetStarted}
            >
              Get Started
            </Button>
            <Button variant="ghost" className="bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20 px-8 py-6 text-lg rounded-full">
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