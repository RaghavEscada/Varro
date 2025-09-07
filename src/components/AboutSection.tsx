import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import AustraliaMap from './AustraliaMap';
import { TrendingUp, Users, Award, Building, CheckCircle } from 'lucide-react';

const AboutSection = () => {
  const companies = [
    { name: "BCG", logo: "BCG" },
    { name: "Amazon", logo: "AMAZON" },
    { name: "Audible", logo: "AUDIBLE" },
    { name: "Sweat", logo: "SWEAT" },
    { name: "Finder", logo: "FINDER" },
    { name: "AMP", logo: "AMP" },
    { name: "Edelman", logo: "EDELMAN" }
  ];

  const stats = [
    { value: "$400M+", label: "Exit Value", icon: TrendingUp },
    { value: "$30M+", label: "Capital Raised", icon: Building },
    { value: "15+", label: "Years Experience", icon: Award },
    { value: "100%", label: "Founder-Focused", icon: Users }
  ];

  return (
    <section id="about-us" className="relative py-16 md:py-24 px-6 md:px-12 bg-muted/30">
      {/* Australia Map Background */}
      <AustraliaMap />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">About Us</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We are experienced entrepreneurs and operators who understand the challenges of building and running a successful business.
          </p>
        </div>

        {/* Stats Section - Pulled higher for impact */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="border-border bg-card text-center hover:shadow-lg transition-all duration-200">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-3">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Company Logos Section */}
        <Card className="border-border bg-card mb-16">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Our Experience</h3>
              <p className="text-muted-foreground">
                We have been CEOs and executives at organisations such as Amazon and companies that have exited for $400M and raised capital in excess of $30M.
              </p>
            </div>
            
            {/* Company Logos */}
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70">
              {companies.map((company, index) => (
                <div key={index} className="text-xl md:text-2xl font-bold text-muted-foreground hover:text-foreground transition-colors duration-200">
                  {company.logo}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Core Message */}
        <div className="text-center">
          <Card className="border-border bg-card">
            <CardContent className="p-8">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Deep Operational Expertise with Patient Capital
              </h3>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                Our team combines deep operational expertise with patient capital, allowing us to make decisions that prioritise sustainable growth over short-term returns. We understand what it takes to build and scale successful businesses because we've done it ourselves.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;