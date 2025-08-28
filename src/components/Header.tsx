
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';
import { Menu, X, CircleDot, LayoutDashboard, DollarSign, Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Switch } from '@/components/ui/switch';

const Header = () => {
  const [activePage, setActivePage] = useState('why-us');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); // Default to light mode
  
  useEffect(() => {
    // Apply the theme to the document when it changes
    if (isDarkMode) {
      document.documentElement.classList.remove('light-mode');
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
      document.documentElement.classList.add('light-mode');
    }
  }, [isDarkMode]);
  
  const handleNavClick = (page: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setActivePage(page);
    const element = document.getElementById(page);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="sticky top-0 z-50 pt-8 px-4">
      <header className="w-full max-w-7xl mx-auto py-3 px-6 md:px-8 flex items-center justify-between">
        <div className="p-3">
          <Logo />
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-3 rounded-2xl text-muted-foreground hover:text-foreground"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center absolute left-1/2 transform -translate-x-1/2">
          <div className="rounded-full px-1 py-1 backdrop-blur-md bg-background/80 border border-border shadow-lg">
            <ToggleGroup type="single" value={activePage} onValueChange={(value) => value && setActivePage(value)}>
              <ToggleGroupItem 
                value="why-us"
                className={cn(
                  "px-4 py-2 rounded-full transition-colors relative",
                  activePage === 'why-us' ? 'text-accent-foreground bg-accent' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                )}
                onClick={handleNavClick('why-us')}
              >
                <CircleDot size={16} className="inline-block mr-1.5" /> Why Us
              </ToggleGroupItem>
              <ToggleGroupItem 
                value="what-we-invest-in"
                className={cn(
                  "px-4 py-2 rounded-full transition-colors relative",
                  activePage === 'what-we-invest-in' ? 'text-accent-foreground bg-accent' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                )}
                onClick={handleNavClick('what-we-invest-in')}
              >
                <CircleDot size={16} className="inline-block mr-1.5" /> What We Invest In
              </ToggleGroupItem>
              <ToggleGroupItem 
                value="our-process" 
                className={cn(
                  "px-4 py-2 rounded-full transition-colors relative",
                  activePage === 'our-process' ? 'text-accent-foreground bg-accent' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                )}
                onClick={handleNavClick('our-process')}
              >
                <LayoutDashboard size={16} className="inline-block mr-1.5" /> Our Process
              </ToggleGroupItem>
              <ToggleGroupItem 
                value="about-us" 
                className={cn(
                  "px-4 py-2 rounded-full transition-colors relative",
                  activePage === 'about-us' ? 'text-accent-foreground bg-accent' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                )}
                onClick={handleNavClick('about-us')}
              >
                <DollarSign size={16} className="inline-block mr-1.5" /> About Us
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </nav>
        
        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <Button 
            className="bg-primary text-primary-foreground hover:bg-primary/80 text-sm h-10 px-6"
            onClick={() => document.getElementById('get-in-touch')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start a Conversation
          </Button>
          
          {/* Theme toggle for desktop */}
          <div className="flex items-center gap-2 rounded-full px-3 py-2">
            <Moon size={18} className={`${isDarkMode ? 'text-primary' : 'text-muted-foreground'}`} />
            <Switch 
              checked={!isDarkMode} 
              onCheckedChange={toggleTheme} 
              className="data-[state=checked]:bg-primary"
            />
            <Sun size={18} className={`${!isDarkMode ? 'text-primary' : 'text-muted-foreground'}`} />
          </div>
        </div>
        
        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-4 right-4 bg-background/95 backdrop-blur-md py-4 px-6 border border-border rounded-2xl shadow-lg z-50">
            <div className="flex flex-col gap-4">
              <a 
                href="#why-us" 
                className={`px-3 py-2 text-sm rounded-md transition-colors ${
                  activePage === 'why-us' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
                onClick={handleNavClick('why-us')}
              >
                <CircleDot size={16} className="inline-block mr-1.5" /> Why Us
              </a>
              <a 
                href="#what-we-invest-in" 
                className={`px-3 py-2 text-sm rounded-md transition-colors ${
                  activePage === 'what-we-invest-in' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
                onClick={handleNavClick('what-we-invest-in')}
              >
                <CircleDot size={16} className="inline-block mr-1.5" /> What We Invest In
              </a>
              <a 
                href="#our-process" 
                className={`px-3 py-2 text-sm rounded-md transition-colors ${
                  activePage === 'our-process' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
                onClick={handleNavClick('our-process')}
              >
                <LayoutDashboard size={16} className="inline-block mr-1.5" /> Our Process
              </a>
              <a 
                href="#about-us" 
                className={`px-3 py-2 text-sm rounded-md transition-colors ${
                  activePage === 'about-us' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
                onClick={handleNavClick('about-us')}
              >
                <DollarSign size={16} className="inline-block mr-1.5" /> About Us
              </a>
              
              {/* Mobile CTA Button */}
              <Button 
                className="bg-primary text-primary-foreground hover:bg-primary/80 text-sm h-10 px-6 mt-2"
                onClick={() => {
                  document.getElementById('get-in-touch')?.scrollIntoView({ behavior: 'smooth' });
                  setMobileMenuOpen(false);
                }}
              >
                Start a Conversation
              </Button>
              
              {/* Add theme toggle for mobile */}
              <div className="flex items-center justify-between px-3 py-2">
                <span className="text-sm text-muted-foreground">Theme</span>
                <div className="flex items-center gap-2">
                  <Moon size={16} className={`${isDarkMode ? 'text-primary' : 'text-muted-foreground'}`} />
                  <Switch 
                    checked={!isDarkMode} 
                    onCheckedChange={toggleTheme} 
                    className="data-[state=checked]:bg-primary"
                  />
                  <Sun size={16} className={`${!isDarkMode ? 'text-primary' : 'text-muted-foreground'}`} />
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
