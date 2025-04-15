"use client";

import { ArrowRight, TreePine } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { useRouter } from "next/navigation";

const CTASection = () => {
  const router = useRouter();
  
  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/sign-in');
  };
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-wildfire-red to-wildfire-orange rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 lg:p-16">
              <div className="flex items-center mb-6">
                <TreePine className="h-10 w-10 text-white mr-3" />
                <h3 className="text-3xl md:text-4xl font-bold text-white">Ready to protect your forests?</h3>
              </div>
              
              <p className="text-white/90 text-lg mb-8">
                Join the growing network of forest management professionals using advanced 
                technology to predict, detect, and prevent devastating wildfires.
              </p>
              
              <form className="space-y-4 mb-8" onSubmit={handleSignIn}>
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full p-4 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full p-4 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <div>
                  <select className="w-full p-4 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white/50">
                    <option value="" className="text-gray-800">Type of Organization</option>
                    <option value="government" className="text-gray-800">Government</option>
                    <option value="forestry" className="text-gray-800">Forestry Department</option>
                    <option value="fire" className="text-gray-800">Fire Department</option>
                    <option value="private" className="text-gray-800">Private Land Management</option>
                    <option value="other" className="text-gray-800">Other</option>
                  </select>
                </div>
                <Button type="submit" className="w-full bg-white text-wildfire-red hover:bg-white/90 p-6 text-lg font-semibold rounded-xl flex items-center justify-center">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
              
              <p className="text-white/70 text-sm text-center">
                By submitting, you agree to our Privacy Policy and Terms of Service.
              </p>
            </div>
            
            <div className="hidden md:block bg-[url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05')] bg-cover bg-center">
              <div className="w-full h-full bg-wildfire-red/20 backdrop-blur-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;