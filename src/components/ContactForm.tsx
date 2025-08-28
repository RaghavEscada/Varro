import React, { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, Phone, Mail, ExternalLink, Globe, CheckCircle } from 'lucide-react';

const ContactForm = () => {
  useEffect(() => {
    // Load Tally script
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.onload = () => {
      if (typeof (window as any).Tally !== 'undefined') {
        (window as any).Tally.loadEmbeds();
      }
    };
    script.onerror = () => {
      // Handle script loading error
      console.log('Tally script failed to load');
    };
    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      const existingScript = document.querySelector('script[src="https://tally.so/widgets/embed.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <section id="get-in-touch" className="py-16 md:py-24 px-6 md:px-12 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">Start a Conversation</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to explore what's possible? Let's have a confidential conversation about your business and goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Tally Form - Made more prominent */}
          <div className="lg:col-span-2">
            <Card className="border-border bg-card shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">Tell us about your business</h3>
                </div>
                
                {/* Tally Form */}
                <div className="w-full">
                  <iframe 
                    data-tally-src="https://tally.so/embed/3E2WJX?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
                    loading="lazy" 
                    width="100%" 
                    height="276" 
                    frameBorder="0" 
                    marginHeight="0" 
                    marginWidth="0" 
                    title="Talk To Us!"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <MessageCircle className="h-6 w-6 text-primary" />
                  <h4 className="text-lg font-semibold text-foreground">Direct Contact</h4>
                </div>
                <div className="space-y-4">
                  <div className="flex flex-col gap-1">
                    <Badge variant="outline" className="w-fit text-xs">Phone</Badge>
                    <a href="tel:0408-023-231" className="text-primary hover:underline font-medium flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      0408-023-231
                    </a>
                  </div>
                  <div className="flex flex-col gap-1">
                    <Badge variant="outline" className="w-fit text-xs">Email</Badge>
                    <a href="mailto:ben@varro.com.au" className="text-primary hover:underline font-medium flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      ben@varro.com.au
                    </a>
                  </div>
                  <div className="flex flex-col gap-1">
                    <Badge variant="outline" className="w-fit text-xs">LinkedIn</Badge>
                    <a href="https://linkedin.com/in/ben-naparstek" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium flex items-center gap-2">
                      <ExternalLink className="h-4 w-4" />
                      linkedin.com/in/ben-naparstek
                    </a>
                  </div>
                  <div className="flex flex-col gap-1">
                    <Badge variant="outline" className="w-fit text-xs">Website</Badge>
                    <a href="https://www.varro.com.au" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium flex items-center gap-2">
                      <Globe className="h-4 w-4" />
                      www.varro.com.au
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  <h4 className="text-lg font-semibold text-foreground">What happens next?</h4>
                </div>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-medium mt-0.5">1</div>
                    <span>We'll review your submission and respond within 24 hours</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-medium mt-0.5">2</div>
                    <span>Schedule a confidential call to discuss your business and goals</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-medium mt-0.5">3</div>
                    <span>Explore if there's a mutual fit for partnership</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
