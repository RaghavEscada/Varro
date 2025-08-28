import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, FileCheck, HandshakeIcon, TrendingUp } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      icon: MessageCircle,
      title: "Initial Conversation",
      description: "We start with a confidential, obligation-free discussion about your business and transition goals.",
      details: ["Complete confidentiality", "No pressure or commitments", "Understanding your timeline", "Exploring fit and alignment"]
    },
    {
      icon: FileCheck,
      title: "Due Diligence",
      description: "Thorough but respectful review of your business operations, financials, and growth potential.",
      details: ["Financial analysis", "Operational assessment", "Market position review", "Growth opportunity mapping"]
    },
    {
      icon: HandshakeIcon,
      title: "Partnership Agreement",
      description: "Structuring a deal that works for both parties with transparent terms and mutual respect.",
      details: ["Fair valuation process", "Flexible transaction structure", "Clear transition timeline", "People-first approach"]
    },
    {
      icon: TrendingUp,
      title: "Growth Together",
      description: "Long-term partnership focused on sustainable growth and preserving what makes your business special.",
      details: ["Operational support", "Strategic guidance", "Resource access", "Legacy preservation"]
    }
  ];

  return (
    <section className="py-16 md:py-24 px-6 md:px-12 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Our Process
          </Badge>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
            A transparent, respectful approach
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We believe in building relationships first. Our process is designed to be transparent, efficient, and respectful of your time and business.
          </p>
        </div>

        <div className="grid gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="border-border bg-card">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-8 items-start">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <step.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-primary font-medium mb-1">Step {index + 1}</div>
                      <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                    </div>
                  </div>
                  
                  <div className="md:col-span-2">
                    <p className="text-muted-foreground mb-6">
                      {step.description}
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                          <span className="text-sm text-muted-foreground">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="border-border bg-muted/50 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Ready to start the conversation?
              </h3>
              <p className="text-muted-foreground mb-6">
                Every successful partnership begins with understanding. Let's discuss your business and explore if we're the right fit.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:0408-023-231"
                  className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Call Now
                </a>
                <a 
                  href="mailto:ben@varro.com.au"
                  className="inline-flex items-center justify-center h-10 px-6 rounded-md border border-border bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  Send Email
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;