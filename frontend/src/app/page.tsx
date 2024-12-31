'use client';

import { FC, useState } from 'react';
import SlievrLogo from '@/components/SlievrLogo';

const HomePage: FC = () => {
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--color-charcoal)] font-[var(--font-fira)]">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 px-6 py-4 bg-[var(--color-charcoal)]/80 backdrop-blur-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-[var(--color-alabaster)] text-xl">slievr</div>
          <div className="flex gap-8 text-[var(--color-alabaster)]/80">
            <a href="#" className="hover:text-[var(--color-alabaster)]">Home</a>
            <a href="#" className="hover:text-[var(--color-alabaster)]">Features</a>
            <a href="#" className="hover:text-[var(--color-alabaster)]">Resources</a>
            <a href="#" className="hover:text-[var(--color-alabaster)]">Blog</a>
            <a href="#" className="hover:text-[var(--color-alabaster)]">Pricing</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 bg-[var(--color-charcoal)] text-[var(--color-alabaster)]">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-tufts-blue)]/10 to-[var(--color-charcoal)]" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-[8rem] font-bold leading-none mb-6">
                <span className="bg-gradient-to-r from-[var(--color-tufts-blue)] to-[var(--color-spring-green)] bg-clip-text text-transparent">
                  slievr
                </span>
              </h1>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-0.5 w-12 bg-[var(--color-tufts-blue)]"></div>
                <span className="text-xl text-[var(--color-alabaster)]/80">01</span>
              </div>
             
              <div className="flex items-center gap-6">
                <button 
                  className="rainbow-hover px-8 py-3 rounded-lg text-lg font-bold"
                  onMouseEnter={() => setIsButtonHovered(true)}
                  onMouseLeave={() => setIsButtonHovered(false)}
                >
                  <span className="text-[var(--color-alabaster)]">Begin</span>
                </button>
              </div>
            </div>
            <div className="relative h-[600px] flex items-center justify-center">
              <SlievrLogo className="w-full h-full" isAnimating={isButtonHovered} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--color-tufts-blue)]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[var(--color-alabaster)] mb-8">
            ready to join{" "}
            <span className="bg-gradient-to-r from-[var(--color-alabaster)] via-[var(--color-spring-green)] to-[var(--color-salmon)] bg-clip-text text-transparent">
              slievr
            </span>
            ?
          </h2>
          <p className="text-[var(--color-alabaster)]/90 mb-8 max-w-2xl mx-auto">
            Join us today and experience the difference.
          </p>
          <button className="rainbow-hover-light px-8 py-3 rounded-lg text-lg font-bold">
            <span className="text-[var(--color-alabaster)]">Sign Up Now</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
