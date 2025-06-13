import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const HeroSection = () => {
  const [email, setEmail] = useState('');

  const handleNotifyMe = async () => {
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    try {
      const response = await fetch('https://formspree.io/f/xyzjwogw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        toast.success('Thank you! We\'ll notify you when registrations open.', {
          duration: 4000,
        });
        setEmail('');
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Something went wrong. Please try again.');
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center mandala-bg relative overflow-hidden">
      {/* Floating Bitcoin Symbol */}
      <div className="absolute top-20 right-20 text-bitcoin-orange/10 text-8xl animate-float hidden lg:block">
        ₿
      </div>
      <div className="absolute bottom-32 left-16 text-bitcoin-orange/10 text-6xl animate-float hidden lg:block" style={{ animationDelay: '1s' }}>
        ₿
      </div>
      
      <div className="container mx-auto px-4 py-20 text-center animate-fade-in">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold text-black mb-6 leading-tight">
            Namaste Bitcoin
            <span className="block text-bitcoin-orange">2026</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl font-mono text-text-secondary mb-8 max-w-2xl mx-auto">
            India's Biggest Bitcoin-Only Conference
          </p>
          
          {/* Date and Location */}
          <div className="font-mono text-lg md:text-xl text-black mb-12 space-y-2">
            <p className="font-medium">January 8–9, 2026</p>
            <p className="text-text-secondary">Bangalore, India</p>
          </div>
          
          {/* CTA Buttons */}
          <div className="space-y-6">
            <div className="space-y-4">
              <Button 
                size="lg" 
                className="bg-bitcoin-orange hover:bg-bitcoin-orange/90 text-white font-mono text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Registrations Opening Soon
              </Button>
              
              <p className="font-mono text-sm text-bitcoin-orange font-medium">
                Limited Seats Available
              </p>
            </div>
            
            {/* Email Notification */}
            <div className="max-w-md mx-auto bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-border-light">
              <p className="font-mono text-sm text-text-secondary mb-4">
                Get notified when registrations open
              </p>
              <div className="flex gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-border-light rounded-lg font-mono text-sm focus:outline-none focus:ring-2 focus:ring-bitcoin-orange focus:border-transparent"
                />
                <Button 
                  onClick={handleNotifyMe}
                  variant="outline" 
                  className="border-bitcoin-orange text-bitcoin-orange hover:bg-bitcoin-orange hover:text-white font-mono px-6 transition-all duration-300"
                >
                  Notify Me
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
