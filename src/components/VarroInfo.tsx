import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Shield, TrendingUp, Users, Target } from 'lucide-react';

const VarroInfo = () => {
  return (
    <section id="why-us" className="py-16 md:py-24 px-6 md:px-12 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Why Us Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">Why Partner With Us</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We combine the entrepreneurial drive you need with the care and stability your business deserves.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="border-border bg-card">
            <CardContent className="p-6 text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-3">Long-term ownership, not a quick flip</h3>
              <p className="text-muted-foreground text-sm">We're committed to stewarding your business for the long haul.</p>
            </CardContent>
          </Card>
          
          <Card className="border-border bg-card">
            <CardContent className="p-6 text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-3">Backed by capital partners, with hands-on operational experience</h3>
              <p className="text-muted-foreground text-sm">Deep expertise combined with patient capital.</p>
            </CardContent>
          </Card>
          
          <Card className="border-border bg-card">
            <CardContent className="p-6 text-center">
              <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-3">People-first transition</h3>
              <p className="text-muted-foreground text-sm">Protecting your team and culture is our priority.</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-border bg-card">
            <CardContent className="p-6 text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-lg">$</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">No broker commissions</h3>
              <p className="text-muted-foreground text-sm">Direct partnership means more value for you.</p>
            </CardContent>
          </Card>
          
          <Card className="border-border bg-card">
            <CardContent className="p-6 text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-lg">🔒</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Confidentiality and discretion</h3>
              <p className="text-muted-foreground text-sm">Your privacy and business reputation are protected.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VarroInfo;