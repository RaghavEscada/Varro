
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import WhyUs from '@/components/WhyUs';
import WhatWeInvestIn from '@/components/WhatWeInvestIn';
import OurProcess from '@/components/OurProcess';
import AboutSection from '@/components/AboutSection';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <WhyUs />
        <WhatWeInvestIn />
        <OurProcess />
        <AboutSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
