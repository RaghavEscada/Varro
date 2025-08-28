
import React from 'react';
import { Phone, Mail, Globe, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full py-16 px-6 md:px-12 border-t border-border bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          <div className="md:col-span-2 space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-foreground">Varro Group</h3>
              <p className="text-sm text-primary">Built by operators for SME owners ready to transition</p>
            </div>
            <p className="text-muted-foreground max-w-md">
              We acquire owner-operated businesses with long-term ownership approach. Backed by capital partners with hands-on operational experience.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:0408-023-231" className="text-muted-foreground hover:text-foreground transition-colors">
                  0408-023-231
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:ben@varro.com.au" className="text-muted-foreground hover:text-foreground transition-colors">
                  ben@varro.com.au
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="h-4 w-4 text-primary" />
                <a href="https://www.varro.com.au" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                  www.varro.com.au
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin className="h-4 w-4 text-primary" />
                <a href="https://linkedin.com/in/ben-naparstek" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                  linkedin.com/in/ben-naparstek
                </a>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-lg text-foreground">What We Buy</h4>
            <ul className="space-y-3">
              <li><span className="text-muted-foreground">$5M–$15M revenue</span></li>
              <li><span className="text-muted-foreground">$1M–$4M EBITDA</span></li>
              <li><span className="text-muted-foreground">Recurring revenue</span></li>
              <li><span className="text-muted-foreground">10+ years ownership</span></li>
              <li><span className="text-muted-foreground">Succession-ready ops</span></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-lg text-foreground">Our Approach</h4>
            <ul className="space-y-3">
              <li><span className="text-muted-foreground">Long-term ownership</span></li>
              <li><span className="text-muted-foreground">People-first transition</span></li>
              <li><span className="text-muted-foreground">Operational expertise</span></li>
              <li><span className="text-muted-foreground">No broker commissions</span></li>
              <li><span className="text-muted-foreground">Full confidentiality</span></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-lg text-foreground">Experience</h4>
            <ul className="space-y-3">
              <li><span className="text-muted-foreground">Urban List (CEO)</span></li>
              <li><span className="text-muted-foreground">Finder (GM)</span></li>
              <li><span className="text-muted-foreground">Sweat (CMO)</span></li>
              <li><span className="text-muted-foreground">Amazon Executive</span></li>
              <li><span className="text-muted-foreground">Banyan Software</span></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center text-muted-foreground text-sm">
          <div>© 2025 Varro Group. All rights reserved.</div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            <a href="mailto:ben@varro.com.au" className="hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
