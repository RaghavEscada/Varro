import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import InvestmentPipeline from './InvestmentPipeline';
import AustraliaMap from './AustraliaMap';
import { Loader } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full py-12 md:py-20 px-6 md:px-12 flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* Australia Map Background */}
      <AustraliaMap />
      
      {/* Cosmic particle effect (background dots) */}
      <div className="absolute inset-0 cosmic-grid opacity-30"></div>
      
      {/* Gradient glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full">
        <div className="w-full h-full opacity-10 bg-primary blur-[120px]"></div>
      </div>
      
      <div className={`relative z-10 max-w-4xl text-center space-y-6 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium rounded-full bg-muted text-primary">
            <span className="flex h-2 w-2 rounded-full bg-primary"></span>
            Built by operators for SME owners
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-balance text-foreground">
          Acquiring High-Quality <span className="text-primary">Australian SMBs</span> Ready for Growth
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
          We are an entrepreneur-led team committed to stewarding founder-owned and family-run businesses for the long term. Our approach combines entrepreneurial drive with the care and stability needed to protect your legacy and team while unlocking their full potential.
        </p>
        
        {/* Primary CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 items-center">
          <Button 
            className="bg-primary text-primary-foreground hover:bg-primary/80 hover:text-primary-foreground text-base h-12 px-8 transition-all duration-200 min-h-[48px]"
            onClick={() => document.getElementById('get-in-touch')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start a Conversation
          </Button>
        </div>
        
        <div className="pt-6 text-sm text-muted-foreground">
          Obligation-free conversation • Confidentiality and discretion
        </div>
      </div>
      
      {/* Task Manager UI integrated in hero section with glassmorphic effect */}
      <div className={`w-full max-w-7xl mt-12 z-10 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        <div className="cosmic-glow relative rounded-xl overflow-hidden border border-border backdrop-blur-sm bg-card shadow-lg">
          {/* Dashboard Header */}
          <div className="bg-card backdrop-blur-md w-full">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div className="flex items-center gap-4">
                <div className="h-8 w-8 rounded-md bg-primary/10 flex items-center justify-center">
                  <div className="h-3 w-3 rounded-sm bg-primary"></div>
                </div>
                <span className="text-foreground font-medium">Investment Pipeline Overview</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span>Active: 12 deals</span>
                </div>
                
                <div className="h-8 px-3 rounded-md bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                  Q4 2024
                </div>
              </div>
            </div>
            
            {/* Dashboard Content */}
            <div className="flex h-[600px] overflow-hidden">
              {/* Sidebar */}
              <div className="w-64 border-r border-border p-4 space-y-4 hidden md:block bg-card">
                <div className="space-y-2">
                  <div className="text-xs text-muted-foreground uppercase">Deal Stages</div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md bg-primary/10 text-primary">
                      <div className="h-3 w-3 rounded-sm bg-primary"></div>
                      <span>Active Pipeline</span>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted/50">
                      <div className="h-3 w-3 rounded-sm bg-orange-500/60"></div>
                      <span>Due Diligence</span>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted/50">
                      <div className="h-3 w-3 rounded-sm bg-green-500/60"></div>
                      <span>Portfolio</span>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted/50">
                      <div className="h-3 w-3 rounded-sm bg-blue-500/60"></div>
                      <span>Analytics</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2 pt-4">
                  <div className="text-xs text-muted-foreground uppercase">Target Sectors</div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between px-3 py-2 rounded-md text-muted-foreground hover:bg-muted/50">
                      <div className="flex items-center gap-3">
                        <div className="h-3 w-3 rounded-full bg-blue-500/60"></div>
                        <span>Tech/SaaS</span>
                      </div>
                      <span className="text-xs">7</span>
                    </div>
                    <div className="flex items-center justify-between px-3 py-2 rounded-md text-muted-foreground hover:bg-muted/50">
                      <div className="flex items-center gap-3">
                        <div className="h-3 w-3 rounded-full bg-green-500/60"></div>
                        <span>Services</span>
                      </div>
                      <span className="text-xs">3</span>
                    </div>
                    <div className="flex items-center justify-between px-3 py-2 rounded-md text-muted-foreground hover:bg-muted/50">
                      <div className="flex items-center gap-3">
                        <div className="h-3 w-3 rounded-full bg-purple-500/60"></div>
                        <span>Healthcare</span>
                      </div>
                      <span className="text-xs">2</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Main Content */}
              <div className="flex-1 p-4 bg-background overflow-hidden">
                {/* Board Header */}
                <div className="flex items-center justify-between mb-6 min-w-0">
                  <div className="flex items-center gap-4 flex-shrink-0">
                    <h3 className="font-medium text-foreground">Investment Pipeline</h3>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">12 active deals</span>
                    <span className="text-xs bg-green-500/10 text-green-600 px-2 py-1 rounded-full">$47M+ AUM</span>
                  </div>
                  
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <div className="h-8 w-8 rounded-md bg-muted flex items-center justify-center text-muted-foreground">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 6h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className="h-8 w-8 rounded-md bg-muted flex items-center justify-center text-muted-foreground">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className="h-8 px-3 rounded-md bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium whitespace-nowrap">
                      Add Target
                    </div>
                  </div>
                </div>
                
                {/* Investment Pipeline */}
                <div className="overflow-hidden h-[480px]">
                  <InvestmentPipeline />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;