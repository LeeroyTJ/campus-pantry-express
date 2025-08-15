import { Users, Clock, Truck, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const features = [
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Fast Delivery",
      description: "Get your groceries delivered in 30-45 minutes, perfect for busy student schedules."
    },
    {
      icon: <Truck className="h-8 w-8 text-secondary" />,
      title: "Campus Focused",
      description: "We understand student life and deliver right to your dorm or campus location."
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Quality First",
      description: "Fresh, quality products at student-friendly prices. We care about what you eat."
    },
    {
      icon: <Users className="h-8 w-8 text-secondary" />,
      title: "Student Support",
      description: "Built by students, for students. We get it - late night study snacks are essential!"
    }
  ];

  return (
    <section className="py-20 bg-background" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Campus Pantry Express</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're revolutionizing how students get their groceries. No more long trips to the store, 
            no more carrying heavy bags across campus. Just fresh, quality groceries delivered fast 
            and affordable, right when you need them.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">Our Story</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Campus Pantry Express was born from a simple frustration: why should students 
                waste precious study time grocery shopping when they could be focusing on what 
                really matters - their education?
              </p>
              <p>
                Founded by a group of university students who understood the struggle firsthand, 
                we've built a platform that speaks student language: fast, affordable, and reliable. 
                We know that when you're pulling an all-nighter, you need those energy drinks and 
                snacks ASAP.
              </p>
              <p>
                Today, we're proud to serve hundreds of students across campus, delivering everything 
                from healthy meal ingredients to late-night study fuel. Because every minute you 
                don't spend grocery shopping is a minute you can spend achieving your dreams.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-card rounded-3xl p-8 shadow-strong">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-background/50 rounded-xl p-6">
                  <p className="text-3xl font-bold text-primary mb-2">500+</p>
                  <p className="text-sm text-muted-foreground">Happy Students</p>
                </div>
                <div className="bg-background/50 rounded-xl p-6">
                  <p className="text-3xl font-bold text-secondary mb-2">30min</p>
                  <p className="text-sm text-muted-foreground">Avg Delivery</p>
                </div>
                <div className="bg-background/50 rounded-xl p-6">
                  <p className="text-3xl font-bold text-primary mb-2">24/7</p>
                  <p className="text-sm text-muted-foreground">Service Hours</p>
                </div>
                <div className="bg-background/50 rounded-xl p-6">
                  <p className="text-3xl font-bold text-secondary mb-2">98%</p>
                  <p className="text-sm text-muted-foreground">Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center group hover:shadow-medium transition-smooth bg-gradient-card">
              <CardContent className="p-8">
                <div className="bg-background/50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-background/70 transition-smooth">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-primary p-12 rounded-3xl shadow-strong">
            <h3 className="text-3xl font-bold text-primary-foreground mb-6">Our Mission</h3>
            <p className="text-xl text-primary-foreground/90 max-w-4xl mx-auto leading-relaxed">
              To empower students to focus on their education by providing convenient, 
              affordable, and reliable grocery delivery services that fit seamlessly 
              into campus life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;