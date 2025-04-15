"use client";

import { 
  AlarmSmoke, 
  MapPin, 
  CloudSun, 
  Smartphone, 
  Wifi, 
  Battery, 
  AlertTriangle, 
  Map,
  Mountain,
  Wind,
  Thermometer,
  Search
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <AlarmSmoke className="h-10 w-10 text-wildfire-red" />,
      title: "Early Smoke Detection",
      description: "Advanced sensors detect smoke particles up to 24 hours before visual confirmation."
    },
    {
      icon: <Thermometer className="h-10 w-10 text-wildfire-red" />,
      title: "Thermal Anomaly Detection",
      description: "Identify unusual heat patterns in forest environments before fire breaks out."
    },
    {
      icon: <Wind className="h-10 w-10 text-wildfire-orange" />,
      title: "Weather Integration",
      description: "Real-time weather data integration for accurate fire risk assessment and spread prediction."
    },
    {
      icon: <MapPin className="h-10 w-10 text-wildfire-orange" />,
      title: "Precise Geo-Mapping",
      description: "Pinpoint exact fire locations with GPS coordinates for rapid response deployment."
    },
    {
      icon: <Mountain className="h-10 w-10 text-wildfire-forest" />,
      title: "Terrain Analysis",
      description: "Topographical data integration to predict fire spread paths across different landscapes."
    },
    {
      icon: <Search className="h-10 w-10 text-wildfire-forest" />,
      title: "AI Prediction Models",
      description: "Machine learning algorithms that continuously improve fire prediction accuracy."
    },
    {
      icon: <Smartphone className="h-10 w-10 text-wildfire-yellow" />,
      title: "Mobile Alerts",
      description: "Instant notifications to authorized personnel and nearby communities."
    },
    {
      icon: <Battery className="h-10 w-10 text-wildfire-yellow" />,
      title: "Long-lasting Power",
      description: "Solar-powered sensors with battery backup for up to 5 years of continuous operation."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-wildfire-red/10 text-wildfire-red font-medium text-sm mb-4">
            ADVANCED CAPABILITIES
          </div>
          <h2 className="text-4xl font-bold mb-6">Industry-Leading Fire Detection Technology</h2>
          <p className="text-lg text-gray-600">
            Our comprehensive wildfire monitoring system combines multiple detection methods with 
            predictive AI to provide the most advanced early warning solution available.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="relative bg-white rounded-xl p-6 shadow-md border border-gray-100 hover-lift"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
              <div className="absolute top-0 right-0 w-24 h-24 bg-gray-50 rounded-bl-full -z-10 opacity-50"></div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-wildfire-forest-dark to-wildfire-forest rounded-2xl overflow-hidden shadow-xl">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-8 lg:p-12">
              <div className="inline-block px-3 py-1 rounded-full bg-white/20 text-white font-medium text-sm mb-4">
                COMPLETE SOLUTION
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">Comprehensive Wildfire Protection System</h3>
              <p className="text-white/90 mb-8">
                Our integrated solution provides end-to-end wildfire management, from early detection 
                to evacuation planning and post-fire recovery monitoring.
              </p>
              
              <div className="space-y-4">
                {[
                  {icon: <AlertTriangle className="h-5 w-5" />, text: "24/7 Continuous Monitoring"},
                  {icon: <Map className="h-5 w-5" />, text: "Real-time Fire Spread Prediction"},
                  {icon: <CloudSun className="h-5 w-5" />, text: "Weather-Aware Risk Assessment"},
                  {icon: <Wifi className="h-5 w-5" />, text: "Remote Deployment in Off-Grid Areas"}
                ].map((item, i) => (
                  <div key={i} className="flex items-center">
                    <div className="bg-white/20 rounded-full p-2 mr-4">
                      {item.icon}
                    </div>
                    <span className="text-white font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 bg-[url('https://images.unsplash.com/photo-1513836279014-a89f7a76ae86')] bg-cover bg-center min-h-[300px] lg:min-h-full">
              <div className="w-full h-full bg-wildfire-forest-dark/30 backdrop-blur-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
