import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, Building, Users, TrendingUp } from 'lucide-react';

const WhatWeInvestIn = () => {
  return (
    <section id="what-we-invest-in" className="py-16 md:py-24 px-6 md:px-12 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">What We Invest In</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Whether you're exploring immediate opportunities or planning for the future, we welcome discussions about the potential of your business. We focus on companies that align with these criteria.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Business Criteria */}
          <Card className="border-border bg-card">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Building className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-semibold text-foreground">Business</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Strong customer retention and satisfaction rates</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Sustainable competitive moats and differentiation</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Products or services integral to client operations</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Leadership Criteria */}
          <Card className="border-border bg-card">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Users className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-semibold text-foreground">Leadership</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Owner considering retiring</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Keen to step back from day-to-day operations</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Ready to explore new opportunities</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Revenue Profile */}
          <Card className="border-border bg-card">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-semibold text-foreground">Revenue Profile</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Recurring income streams and high customer lifetime value</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Record of consistent profitability and growth</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">EBITDA &gt;$1M and revenue &lt;$10M</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Target Criteria Visual */}
        <div className="mb-16">
          <div className="relative">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-2xl"></div>
            
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-background to-primary/5 max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
              <CardContent className="p-12">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-full translate-y-12 -translate-x-12"></div>
                
                <div className="relative z-10">
                  <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 rounded-full mb-6">
                      <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
                      <span className="text-primary font-semibold text-sm uppercase tracking-wide">Investment Focus</span>
                    </div>
                    <h4 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Target Criteria</h4>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                      We focus on high-quality Australian businesses that meet these key benchmarks
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-8">
                    {/* Revenue */}
                    <div className="text-center group">
                      <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-blue-600/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <TrendingUp className="w-10 h-10 text-blue-600" />
                      </div>
                      <h5 className="text-xl font-bold text-foreground mb-3">Revenue</h5>
                      <div className="text-3xl font-black text-blue-600 mb-2">&lt; $10M</div>
                      <p className="text-sm text-muted-foreground">Annual revenue under $10 million</p>
                    </div>
                    
                    {/* EBITDA */}
                    <div className="text-center group">
                      <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-green-600/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Building className="w-10 h-10 text-green-600" />
                      </div>
                      <h5 className="text-xl font-bold text-foreground mb-3">EBITDA</h5>
                      <div className="text-3xl font-black text-green-600 mb-2">&gt; $1M</div>
                      <p className="text-sm text-muted-foreground">Profitable with strong margins</p>
                    </div>
                    
                    {/* Sectors */}
                    <div className="text-center group">
                      <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-purple-600/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Users className="w-10 h-10 text-purple-600" />
                      </div>
                      <h5 className="text-xl font-bold text-foreground mb-3">Sectors</h5>
                      <div className="space-y-2">
                        <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200 text-sm px-4 py-2 font-semibold">Tech</Badge>
                        <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200 text-sm px-4 py-2 font-semibold ml-2">SaaS</Badge>
                        <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200 text-sm px-4 py-2 font-semibold ml-2">Services</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-3">High-growth sectors</p>
                    </div>
                  </div>
                  
                  {/* Bottom highlight */}
                  <div className="mt-12 pt-8 border-t border-primary/20">
                    <div className="text-center">
                      <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span className="text-primary font-semibold">All criteria must be met for consideration</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            <span className="flex h-2 w-2 rounded-full bg-primary"></span>
            Think your business might be a fit?
          </div>
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Let's explore the possibilities together
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Every business is unique. Even if you don't perfectly match all criteria, we'd love to have a conversation about your situation and goals.
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

export default WhatWeInvestIn;
