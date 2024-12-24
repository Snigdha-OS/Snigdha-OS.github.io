import { Shield, Terminal, Cpu } from 'lucide-react';
import { HeroSection } from '../components/home/HeroSection';
import { FeatureCard } from '../components/home/FeatureCard';
import { StatsSection } from '../components/home/StatsSection';
import { ToolsShowcase } from '../components/home/ToolsShowcase';
import { TestimonialCard } from '../components/home/TestimonialCard';
// import { ComparisonSection } from '../components/home/ComparisonSection';
import { testimonials } from '../data/testimonials';

const features = [
  {
    title: 'Advanced Security Tools',
    description: 'Access over 600 pre-installed security and penetration testing tools, ready to use out of the box.',
    icon: Shield,
  },
  {
    title: 'Powerful Terminal',
    description: 'Enhanced command-line interface with custom tools and utilities for efficient security testing.',
    icon: Terminal,
  },
  {
    title: 'Hardware Compatibility',
    description: 'Optimized for various hardware configurations with excellent driver support.',
    icon: Cpu,
  },
];

export default function Home() {
  return (
    <div className="bg-gray-50">
      <HeroSection />
      
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Powerful Features
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Everything you need for professional security testing
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                {...feature}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>
      </section>

      <ToolsShowcase />

      {/* <ComparisonSection /> */}

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">What Users Say</h2>
            <p className="mt-4 text-lg text-gray-600">
              Trusted by security professionals worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.author}
                {...testimonial}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>
      </section>

      <StatsSection />
    </div>
  );
}