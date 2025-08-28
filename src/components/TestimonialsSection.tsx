import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Quote, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      title: "Former Owner, TechFlow Solutions",
      company: "SaaS Platform - $8M Revenue",
      quote: "Ben understood our business from day one. The transition was seamless, and our team actually grew stronger under Varro's guidance. Two years later, we're hitting records we never thought possible.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      title: "Founder, Digital Marketing Pro",
      company: "Marketing Agency - $12M Revenue",
      quote: "I was skeptical about selling to anyone, but Ben's operational background and genuine care for our people made all the difference. He kept our culture intact while helping us scale internationally.",
      rating: 5
    },
    {
      name: "Lisa Thompson",
      title: "Co-founder, HealthTech Australia",
      company: "Healthcare Software - $6M Revenue",
      quote: "The transparency throughout the process was incredible. No surprises, no hidden agendas. Ben delivered on every promise and gave us the resources to reach our full potential.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 md:py-24 px-6 md:px-12 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Success Stories
          </Badge>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
            What business owners say about partnering with us
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Real stories from founders who chose Varro Group for their business transition.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border bg-card">
              <CardContent className="p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                
                <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                  <div className="text-xs text-primary mt-1">{testimonial.company}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <Card className="border-border bg-card">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Successful Acquisitions</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">$180M</div>
                  <div className="text-sm text-muted-foreground">Combined Revenue</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Team Retention Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">3.2x</div>
                  <div className="text-sm text-muted-foreground">Average Growth Multiple</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;