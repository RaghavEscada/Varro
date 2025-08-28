import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MessageCircle, Search, Handshake, RefreshCw, TrendingUp, ChevronDown, ChevronUp } from 'lucide-react';

const OurProcess = () => {
  const [expandedSteps, setExpandedSteps] = useState<number[]>([]);

  const processSteps = [
    {
      icon: MessageCircle,
      title: "Initial Discussion",
      timeframe: "Week 1",
      description: "Confidential, no obligation assessment of fit and preliminary valuation discussion",
      details: "We start with a confidential conversation to understand your business, goals, and timeline. This includes a preliminary assessment of fit and an initial valuation discussion.",
      color: "bg-blue-500/10 text-blue-600"
    },
    {
      icon: Search,
      title: "Due Diligence", 
      timeframe: "2-4 weeks",
      description: "Comprehensive but respectful review of financials, operations, and market position",
      details: "Our due diligence process is thorough but respectful of your time and operations. We review financials, operations, market position, and growth opportunities.",
      color: "bg-purple-500/10 text-purple-600"
    },
    {
      icon: Handshake,
      title: "Partnership Design",
      timeframe: "1-2 months", 
      description: "Flexible arrangements including earnouts, consulting agreements, and transition support",
      details: "We design flexible partnership arrangements that work for both parties, including earnouts, consulting agreements, and transition support to ensure a smooth handover.",
      color: "bg-green-500/10 text-green-600"
    },
    {
      icon: RefreshCw,
      title: "Transition",
      timeframe: "2-3 months",
      description: "Careful handover process respecting existing relationships, team and culture",
      details: "The transition process is carefully managed to respect existing relationships, maintain team morale, and preserve your company's culture and values.",
      color: "bg-orange-500/10 text-orange-600"
    },
    {
      icon: TrendingUp,
      title: "Long-Term Growth",
      timeframe: "Ongoing",
      description: "Investments and initiatives to accelerate growth while maintaining organisational DNA",
      details: "We invest in initiatives to accelerate growth while maintaining your organization's DNA. Our focus is on sustainable, long-term value creation.",
      color: "bg-red-500/10 text-red-600"
    }
  ];

  const toggleStep = (index: number) => {
    setExpandedSteps(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="our-process" className="py-16 md:py-24 px-6 md:px-12 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">Our Process</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A thoughtful, respectful approach that puts your business needs and timeline first.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative mb-16">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-border"></div>
          
          <div className="space-y-12">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`relative flex items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div className={`w-12 h-12 rounded-full border-4 border-background flex items-center justify-center ${step.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className={`w-full lg:w-5/12 ${isEven ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <Card className="border-border bg-card">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                          <Badge variant="secondary" className="text-xs">
                            {step.timeframe}
                          </Badge>
                        </div>
                        
                        <p className="text-muted-foreground mb-4">{step.description}</p>
                        <p className="text-sm text-muted-foreground">{step.details}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Spacer for desktop */}
                  <div className="hidden lg:block w-5/12"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-4">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            const isExpanded = expandedSteps.includes(index);
            
            return (
              <Card key={index} className="border-border bg-card">
                <CardContent className="p-6">
                  <div 
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => toggleStep(index)}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                        <Badge variant="secondary" className="text-xs mt-1">
                          {step.timeframe}
                        </Badge>
                      </div>
                    </div>
                    {isExpanded ? <ChevronUp className="w-5 h-5 text-muted-foreground" /> : <ChevronDown className="w-5 h-5 text-muted-foreground" />}
                  </div>
                  
                  <div className={`mt-4 space-y-3 ${isExpanded ? 'block' : 'hidden'}`}>
                    <p className="text-muted-foreground">{step.description}</p>
                    <p className="text-sm text-muted-foreground">{step.details}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            <span className="flex h-2 w-2 rounded-full bg-primary"></span>
            Ready to start the conversation?
          </div>
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Every great partnership begins with a simple conversation
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's explore what's possible together. Our process is designed to be transparent, respectful, and focused on finding the right fit for your business.
          </p>
          <Button 
            className="bg-primary text-primary-foreground hover:bg-primary/80 text-base h-12 px-8"
            onClick={() => document.getElementById('get-in-touch')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start a Conversation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
