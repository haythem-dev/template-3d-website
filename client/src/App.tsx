import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Background3D from '@/components/Background3D';
import { CvForm } from "./components/CvForm"; //Import added here

gsap.registerPlugin(ScrollTrigger);

function App() {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero animations
    if (heroRef.current) {
      gsap.from(heroRef.current, {
        opacity: 0,
        y: 100,
        duration: 1,
        ease: "power4.out"
      });
    }

    // Services section animations
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top bottom",
          end: "top center",
          toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: index * 0.2
      });
    });

    // About section parallax
    if (aboutRef.current) {
      gsap.to(".parallax-bg", {
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        },
        y: -100,
        ease: "none"
      });
    }
  }, []);

  return (
    <div className="relative bg-black text-white min-h-screen">
      <Background3D />

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center">
        <div className="container mx-auto text-center z-10">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
            TEMPLATE
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Shaping the Future of Technology
          </p>
          <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-full text-lg">
            Get Started
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="relative py-20 bg-gray-900/80">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {title: "Cloud Solutions", desc: "Enterprise-grade cloud infrastructure"},
              {title: "AI Development", desc: "Cutting-edge artificial intelligence"},
              {title: "Cybersecurity", desc: "Advanced security protocols"}
            ].map((service, i) => (
              <Card key={i} className="service-card bg-gray-800/90 p-6 rounded-lg transform hover:scale-105 transition-transform">
                <h3 className="text-xl font-bold mb-4 text-cyan-500">{service.title}</h3>
                <p className="text-gray-400">{service.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="relative py-20">
        <div className="parallax-bg container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">About Us</h2>
          <p className="text-xl text-gray-300 max-w-2xl">
            TEMPLATE is at the forefront of technological innovation, delivering 
            cutting-edge solutions that transform businesses for the digital age.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-20 bg-gray-900/80">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Contact Us</h2>
          <CvForm /> {/* CvForm component added here */}
          <form className="max-w-lg mx-auto">
            <div className="mb-6">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 bg-gray-800/90 rounded-lg border border-gray-700 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
              />
            </div>
            <div className="mb-6">
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full p-3 bg-gray-800/90 rounded-lg border border-gray-700 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
              ></textarea>
            </div>
            <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-lg">
              Send Message
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 bg-black border-t border-gray-800">
        <div className="container mx-auto px-4 text-center text-gray-500">
          <p>&copy; 2024 TEMPLATE. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;