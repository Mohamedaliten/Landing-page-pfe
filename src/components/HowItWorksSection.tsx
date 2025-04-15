
import { TreePine, AlertTriangle, CloudSun, Map, Bell, Smartphone } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: <TreePine className="h-8 w-8 text-wildfire-forest" />,
      title: "Sensor Deployment",
      description: "Our sensors are strategically placed throughout forests and high-risk areas to maximize coverage with minimal environmental impact.",
      color: "bg-wildfire-forest text-white"
    },
    {
      icon: <AlertTriangle className="h-8 w-8 text-wildfire-yellow" />,
      title: "24/7 Monitoring",
      description: "Continuous monitoring of temperature, smoke particles, humidity, and atmospheric changes to detect early signs of fire.",
      color: "bg-wildfire-yellow text-black"
    },
    {
      icon: <CloudSun className="h-8 w-8 text-wildfire-orange" />,
      title: "AI Analysis",
      description: "Our proprietary algorithms analyze sensor data alongside weather forecasts, historical patterns, and terrain information.",
      color: "bg-wildfire-orange text-white"
    },
    {
      icon: <Map className="h-8 w-8 text-wildfire-red" />,
      title: "Spread Prediction",
      description: "When a fire risk is detected, the system predicts potential spread patterns and severity based on real-time conditions.",
      color: "bg-wildfire-red text-white"
    },
    {
      icon: <Bell className="h-8 w-8 text-primary" />,
      title: "Alert Distribution",
      description: "Automated alerts are sent to fire departments, forest services, and emergency management authorities with precise location data.",
      color: "bg-primary text-white"
    },
    {
      icon: <Smartphone className="h-8 w-8 text-wildfire-gray" />,
      title: "Mobile Response",
      description: "Response teams receive detailed fire information via mobile app, including recommended access routes and resources needed.",
      color: "bg-wildfire-gray text-white"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-wildfire-orange/10 text-wildfire-orange font-medium text-sm mb-4">
            THE PROCESS
          </div>
          <h2 className="text-4xl font-bold mb-6">How Our Technology Works</h2>
          <p className="text-lg text-gray-600">
            From detection to action, our system provides a comprehensive solution for wildfire management
            with unmatched speed and accuracy.
          </p>
        </div>

        <div className="relative">
          {/* Timeline connector */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-wildfire-forest via-wildfire-orange to-wildfire-red hidden lg:block transform -translate-x-1/2"></div>
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col lg:flex-row items-center">
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:order-2 lg:pl-16 lg:text-left'}`}>
                  <div className={`p-6 rounded-xl shadow-lg inline-block max-w-lg ${index % 2 === 0 ? 'lg:ml-auto' : 'lg:mr-auto'}`}>
                    <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
                
                <div className={`lg:w-24 py-4 relative z-10 flex items-center justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center shadow-lg`}>
                    {step.icon}
                  </div>
                </div>
                
                <div className={`lg:w-1/2 ${index % 2 === 1 ? 'lg:order-3' : ''} hidden lg:block`}></div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-20 text-center">
          <div className="inline-block p-4 rounded-2xl bg-gradient-to-r from-wildfire-red to-wildfire-orange text-white max-w-3xl">
            <h3 className="text-2xl font-bold mb-2">Ready to protect your forests and communities?</h3>
            <p className="mb-4">Our team can help you design a custom deployment plan for your specific needs.</p>
            <button className="bg-white text-wildfire-red px-6 py-3 rounded-full font-medium hover:bg-gray-100 hover-lift">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
