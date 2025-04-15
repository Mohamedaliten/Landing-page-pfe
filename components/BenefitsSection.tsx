"use client";

import { CheckCircle2, ShieldCheck, Clock, DollarSign, Heart, Building, PieChart } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Clock className="h-10 w-10 text-wildfire-orange" />,
      title: "Early Detection",
      description: "Identify wildfire threats up to 24 hours before conventional detection methods."
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-wildfire-forest" />,
      title: "Prevent Catastrophes",
      description: "Stop fires before they become uncontrollable disasters that devastate ecosystems."
    },
    {
      icon: <Heart className="h-10 w-10 text-wildfire-red" />,
      title: "Save Lives",
      description: "Early warnings give communities crucial time to evacuate safely and reduce casualties."
    },
    {
      icon: <Building className="h-10 w-10 text-wildfire-gray" />,
      title: "Protect Infrastructure",
      description: "Safeguard critical infrastructure, homes, and businesses from fire damage."
    },
    {
      icon: <PieChart className="h-10 w-10 text-wildfire-yellow" />,
      title: "Data Insights",
      description: "Gain valuable environmental data for long-term forest management planning."
    },
    {
      icon: <DollarSign className="h-10 w-10 text-wildfire-forest-light" />,
      title: "Cost-Effective",
      description: "Significantly reduce the enormous costs associated with large-scale wildfire fighting."
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-wildfire-forest/10 text-wildfire-forest font-medium text-sm mb-4">
            KEY ADVANTAGES
          </div>
          <h2 className="text-4xl font-bold mb-6">Why Choose WildfireGuardian?</h2>
          <p className="text-lg text-gray-600">
            Our solution offers unparalleled benefits for forest management agencies, local governments,
            and communities in wildfire-prone regions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 border border-gray-100 hover-lift">
              <div className="mb-5">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <div className="bg-wildfire-forest rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-10 lg:p-16">
                <h3 className="text-3xl font-bold text-white mb-6">The Environmental Impact</h3>
                <p className="text-white/90 mb-8">
                  Wildfires release massive amounts of carbon dioxide and other pollutants into the atmosphere, 
                  contributing to climate change and degrading air quality. Our early detection system helps
                  prevent these environmental catastrophes.
                </p>
                
                <div className="space-y-6">
                  {[
                    {
                      stat: "85%",
                      text: "Reduction in acres burned when fires are detected early"
                    },
                    {
                      stat: "63%",
                      text: "Less carbon emissions from controlled vs. uncontrolled fires"
                    },
                    {
                      stat: "90%",
                      text: "Wildlife preservation in protected areas"
                    }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start">
                      <div className="bg-white/20 rounded-full p-2 mr-4">
                        <CheckCircle2 className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <span className="block text-2xl font-bold text-white">{item.stat}</span>
                        <span className="text-white/80">{item.text}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-[url('https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9')] bg-cover bg-center">
                <div className="w-full h-full bg-wildfire-forest-dark/20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
