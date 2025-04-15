
import { AlertTriangle, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-wildfire-forest-dark to-black text-white pt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <AlertTriangle className="h-6 w-6 mr-2 text-wildfire-red" />
              <span className="text-2xl font-bold text-gradient-fire">FireMesh</span>
            </div>
            <p className="text-gray-300 mb-6">
              Advanced wildfire detection and prediction technology to protect forests, 
              wildlife, and communities around the world.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "About Us", link: "#" },
                { name: "Features", link: "#features" },
                { name: "How It Works", link: "#how-it-works" },
                { name: "Benefits", link: "#benefits" },
                { name: "Testimonials", link: "#testimonials" },
                { name: "Contact", link: "#" }
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.link} 
                    className="text-gray-300 hover:text-white transition-colors flex items-center"
                  >
                    <span className="mr-2">›</span> {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-1 text-wildfire-red" />
                <span className="text-gray-300">
                  2118 Thornridge Cir. Syracuse, Connecticut 35624
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-wildfire-red" />
                <a href="tel:+15553124567" className="text-gray-300 hover:text-white transition-colors">
                  (555) 312-4567
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-wildfire-red" />
                <a href="mailto:info@wildfireguardian.com" className="text-gray-300 hover:text-white transition-colors">
                  info@wildfireguardian.com
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Stay Updated</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest updates on wildfire technology and prevention.
            </p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Your Email Address" 
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-wildfire-red"
              />
              <button 
                type="submit"
                className="w-full bg-wildfire-red hover:bg-wildfire-orange transition-colors text-white p-3 rounded-lg font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2026 FireMesh. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookies Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
