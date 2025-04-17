"use client";

import { Star, Quote } from "lucide-react";
import Image from "next/image";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Since implementing WildfireGuardian across our national forests, we've seen a dramatic 78% reduction in catastrophic wildfire events. The early detection has been a game-changer for our response teams.",
      name: "Robert Chambers",
      title: "Director of Forest Management, Western Region",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      stars: 5
    },
    {
      quote: "The prediction capabilities allowed us to evacuate three communities safely before a rapidly spreading fire would have trapped residents. This system has literally saved lives in our county.",
      name: "Maria Sanchez",
      title: "Emergency Response Coordinator",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      stars: 5
    },
    {
      quote: "As a fire chief with 30 years of experience, I've never seen technology this accurate at predicting fire behavior. It's transformed how we allocate resources during fire season.",
      name: "Chief James Wilson",
      title: "County Fire Department",
      avatar: "https://randomuser.me/api/portraits/men/52.jpg",
      stars: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-wildfire-yellow/20 text-wildfire-orange font-medium text-sm mb-4">
            SUCCESS STORIES
          </div>
          <h2 className="text-4xl font-bold mb-6">Trusted by Forest Management Professionals</h2>
          <p className="text-lg text-gray-600">
            Hear from the experts who rely on our technology to protect their forests and communities
            from devastating wildfires.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-lg relative hover-lift"
            >
              <div className="absolute -top-4 -right-4 bg-wildfire-red text-white p-3 rounded-full shadow-lg">
                <Quote className="h-6 w-6" />
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-wildfire-yellow fill-wildfire-yellow" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 italic">&ldquo;{testimonial.quote}&rdquo;</p>
              
              <div className="flex items-center">
                <Image 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold mb-8">Trusted by Organizations Worldwide</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            {/* Placeholder for logos - would be replaced with actual partner logos */}
            {['USFS', 'CAL FIRE', 'Australian Fire Service', 'EU Forest Management', 'Canadian Wildfire Prevention'].map((org, i) => (
              <div key={i} className="px-6 py-3 bg-gray-200 rounded-lg font-bold text-gray-600">
                {org}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
