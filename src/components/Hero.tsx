import { ArrowRight, Clock, Truck, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-image.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-background to-accent/20" id="home">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-foreground">Fresh</span>{' '}
                <span className="bg-gradient-hero bg-clip-text text-transparent">Groceries</span>{' '}
                <span className="text-foreground">Delivered to Your</span>{' '}
                <span className="bg-gradient-secondary bg-clip-text text-transparent">Dorm</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Skip the grocery runs and focus on your studies. We deliver fresh groceries, 
                snacks, and essentials directly to your campus - fast, affordable, and reliable.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Start Shopping
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                View Menu
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-primary p-3 rounded-lg">
                  <Clock className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">30-Min Delivery</p>
                  <p className="text-sm text-muted-foreground">Super fast service</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-secondary p-3 rounded-lg">
                  <Truck className="h-5 w-5 text-secondary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Campus Drop-off</p>
                  <p className="text-sm text-muted-foreground">Right to your door</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-primary p-3 rounded-lg">
                  <Shield className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Secure Payment</p>
                  <p className="text-sm text-muted-foreground">Safe & encrypted</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative bg-gradient-card rounded-3xl p-8 shadow-strong">
              <img
                src={heroImage}
                alt="Fresh groceries being delivered to campus"
                className="w-full h-auto rounded-2xl shadow-medium"
              />
              
              {/* Floating Stats */}
              <div className="absolute top-4 right-4 bg-background/95 backdrop-blur-sm rounded-xl p-4 shadow-medium">
                <p className="text-2xl font-bold text-primary">500+</p>
                <p className="text-sm text-muted-foreground">Happy Students</p>
              </div>
              
              <div className="absolute bottom-4 left-4 bg-background/95 backdrop-blur-sm rounded-xl p-4 shadow-medium">
                <p className="text-2xl font-bold text-secondary">$15</p>
                <p className="text-sm text-muted-foreground">Free Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;