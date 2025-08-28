import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, Building, Users, TrendingUp, MapPin } from 'lucide-react';

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
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="border-border bg-card">
            <CardContent className="p-8">
              <h4 className="text-xl font-semibold text-foreground mb-6">Target Criteria</h4>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Revenue</span>
                  <Badge variant="secondary" className="bg-primary/10 text-primary">&lt; $10M</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">EBITDA</span>
                  <Badge variant="secondary" className="bg-primary/10 text-primary">&gt; $1M</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Sectors</span>
                  <div className="flex gap-2">
                    <Badge variant="outline">Tech</Badge>
                    <Badge variant="outline">SaaS</Badge>
                    <Badge variant="outline">Services</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="h-6 w-6 text-primary" />
                <h4 className="text-xl font-semibold text-foreground">Geographic Focus</h4>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                  <span className="text-muted-foreground">Victoria (VIC)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                  <span className="text-muted-foreground">New South Wales (NSW)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                  <span className="text-muted-foreground">Queensland (QLD)</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                <p className="text-sm text-muted-foreground text-center">
                  Focused on Australian markets with established operations
                </p>
              </div>
            </CardContent>
          </Card>
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
