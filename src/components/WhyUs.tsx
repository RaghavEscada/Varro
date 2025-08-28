import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Shield, Users, Handshake, Eye, Clock } from 'lucide-react';

const WhyUs = () => {
  const reasons = [
    {
      icon: Clock,
      title: "Long-term ownership",
      description: "Not a quick flip - we're committed to stewarding your business for the long term",
      color: "bg-blue-500/10 text-blue-600"
    },
    {
      icon: Shield,
      title: "Backed by capital partners",
      description: "With hands-on operational experience and patient capital",
      color: "bg-green-500/10 text-green-600"
    },
    {
      icon: Users,
      title: "People-first transition",
      description: "We prioritize your team and culture throughout the process",
      color: "bg-purple-500/10 text-purple-600"
    },
    {
      icon: Handshake,
      title: "No broker commissions",
      description: "Direct relationship without intermediary fees",
      color: "bg-orange-500/10 text-orange-600"
    },
    {
      icon: Eye,
      title: "Confidentiality and discretion",
      description: "Complete privacy throughout the entire process",
      color: "bg-red-500/10 text-red-600"
    }
  ];

  return (
    <section id="why-us" className="py-16 md:py-24 px-6 md:px-12 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">Why Choose Varro</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We're different from traditional private equity. Our approach combines entrepreneurial drive with the care and stability needed to protect your legacy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <Card key={index} className="border-border bg-card hover:shadow-lg transition-all duration-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${reason.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{reason.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{reason.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
