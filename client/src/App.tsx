import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card } from './components/ui/card';
import { Button } from './components/ui/button';

function App() {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    // Hero animations
    gsap.from(heroRef.current, {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "power4.out"
    });

    // Services section animations
    gsap.from(".service-card", {
      scrollTrigger: {
        trigger: servicesRef.current,
        start: "top center",
        toggleActions: "play none none reverse"
      },
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 0.8
    });

    // About section parallax
    gsap.to(".parallax-bg", {
      scrollTrigger: {
        trigger: aboutRef.current,
        scrub: true
      },
      y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
      ease: "none"
    });
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="h-screen flex items-center justify-center relative overflow-hidden">
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
      <section ref={servicesRef} className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {title: "Cloud Solutions", desc: "Enterprise-grade cloud infrastructure"},
              {title: "AI Development", desc: "Cutting-edge artificial intelligence"},
              {title: "Cybersecurity", desc: "Advanced security protocols"}
            ].map((service, i) => (
              <Card key={i} className="service-card bg-gray-800 p-6 rounded-lg transform hover:scale-105 transition-transform">
                <h3 className="text-xl font-bold mb-4 text-cyan-500">{service.title}</h3>
                <p className="text-gray-400">{service.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-20 relative">
        <div className="parallax-bg absolute inset-0" data-speed="0.5">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8">About Us</h2>
            <p className="text-xl text-gray-300 max-w-2xl">
              TEMPLATE is at the forefront of technological innovation, delivering 
              cutting-edge solutions that transform businesses for the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Contact Us</h2>
          <form className="max-w-lg mx-auto">
            <div className="mb-6">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
              />
            </div>
            <div className="mb-6">
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
              ></textarea>
            </div>
            <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-lg">
              Send Message
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black border-t border-gray-800">
        <div className="container mx-auto px-4 text-center text-gray-500">
          <p>&copy; 2024 TEMPLATE. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
